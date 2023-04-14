import { ReviewResource } from "../resource"; 
import { ReviewStore } from "../../db/store";
import { RestRequest, RestResponse } from "../rest";


export class ReviewResourceImpl implements ReviewResource {
    reviewStore: ReviewStore;
    
    constructor(reviewStore: ReviewStore) {
        this.reviewStore = reviewStore; 
    }   
    
    createReview = async (req: RestRequest): Promise<RestResponse> => {
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