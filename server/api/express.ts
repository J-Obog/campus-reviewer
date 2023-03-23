import { Server } from "./server";
import express, { Router, Express } from "express";

export class ExpressServer implements Server {
    app: Express; 

    constructor() {
        this.app = express();
    }

    run(port: number): void {
        this.app.listen(port, () => {
            console.log( `server running on port ${port}` );
        })
    }

    stop(): void {
        // to implement
    }
}