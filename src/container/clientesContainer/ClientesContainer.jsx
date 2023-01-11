import clientes from "../../utils/json/clientes.json";

const ClientesContainer = () => {
  return (
    <>
      <div className="mt-10">
        <div className="p-5">
          <hr className="mb-2 w-12 border-2 border-pink-500"></hr>
          <h1 className="font-montserrat text-xl font-bold uppercase text-pink-500 md:text-2xl">
            Clientes que confian en mi trabajo.
          </h1>
        </div>
        <div className="mt-10 flex flex-wrap justify-evenly">
          {clientes.map((e) => (
            <div
              className="m-4 rounded-xl border-8 border-black shadow-lg"
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
