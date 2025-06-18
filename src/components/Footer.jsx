import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="flex-1 m-2 p-5">
          <h1 className=" font-semibold text-xl pb-4">Restaurante Joselu</h1>
          <p className=" text-sm">
            Deléitese con una sinfonía de sabores, donde cada plato es un lienzo
            para la excelencia culinaria.
          </p>
        </div>

        <div className="flex-1 m-2 p-5">
          <h1 className=" font-medium text-xl pt-5 md:pt-0">Contacto</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              RestauranteJoselu@email.com
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              +999 888 555
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Redes Sociales
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            2025 Web creada por Jose Luis Ruz Gil para DWEC
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
