import { BiBookmark } from "react-icons/bi";
import { Rating } from "react-simple-star-rating";

type CardProps = {
  name: string;
  imgUrl: string;
  description: string;
  rating: number;
};

const Card = ({ name, imgUrl, description, rating }: CardProps) => {
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
    <div className="card bg-base-100 shadow-xl dark:bg-card-dark">
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
          <a className="link-primary link capitalize">see more</a>
          <button className="text-4xl">
            <BiBookmark />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
