export interface UserModel {
    id: string, 
    email: string,
    password: string 
}

export interface CollegeModel {
    id: string, 
    name: string,
    rating: number,
    photo?: string
}

export interface FavoriteModel {
    id: string,
    userId: string,
    locationId: string
}

export interface ReviewModel {
    id: string,
    userId: string,
    locationId: string, 
    rating: number,
    comment?: string
}

export enum LocationType {
    Transit = 0, 
    Restaurant,
    Recreation
}

export interface LocationModel {
    id: string, 
    collegeId: string,
    locationType: LocationType,
    name: string,
    rating: number, 
}