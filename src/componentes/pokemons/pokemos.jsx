import PokemonsCap2 from "./pokemonsCap2.png";

const Pokemons = () => {
  return (
    <>
      <div className="bg-transparent-bg px-6 mt-20 rounded-[5vh] h-[40%] pb-4 w-[43vh] mx-auto md:mt-[20vh]  md:w-[80vh] md:h-[60vh] md:mr-[2%] border-zinc-950 border-2">
        <h2 className="text-3xl py-4 md:text-4xl"> Pokemons app</h2>
        <p className="text-xl mt-2 md:text-2xl">
          Esta fue mi primera aplicación full-stack que logré desarrollar de
          manera independiente. Renderiza datos de Pokémon desde una API pública
          y ofrece diversas funcionalidades, como filtros, órdenes, y más, para
          buscar Pokémon específicos o de un mismo tipo. Además, incluye un
          juego interactivo donde los Pokémon pueden enfrentarse en peleas
        </p>
      </div>
      <img
        src={PokemonsCap2}
        className="mt-[5vh]  w-[43vh] mx-auto md:w-[50%] md:ml-[5%] md:-mt-[55vh]"
      />
    </>
  );
};
export default Pokemons;
