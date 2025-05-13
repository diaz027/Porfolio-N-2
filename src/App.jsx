import React, { useState, useEffect } from "react";
import NavBar from "./componentes/NavBar/navBar";
import "./App.css";
import Proyect from "./componentes/rick-and-morty/rick";
import Pokemons from "./componentes/pokemons/pokemos";
import Vorttex from "./componentes/vorttex/Vorttex";
import NavMobile from "./componentes/NavBarMobile/mobile";
import AltaBurgers from "./componentes/alta-Burges/alta-Burges";
import Foter from "./componentes/foter/Contacto";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="Inicio" className="select-none min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      {/* Fondo de cuadrícula sutil */}
      <div className="fixed inset-0 bg-[url('/bg-grid.svg')] bg-center opacity-10 z-0 pointer-events-none"></div>

      {/* Navegación */}
      {windowWidth <= 768 ? <NavMobile /> : <NavBar />}

      {/* Hero y Sobre mí */}
      <div className="text-white xl:-mt-[20vh] relative z-10">
        <div className="text-5xl xl:mt-[3vh]">
          <div className="xl:h-[30vh]" />
          <img
            className="relative select-none rounded-[50%] w-[50%] h-[50%] mx-auto mt-[5vh] xl:mx-[150vh] xl:t-[-45vh] xl:w-[20%] xl:h-[40vh] 2xl:ml-[140vh]"
            src="/damiGalan.jpg"
            alt="Damian Diaz"
          />
          {windowWidth <= 768 ? (
            <h2 className="text-center mt-[2vh]">
              Desarrollador <br />
              Full Stack 💻
            </h2>
          ) : (
            <h2 className="select-none tracking-tight text-6xl xl:mt-[-28vh] xl:mx-[5%] font-roboto-regular 2xl:text-7xl">
              Hola, soy Damian Diaz👋
              <br />
              Desarrollador Full Stack 💻
            </h2>
          )}
        </div>
        <div className="bg-transparent-bg text-xl mt-[6.5vh] px-6 rounded-[5vh] h-[35%] w-[43vh] mx-auto xl:mt-[30vh] xl:mx-[5%] xl:px-[80vh] border-2 border-sky-400 pb-4 2xl:text-3xl">
          <p className="text-3xl py-4 xl:mx-[-78vh] 2xl:text-5xl">Sobre mi:</p>
          <p className="xl:mx-[-78vh] font-roboto-flex">
            Soy un desarrollador Full Stack con un año de experiencia, apasionado por la tecnología y el enorme potencial que tiene para transformar ideas en realidades digitales 🌍. <br />
            Para mí, programar no es solo tirar líneas de código, sino que es crear experiencias que resuelven problemas concretos y generan conexiones reales con las personas 💡.
          </p>
          <p className="xl:mx-[-78vh] mb-5">
            Me encanta enfrentar todos los desafíos que se presenten, porque lo veo como una oportunidad para seguir aprendiendo y mejorar en el ámbito del desarrollo 💻.
          </p>
        </div>
        <br />

        {/* Tecnologías */}
        <div>
          <h2 className="text-3xl 2xl:text-5xl bg-transparent-bg text-center mt-[15vh] xl:mx-auto xl:rounded-[10vh] xl:w-[90%] border-2 border-sky-400 text-sky-400 xl:py-1">
            TECNOLOGIAS
          </h2>
          <div className="bg-transparent-bg grid gap-4 grid-cols-3 mt-[3vh] py-2 space-x-7 xl:space-x-14 ml-2 xl:mx-auto xl:grid-cols-5 xl:py-3 xl:w-[90%] xl:rounded-[2vh] xl:border-zinc-950 xl:border-2 2xl:grid-cols-5">
            {/* ...aquí van los logos de tecnologías como ya tienes... */}
          </div>
        </div>
        <br />

        {/* Proyectos */}
        <div
          id="Proyectos"
          className="bg-transparent-bg text-3xl 2xl:text-5xl text-center mt-[5vh] xl:mt-[1vh] xl:mx-auto xl:rounded-[10vh] xl:w-[90%] border-2 border-sky-400 text-sky-400 xl:py-1"
        >
          <h1>PROYECTOS</h1>
        </div>
        <div className="flex flex-col gap-16 items-center mt-8">
          <AltaBurgers />
          <Vorttex />
          <Pokemons />
          <Proyect />
        </div>

        {/* Contacto */}
        <div id="Contactos" className="mt-20">
          <Foter />
        </div>
      </div>
    </div>
  );
}

export default App;