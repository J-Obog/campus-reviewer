import heroImg from "../assets/HeroImg.jpg";

const Hero = () => {
  return (
    <div className="hero h-full" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content xl:text-left">
        <div className="max-w-md md:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl">
          <h1 className="mb-10 text-5xl font-light text-white sm:mb-14 sm:text-6xl xl:text-7xl 2xl:mb-20 2xl:text-8xl">Some title that describes the application</h1>
          <p className="mb-10 font-extralight text-white sm:mb-14 sm:text-xl md:max-w-3xl xl:text-2xl 2xl:mb-20 2xl:text-3xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className="btn-primary btn md:btn-wide 2xl:btn-lg">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
