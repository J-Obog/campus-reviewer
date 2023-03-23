import { College } from "./schema"; 

export interface CollegeStore {
    getAllColleges(): Promise<College[]>; 
}