import { DataSource } from "typeorm"
import { CollegeModel, CollegeStorePg } from "./db/postgres/college" 
import { getConfig } from "./config"; 
import { ExpressServer } from "./api/express";
import { CollegeResourceImpl } from "./api/resources/college";

async function main() {
    const config = getConfig(); 
    
    // database connection
    const conn = new DataSource({
        type: "postgres",
        host: config.postgresConfig.host,
        username: config.postgresConfig.username,
        password: config.postgresConfig.password,
        port: config.postgresConfig.port,
        database: config.postgresConfig.database,
        entities: [CollegeModel],
    })    

    try {
        await conn.initialize(); 
    } catch(err) {
        console.error(err); 
    }

    // db stores
    const collegeStore = new CollegeStorePg(conn); 

    // resources
    const collegeResource = new CollegeResourceImpl(collegeStore); 

    // app server
    const server = new ExpressServer(collegeResource); 
    server.run(config.expressConfig.port); 
}

main();