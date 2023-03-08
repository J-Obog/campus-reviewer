import { BiBookmark } from "react-icons/bi";

const PageButtons = () => {
  return (
    <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center xl:justify-start">
      <button className="btn-outline btn-primary btn gap-2">
        save
        <span className="text-xl">
          <BiBookmark />
        </span>
      </button>
      <button className="btn-primary btn-wide btn">add location</button>
    </div>
  );
};

export default PageButtons;
