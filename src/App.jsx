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
    <div id="Inicio">
      {windowWidth <= 768 ? <NavMobile /> : <NavBar />}
      <div className="text-white md:-mt-[20vh] ">
        <div className="text-5xl md:mt-[3vh]  ">
          <div className="md:h-[30vh]"></div>

          <img
            className="relative rounded-[50%] w-[50%] h-[50%] mx-auto mt-[5vh] md:mx-[150vh]  md:t-[-45vh] md:w-[20%] md:h-[40vh]"
            src="/damiGalan.jpg"
          />

          {windowWidth <= 768 ? (
            <h2 className="text-center mt-[2vh]">
              Desarrollador <br />
              Full Stack 💻
            </h2>
          ) : (
            <h2 className=" text-6xl md:mt-[-28vh] md:mx-[5%] font-roboto-regular">
              Hola, soy Damian Diaz👋
              <br />
              Desarrolador Full Stack 💻
            </h2>
          )}
        </div>
        <div className="bg-transparent-bg text-xl  mt-[6.5vh]  px-6 rounded-[5vh] h-[35%] w-[43vh] mx-auto md:mt-[30vh] md:mx-[5%] md:px-[80vh] border-2 border-sky-400 pb-4">
          <p className="text-3xl py-4 md:mx-[-78vh] ">Sobre mi:</p>
          <p className="md:mx-[-78vh] font-roboto regular">
            Apasionado desarrollador Full Stack, fascinado por la creatividad y
            la eficiencia en cada proyecto.
          </p>
          <p className="md:mx-[-78vh] ">
            Mi enfoque va más allá del código, construyo experiencias que
            inspiran y resuelven problemas de manera efectiva.
          </p>
        </div>
        <br />
        <div>
          <h2 className="text-3xl bg-transparent-bg text-center  mt-[15vh] md:mx-auto md:rounded-[10vh] md:w-[90%] border-2 border-sky-400  text-sky-400 md:py-1">
            TECNOLOGIAS
          </h2>
          <div className="bg-transparent-bg  grid gap-4 grid-cols-4 mt-[3vh] py-2 space-x-7 md:space-x-14 ml-2 md:mx-auto md:grid-cols-6 md:py-3 md:w-[90%] md:rounded-[2vh] md:border-zinc-950 md:border-2">
            <a
              href="https://expressjs.com"
              target="_blank"
              rel="noreferrer"
              className="mx-auto md:px-[6vh] md:mx-5"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                alt="express"
                width="40"
                height="40"
                className="dark-icon"
              />{" "}
            </a>{" "}
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                alt="nextjs"
                width="40"
                height="40"
                className="dark-icon"
              />{" "}
            </a>{" "}
            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a
              href="https://www.postgresql.org"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                alt="postgresql"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://postman.com" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                alt="postman"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://reactnative.dev/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://reactnative.dev/img/header_logo.svg"
                alt="reactnative"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://redux.js.org" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                alt="redux"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="tailwind"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
          </div>
        </div>
        <br />
        <div
          id="Proyectos"
          className="bg-transparent-bg  text-3xl text-center  mt-[5vh] md:mt-[1vh] md:mx-auto md:rounded-[10vh] md:w-[90%] border-2 border-sky-400  text-sky-400 md:py-1"
        >
          <h1>PROYECTOS</h1>
        </div>
        <AltaBurgers />
        <Vorttex />
        <Pokemons />
        <Proyect />
        <div id="Contactos">
          <Foter />
        </div>
      </div>
    </div>
  );
}

export default App;
