import { CollegeModel } from "./schema"; 

export interface CollegeStore {
    getAllColleges(): Promise<CollegeModel[]>; 
}