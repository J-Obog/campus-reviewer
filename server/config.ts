import * as dotenv from 'dotenv'

export type PostgresConfig = {
    database: string;
    username: string; 
    password: string; 
    host: string;
    port: number
};

export type ExpressConfig = {
    host: string;
    port: number; 
}

export type AppConfig = {
    postgresConfig: PostgresConfig;
    expressConfig: ExpressConfig; 
}

export const getConfig = (): AppConfig => {
    const env = process.env["NODE_APP_ENV"]!;  
    
    if(env === "DEV") {
        dotenv.config(); 
    }

    return {
        postgresConfig: {
            database: process.env["PG_DB"]!,
            username: process.env["PG_USER"]!, 
            password: process.env["PG_PASS"]!, 
            host: process.env["PG_HOST"]!,
            port: Number(process.env["PG_PORT"]!)
        },
        expressConfig: {
            host: process.env["APP_HOST"]!,
            port: Number(process.env["APP_PORT"]!)
        }
    }
}

