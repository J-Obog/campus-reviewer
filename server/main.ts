import { DataSource } from "typeorm"
import { CollegePgEntity } from "./db/postgres/college-store" 
import { getConfig } from "./config"; 

function main() {
    const config = getConfig(); 
    
    const conn = new DataSource({
        type: "postgres",
        host: config.postgresConfig.host,
        username: config.postgresConfig.username,
        password: config.postgresConfig.password,
        port: config.postgresConfig.port,
        database: config.postgresConfig.database,
        entities: [CollegePgEntity],
    })
}

main();