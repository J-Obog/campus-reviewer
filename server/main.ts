import { DataSource } from "typeorm"
import { CollegeModel } from "./db/postgres/college" 
import { getConfig } from "./config"; 

async function main() {
    const config = getConfig(); 
    
    const conn = new DataSource({
        type: "postgres",
        host: config.postgresConfig.host,
        username: config.postgresConfig.username,
        password: config.postgresConfig.password,
        port: config.postgresConfig.port,
        database: config.postgresConfig.database,
        entities: [CollegeModel],
    })    

    // connect to database
    try {
        await conn.initialize(); 
    } catch(err) {
        console.error(err); 
    }
}

main();