import { College } from "../db/schema";  

export type RestRequest = {
    url: string
    urlParams: Object;
	queryParams: Object;
	meta: Object;
	body: Object;
} 

export type RestResponse = {
    status: number;
    data: Object;
} 

export type GetCollegesResponse = {
    colleges: College[]; 
}

export type GetCollegeResponse = College; 