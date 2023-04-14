import { ReviewResource } from "../resource"; 
import { ReviewStore } from "../../db/store";
import { RestRequest, RestResponse } from "../rest";
import { CreateReviewSchema } from "../validation/review";
import Ajv from "ajv"; 
import { Review } from "../../db/schema";
import {v4 as uuidv4} from "uuid";



export class ReviewResourceImpl implements ReviewResource {
    reviewStore: ReviewStore;
    
    constructor(reviewStore: ReviewStore) {
        this.reviewStore = reviewStore; 
    }   
    
    createReview = async (req: RestRequest): Promise<RestResponse> => {
        try {
            const ajv = new Ajv(); 
            const validate = ajv.compile(CreateReviewSchema); 
            const valid = validate(req.body); 

            if(!valid) {
                return { status: 400, data: { message: validate.errors![0].message} }; 
            }  

            const reviewId = uuidv4();
            const timeNow = new Date().getTime();

            const review: Review = {
                id: reviewId,
                userId: req.body.userId,
                locationId: req.body.locationId,
                rating: req.body.rating,
                comment: req.body.comment,
                createdAt: timeNow, 
            }

            this.reviewStore.insertReview(review); 

            return { status: 200, data: { message: "OK" } }; 
        } catch {
            return { status: 500, data: { message: "Internal server error" }}; 
        }
    }


    getReview = async (req: RestRequest): Promise<RestResponse> => {
        try {
            const review = await this.reviewStore.getReview(req.urlParams.id); 

            if (!review) {
                return { status: 404, data: { message: "Review could not be found" }}; 
            }

            return { status: 200, data: review }; 
        } catch {
            return { status: 500, data: { message: "Internal server error" }}; 
        }
    }

    getReviewByLocation = async (req: RestRequest): Promise<RestResponse> => {
        try {
            const reviews = await this.reviewStore.getReviewByLocation(req.queryParams.locationId); 
            return { status: 200, data: { reviews: reviews }}; 
        } catch(err) {
            console.error(err);
            return { status: 500, data: { message: "Internal server error" }}; 
        }
    }
}   