import { DataSource } from "typeorm"
import { CollegePgEntity } from "./db/postgres/college-store" 

async function foo() {
    const AppDataSource = new DataSource({
        type: "postgres",
        host: "localhost",
        username: "postgres",
        password: "root",
        port: 5432,
        database: "campusreview",
        entities: [CollegePgEntity],
        logging: false,
    })

    try {
        await AppDataSource.initialize(); 
    } catch(err) {
        console.log(err);
    }

    const ty = AppDataSource.getRepository(CollegePgEntity);
    console.log(await ty.find()); 
    await AppDataSource.destroy(); 
}

foo();

