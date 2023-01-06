import { useState } from "react";
import "../../index.css";

const Testimonail = () => {
  const [openText, setOpenText] = useState(true);

  const showText = () => {
    if (openText ? setOpenText(false) : setOpenText(true));
  };

  return (
    <section className="text-gray-700 md:mt-20 md:ml-10">
      <div className="p-5">
        <hr className="mb-2 w-8 border border-black"></hr>
        <h1 className="text-xl uppercase">Acerca de mi.</h1>
      </div>

      <div className="flex justify-center text-center">
        <div className="custom-border flex bg-pink-200">
          <div>
            <div className="mb-6 flex justify-center">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                className="w-32 rounded-full shadow-lg"
                alt=""
              />
            </div>
            <h5 className="mb-4 text-xl font-semibold text-pink-600">
              Alejandra
            </h5>
            <h6 className="mb-4 font-semibold text-pink-600">
              Community Manager
            </h6>
            <p className="mx-auto mb-4 w-80 text-pink-500">
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
              id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
            </p>
            <button
              onClick={showText}
              className="w-36 rounded-full border-2 border-pink-600 py-2 font-bold text-pink-600 md:hidden md:text-lg"
            >
              Mi experiencia
            </button>
          </div>
          <div>
            <p className="mt-20 hidden w-96 translate-x-10 text-center text-pink-500 md:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              soluta optio esse earum porro praesentium enim quia nisi, eum eius
              beatae debitis, dolore obcaecati, aliquam quas minima saepe omnis
              accusamus! Accusamus ratione nam suscipit perspiciatis.
            </p>
          </div>
        </div>
      </div>
      {!openText ? (
        <>
          <p className="mx-auto mt-5 max-w-md text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            soluta optio esse earum porro praesentium enim quia nisi, eum eius
            beatae debitis, dolore obcaecati, aliquam quas minima saepe omnis
            accusamus! Accusamus ratione nam suscipit perspiciatis.
          </p>
        </>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Testimonail;
