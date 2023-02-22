import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
import CardsContainer from "./components/CardsContainer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="px-4 py-10 md:py-14">
        <Search />
        <CardsContainer />
      </main>
    </>
  );
};

export default App;
