export type UserModel = {
    id: string;
    email: string;
    password: string; 
}

export type CollegeModel = {
    id: string;
    name: string;
    rating: number;
    photo?: string;
}

export type FavoriteModel = {
    id: string;
    userId: string;
    locationId: string;
}

export type ReviewModel = {
    id: string;
    userId: string;
    locationId: string; 
    rating: number;
    comment?: string;
}

export enum LocationType {
    Transit = 0, 
    Restaurant,
    Recreation
}

export type LocationModel = {
    id: string;
    collegeId: string;
    locationType: LocationType;
    name: string;
    rating: number; 
}