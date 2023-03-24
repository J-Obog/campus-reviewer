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

    toObj = (): College => {
        return {
            id: this.id,
            name: this.name,
            rating: this.rating,
            photo: this.photo
        }
    }
}

export class CollegeStorePg implements CollegeStore {
    repo: Repository<CollegeModel>; 

    constructor(conn: DataSource) {
        this.repo = conn.getRepository(CollegeModel); 
    } 

    getAllColleges = async (): Promise<College[]> =>  {
        const entities = await this.repo.find(); 
        return entities.map(entity => entity.toObj()); 
    }

    getCollege = async (id: string): Promise<College | null> => {
        const college = await this.repo.findOneBy({ id: id }); 
        return college ? college.toObj() : null; 
    }
}