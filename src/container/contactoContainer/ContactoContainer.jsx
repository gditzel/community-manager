import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

import formulario from "../../utils/json/formulario.json";
import Email from "../../utils/svg/Email";
import Phone from "../../utils/svg/Phone";

const ContactoContainer = () => {
  const [fields, setFields] = useState();

  const clearForm = () => {
    setFields("");
  };

  const form = useRef();

  const enviarEmail = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email !== "" && !regexEmail.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Debes escribir una dirección válida",
        timer: 1500,
      });
      return;
    }

    emailjs
      .sendForm(
        "service_hjhmq3t",
        "template_ycb4819",
        form.current,
        "AIb21sO4WASqiL1oy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    Swal.fire({
      title: "Mensaje enviado con exito",
      icon: "success",
      timer: 1500,
    })
      .then(clearForm)
      .finally(
        // eslint-disable-next-line no-global-assign
        (setTimeout = () => {
          window.location.reload(true);
        }),
        5000
      );
  };

  return (
    <>
      <div className="mt-10 mb-10 justify-evenly font-montserrat md:flex">
        <div className="p-5">
          <hr className="mb-2 w-12 border-2 border-pink-500"></hr>
          <h1 className="text-xl font-bold uppercase text-pink-500 md:text-2xl">
            Contactame.
          </h1>
          <a
            href="https://api.whatsapp.com/send?phone=541140896766"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex gap-3 text-xl font-semibold text-gray-600"
          >
            <Phone />
            <span className="text-sm text-sky-900">11 4089-6766</span>
          </a>
          <a
            href="mailto:byalesita.af@gmail.com"
            className="flex gap-3 text-xl font-semibold text-gray-600"
          >
            <Email />
            <span className="text-sm text-sky-900">byalesita.af@gmail.com</span>
          </a>
          <form ref={form} onSubmit={enviarEmail}>
            {formulario.map((e) => (
              <div className="mt-4 grid md:px-10" key={e.name}>
                <label
                  htmlFor={e.name}
                  className="py-2 text-start font-medium text-pink-500"
                >
                  {e.title}
                </label>
                <input
                  type={e.type}
                  name={e.name}
                  id={e.name}
                  value={fields}
                  className="border border-pink-400 bg-pink-50"
                  required
                />
              </div>
            ))}

            <div className="grid pb-10 md:px-10">
              <label
                htmlFor="msg2"
                className="py-2 text-start font-medium text-pink-500 "
              >
                Dejanos tu consulta en la caja de comentarios
              </label>
              <textarea
                name="msg2"
                id="msg2"
                cols="30"
                rows="10"
                className="border border-pink-400 bg-pink-50"
                value={fields}
              ></textarea>
            </div>

            <div className="mb-6 text-center md:ml-10 md:text-start">
              <button className="rounded bg-pink-600 px-10 py-2 text-white hover:bg-pink-500">
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className="my-auto mx-5 rounded-xl bg-pink-200 p-5 font-baskerville text-lg italic text-pink-600 shadow-lg md:mx-5 md:w-[500px]">
          <p>
            "Nada puede salir mal cuando uno ama lo que hace, porque lo realiza
            con pasión, dedicación, respeto y amor.
            <br />
            Si algo saliera mal, es bueno para frenar, pensar y replantearse una
            nueva forma de seguir, escuchando las opiniones de otros y
            aprendiendo de ello. Siempre hay que sacar de lo malo lo mejor y
            seguir adelante para tener un crecimiento laborarl y personal"
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactoContainer;
