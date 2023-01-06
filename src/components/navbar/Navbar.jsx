import links from "../../utils/json/links.json";
import Logo from "../../assets/imgs/Logo.jpeg";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-10 items-center justify-around bg-white shadow-md md:flex">
        <div className="flex items-center justify-between">
          <a href="/">
            <img className="h-24" src={Logo} alt="Logo" />
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
                <li className="text-pink-400 hover:underline" key={e.name}>
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
