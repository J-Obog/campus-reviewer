import { CollegeModel } from "./schema"; 

export interface CollegeStore {
    getAllColleges(): CollegeModel[]; 
}