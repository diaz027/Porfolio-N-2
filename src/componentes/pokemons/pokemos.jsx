import poke from "./poke.png";

const Pokemons = () => {
  return (
    <>
      <div className="bg-transparent-bg glass-card px-6 mt-10 rounded-[5vh] h-[40%] pb-4 w-[43vh] mx-auto xl:mt-[15vh] xl:w-[80vh] xl:h-[70vh] xl:mr-[2%] border-zinc-950 border-2 2xl:h-[73vh] 2xl:w-[90vh]">
        <h1 className="text-3xl py-4 xl:text-4xl 2xl:text-5xl 2xl:mt-2">Pokémons</h1>
        <h2 className="text-xl mt-2 xl:text-2xl 2xl:text-3xl">
          Aplicación full-stack para visualizar datos de Pokémon desde una API pública. Permite filtros, órdenes y más, para buscar Pokémon específicos o de un mismo tipo.
        </h2>
      </div>
      <div className="px-6 mt-[1vh] xl:ml-[60%] 2xl:ml-[52%]">
        <a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer">
          <button
            className="bg-[#001625] border-zinc-500 border hover:bg-[#035f9c] py-1 px-4 rounded-lg text-white 2xl:text-2xl 2xl:px-5 2xl:py-2 2xl:ml-4 2xl:mt-2 transition-all"
          >
            Ver Demo
          </button>
        </a>
      </div>
      <img
        src={poke}
        className="mt-[5vh] w-[43vh] mx-auto xl:w-[40%] xl:ml-[5%] xl:-mt-[70vh] 2xl:-mt-[75vh] 2xl:rounded-xl"
        alt="Pokémons"
      />
    </>
  );
};

export default Pokemons;