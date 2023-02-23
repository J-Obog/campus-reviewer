import Card from "./Card";

const CardsContainer = () => {
  return (
    <div className="my-16">
      <h2 className="page-subtitle">Colleges</h2>
      <div className="my-12 grid grid-cols-1 justify-center gap-14 sm:grid-cols-2 sm:gap-x-6 md:gap-x-10 lg:mx-10 sm:mx-3 md:mx-6 2xl:mx-20 xl:mx-14 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardsContainer;
