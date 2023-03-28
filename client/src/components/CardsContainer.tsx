import { useState, useEffect } from "react";
import { useAppSelector } from "../redux/store";
import Card from "./Card";

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

  const [items, setItems] = useState<CardState[]>([]);

  useEffect(() => {
    if (itemType === "college") {
      fetch(`https://campus-reviewer-web.onrender.com/college`)
        .then((res) => res.json())
        .then((data) => setItems(data.colleges));
    } else {
      fetch(`http://127.0.0.1:5173/src/locations.json`)
        .then((res) => res.json())
        .then((data) => setItems(data));
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
      {pageTitle && <h2 className={`page-subtitle ${localStorage.theme === "night" && "text-white"}`}>{pageTitle}</h2>}
      <div className="my-12 grid grid-cols-1 justify-center gap-14 sm:mx-3 sm:grid-cols-2 sm:gap-x-6 md:mx-6 md:gap-x-10 lg:mx-10 lg:grid-cols-3 xl:mx-14 2xl:mx-20 2xl:grid-cols-4">
        {items &&
          filterItems(items).map((item) => (
            <Card
              key={item.id}
              name={item.name}
              imgUrl={item.photo}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
              rating={item.rating}
            />
          ))}
      </div>
      <div className="flex justify-center">
        <button className="btn-wide btn mt-3">load more</button>
      </div>
    </div>
  );
};

export default CardsContainer;
