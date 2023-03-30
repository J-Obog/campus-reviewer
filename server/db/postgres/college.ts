import { Repository, DataSource, Entity, Column, PrimaryColumn } from "typeorm"
import { College } from "../schema"; 
import { CollegeStore } from "../store";

@Entity("colleges")
export class CollegeModel {
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    rating: number

    @Column()
    photo?: string

    @Column()
    description?: string;
    
    @Column()
    address: string; 

    @Column()
    latitude: number; 

    @Column()
    longitude: number; 

    toObj = (): College => {
        return {
            id: this.id,
            name: this.name,
            rating: this.rating,
            photo: this.photo,
            description: this.description,
            address: this.address,
            latitude: this.latitude,
            longitude: this.longitude, 
        }
    }
}

export class CollegeStorePg implements CollegeStore {
    repo: Repository<CollegeModel>; 

    constructor(conn: DataSource) {
        this.repo = conn.getRepository(CollegeModel); 
    } 

    getAllColleges = async (): Promise<College[]> =>  {
        const colleges = await this.repo.find(); 
        return colleges.map(college => college.toObj()); 
    }

    getCollege = async (id: string): Promise<College | null> => {
        const college = await this.repo.findOneBy({ id: id }); 
        return college ? college.toObj() : null; 
    }
}