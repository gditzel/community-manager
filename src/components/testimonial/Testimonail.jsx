import "../../index.css";
import { useState } from "react";

import FotoPerfil from "../../assets/imgs/FotoPerfil.jpg";

const Testimonail = () => {
  const [openText, setOpenText] = useState(true);

  const showText = () => {
    if (openText ? setOpenText(false) : setOpenText(true));
  };

  return (
    <>
      <section>
        <h1 className="-skew-y-3 bg-black p-2 text-center font-montserrat text-xl font-bold uppercase text-white md:text-2xl">
          Acerca de mi
        </h1>

        <div className="mt-10 flex justify-center text-center md:mt-20">
          <div className="custom-border flex bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200">
            <div className="flex">
              <div className="drop-shadow-2xl">
                <div className="mb-6 flex justify-center">
                  <img
                    src={FotoPerfil}
                    className="rounded-full object-cover shadow-lg"
                    alt="Foto de perfil"
                  />
                </div>
                <h4 className="mb-1 font-baskerville text-3xl font-semibold drop-shadow-2xl">
                  Alejandra Caglia
                </h4>
                <h6 className="mb-4 font-montserrat font-medium drop-shadow-xl">
                  Community Manager
                </h6>
                <p className="mx-auto mb-8 w-80 px-5 font-montserrat font-medium drop-shadow-2xl">
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
                  Tengo 32 a??os y desde hace tiempo me inspira el mundo digital.
                  Me apasiona el social media y el storytelling.
                </p>
                <button
                  onClick={showText}
                  className="absolute right-0 left-0 mx-auto -mt-6 w-36 rounded-full border-2 border-black py-2 font-bold md:hidden md:text-lg"
                >
                  Mi experiencia
                </button>
              </div>
              <div>
                <h1 className="mt-6 mb-6 hidden translate-x-4 font-baskerville text-2xl font-semibold drop-shadow-2xl md:block">
                  Mi experiencia
                </h1>
                <p className="hidden w-96 translate-x-4 text-center font-montserrat font-medium drop-shadow-2xl md:block">
                  Estudi?? Marketing en una escuela virtual - CODERHOUSE. Realic??
                  cursos de publicidad en redes, rend?? las evaluaciones de
                  Google para poder obtener los certificados. Me capacit?? en
                  branding y growth marketing.
                  <br />
                  <br />
                  La vida me ha dado la oportunidad de trabajar y vivir del
                  marketing. Para mi, en este mundo digital que crece a pasos
                  agigantados, capacitarse constantemente es indispensable para
                  renovar y mejorar mis conocimientos.
                </p>
              </div>
            </div>
          </div>
        </div>
        {!openText ? (
          <p className="fade-in mx-auto mt-10 max-w-md px-6 text-center font-montserrat font-semibold drop-shadow-2xl">
            Estudi?? Marketing en una escuela virtual - CODERHOUSE. Realic??
            cursos de publicidad en redes, rend?? las evaluaciones de Google para
            poder obtener los certificados. Me capacit?? en branding y growth
            marketing.
            <br />
            <br />
            La vida me ha dado la oportunidad de trabajar y vivir del marketing.
            Para mi, en este mundo digital que crece a pasos agigantados,
            capacitarse constantemente es indispensable para renovar y mejorar
            mis conocimientos.
          </p>
        ) : (
          <></>
        )}
      </section>
    </>
  );
};

export default Testimonail;
