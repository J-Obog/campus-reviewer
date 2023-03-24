import { DataSource } from "typeorm"
import { CollegeModel, CollegeStorePg } from "./db/postgres/college" 
import { getConfig } from "./config"; 
import { ExpressServer } from "./api/express";
import { CollegeResourceImpl } from "./api/resources/college";

const main = async () => {
    const config = getConfig(); 
    
    try {

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
    
        await conn.initialize(); 
    
        // db stores
        const collegeStore = new CollegeStorePg(conn); 

        // resources
        const collegeResource = new CollegeResourceImpl(collegeStore); 
        console.log(collegeResource.collegeStore); 

        // app server
        const server = new ExpressServer(collegeResource); 
        server.run(config.expressConfig.port); 
        
    } catch(err) {
        console.error(err); 
    }
}

main();