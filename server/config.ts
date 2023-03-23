import * as dotenv from 'dotenv'

export type PostgresConfig = {
    database: string;
    username: string; 
    password: string; 
    host: string;
    port: number
};

export type AppConfig = {
    postgresConfig: PostgresConfig
}

export const getConfig = (): AppConfig => {
    const env = process.env["ts_app_env"]!;  
    
    if(env === "DEV") {
        dotenv.config(); 
    }

    return {
        postgresConfig: {
            database: process.env["pg_db"]!,
            username: process.env["pg_user"]!, 
            password: process.env["pg_pass"]!, 
            host: process.env["pg_host"]!,
            port: Number(process.env["pg_port"]!)
        }
    }
}

