import { College } from "./schema"; 

export interface CollegeStore {
    getAllColleges(): Promise<College[]>; 
    getCollege(id: string): Promise<College | null>; 
}