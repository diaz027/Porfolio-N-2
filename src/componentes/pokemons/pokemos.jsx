import PokemonsCap2 from "./pokemonsCap2.png";

const Pokemons = () => {
  return (
    <>
      <div className="bg-transparent-bg px-6 mt-20 rounded-[5vh] h-[40%] pb-4 w-[43vh] mx-auto xl:mt-[20vh]  xl:w-[80vh] xl:h-[60vh] xl:mr-[2%] border-zinc-950 border-2 2xl:h-[40vh]">
        <h2 className="text-3xl py-4 xl:text-4xl 2xl:text-5xl"> Pokemons app</h2>
        <p className="text-xl mt-2 xl:text-2xl 2xl:text-3xl">
          Esta fue mi primera aplicación full-stack que logré desarrollar de
          manera independiente. Renderiza datos de Pokémon desde una API pública
          y ofrece diversas funcionalidades, como filtros, órdenes, y más, para
          buscar Pokémon específicos o de un mismo tipo. Además, incluye un
          juego interactivo donde los Pokémon pueden enfrentarse en peleas
        </p>
      </div>
      <img
        src={PokemonsCap2}
        className="mt-[5vh]  w-[43vh] mx-auto xl:w-[50%] xl:ml-[5%] xl:-mt-[55vh] 2xl:w-[45%] 2xl:-mt-[40vh]"
      />
    </>
  );
};
export default Pokemons;
