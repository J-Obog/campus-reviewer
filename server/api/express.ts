import { Server } from "./server";
import express from "express";
import cors from "cors"; 
import { RestResponse, RestRequest } from "./rest";
import { CollegeResource, LocationResource, ReviewResource } from "./resource";


export class ExpressServer implements Server {
    app: express.Express; 

    constructor(
                collegeResource: CollegeResource, 
                locationResource: LocationResource,
                reviewResource: ReviewResource
        ) {
        this.app = express();
        this.app.use(cors());
        this.app.use(express.json()); 
        this.app.get("/college", this._request_handler(collegeResource.getAllColleges));
        this.app.get("/college/:id", this._request_handler(collegeResource.getCollege));
        this.app.get("/location/:id", this._request_handler(locationResource.getLocation));
        this.app.get("/location", this._request_handler(locationResource.getLocationsByCollege));
        this.app.get("/review/:id", this._request_handler(reviewResource.getReview));
        this.app.get("/review", this._request_handler(reviewResource.getReviewByLocation));
        this.app.post("/review", this._request_handler(reviewResource.createReview));
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