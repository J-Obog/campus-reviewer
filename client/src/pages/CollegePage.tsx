import Hero from "../components/Hero";
import SaveButton from "../components/SaveButton";
import CardsContainer from "../components/CardsContainer";
import { useAppSelector } from "../redux/store";

const CollegePage = () => {
  const themeValue = useAppSelector((state) => state.theme.value);

  return (
    <>
      <Hero
        image={
          "https://image.cnbcfm.com/api/v1/image/106578950-1592283323893gettyimages-1212003765.jpeg?v=1592312973"
        }
        title={"Harvard University"}
        description={
          "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Established in 1636 and named for its first benefactor, clergyman John Harvard, Harvard is the oldest institution of higher learning in the United States and among the most prestigious in the world."
        }
        showButton={false}
        rating={5.0}
      />
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
