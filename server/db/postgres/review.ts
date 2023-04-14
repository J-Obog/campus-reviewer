import { Repository, DataSource, Entity, Column, PrimaryColumn } from "typeorm"
import { Review } from "../schema"; 
import { ReviewStore } from "../store";

@Entity("reviews")
export class ReviewModel {
    @PrimaryColumn()
    id: string

    @Column()
    userId: string

    @Column()
    locationId: string

    @Column()
    rating: number

    @Column()
    comment?: string;

    @Column()
    createdAt: number;

    @Column()
    updatedAt?: number;

    toObj = (): Review  => {
        return {
            id: this.id,
            userId: this.userId,
            locationId: this.locationId, 
            rating: this.rating,
            comment: this.comment,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }
}

export class ReviewStorePg implements ReviewStore {
    repo: Repository<ReviewModel>; 

    constructor(conn: DataSource) {
        this.repo = conn.getRepository(ReviewModel); 
    } 

    insertReview = async (review: Review): Promise<Boolean> =>  {
        await this.repo.save(review); 
        return true;  
    }

    getReviewByLocation = async (locationId: string): Promise<Review[]> =>  {
        const reviews = await this.repo.findBy({ locationId: locationId }); 
        return reviews.map(review => review.toObj()); 
    }

    getReview = async (id: string): Promise<Review | null> => {
        const review = await this.repo.findOneBy({ id: id }); 
        return review ? review.toObj() : null; 
    }
}