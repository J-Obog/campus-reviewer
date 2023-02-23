import Card from "./Card";

const CardsContainer = () => {
  return (
    <div className="my-16">
      <h2 className="page-subtitle">Colleges</h2>
      <div className="my-12 grid grid-cols-1 justify-center gap-14 sm:mx-3 sm:grid-cols-2 sm:gap-x-6 md:mx-6 md:gap-x-10 lg:mx-10 lg:grid-cols-3 xl:mx-14 2xl:mx-20 2xl:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex justify-center">
        <button className="btn mt-3 btn-wide">load more</button>
      </div>
    </div>
  );
};

export default CardsContainer;
