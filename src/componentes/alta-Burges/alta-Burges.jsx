import burge from "./altaBurge.png";
import { useState } from "react";

const AltaBurgers = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="relative w-full h-full p-4 flex flex-col md:flex-row items-center justify-center">
      {/* Contenedor Principal con efecto hover */}
      <div 
        className={`relative overflow-hidden rounded-2xl transition-all duration-500 w-full h-full ${
          isHovered ? 'shadow-lg shadow-orange-500/20' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-700/20 z-0"></div>
        
        {/* Contenido */}
        <div className="relative z-10 flex flex-col md:flex-row h-full w-full p-4 md:p-6">
          {/* Lado izquierdo - Texto */}
          <div className="md:w-1/2 space-y-3 md:pr-4">
            {/* Badge tipo */}
            <div className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-medium tracking-wider">
              E-COMMERCE PROJECT
            </div>
            
            {/* Título con gradiente */}
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
              Alta Burger
            </h2>
            
            {/* Descripción concisa */}
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Trabajé en el desarrollo de un e-commerce dedicado a la venta de
              comida, una aplicación completa utilizada para gestionar el negocio
              local, incluyendo el control de stock, ventas e ingresos.
            </p>
            
            {/* Características en formato punto */}
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-orange-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm">Integración con MercadoPago</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-orange-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm">Panel de administrador y gestión de stock</span>
              </li>
            </ul>
            
            {/* Tecnologías */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs px-2 py-1 rounded-full bg-[#0f0f0f] text-orange-400 border border-orange-400/20">React</span>
              <span className="text-xs px-2 py-1 rounded-full bg-[#0f0f0f] text-orange-400 border border-orange-400/20">Node.js</span>
              <span className="text-xs px-2 py-1 rounded-full bg-[#0f0f0f] text-orange-400 border border-orange-400/20">Express</span>
            </div>
            
            {/* Botón de visita */}
            {/* <div className="pt-2">
              <a 
                href="https://altaburger.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-orange-500/90 to-orange-600/90 text-black font-medium transition-all hover:from-orange-500 hover:to-orange-600"
              >
                <span>Ir al sitio</span>
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div> */}
          </div>
          
          {/* Lado derecho - Imagen */}
          <div className="md:w-1/2 flex items-center justify-center mt-4 md:mt-0">
            <img
              src={burge}
              alt="Alta Burger"
              className="w-full max-w-[250px] md:max-w-[280px] rounded-lg object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AltaBurgers;
