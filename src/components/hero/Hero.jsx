import "../../index.css";

const Hero = () => {
  return (
    <>
      <div className="mb-10 -mt-[300px] h-[700px] -skew-y-3 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300"></div>
      {/* <div className="mb-10 -mt-[300px] h-[700px]"></div> */}
      <div className="min-h-96 absolute top-0 right-0 left-0 text-center">
        <h1 className="mt-52 mb-6 font-baskerville text-3xl font-bold drop-shadow-xl xl:text-5xl">
          Crecé en redes sociales
        </h1>
        <p className="text-md mx-auto max-w-sm px-5 font-montserrat drop-shadow-xl md:max-w-lg md:text-xl">
          Transformá tu negocio generando contenidos claves para potenciarlo en
          el mundo digital
        </p>
        <a href="#Planes">
          <button className="mt-8 rounded-full border-2 border-black py-3 px-5 font-montserrat font-bold shadow-xl hover:bg-black hover:text-white md:text-xl">
            Nuestros Planes
          </button>
        </a>
      </div>
    </>
  );
};

export default Hero;
