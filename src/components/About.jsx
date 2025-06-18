import React from "react";
import img from "../assets/img/about.png";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row justify-center items-center lg:px-32 px-5">
      <div className="space-y-4 lg:pt-14 lg:pr-8">
        <h1 className="font-semibold text-4xl text-center md:text-start">
          ¿Por qué elegirnos?
        </h1>
        <p>
          En Restaurante Joselu, no solo servimos comida: creamos momentos.
          Nuestra pasión por la cocina se refleja en cada plato, cuidadosamente
          preparado con ingredientes locales, sabores frescos y un toque
          familiar que te hará sentir como si comieras en casa.
        </p>
        <p>
          Ya sea para un almuerzo tranquilo, una fiesta o una comida rápida,
          Restaurante Joselu es tu mejor elección. Porque el buen comer se
          disfruta más cuando se hace con pasión.
        </p>
      </div>

      <img
        src={img}
        alt="img"
        className="w-full max-w-md lg:max-w-lg h-auto rounded mb-8 lg:mb-0"
      />
    </div>
  );
};

export default About;
