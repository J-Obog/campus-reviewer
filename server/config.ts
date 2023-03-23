
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


