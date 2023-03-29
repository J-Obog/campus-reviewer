import Hero from "../components/Hero";
import Search from "../components/Search";
import CardsContainer from "../components/CardsContainer";
import heroImg from "../assets/HeroImg.jpg";
import { useAppSelector } from "../redux/store";

const LandingPage = () => {
  const themeValue = useAppSelector((state) => state.theme.value);

  return (
    <>
      <Hero
        image={heroImg}
        title="Campus Reviewer: rate college campuses with ease!"
        description="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        showButton
        rating={0}
      />
      <main
        className={`${themeValue === "winter" && "bg-custom-light"} px-4 py-10 md:py-14 ${themeValue === "night" && "bg-custom-dark"}`}
      >
        <Search />
        <CardsContainer pageTitle="colleges" itemType="college" />
      </main>
    </>
  );
};

export default LandingPage;
