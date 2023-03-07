import { BiBookmark } from "react-icons/bi";

const SaveButton = () => {
  return (
    <button className="btn-outline btn-primary btn gap-2">
      save
      <span className="text-xl">
        <BiBookmark />
      </span>
    </button>
  );
};

export default SaveButton;
