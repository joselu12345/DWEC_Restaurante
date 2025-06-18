import React from "react";
import Button from "../layouts/Button";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/pizza.jpeg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-1/3 space-y-5">
        <h1 className="text-gray-800 font-semibold text-6xl">
          Satisface a tu gourmet interior
        </h1>
        <p className="text-gray-800 ">
          En nuestro local combinamos ingredientes frescos, técnicas auténticas
          y un toque de creatividad para ofrecerles una experiencia gastronómica
          que despierta todos tus sentidos
        </p>
        <div className=" lg:pl-44">
          <Link to="menu">
            <Button title="Hacer Pedido" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
