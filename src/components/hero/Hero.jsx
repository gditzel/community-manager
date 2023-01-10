import "../../index.css";

const Hero = () => {
  return (
    <>
      <div className="mb-10 -mt-[300px] h-[700px] -skew-y-3 bg-gradient-to-r from-pink-400 via-pink-300 to-pink-400"></div>
      <div className="min-h-96 absolute top-0 right-0 left-0 text-center">
        <h1 className="mt-52 mb-6 font-baskerville text-3xl font-bold text-white drop-shadow-xl xl:text-5xl">
          Crecé en tus redes sociales
        </h1>
        <p className="text-md mx-auto max-w-sm px-5 font-montserrat text-white drop-shadow-xl md:max-w-lg md:text-xl">
          Transformá tu negocio generando contenidos claves para potenciarlo en
          el mundo digital
        </p>
        <a href="#Planes">
          <button className="mt-8 rounded-full border-2 border-white py-3 px-5 font-montserrat font-bold text-white shadow-xl hover:border-pink-400 hover:bg-pink-200 hover:text-pink-400 md:text-xl">
            Nuestros Planes
          </button>
        </a>
      </div>
    </>
  );
};

export default Hero;
