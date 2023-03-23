
export interface Server {
    run(port: number): void; 
    stop(): void; 
}