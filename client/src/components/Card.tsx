import { BiBookmark } from "react-icons/bi";
import { Rating } from 'react-simple-star-rating'

const Card = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src="https://picsum.photos/seed/picsum/500/300" alt="College picture" />
      </figure>
      <div className="card-body">
        <h3 className="card-title">John Doe's University</h3>
        <Rating readonly allowFraction initialValue={3.5} size={35} />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, nobis similique cupiditate sunt nihil possimus?</p>
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
