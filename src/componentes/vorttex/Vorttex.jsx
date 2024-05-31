import vorttex00 from "./vorttex00.jpg";
import { Button } from "@nextui-org/react";

const Vorttex = () => {
  return (
    <>
      <div className="bg-transparent-bg px-6 mt-20  rounded-[5vh] h-[40%] w-[43vh] pb-4 mx-auto md:ml-[5%] md:w-[80vh] md:h-[65vh] md:mt-[20vh] border-zinc-950 border-2">
        <h2 className="text-3xl py-4 md:text-4xl">Vorttex Gaming</h2>
        <p className="text-xl mt-2 md:text-2xl">
          Vorttex Gaming es más que un e-Commerce de claves de videojuegos, es
          un proyecto integral destacado por su eficiencia, versatilidad y
          atención al cliente. En solo 1 mes, nuestro equipo desarrolló una
          plataforma con un sofisticado panel de administrador para controlar
          usuarios y monitorear el stock en tiempo real. La edición y
          actualización son fáciles, brindando flexibilidad al equipo
        </p>
      </div>
      <div className="px-6 mt-[1vh] md:ml-[5%]">
        <a href="https://pf-final-damian-projects.vercel.app/" target="_BLANK">
          <Button
            className="bg-[#001625] border-zinc-500 border hover:bg-[#035f9c] py-1 px-1 rounded-lg text-white"
            variant="faded"
          >
            Ir al sitio
          </Button>
        </a>
      </div>
      <img
        src={vorttex00}
        className="mt-[5vh] w-[43vh] mx-auto md:w-[50%] md:mr-[2%] md:-mt-[65vh]"
      />
    </>
  );
};
export default Vorttex;
