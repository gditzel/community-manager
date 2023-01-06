import "tw-elements";
import HamIcon from "../../utils/svg/HamIcon";
import links from "../../utils/json/links.json";

const Sidebar = () => {
  return (
    <>
      <button
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <div className="text-pink-400">
          <HamIcon />
        </div>
      </button>

      <div
        className="offcanvas-end offcanvas invisible fixed bottom-0 top-0 right-0 flex w-3/4 max-w-full flex-col border-none bg-white bg-clip-padding text-gray-700 shadow-sm outline-none transition duration-300 ease-in-out"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header p-4 text-end">
          <button
            type="button"
            className="btn-close -my-5 -mr-2 box-content h-4 w-4 rounded-none border-none p-2 "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <ul className="text-center">
          {links.map((e) => (
            <li
              key={e.name}
              data-bs-dismiss="offcanvas"
              className="mt-10 text-center uppercase text-pink-400"
            >
              <a href={e.ref}>{e.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
