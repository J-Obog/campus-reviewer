import { Rating } from "react-simple-star-rating";

type HeroRatingProps = {
  value: number;
};

const HeroRating = ({ value }: HeroRatingProps) => {
  return (
    <div>
      <h3 className="mb-1 text-2xl font-normal text-white">Campus Rating</h3>
      <Rating readonly allowFraction initialValue={value} size={60} />
    </div>
  );
};

export default HeroRating;
