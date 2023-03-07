import Hero from "../components/Hero";
import PageButtons from "../components/PageButtons";

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
          <PageButtons />
        </div>
      </main>
    </>
  );
};

export default LocationPage;