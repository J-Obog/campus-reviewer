import { Repository, DataSource, Entity, Column, PrimaryColumn } from "typeorm"
import { CollegeModel } from "../schema"; 
import { CollegeStore } from "../store";

@Entity()
export class CollegePgEntity {
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    rating: number

    @Column()
    photo?: string

    toModel(): CollegeModel {
        const model = new CollegeModel();
        model.id = this.id; 
        model.name = this.name; 
        model.photo = this.photo; 
        model.rating = this.rating; 
        return model; 
    }
}

export class CollegeStorePg implements CollegeStore {
    repo: Repository<CollegePgEntity>; 

    constructor(src: DataSource) {
        this.repo = src.getRepository(CollegePgEntity); 
    } 

    async getAllColleges(): Promise<CollegeModel[]> {
        const entities = await this.repo.find(); 
        return entities.map(entity => entity.toModel()); 
    }
}