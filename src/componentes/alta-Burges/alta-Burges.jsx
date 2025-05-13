// src/componentes/alta-Burges/alta-Burges.jsx
import { Button } from "@nextui-org/react";
import burge from "./altaBurge.png";

const AltaBurgers = () => {
  return (
    <>
      <div className="bg-transparent-bg px-6 mt-10 rounded-[5vh] h-[40%] pb-4 w-[43vh] mx-auto xl:mt-[15vh] xl:w-[80vh] xl:h-[70vh] xl:mr-[2%] border-zinc-950 border-2 2xl:h-[73vh] 2xl:w-[90vh] glass-card">
        <h1 className="text-3xl py-4 xl:text-4xl 2xl:text-5xl 2xl:mt-2">Alta Burger</h1>
        <h2 className="text-xl mt-2 xl:text-2xl 2xl:text-3xl">
          Trabajé en el desarrollo de un e-commerce dedicado a la venta de
          comida, una aplicación completa utilizada para gestionar el negocio
          local. <br />
          Incluyendo el control de stock, ventas e ingresos. <br />
          El proyecto incluyó una base de datos personalizada, autenticación de terceros,
          integración con MercadoPago, un panel de administrador y funciones de
          gestión de stock.
        </h2>
      </div>
      <div className="px-6 mt-[1vh] xl:ml-[60%] 2xl:ml-[52%]">
        <a href="https://altaburger.vercel.app/" target="_BLANK" rel="noopener noreferrer">
          <Button
            className="bg-[#001625] border-zinc-500 border hover:bg-[#035f9c] py-1 px-1 rounded-lg text-white 2xl:text-2xl 2xl:px-5 2xl:py-2 2xl:ml-4 2xl:mt-2"
            variant="faded"
          >
            Ir al sitio
          </Button>
        </a>
      </div>
      <img
        src={burge}
        className="mt-[5vh] w-[43vh] mx-auto xl:w-[40%] xl:ml-[5%] xl:-mt-[70vh] 2xl:-mt-[75vh] 2xl:rounded-xl"
        alt="Alta Burgers"
      />
    </>
  );
};

export default AltaBurgers;