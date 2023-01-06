const Hero = () => {
  return (
    <>
      <div className="mb-10 -mt-96 h-screen -skew-y-3 bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200"></div>
      <div className="absolute top-0 right-0 left-0 text-center">
        <h1 className="mt-40 mb-12 text-4xl font-bold text-white xl:text-5xl">
          Community Manager
        </h1>
        <p className="px-5 text-xl text-white md:text-xl">
          Podemos ayudarte para hacer crecer tu negocio!
        </p>
        <a href="#Planes">
          <button className="mt-12 w-52 rounded-full border-2 border-white py-3 px-5 font-bold text-white md:text-xl">
            Nuestros Planes
          </button>
        </a>
      </div>
    </>
  );
};

export default Hero;
