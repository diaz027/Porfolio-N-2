import rick2 from "./rick2.png";

const Proyect = () => {
  return (
    <>
      <div className="bg-transparent-bg px-6 mt-20 rounded-[5vh] h-[40%] w-[43vh] mx-auto xl:mt-[20vh] xl:ml-[5%] xl:w-[80vh] xl:h-[60vh] border-zinc-950 border-2 2xl:h-[40vh]">
        <div className="text-3xl py-4 xl:text-4xl 2xl:text-5xl">
          <h1> Rick and morty</h1>
          <p className="text-xl mt-2 xl:mt-4 xl:text-2xl 2xl:text-3xl">
            Esta app marcó mi inicio en programación, brindándome práctica
            inicial en codificación. Con una API pública, rendericé 800+
            personajes de Rick & Morty, exploré, filtré y fortalecí habilidades
            con Redux al enfrentar desafíos en servidor y cliente. Fundamental
            para entender programación y desarrollo de apps interactivas.
          </p>
        </div>
      </div>
      <img
        src={rick2}
        className="mt-[5vh] w-[43vh] mx-auto xl:mx-[48%] xl:-mt-[55vh] xl:w-[50%] 2xl:w-[45%] 2xl:-mt-[40vh] 2xl:mx-[53%]"
      />
    </>
  );
};
export default Proyect;
