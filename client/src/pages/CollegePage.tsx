import Hero from "../components/Hero";
import SaveButton from "../components/SaveButton";
import CardsContainer from "../components/CardsContainer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAppSelector } from "../redux/store";

type College = {
  id: string;
  name: string;
  rating: number;
  photo: string;
  description: string | null;
  address: string | null;
  latitude: string | null;
  longitud: string | null;
};

const CollegePage = () => {
  const { id: collegeId } = useParams();
  const apiUrl = `https://campus-reviewer-web.onrender.com/college/${collegeId}`;
  const themeValue = useAppSelector((state) => state.theme.value);

  const [college, setCollege] = useState<College>();
  

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setCollege(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {college && (
        <Hero
          image={college.photo}
          title={college.name}
          description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dignissimos inventore maxime esse iste ipsam corrupti ut libero doloremque laborum nemo similique, mollitia alias reprehenderit, reiciendis veritatis ullam ex exercitationem."}
          showButton={false}
          rating={college.rating}
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
            <button className="btn-primary btn-wide btn">add location</button>
          </div>
        </div>
        <CardsContainer pageTitle="locations" itemType="location" />
      </main>
    </>
  );
};

export default CollegePage;
