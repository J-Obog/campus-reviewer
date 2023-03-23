import { College } from "../../db/schema";
import { CollegeResource } from "../resource"; 
import { CollegeStore } from "../../db/store";
import { RestRequest, RestResponse } from "../rest";


export class CollegeResourceImpl implements CollegeResource {
    collegeStore: CollegeStore;
    
    constructor(collegeStore: CollegeStore) {
        this.collegeStore = collegeStore; 
    }   

    async getAllColleges(req: RestRequest): Promise<RestResponse> {
        try {
            const colleges = await this.collegeStore.getAllColleges(); 
            return { status: 200, data: { colleges: colleges }}; 
        } catch {
            return { status: 500, data: { message: "Internal server error" }}; 
        }
    }

    async getCollege(req: RestRequest): Promise<RestResponse> {
    }
}   