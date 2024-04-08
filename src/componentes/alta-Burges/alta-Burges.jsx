import { Button } from "@nextui-org/react";
import burge from "./altaBurge.png";

const AltaBurgers = () => {
  return (
    <>
      <div className="bg-transparent-bg px-6 mt-10   rounded-[5vh] h-[40%] pb-4 w-[43vh] mx-auto md:mt-[15vh]  md:w-[80vh] md:h-[70vh] md:mr-[2%] border-zinc-950 border-2">
        <h1 className="text-3xl py-4 md:text-4xl">Alta Burger</h1>
        <h2 className="text-xl mt-2 md:text-2xl">
          Trabajé en el desarrollo de un e-commerce dedicado a la venta de
          comida, una aplicación completa utilizada para gestionar el negocio
          local, incluyendo el control de stock, ventas e ingresos. El proyecto
          incluyó una base de datos personalizada, autenticación de terceros,
          integración con MercadoPago, un panel de administrador y funciones de
          gestión de stock.
        </h2>
      </div>
      <div className="px-6 mt-[1vh] md:ml-[60%]">
        <Button
          className="bg-[#001625] border-zinc-500 border hover:bg-[#035f9c] py-1 px-1 rounded-lg text-white"
          variant="faded"
        >
          <a href="https://altaburger.vercel.app/">Ir al sitio</a>
        </Button>
      </div>
      <img
        src={burge}
        className="mt-[5vh] w-[43vh] mx-auto md:w-[40%] md:ml-[5%] md:-mt-[70vh]"
      />
    </>
  );
};
export default AltaBurgers;
