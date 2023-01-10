import { SocialIcon } from "react-social-icons";
import Logo from "../../assets/imgs/LogoBG.png";

const Footer = () => {
  return (
    <>
      <div className="justify-center gap-10 bg-gray-100 md:flex">
        <div>
          <a href="/" className="flex justify-center">
            <img className="h-32" src={Logo} alt="Logo" />
            <h1 className="w-30 my-auto w-40 font-montserrat text-gray-500 md:w-full md:text-xl">
              Seguime en mis redes!
            </h1>
          </a>
        </div>
        <div className="my-auto flex justify-center gap-2">
          <SocialIcon
            url="https://www.instagram.com/alesita.af/"
            target="_blank"
            rel="noopener noreferrer"
          />
          <SocialIcon
            url="https://www.facebook.com/gonza.ditzel/"
            target="_blank"
            rel="noopener noreferrer"
          />
          <SocialIcon
            url="https://api.whatsapp.com/send?phone=541140896766"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
      <span className="my-auto block  bg-gray-100 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © All Rights Reserved.
      </span>
    </>
  );
};

export default Footer;
