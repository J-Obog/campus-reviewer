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
            database: process.env["ts_app_env"]!,
            username: process.env["ts_app_env"]!, 
            password: process.env["ts_app_env"]!, 
            host: process.env["ts_app_env"]!,
            port: Number(process.env["ts_app_env"]!)
        }
    }
}

