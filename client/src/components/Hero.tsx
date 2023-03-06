import HeroRating from "./HeroRating";

type HeroProps = {
  image: string;
  title: string;
  description: string;
  showButton: boolean;
  rating: number;
};

const Hero = ({ image, title, description, showButton, rating }: HeroProps) => {
  return (
    <div className="hero h-full" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content xl:text-left">
        <div className="max-w-md md:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl">
          <h1 className="mb-10 text-5xl font-light text-white sm:mb-14 sm:text-6xl xl:text-7xl 2xl:mb-20 2xl:text-8xl">{title}</h1>
          <p className="mb-10 font-extralight text-white sm:mb-14 sm:text-xl md:max-w-3xl xl:text-2xl 2xl:mb-20 2xl:text-3xl">{description}</p>
          {showButton ? <button className="btn-primary btn md:btn-wide 2xl:btn-lg">Get Started</button> : <HeroRating value={rating} />}
        </div>
      </div>
    </div>
  );
};

export default Hero;
