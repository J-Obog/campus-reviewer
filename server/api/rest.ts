interface JSONObj {
    [key: string]: any  
}

export type RestRequest = {
    url: string
    urlParams: JSONObj;
	queryParams: JSONObj;
	meta: JSONObj;
	body: JSONObj;
} 

export type RestResponse = {
    status: number;
    data: Object;
} 