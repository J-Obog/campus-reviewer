import Hero from "../components/Hero";
import SaveButton from "../components/SaveButton";
import ReviewsContainer from "../components/ReviewsContainer";
import { useAppSelector } from "../redux/store";

const LocationPage = () => {
  const themeValue = useAppSelector((state) => state.theme.value);

  return (
    <>
      <Hero
        image={"http://www.hoffarch.com/assets/SUNY-Whitman-overview.jpg"}
        title={"Whitman Hall"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Justo donec enim diam vulputate ut pharetra sit amet aliquam."
        }
        showButton={false}
        rating={3.5}
      />
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
        <ReviewsContainer />
      </main>
    </>
  );
};

export default LocationPage;
