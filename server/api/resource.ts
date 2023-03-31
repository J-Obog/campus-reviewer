import {  RestRequest, RestResponse } from "./rest";

export interface CollegeResource {
    getAllColleges(req: RestRequest): Promise<RestResponse>; 
    getCollege(req: RestRequest): Promise<RestResponse>;
}

export interface LocationResource {
    getLocation(req: RestRequest): Promise<RestResponse>; 
    getLocationsByCollege(req: RestRequest): Promise<RestResponse>;
}

export interface ReviewResource {
    getReview(req: RestRequest): Promise<RestResponse>; 
    getReviewByLocation(req: RestRequest): Promise<RestResponse>;
}