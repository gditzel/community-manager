import Hero from "../../components/hero/Hero";
import AboutContainer from "../../container/aboutContainer/AboutContainer";
import PlanesContainer from "../../container/planesContainer/PlanesContainer";
import ContactoContainer from "../../container/contactoContainer/ContactoContainer";
import ImagesContainer from "../../container/imagesContainer/ImagesContainer";
import ClientesContainer from "../../container/clientesContainer/ClientesContainer";

const Home = () => {
  return (
    <>
      <Hero />

      <section id="About">
        <AboutContainer />
      </section>

      <section id="Clientes">
        <ClientesContainer />
      </section>

      <section id="Servicios">
        <PlanesContainer />
      </section>

      <section>
        <ImagesContainer />
      </section>

      <section id="Contacto">
        <ContactoContainer />
      </section>
    </>
  );
};

export default Home;
