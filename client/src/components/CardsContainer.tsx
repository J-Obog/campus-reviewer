import { useState, useEffect } from "react";
import { useAppSelector } from "../redux/store";
import Card from "./Card";

type CardState = {
  id: number;
  name: string;
  pictureUrl: string;
  rating: number;
  description: string;
};

type CardsContainerProps = {
  pageTitle: string;
  itemType: "colleges" | "locations";
};

const CardsContainer = ({ pageTitle, itemType }: CardsContainerProps) => {
  const itemSearch = useAppSelector((state) => state.searchInput.value);
  const itemFilter = useAppSelector((state) => state.selectInput.value);

  const [items, setItems] = useState<CardState[]>([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:5173/src/${itemType}.json`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const filterItems = (items: CardState[]) => {
    if (itemType === "colleges") {
      const filteredItems = items.filter(item => item.name.toLowerCase().includes(itemSearch.toLowerCase()));
  
      if (itemFilter === "rating") {
        filteredItems.sort((a, b) => b.rating - a.rating);
      }
  
      return filteredItems;
    }
    
    return items;
  };

  return (
    <div className="my-16">
      <h2 className="page-subtitle">{pageTitle}</h2>
      <div className="my-12 grid grid-cols-1 justify-center gap-14 sm:mx-3 sm:grid-cols-2 sm:gap-x-6 md:mx-6 md:gap-x-10 lg:mx-10 lg:grid-cols-3 xl:mx-14 2xl:mx-20 2xl:grid-cols-4">
        {filterItems(items).map((item) => (
          <Card 
            key={item.id} 
            name={item.name} 
            imgUrl={item.pictureUrl} 
            description={item.description} 
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
