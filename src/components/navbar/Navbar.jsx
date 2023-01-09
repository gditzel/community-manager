import "../../index.css";

import { useState, useEffect } from "react";

import links from "../../utils/json/links.json";
import Logo from "../../assets/imgs/Logo.jpeg";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
    // eslint-disable-next-line
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-10 items-center justify-around bg-white shadow-md md:flex ${
          show && "-top-[200px]"
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="/" className="flex">
            <img className="h-32" src={Logo} alt="Logo" />
            <h1 className="my-auto w-20 font-montserrat text-gray-500 md:w-52 md:text-xl">
              Marketing para tus{" "}
              <span className="font-baskerville text-2xl italic">Redes</span>
            </h1>
          </a>
          <div className="mr-2 mb-2 flex justify-between md:absolute md:top-0 md:right-0 md:m-7">
            <div className="flex gap-3 md:hidden md:gap-10">
              <Sidebar />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="hidden w-96 items-center sm:ml-6 md:block">
            <ul className="flex justify-between uppercase text-pink-400 md:text-lg">
              {links.map((e) => (
                <li
                  className="font-baskerville text-pink-400 hover:underline"
                  key={e.name}
                >
                  <a href={e.ref}>{e.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
