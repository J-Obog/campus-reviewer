import { DataSource } from "typeorm"
import { getConfig } from "./config"; 
import { ExpressServer } from "./api/express";
import { CollegeResourceImpl } from "./api/resources/college";
import { CollegeModel, CollegeStorePg } from "./db/postgres/college"
import { LocationModel, LocationStorePg } from "./db/postgres/location"  
import { LocationResourceImpl } from "./api/resources/location";

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
            entities: [CollegeModel, LocationModel],
        })    
    
        await conn.initialize(); 
    
        // db stores
        const collegeStore = new CollegeStorePg(conn); 
        const locationStore = new LocationStorePg(conn); 
        
        // resources
        const collegeResource = new CollegeResourceImpl(collegeStore); 
        const locationResource = new LocationResourceImpl(locationStore); 

        // app server
        const server = new ExpressServer(collegeResource, locationResource); 
        server.run(config.expressConfig.port); 
        
    } catch(err) {
        console.error(err); 
    }
}

main();