import rick2 from "./rick2.png";

const Proyect = () => {
  return (
    <>
      <div className="bg-transparent-bg px-6 mt-20 rounded-[5vh] h-[40%] w-[43vh] mx-auto md:mt-[20vh] md:ml-[5%] md:w-[80vh] md:h-[60vh] border-zinc-950 border-2">
        <div className="text-3xl py-4 md:text-4xl">
          <h1> Rick and morty</h1>
          <p className="text-xl mt-2 md:mt-4 md:text-2xl">
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
        className="mt-[5vh] w-[43vh] mx-auto md:mx-[48%] md:-mt-[55vh] md:w-[50%]"
      />
    </>
  );
};
export default Proyect;
