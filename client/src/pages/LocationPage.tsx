import Hero from "../components/Hero";
import SaveButton from "../components/SaveButton";
import ReviewsContainer from "../components/ReviewsContainer";

const LocationPage = () => {
  return (
    <>
      <Hero
        image={"http://www.hoffarch.com/assets/SUNY-Whitman-overview.jpg"} 
        title={"Whitman Hall"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Imperdiet nulla malesuada pellentesque elit eget gravida. Morbi leo urna molestie at elementum eu facilisis. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse."}
        showButton={false}
        rating={3.5}
      />
      <main className="px-4 py-10 md:py-14">
        <div>
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center xl:justify-start">
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