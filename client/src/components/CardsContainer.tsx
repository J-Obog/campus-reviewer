import { useState, useEffect } from "react";
import { useAppSelector } from "../redux/store";
import Card from "./Card";
import { useParams } from "react-router-dom";

type CardState = {
  id: string;
  name: string;
  photo: string;
  rating: number;
  // description: string;
};

type CardsContainerProps = {
  pageTitle: string | null;
  itemType: "college" | "location";
};

const CardsContainer = ({ pageTitle, itemType }: CardsContainerProps) => {
  const itemSearch = useAppSelector((state) => state.searchInput.value);
  const itemFilter = useAppSelector((state) => state.selectInput.value);
  const themeValue = useAppSelector((state) => state.theme.value);

  const [items, setItems] = useState<CardState[]>([]);
  const [paginate, setPaginate] = useState<number>(6);

  const { id: itemId } = useParams();

  useEffect(() => {
    if (itemType === "college") {
      fetch(`https://campus-reviewer-web.onrender.com/college`)
        .then((res) => res.json())
        .then((data) => setItems(data.colleges));
    } else if (itemType === "location") {
      fetch(
        `https://campus-reviewer-web.onrender.com/location?collegeId=${itemId}`
      )
        .then((res) => res.json())
        .then((data) => setItems(data.locations));
    }
  }, [itemType]);

  const filterItems = (items: CardState[]) => {
    if (itemType === "college") {
      const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(itemSearch.toLowerCase())
      );

      if (itemFilter === "rating") {
        filteredItems.sort((a, b) => b.rating - a.rating);
      }

      return filteredItems;
    }

    return items;
  };

  return (
    <div className="my-16">
      {pageTitle && (
        <h2
          className={`page-subtitle ${themeValue === "night" && "text-white"}`}
        >
          {pageTitle}
        </h2>
      )}
      <div className="my-12 grid grid-cols-1 justify-center gap-14 sm:mx-3 sm:grid-cols-2 sm:gap-x-6 md:mx-6 md:gap-x-10 lg:mx-10 lg:grid-cols-3 xl:mx-14 2xl:mx-20 2xl:grid-cols-4">
        {items &&
          filterItems(items)
            .slice(0, paginate)
            .map((item) => (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                imgUrl={item.photo}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
                rating={item.rating}
                itemType={itemType}
              />
            ))}
      </div>
      {paginate < items.length && (
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

export default CardsContainer;
