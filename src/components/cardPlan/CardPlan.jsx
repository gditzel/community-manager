import planes from "../../utils/json/planes.json";

const CardPlan = () => {
  return (
    <>
      {planes.map((e) => (
        <div
          className="m-5 max-w-sm rounded-lg border bg-white p-4 font-montserrat shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-8"
          key={e.title}
        >
          <h5 className="mb-4 text-xl font-medium text-gray-500">{e.title}</h5>
          <ul className="my-7 space-y-5">
            <li className="flex space-x-3">
              <svg
                aria-hidden="true"
                className="h-5 w-5 flex-shrink-0 text-pink-600 dark:text-pink-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                {e.post}
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                aria-hidden="true"
                className="h-5 w-5 flex-shrink-0 text-pink-600 dark:text-pink-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                {e.historia}
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                aria-hidden="true"
                className="h-5 w-5 flex-shrink-0 text-pink-600 dark:text-pink-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                {e.placa}
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden={e.aria}
                fill={e.fill}
                viewBox={e.viewBox}
                strokeWidth={e.strokeWidth}
                stroke={e.stroke}
                className="h-5 w-5 flex-shrink-0 text-pink-600 dark:text-pink-500"
              >
                <path fillRule="evenodd" d={e.d} clipRule="evenodd"></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                {e.reel}
              </span>
            </li>
          </ul>
          <a
            href={e.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full justify-center rounded-lg bg-pink-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-500 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
          >
            Elegir plan
          </a>
        </div>
      ))}
    </>
  );
};

export default CardPlan;
