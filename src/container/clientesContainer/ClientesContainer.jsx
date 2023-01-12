import clientes from "../../utils/json/clientes.json";

const ClientesContainer = () => {
  return (
    <>
      <div className="mt-10 md:mt-40">
        <div className="p-5">
          <hr className="mb-2 w-12 border-2 border-black"></hr>
          <h1 className="font-montserrat text-xl font-bold uppercase md:text-2xl">
            Algunos clientes que confian en mi.
          </h1>
        </div>
        <div className="flex flex-wrap justify-evenly md:mt-10">
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
