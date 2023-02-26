import { useState, useEffect } from "react";
import Card from "./Card";

type CardState = {
  id: number;
  name: string;
  pictureUrl: string;
  rating: number;
  description: string;
};

const CardsContainer = () => {
  const [colleges, setColleges] = useState<CardState[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5173/src/colleges.json")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  return (
    <div className="my-16">
      <h2 className="page-subtitle">Colleges</h2>
      <div className="my-12 grid grid-cols-1 justify-center gap-14 sm:mx-3 sm:grid-cols-2 sm:gap-x-6 md:mx-6 md:gap-x-10 lg:mx-10 lg:grid-cols-3 xl:mx-14 2xl:mx-20 2xl:grid-cols-4">
        {colleges.map((college) => (
          <Card 
            key={college.id} 
            name={college.name} 
            imgUrl={college.pictureUrl} 
            description={college.description} 
            rating={college.rating} 
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
