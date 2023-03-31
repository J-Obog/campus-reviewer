import Hero from "../components/Hero";
import SaveButton from "../components/SaveButton";
import ReviewsContainer from "../components/ReviewsContainer";
import { useAppSelector } from "../redux/store";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

type Location = {
  id: string;
  collegeId: string;
  locationType: number;
  name: string;
  rating: number;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  photo: string;
};

const LocationPage = () => {
  const themeValue = useAppSelector((state) => state.theme.value);

  const { id } = useParams();
  const apiUrl = `https://campus-reviewer-web.onrender.com/location/${id}`;

  const [location, setLocation] = useState<Location>();

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setLocation(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {location && (
        <Hero
          image={location.photo}
          title={location.name}
          description={location.description}
          showButton={false}
          rating={location.rating}
        />
      )}
      <main
        className={`${
          themeValue === "winter" && "bg-custom-light"
        } px-4 py-10 md:py-14 ${themeValue === "night" && "bg-custom-dark"}`}
      >
        <div>
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center lg:ml-5 xl:justify-start">
            <SaveButton />
            <button className="btn-primary btn-wide btn">add review</button>
          </div>
        </div>
        {location && <ReviewsContainer id={location.id} />}
      </main>
    </>
  );
};

export default LocationPage;
