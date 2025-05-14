import rick2 from "./rick2.png";
import { useState } from "react";

const Proyect = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="relative w-full h-full p-4 flex flex-col md:flex-row items-center justify-center">
      {/* Contenedor Principal con efecto hover */}
      <div 
        className={`relative overflow-hidden rounded-2xl transition-all duration-500 w-full h-full ${
          isHovered ? 'shadow-lg shadow-green-500/20' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-teal-700/20 z-0"></div>
        
        {/* Contenido */}
        <div className="relative z-10 flex flex-col md:flex-row h-full w-full p-4 md:p-6">
          {/* Lado izquierdo - Texto */}
          <div className="md:w-1/2 space-y-3 md:pr-4">
            {/* Badge tipo */}
            <div className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-medium tracking-wider">
              API PROJECT
            </div>
            
            {/* Título con gradiente */}
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">
              Rick and Morty
            </h2>
            
            {/* Descripción concisa */}
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Esta app marcó mi inicio en programación, brindándome práctica
              inicial en codificación. Con una API pública, rendericé 800+
              personajes de Rick & Morty, exploré, filtré y fortalecí habilidades
              con Redux.
            </p>
            
            {/* Tecnologías */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs px-2 py-1 rounded-full bg-[#0f0f0f] text-green-400 border border-green-400/20">React</span>
              <span className="text-xs px-2 py-1 rounded-full bg-[#0f0f0f] text-green-400 border border-green-400/20">Redux</span>
              <span className="text-xs px-2 py-1 rounded-full bg-[#0f0f0f] text-green-400 border border-green-400/20">API</span>
            </div>
          </div>
          
          {/* Lado derecho - Imagen */}
          <div className="md:w-1/2 flex items-center justify-center mt-4 md:mt-0">
            <img
              src={rick2}
              alt="Rick and Morty App"
              className="w-full max-w-[250px] md:max-w-[280px] rounded-lg object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyect;
