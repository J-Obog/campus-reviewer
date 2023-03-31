export type User = {
    id: string;
    email: string;
    password: string; 
}

export type College = {
    id: string;
    name: string;
    rating: number;
    photo?: string;
    description?: string; 
    address: string; 
    latitude: number; 
    longitude: number; 
}

export type Favorite = {
    id: string;
    userId: string;
    locationId: string;
}

export type Review = {
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

export type Location = {
    id: string;
    collegeId: string;
    locationType: LocationType;
    name: string;
    rating: number; 
    description?: string; 
    address: string; 
    latitude: number; 
    longitude: number; 
    photo?: string; 
}