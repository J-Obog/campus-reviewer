import { CollegeResource } from "../resource"; 
import { CollegeStore } from "../../db/store";
import { RestRequest, RestResponse } from "../rest";


export class CollegeResourceImpl implements CollegeResource {
    collegeStore: CollegeStore;
    
    constructor(collegeStore: CollegeStore) {
        this.collegeStore = collegeStore; 
    }   

    getAllColleges = async (req: RestRequest): Promise<RestResponse> => {
        console.log(this);
        try {
            const colleges = await this.collegeStore.getAllColleges(); 
            return { status: 200, data: { colleges: colleges }}; 
        } catch(err) {
            console.error(err);
            return { status: 500, data: { message: "Internal server error" }}; 
        }
    }

    getCollege = async (req: RestRequest): Promise<RestResponse> => {
        try {
            const college = await this.collegeStore.getCollege(req.body.id); 

            if (!college) {
                return { status: 404, data: { message: "College could not be found" }}; 
            }

            return { status: 200, data: college }; 
        } catch {
            return { status: 500, data: { message: "Internal server error" }}; 
        }
    }
}   