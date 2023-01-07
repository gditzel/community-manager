import { useState } from "react";
import "../../index.css";

const Testimonail = () => {
  const [openText, setOpenText] = useState(true);

  const showText = () => {
    if (openText ? setOpenText(false) : setOpenText(true));
  };

  return (
    <>
      <section className="text-gray-700 md:mt-20">
        <div className="p-5">
          <hr className="mb-2 w-8 border-2 border-pink-500"></hr>
          <h1 className="font-montserrat text-xl font-bold uppercase text-pink-500 md:text-2xl">
            Acerca de mi.
          </h1>
        </div>

        <div className="flex justify-center text-center">
          <div className="custom-border flex bg-gradient-to-r from-pink-200 via-pink-300 to-pink-200">
            <div>
              <div className="mb-6 flex justify-center">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                  className="w-32 rounded-full shadow-lg"
                  alt=""
                />
              </div>
              <h4 className="mb-1 font-baskerville text-2xl font-semibold text-pink-500">
                Alejandra Caglia
              </h4>
              <h6 className="mb-4 font-montserrat text-pink-600">
                Community Manager
              </h6>
              <p className="mx-auto mb-8 w-80 px-5 font-montserrat text-pink-500">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="quote-left"
                  className="inline-block w-6 pr-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
              <button
                onClick={showText}
                className="absolute right-0 left-0 mx-auto -mt-6 w-36 rounded-full border-2 border-pink-600 py-2 font-bold text-pink-600 md:hidden md:text-lg"
              >
                Mi experiencia
              </button>
            </div>
            <div>
              <h1 className="mt-16 mb-6 hidden translate-x-10 font-baskerville text-2xl font-semibold text-pink-500 md:block ">
                Mi experiencia
              </h1>
              <p className="hidden w-96 translate-x-10 text-center font-montserrat text-pink-500 md:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                soluta optio esse earum porro praesentium enim quia nisi, eum
                eius beatae debitis, dolore obcaecati, aliquam quas minima saepe
                omnis accusamus! Accusamus ratione nam suscipit perspiciatis.
              </p>
            </div>
          </div>
        </div>
        {!openText ? (
          <p className="mx-auto mt-10 max-w-md px-6 text-justify font-montserrat font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            soluta optio esse earum porro praesentium enim quia nisi, eum eius
            beatae debitis, dolore obcaecati, aliquam quas minima saepe omnis
            accusamus! Accusamus ratione nam suscipit perspiciatis.
          </p>
        ) : (
          <></>
        )}
      </section>
    </>
  );
};

export default Testimonail;
