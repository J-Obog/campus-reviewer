import ReviewCard from "./ReviewCard";
import { useState, useEffect } from "react";
import { useAppSelector } from "../redux/store";

type ReviewState = {
  id: string;
  avatarUrl: string;
  userName: string;
  rating: number;
  timestamp: string;
  comment: string;
};

type ReviewsContainerProps = {
  id: string;
};

const ReviewsContainer = ({ id }: ReviewsContainerProps) => {
  const [reviews, setReviews] = useState<ReviewState[]>([]);
  const themeValue = useAppSelector((state) => state.theme.value);

  const [paginate, setPaginate] = useState<number>(6);

  const apiUrl = `https://campus-reviewer-web.onrender.com/review?locationId=${id}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setReviews(data.reviews));
  }, []);

  return (
    <div className="my-16">
      <h2 className={`page-subtitle ${themeValue === "night" && "text-white"}`}>
        Reviews
      </h2>
      <div className="my-12 space-y-10 px-2 sm:px-4">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            id={review.id}
            avatarUrl={"https://i.pravatar.cc/300"}
            userName={review.userName}
            rating={review.rating}
            timestamp={"2023-03-08 10:36:25"}
            comment={review.comment}
          />
        ))}
      </div>
      {paginate < reviews.length && (
        <div className="flex justify-center">
          <button
            onClick={() => setPaginate((prev) => prev + 6)}
            className="btn-wide btn mt-3"
          >
            load more
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewsContainer;
