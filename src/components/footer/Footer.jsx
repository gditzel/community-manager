import { SocialIcon } from "react-social-icons";
import Logo from "../../assets/imgs/LogoBG.png";

const Footer = () => {
  return (
    <>
      <div className="-skew-y-3 justify-center gap-10 bg-black md:flex">
        <div>
          <a href="/" className="flex justify-center">
            <img className="h-32" src={Logo} alt="Logo" />
            <h1 className="w-30 my-auto font-montserrat text-gray-500 md:w-full md:w-52 md:text-xl">
              Seguime en mis redes!
            </h1>
          </a>
        </div>
        <div className="my-auto flex justify-center gap-2">
          <SocialIcon url="https://twitter.com/jaketrent" />
          <SocialIcon url="https://www.instagram.com/gonzaditzel/" />
          <SocialIcon url="https://www.facebook.com/gonza.ditzel/" />
          <SocialIcon url="https://api.whatsapp.com/send?phone=541140896766" />
        </div>
        {/* <div className="max-w-md rounded-xl bg-pink-200 p-5 font-baskerville text-lg italic shadow-lg">
        <p>
          "Nada puede salir mal cuando uno ama lo que hace, porque lo realiza
          con pasión, dedicación, respeto y amor.
          <br />
          Si algo saliera mal, es bueno para frenar, pensar y replantearse una
          nueva forma de seguir, escuchando las opiniones de otros y aprendiendo
          de ello. Siempre hay que sacar de lo malo lo mejor y seguir adelante
          para tener un crecimiento laborarl y personal"
          </p>
        </div> */}
        <span className="my-auto block bg-black py-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © All Rights Reserved.
        </span>
      </div>
    </>
  );
};

export default Footer;
