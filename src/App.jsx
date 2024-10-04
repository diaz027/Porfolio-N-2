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
    <div id="Inicio" className="select-none">
      {windowWidth <= 768 ? <NavMobile /> : <NavBar />}
      <div className="text-white xl:-mt-[20vh] ">
        <div className="text-5xl xl:mt-[3vh]  ">
          <div className="xl:h-[30vh]"></div>

          <img
            className="relative select-none rounded-[50%] w-[50%] h-[50%] mx-auto mt-[5vh] xl:mx-[150vh]  xl:t-[-45vh] xl:w-[20%] xl:h-[40vh] 2xl:ml-[140vh]"
            src="/damiGalan.jpg"
          />

          {windowWidth <= 768 ? (
            <h2 className="text-center mt-[2vh]">
              Desarrollador <br />
              Full Stack 💻
            </h2>
          ) : (
            <h2 className=" select-none tracking-tight text-6xl xl:mt-[-28vh] xl:mx-[5%] font-roboto-regular 2xl:text-7xl">
              Hola, soy Damian Diaz👋
              <br />
              Desarrollador Full Stack 💻
            </h2>
          )}
        </div>
        <div className="bg-transparent-bg  text-xl  mt-[6.5vh]  px-6 rounded-[5vh] h-[35%] w-[43vh] mx-auto xl:mt-[30vh] xl:mx-[5%] xl:px-[80vh] border-2 border-sky-400 pb-4 2xl:text-3xl">
          <p className="text-3xl py-4 xl:mx-[-78vh] 2xl:text-5xl">Sobre mi:</p>
          <p className="xl:mx-[-78vh] font-roboto-flex">
            Soy un desarrollador Full Stack con un año de experiencia, apasionado por la tecnología y el enorme potencial que tiene para transformar ideas en realidades digitales 🌍. <br />
            Para mí, programar no es solo tirar líneas de código, sino que es crear experiencias que resuelven problemas concretos y generan conexiones reales con las personas 💡.
          </p>
          <p className="xl:mx-[-78vh] mb-5">
            Me encanta enfrentar todos los desafíos que se presenten, porque lo veo como una oportunidad para seguir aprendiendo y mejorar en el ambito del desarrollo 💻.
          </p>
        </div>
        <br />
        <div>
          <h2 className="text-3xl 2xl:text-5xl bg-transparent-bg text-center  mt-[15vh] xl:mx-auto xl:rounded-[10vh] xl:w-[90%] border-2 border-sky-400  text-sky-400 xl:py-1">
            TECNOLOGIAS
          </h2>
          <div className="bg-transparent-bg  grid gap-4 grid-cols-3 mt-[3vh] py-2 space-x-7 xl:space-x-14 ml-2 xl:mx-auto xl:grid-cols-5 xl:py-3 xl:w-[90%] xl:rounded-[2vh] xl:border-zinc-950 xl:border-2 2xl:grid-cols-5">
            <a
              href="https://expressjs.com"
              target="_blank"
              rel="noreferrer"
              className="mx-7 xl:px-[6vh] xl:mx-5 2xl:mx-2.5"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                alt="express"
                width="40"
                height="40"
                className="dark-icon 2xl:w-[60px] 2xl:h-[60px]"
              />{" "}
            </a>{" "}
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5"
                width="40"
                height="40"
                className="2xl:w-[60px] 2xl:h-[60px]"
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
                className="2xl:w-[60px] 2xl:h-[60px]"
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
                className="2xl:w-[60px] 2xl:h-[60px]"
              />{" "}
            </a>{" "}
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                alt="nextjs"
                width="40"
                height="40"
                className="dark-icon 2xl:w-[60px] 2xl:h-[60px]"
              />{" "}
            </a>{" "}
            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                width="40"
                height="40"
                className="2xl:w-[60px] 2xl:h-[60px]"
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
                className="2xl:w-[60px] 2xl:h-[60px]"
              />{" "}
            </a>{" "}
            <a href="https://postman.com" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                alt="postman"
                width="40"
                height="40"
                className="2xl:w-[60px] 2xl:h-[60px]"
              />{" "}
            </a>{" "}
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
                width="40"
                height="40"
                className="2xl:w-[60px] 2xl:h-[60px]"
              />{" "}
            </a>{" "}
            <a href="https://reactnative.dev/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://reactnative.dev/img/header_logo.svg"
                alt="reactnative"
                width="40"
                height="40"
                className="2xl:w-[60px] 2xl:h-[60px]"
              />{" "}
            </a>{" "}
            <a href="https://redux.js.org" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                alt="redux"
                width="40"
                height="40"
                className="2xl:w-[60px] 2xl:h-[60px]"
              />{" "}
            </a>{" "}
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="tailwind"
                width="40"
                height="40"
                className="2xl:w-[60px] 2xl:h-[60px]"
              />{" "}
            </a>{" "}
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" className="dark-icon 2xl:w-[60px] 2xl:h-[60px]">
                <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect>
                <polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"></polygon>
                <path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"></path>
              </svg>
            </a>

          </div>
        </div>
        <br />
        <div
          id="Proyectos"
          className="bg-transparent-bg  text-3xl 2xl:text-5xl text-center  mt-[5vh] xl:mt-[1vh] xl:mx-auto xl:rounded-[10vh] xl:w-[90%] border-2 border-sky-400  text-sky-400 xl:py-1"
        >
          <h1>PROYECTOS</h1>
        </div>
        <AltaBurgers />
        <Vorttex />
        {/* <Pokemons />
        <Proyect /> */}
        <div id="Contactos">
          <Foter />
        </div>
      </div>
    </div>
  );
}

export default App;
