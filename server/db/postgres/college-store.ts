import { Repository, DataSource } from "typeorm"
import { CollegeModel } from "../schema"; 
import { CollegeStore } from "../store";

export class CollegeStorePg implements CollegeStore {
    repo: Repository<CollegeModel>; 

    constructor(src: DataSource) {
        this.repo = src.getRepository(CollegeModel); 
    } 

    async getAllColleges(): Promise<CollegeModel[]> {
        return await this.repo.find(); 
    }
}