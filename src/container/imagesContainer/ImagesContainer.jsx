import { Link } from "react-router-dom";

import imagesHome from "../../utils/json/imagesHome.json";
import Video from "../../assets/imgs/Video.mp4";

const ImagesContainer = () => {
  return (
    <>
      <div className="mt-10 px-5 md:mt-40">
        <hr className="mb-2 w-12 border-2 border-black"></hr>
        <h1 className="text-xl font-bold uppercase md:text-2xl">
          Produccion de fotos y videos.
        </h1>
        <div className="mt-8 flex flex-wrap justify-center gap-1">
          <video
            controls
            autoPlay
            loop
            muted
            className="h-[640px] shadow-xl md:mr-5"
          >
            <source src={Video} type="video/mp4" />
          </video>
          {imagesHome.map((e) => (
            <div className="" key={e.id}>
              <button>
                <Link to={`/Production/${e.imageAlt}`}>
                  <img
                    src={e.image}
                    alt={e.imageAlt}
                    className="h-[640px] max-w-sm object-cover shadow-xl"
                  />
                  {/* <h2 className="mt-2 text-center font-montserrat text-lg font-semibold drop-shadow-2xl hover:underline">
                    {e.title}
                  </h2> */}
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
