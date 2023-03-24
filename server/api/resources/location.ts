import { LocationResource } from "../resource"; 
import { LocationStore } from "../../db/store";
import { RestRequest, RestResponse } from "../rest";


export class LocationResourceImpl implements LocationResource {
    locationStore: LocationStore;
    
    constructor(locationStore: LocationStore) {
        this.locationStore = locationStore; 
    }   

    getLocation = async (req: RestRequest): Promise<RestResponse> => {
        try {
            const location = await this.locationStore.getLocation(req.urlParams.id); 

            if (!location) {
                return { status: 404, data: { message: "Location could not be found" }}; 
            }

            return { status: 200, data: location }; 
        } catch {
            return { status: 500, data: { message: "Internal server error" }}; 
        }
    }

    getLocationsByCollege = async (req: RestRequest): Promise<RestResponse> => {
        try {
            const locations = await this.locationStore.getLocationsByCollege(req.queryParams.collegeId); 
            return { status: 200, data: { locations: locations }}; 
        } catch(err) {
            console.error(err);
            return { status: 500, data: { message: "Internal server error" }}; 
        }
    }
}   