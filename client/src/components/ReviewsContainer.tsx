import ReviewCard from "./ReviewCard";
import { useState, useEffect } from "react";

type ReviewState = {
  id: string;
  avatarUrl: string;
  userName: string;
  rating: number;
  timestamp: string;
  comment: string;
};

const ReviewsContainer = () => {
  const [reviews, setReviews] = useState<ReviewState[]>([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:5173/src/reviews.json`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-16">
      <h2 className="page-subtitle">Reviews</h2>
      <div className="my-12 space-y-10 px-2 sm:px-4">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            id={review.id}
            avatarUrl={review.avatarUrl}
            userName={review.userName}
            rating={review.rating}
            timestamp={review.timestamp}
            comment={review.comment}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn-wide btn mt-3">load more</button>
      </div>
    </div>
  );
};

export default ReviewsContainer;
