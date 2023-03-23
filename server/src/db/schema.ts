export class UserModel {
    id: string;
    email: string;
    password: string; 
}

export class CollegeModel {
    id: string;
    name: string;
    rating: number;
    photo?: string;
}

export class FavoriteModel {
    id: string;
    userId: string;
    locationId: string;
}

export class ReviewModel {
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

export class LocationModel {
    id: string;
    collegeId: string;
    locationType: LocationType;
    name: string;
    rating: number; 
}