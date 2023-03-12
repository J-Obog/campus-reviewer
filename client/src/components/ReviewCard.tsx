import { Rating } from "react-simple-star-rating";
import moment from "moment";

type ReviewCardProps = {
  id: string;
  avatarUrl: string;
  userName: string;
  rating: number;
  timestamp: string;
  comment: string;
};

const ReviewCard = ({ id, avatarUrl, userName, rating, timestamp, comment }: ReviewCardProps) => {
  return (
    <div className="mx-auto space-y-2 rounded-lg p-5 shadow-md md:w-11/12 lg:w-5/6 lg:space-y-5 xl:w-8/12 2xl:w-7/12 dark:bg-card-dark">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2 sm:flex-row">

          {/* User avatar */}
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={avatarUrl} />
            </div>
          </div>

          {/* User name and rating */}
          <div className="flex-col sm:flex">
            <strong>{userName}</strong>
            <Rating readonly allowFraction initialValue={rating} size={35} />
          </div>
        </div>

        {/* How long ago*/}
        <span className="shrink-0">{moment(timestamp).fromNow()}</span>
      </div>

      <p>{comment}</p>
    </div>
  );
};

export default ReviewCard;
