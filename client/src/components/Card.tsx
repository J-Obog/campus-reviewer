import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import { useAppSelector } from "../redux/store";
import { Link } from "react-router-dom";

type CardProps = {
  id: string;
  name: string;
  imgUrl: string;
  description: string;
  rating: number;
  itemType: "college" | "location";
};

const Card = ({ id, name, imgUrl, description, rating, itemType }: CardProps) => {
  const themeValue = useAppSelector((state) => state.theme.value);

  // TODO: Remove local component state and change for API consumption once the endpoint is ready.
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  const formatDescription = (description: string) => {
    // The length of the description gets shortened to 100 characters
    let formatted =
      description.length > 100 ? description.slice(0, 100) : description;

    // If after shortening the description the last character is a space, it gets removed
    formatted =
      formatted[formatted.length - 1] === " "
        ? formatted.slice(0, 99)
        : formatted;

    return `${formatted}....`;
  };

  return (
    <div
      className={`card bg-base-100 shadow-xl ${
        themeValue === "night" && "bg-card-dark"
      }`}
    >
      <figure className="h-56">
        <img
          src={imgUrl}
          alt={`Image of ${name}`}
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <Rating readonly allowFraction initialValue={rating} size={35} />
        <p>{formatDescription(description)}</p>
        <div className="card-actions items-end justify-between">
          <div className="link-primary link capitalize">
            {itemType === "college" && <Link to={`/college/${id}`}>see more</Link>}
            {itemType === "location" && <Link to={`/location`}>see more</Link>}
          </div>
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className="text-4xl"
          >
            {isBookmarked ? <BsFillBookmarkFill /> : <BsBookmark />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
