import { JSONSchemaType } from "ajv"; 
import { Review } from "../../db/schema"; 

export const CreateReviewSchema: JSONSchemaType<Review> = {
    type: "object",
    properties: {
      id: {type: "string"},
      userId: {type: "string"},
      locationId: {type: "string"},
      rating: {type: "number"},
      comment: {type: "string", nullable: true},
    },
    required: ["id", "userId", "locationId", "rating"], 
    additionalProperties: false
  }