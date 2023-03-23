
export interface Server {
    run(host: string, port: number): void; 
    stop(): void; 
}