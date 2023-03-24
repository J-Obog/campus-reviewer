import { Repository, DataSource, Entity, Column, PrimaryColumn } from "typeorm"
import { Location, LocationType } from "../schema"; 
import { LocationStore } from "../store";

@Entity("locations")
export class LocationModel {
    @PrimaryColumn()
    id: string

    @Column()
    collegeId: string

    @Column()
    locationType: LocationType

    @Column()
    name: string

    @Column()
    rating: number

    toObj = (): Location => {
        return {
            id: this.id,
            collegeId: this.collegeId,
            locationType: this.locationType,
            name: this.name,
            rating: this.rating
        }
    }
}

export class LocationStorePg implements LocationStore {
    repo: Repository<LocationModel>; 

    constructor(conn: DataSource) {
        this.repo = conn.getRepository(LocationModel); 
    } 

    getLocation = async (id: string): Promise<Location | null> => {
        const location = await this.repo.findOneBy({ id: id }); 
        return location ? location.toObj() : null; 
    }

    getLocationsByCollege = async (collegeId: string): Promise<Location[]> => {
        const locations = await this.repo.findBy({ collegeId: collegeId }); 
        return locations.map(location => location.toObj()); 
    }
}