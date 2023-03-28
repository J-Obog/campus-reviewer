import CardsContainer from "../components/CardsContainer";
import { useState } from "react";

const BookmarksPage = () => {
  const [activeButton, setActiveButton] = useState<"college" | "location">("college");

  return (
    <>
      <main className="px-4 py-10 md:py-14">
        <h2 className="page-subtitle my-16">Bookmarks</h2>
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
