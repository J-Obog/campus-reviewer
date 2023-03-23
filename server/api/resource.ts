import { 
    GetCollegeResponse, 
    GetCollegesResponse 
} from "./rest";

export interface CollegeResource {
    getAllColleges(): GetCollegesResponse; 
    getCollege(): GetCollegeResponse;
}