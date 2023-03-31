import { College, Location, Review } from "./schema"; 

export interface CollegeStore {
    getAllColleges(): Promise<College[]>; 
    getCollege(id: string): Promise<College | null>; 
}

export interface LocationStore {
    getLocation(id: string): Promise<Location | null>; 
    getLocationsByCollege(collegeId: string): Promise<Location[]>;  
}

export interface ReviewStore {
    getReview(id: string): Promise<Review | null>; 
    getReviewByLocation(locationId: string): Promise<Review[]>;  
}