import Hero from "../../components/hero/Hero";
import AboutContainer from "../../container/aboutContainer/AboutContainer";
import PlanesContainer from "../../container/planesContainer/PlanesContainer";
import ContactoContainer from "../../container/contactoContainer/ContactoContainer";
import ImagesContainer from "../../container/imagesContainer/ImagesContainer";

const Home = () => {
  return (
    <>
      <Hero />

      <section id="About">
        <AboutContainer />
      </section>

      <section id="Planes">
        <PlanesContainer />
      </section>

      <section id="Produccion">
        <ImagesContainer />
      </section>

      <section id="Contacto">
        <ContactoContainer />
      </section>
    </>
  );
};

export default Home;
