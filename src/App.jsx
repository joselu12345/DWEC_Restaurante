import React from "react";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import About from "./components/About";

import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Contacto from "./components/Contacto";

import Menu2 from "./components/product-list";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="inicio">
          <Inicio />
        </div>

        <div id="menu">
          <Menu />
        </div>

        <div id="menu2">
          <Menu2 />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="contacto">
          <Contacto />
        </div>

        {/* <div id="contacto">
          <ProductList />
        </div> */}
      </main>

      <Footer />
    </div>
  );
};

export default App;
