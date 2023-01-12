import clientes from "../../utils/json/clientes.json";

const ClientesContainer = () => {
  return (
    <>
      <div className="mt-20 md:mt-40">
        <h1 className="-skew-y-3 bg-black p-2 text-center font-montserrat text-xl font-bold uppercase text-white md:text-2xl">
          Algunos clientes que confian en mi
        </h1>
        <div className="mt-10 flex flex-wrap justify-evenly md:mt-20">
          {clientes.map((e) => (
            <div
              className="m-4 rounded-sm border p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800"
              key={e.imageAlt}
            >
              <div key={e.imageAlt}>
                <img className="sm:max-w-md" src={e.image} alt={e.imageAlt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClientesContainer;
