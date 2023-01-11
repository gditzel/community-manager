import { Link } from "react-router-dom";

import imagesHome from "../../utils/json/imagesHome.json";
import Video from "../../assets/imgs/Video.mp4";

const ImagesContainer = () => {
  return (
    <>
      <div className="mt-10 px-5">
        <hr className="mb-2 w-12 border-2 border-pink-500"></hr>
        <h1 className="text-xl font-bold uppercase text-pink-500 md:text-2xl">
          Produccion de fotos y videos.
        </h1>
        <div className="mt-8 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
          <video
            controls
            autoPlay
            loop
            muted
            className="mx-auto max-h-[600px] p-4"
          >
            <source src={Video} type="video/mp4" />
          </video>
          {imagesHome.map((e) => (
            <div className="my-auto mx-auto" key={e.id}>
              <button>
                <Link to={`/Production/${e.imageAlt}`}>
                  <img
                    src={e.image}
                    alt={e.imageAlt}
                    className="h-[400px] rounded-full"
                  />
                  <h2 className="mt-2 pb-8 text-center font-montserrat text-lg font-semibold text-pink-600 md:pb-0">
                    {e.title}
                  </h2>
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImagesContainer;
