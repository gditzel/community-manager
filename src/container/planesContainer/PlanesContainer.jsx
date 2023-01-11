import "../../index.css";

import CardPlan from "../../components/cardPlan/CardPlan";
import ListIcon from "../../utils/svg/ListIcon";

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
        <div className="mx-5 flex flex-wrap justify-evenly">
          <CardPlan />
        </div>
        <div className="custom-border2 mx-auto mt-10 bg-gradient-to-r from-pink-200 via-pink-300 to-pink-200 p-5 md:w-[600px]">
          <h1 className="text-center font-montserrat text-xl font-bold uppercase text-pink-500 md:text-2xl">
            Hace crecer tu negocio
          </h1>
          <div className="mt-4 font-montserrat text-pink-900 md:text-xl">
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
      </div>
    </>
  );
};

export default PlanesContainer;
