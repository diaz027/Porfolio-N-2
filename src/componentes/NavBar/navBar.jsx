import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div>
      <div className="bg-transparent-black text-white flex justify-between py-5 fixed top-0 md:w-full z-50">
        <div className="text-4xl ml-[5%]">
          <h1>DAMIAN DIAZ</h1>
          <img
            src="https://res.cloudinary.com/dv4gefesd/image/upload/v1712589079/logo-damian-porfolio-Photoroom.png-Photoroom_u1oztx.png"
            className="w-[4vw] ml-[105%] flex mt-[-23%]"
          />
        </div>
        <div className="flex">
          <button className="bg-[#222] hover:bg-white hover:text-black rounded-[10vh] py-2 px-4 text-xl mx-[10vh] font-roboto italic ">
            <Link to="Inicio" spy={true} smooth={true}>
              INICIO
            </Link>
          </button>
          <button className="bg-[#222]  hover:bg-white hover:text-black rounded-[10vh] px-5 mx-[13vh] font-roboto italic">
            <Link to="Proyectos" spy={true} smooth={true}>
              PROYECTOS
            </Link>
          </button>
          <button className="bg-[#222] hover:bg-white hover:text-black rounded-[10vh] px-5 mx-[10vh] font-roboto italic">
            <Link to="Contactos" spy={true} smooth={true}>
              CONTACTO
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
