import "../../index.css";

import CardPlan from "../../components/cardPlan/CardPlan";
import ListIcon from "../../utils/svg/ListIcon";

const PlanesContainer = () => {
  return (
    <>
      <div className="mt-10 md:mt-20">
        <h1 className="-skew-y-3 bg-black p-2 text-center font-montserrat text-xl font-bold uppercase text-white md:text-2xl">
          Servicios que ofrecemos
        </h1>
        <div className="custom-border2 mx-auto mt-10 max-w-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 p-5 md:mt-20 md:w-[600px]">
          <h1 className="text-center font-montserrat text-xl font-bold uppercase">
            Campañas publicitarias
          </h1>
          <div className="mt-4 font-montserrat md:text-xl">
            <div className="flex gap-1">
              <ListIcon />
              <p>Campañas publicitarias en Google Ads</p>
            </div>
            <div className="mt-4 flex gap-1">
              <ListIcon />
              <p>Anuncios publicitarios Meta business en Facebook</p>
            </div>
          </div>
        </div>
        <div className="p-5">
          <hr className="mb-2 w-12 border-2 border-black"></hr>
          <h1 className="font-montserrat text-xl font-bold uppercase">
            Planes de community manager.
          </h1>
        </div>
        <div className="mx-5 flex flex-wrap justify-evenly">
          <CardPlan />
        </div>
      </div>
    </>
  );
};

export default PlanesContainer;
