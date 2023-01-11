import "../../index.css";

import { useState } from "react";

import CloseIcon from "../../utils/svg/CloseIcon";
import HamIcon from "../../utils/svg/HamIcon";
import links from "../../utils/json/links.json";
import Logo from "../../assets/imgs/Logo.jpeg";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const onClickMobile = () => {
    if (openMenu ? setOpenMenu(false) : setOpenMenu(true));
  };
  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-10 items-center justify-around border-b bg-white md:flex">
        <div className="flex items-center justify-between">
          <a href="/" className="flex">
            <img className="h-32" src={Logo} alt="Logo" />
            <h1 className="my-auto w-20 font-montserrat text-gray-500 md:w-52 md:text-xl">
              Marketing para tus{" "}
              <span className="font-baskerville text-2xl italic">Redes</span>
            </h1>
          </a>
          <div className="mr-2 mb-2 flex justify-between md:absolute md:top-0 md:right-0 md:m-7">
            <div className="flex gap-3 md:gap-10">
              <button
                onClick={onClickMobile}
                className="mt-1 text-pink-400 md:hidden"
              >
                {openMenu ? <HamIcon /> : <CloseIcon />}
              </button>
            </div>
          </div>
        </div>
        {!openMenu ? (
          <div className="mr-2 flex justify-between md:absolute md:top-0 md:right-0 md:m-7">
            <div className="flex gap-3 md:hidden md:gap-10">
              <ul className="scale-up-hor-left absolute left-0 top-0 z-20 h-screen w-2/3 bg-white text-center text-lg font-semibold md:hidden">
                <li className="mt-10 text-center font-baskerville uppercase text-pink-400">
                  <a href="/">Inicio</a>
                </li>
                {links.map((e) => (
                  <li
                    key={e.name}
                    onClick={onClickMobile}
                    className="mt-10 text-center font-baskerville uppercase text-pink-400"
                  >
                    <HashLink to={`/${e.ref}`}>{e.name}</HashLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="hidden items-center sm:ml-6 md:block">
              <ul className="flex justify-between uppercase text-pink-400 md:text-lg">
                <li className="mr-6 font-baskerville text-pink-400 hover:underline">
                  <a href="/">Inicio</a>
                </li>
                {links.map((e) => (
                  <li
                    className="mr-6 font-baskerville text-pink-400 hover:underline"
                    key={e.name}
                  >
                    <HashLink to={`/${e.ref}`}>{e.name}</HashLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
