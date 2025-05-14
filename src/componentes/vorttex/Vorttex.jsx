import vorttex00 from "./vorttex00.jpg";
import { Button } from "@nextui-org/react";

const Vorttex = () => {
  return (
    <>
      <div className="bg-transparent-bg px-6 mt-20  rounded-[5vh] h-[40%] w-[43vh] pb-4 mx-auto xl:ml-[5%] xl:w-[80vh] xl:h-[65vh] xl:mt-[20vh] border-zinc-950 border-2 2xl:h-[50vh] 2xl:w-[87vh]">
        <h2 className="text-3xl py-4 xl:text-4xl 2xl:text-5xl">Vorttex Gaming</h2>
        <p className="text-xl mt-2 xl:text-2xl 2xl:text-3xl">
          Vorttex Gaming es más que un e-Commerce de claves de videojuegos, es
          un proyecto integral destacado por su eficiencia, versatilidad y
          atención al cliente. <br />
          En solo 1 mes, nuestro equipo desarrolló una
          plataforma con un sofisticado panel de administrador para controlar
          usuarios y monitorear el stock en tiempo real. La edición y
          actualización son fáciles, brindando flexibilidad al equipo
        </p>
      </div>
      {/* <div className="px-6 mt-[1vh] xl:ml-[5%]">
        <a href="https://pf-final-damian-projects.vercel.app/" target="_BLANK">
          <Button
            className="bg-[#001625] border-zinc-500 border hover:bg-[#035f9c] py-1 px-1 rounded-lg text-white 2xl:text-2xl 2xl:px-5 2xl:py-2 2xl:mt-2"
            variant="faded"
          >
            Ir al sitio
          </Button>
        </a>
      </div> */}
      <img
        src={vorttex00}
        className="mt-[5vh] w-[43vh] mx-auto xl:w-[50%] xl:mr-[2%] xl:-mt-[65vh] 2xl:-mt-[48vh] 2xl:w-[43%]"
      />
    </>
  );
};
export default Vorttex;
