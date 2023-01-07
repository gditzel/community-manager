import "../../index.css";
import bg from "../../assets/imgs/cool-background.png";

const Hero = () => {
  return (
    <>
      {/* <div className="mb-10 -mt-[300px] h-screen -skew-y-3 bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200"></div> */}
      <img
        src={bg}
        alt="bg"
        className="mb-10 -mt-[300px] h-screen -skew-y-3 object-cover"
      />
      <div className="min-h-96 absolute top-0 right-0 left-0 text-center">
        <h1 className="mt-52 mb-6 font-baskerville text-3xl font-bold text-white drop-shadow-xl xl:text-5xl">
          Community Manager
        </h1>
        <p className="mx-auto max-w-sm px-5 font-montserrat text-xl text-white drop-shadow-xl md:text-xl">
          Podemos ayudarte para hacer crecer tu negocio!
        </p>
        <a href="#Planes">
          <button className="mt-8 rounded-full border-2 border-white py-3 px-5 font-montserrat font-bold text-white shadow-xl hover:border-pink-400 hover:bg-white hover:text-pink-400 md:text-xl">
            Nuestros Planes
          </button>
        </a>
      </div>
    </>
  );
};

export default Hero;
