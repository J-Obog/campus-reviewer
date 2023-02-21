import heroImg from "../assets/HeroImg.jpg";

const Hero = () => {
  return (
    <div className="hero h-full" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero-overlay bg-opacity-60 bg-black"></div>
      <div className="hero-content text-center text-neutral-content xl:text-left">
        <div className="max-w-md md:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl">
          <h1 className="mb-10 text-5xl font-light text-white sm:text-6xl sm:mb-14 xl:text-7xl 2xl:text-8xl 2xl:mb-20">Some title that describes the application</h1>
          <p className="mb-10 text-white font-extralight sm:text-xl sm:mb-14 md:max-w-3xl xl:text-2xl 2xl:text-3xl 2xl:mb-20">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className="btn btn-primary md:btn-wide 2xl:btn-lg">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
