import { JSONSchemaType } from "ajv"; 
import { Review } from "../../db/schema"; 

export const CreateReviewSchema = {
    type: "object",
    properties: {
      userId: {type: "string"},
      locationId: {type: "string"},
      rating: {type: "number"},
      comment: {type: "string", nullable: true},
    },
    required: ["userId", "locationId", "rating"], 
    additionalProperties: false
  }