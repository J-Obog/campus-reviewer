import CardsContainer from "../components/CardsContainer";
import { useState } from "react";
import { useAppSelector } from "../redux/store";

const BookmarksPage = () => {
  const [activeButton, setActiveButton] = useState<"college" | "location">(
    "college"
  );
  const themeValue = useAppSelector((state) => state.theme.value);

  return (
    <>
      <main
        className={`${
          themeValue === "winter" && "bg-custom-light"
        } px-4 py-10 md:py-14 ${themeValue === "night" && "bg-custom-dark"}`}
      >
        <h2
          className={`page-subtitle my-16 ${
            themeValue === "night" && "text-white"
          }`}
        >
          Bookmarks
        </h2>
        <div className="flex justify-center">
          <div className="btn-group">
            <button
              className={`${activeButton === "college" && "btn-active"} btn`}
              onClick={() => setActiveButton("college")}
            >
              colleges
            </button>
            <button
              className={`${activeButton === "location" && "btn-active"} btn`}
              onClick={() => setActiveButton("location")}
            >
              locations
            </button>
          </div>
        </div>
        <CardsContainer pageTitle={null} itemType={activeButton} />
      </main>
    </>
  );
};

export default BookmarksPage;
