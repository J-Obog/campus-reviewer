import Hero from "../components/Hero";
import Search from "../components/Search";
import CardsContainer from "../components/CardsContainer";
import heroImg from "../assets/HeroImg.jpg"

const LandingPage = () => {
  return (
    <>
      <Hero 
        image={heroImg} 
        title="Campus Reviewer: rate college campuses with ease!"
        description="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        showButton
      />
      <main className="px-4 py-10 md:py-14">
        <Search />
        <CardsContainer />
      </main>
    </>
  );
};

export default LandingPage;
