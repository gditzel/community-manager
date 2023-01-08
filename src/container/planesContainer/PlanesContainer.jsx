import CardPlan from "../../components/cardPlan/CardPlan";

const PlanesContainer = () => {
  return (
    <>
      <div className="mt-10">
        <div className="p-5">
          <hr className="mb-2 w-12 border-2 border-pink-500"></hr>
          <h1 className="font-montserrat text-xl font-bold uppercase text-pink-500 md:text-2xl">
            Planes de community manager.
          </h1>
        </div>
        <div className="mx-5 flex grid-cols-1 justify-items-center overflow-y-hidden overflow-x-scroll md:grid md:grid-cols-2 md:overflow-x-hidden xl:grid-cols-3">
          <CardPlan />
        </div>
      </div>
    </>
  );
};

export default PlanesContainer;
