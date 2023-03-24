import { Server } from "./server";
import express from "express";
import { RestResponse, RestRequest } from "./rest";
import { CollegeResource } from "./resource";


export class ExpressServer implements Server {
    app: express.Express; 

    constructor(collegeResource: CollegeResource) {
        this.app = express();
        this.app.get("/college", this._request_handler(collegeResource.getAllColleges));
        this.app.get("/college/:id", this._request_handler(collegeResource.getCollege));
    }

    _request_handler = (restFn: (req: RestRequest) => Promise<RestResponse>): express.RequestHandler => {
        return async (req: express.Request, res: express.Response) => {
            const restReq: RestRequest = {
                url: req.url, 
                urlParams: req.params,
                queryParams: req.query,
                meta: {},
                body: req.body,
            } 

            const fnResponse = await restFn(restReq);
            res.status(fnResponse.status).json(fnResponse.data);
        }
    }

    run = (port: number): void => {
        this.app.listen(port, () => {
            console.log(`server running on port ${port}`);
        })
    }

    stop = (): void => {
        // to implement
    }
}