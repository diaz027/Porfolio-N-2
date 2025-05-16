import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import "./App.css";
import Carrusel1 from "./componentes/Carrusel/Carousel"
import Carrusel2 from "./componentes/Carrusel/Carousel2"
import Carrusel3 from "./componentes/Carrusel/Carousel3"
import Footer2 from "./componentes/foter/footer2";
import Contactos2 from "./componentes/FormularioContactos/Contactos2";
import Burgers2 from "./componentes/alta-Burges/alta-burges2";
import VorttexGamming from "./componentes/vorttex/Vorttex2";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  // Efecto para el cursor personalizado
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Simular carga de página
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Detectar scroll para mostrar/ocultar el botón de subir
  useEffect(() => {
    // Configurar el desplazamiento suave para toda la página
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen bg-[#0f0f0f] flex items-center justify-center">
        <div className="loader">
          <span className="text-4xl font-bold text-white">DAMIAN<span className="text-[#64ffda]">.</span></span>
          <span className="loader-inner"></span>
        </div>
      </div>
    );
  }
  return (
    <div className="relative min-h-screen bg-[#0f0f0f] text-white font-sans overflow-hidden">
      {/* Cursor personalizado */}
      <div className="cursor-dot" ref={cursorDotRef}></div>
      <div className="cursor-follow" ref={cursorRef}></div>
      
      {/* Fondo con elementos de diseño */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="gradient-circle-1"></div>
        <div className="gradient-circle-2"></div>
        <div className="gradient-circle-3"></div>
        <div className="noise-overlay"></div>
      </div>
      
      {/* Encabezado simple */}
      <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-[#0f0f0f]/80 border-b border-slate-800/50 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">DAMIAN<span className="text-[#64ffda]">.</span></h1>
          <div className="flex space-x-4">
            <a 
              href="/CV-Damian-Diaz.pdf" 
              download
              className="px-5 py-2 text-sm font-medium text-white border border-white/30 rounded-md hover:bg-white/5 transition-colors duration-300 flex items-center"
            >
              <span>Descargar CV</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
            <Link 
              to="CONTACTO" 
              className="px-5 py-2 text-sm font-medium text-[#64ffda] border border-[#64ffda] rounded-md hover:bg-[#64ffda]/10 transition-colors duration-300"
            >
              Contacto
            </Link>
          </div>
        </div>
      </header>
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="INICIO" className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 relative overflow-hidden pt-24">
          {/* Elementos decorativos */}
          <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 blur-3xl"></div>
          
          <div className="absolute -top-24 -right-24 w-96 h-96 opacity-20">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-[#64ffda] fill-current">
              <path d="M37.5,-65.1C50.2,-55.9,63.5,-48.8,72.4,-37.4C81.3,-26,85.9,-10.2,83.2,4.1C80.5,18.4,70.6,31.2,60.3,42.8C50.1,54.5,39.6,65,26.8,71.2C14,77.4,-1.1,79.3,-14.5,75.1C-27.9,70.9,-39.7,60.7,-49.9,49.4C-60.1,38.1,-68.8,25.8,-72.8,11.5C-76.7,-2.8,-76,-19.1,-69.8,-32.8C-63.6,-46.5,-51.9,-57.7,-38.7,-66.7C-25.5,-75.7,-10.7,-82.5,1.5,-85C13.8,-87.5,27.5,-85.7,37.5,-65.1Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          <div className="absolute -bottom-24 -left-24 w-96 h-96 opacity-20">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-purple-500 fill-current">
              <path d="M45.3,-77.1C58.3,-71.3,68.5,-58.1,76.3,-43.9C84.1,-29.7,89.5,-14.8,88.8,-0.4C88.1,14.1,81.3,28.2,72.9,41.1C64.4,54,54.2,65.8,41.6,73.1C28.9,80.4,14.5,83.2,-0.3,83.7C-15,84.2,-30.1,82.3,-41.4,74.3C-52.7,66.3,-60.3,52.1,-67.8,38.1C-75.3,24.1,-82.8,10.1,-83.2,-4.3C-83.6,-18.7,-76.9,-33.3,-67.3,-44.8C-57.7,-56.3,-45.1,-64.7,-32.2,-70.6C-19.3,-76.5,-6.4,-80,6.4,-80.1C19.3,-80.2,38.5,-76.9,45.3,-77.1Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                <div className="overflow-hidden mb-4">
                  <h2 className="text-[#64ffda] font-mono text-lg md:text-xl animate-fadeIn tracking-widest">HOLA, SOY</h2>
                </div>
                <div className="overflow-hidden">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slideUp tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                    DAMIAN DIAZ
                  </h1>
                </div>
                <div className="overflow-hidden max-w-2xl">
                  <h3 className="text-2xl md:text-3xl text-gray-300 mb-8 animate-slideUp animation-delay-200 font-light">
                    <span className="text-[#64ffda]">&lt;</span> Full Stack Developer <span className="text-[#64ffda]">/&gt;</span>
                  </h3>
                </div>
                <div className="overflow-hidden max-w-2xl">
                  <p className="text-gray-400 mb-12 animate-slideUp animation-delay-300 text-lg leading-relaxed">
                    Transformando ideas en experiencias digitales excepcionales. Especializado en crear aplicaciones web modernas y responsivas 
                    con React, Node.js y otras tecnologías de vanguardia.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-6 animate-fadeIn animation-delay-500">
                  <Link to='PROYECTOS'
                    className="group relative px-8 py-4 overflow-hidden font-mono font-medium text-[#64ffda] border border-[#64ffda] rounded-md hover:text-black transition-colors duration-300 shadow-lg shadow-[#64ffda]/10"
                  >
                    <span className="absolute inset-0 w-full h-full bg-[#64ffda] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    <span className="relative group-hover:text-black flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      Ver Proyectos
                    </span>
                  </Link>
                  <Link to="CONTACTO" 
                    className="group relative px-8 py-4 overflow-hidden font-mono font-medium bg-white/5 backdrop-blur-sm text-white border border-white/20 rounded-md hover:text-black transition-colors duration-300 shadow-lg"
                   > 
                    <span className="absolute inset-0 w-full h-full bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    <span className="relative group-hover:text-black flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Contacto
                    </span>
                  </Link>
                </div>
                
                <div className="mt-16 flex items-center space-x-6 text-gray-400">
                  <a href="https://github.com/diaz027" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/damian-diaz-6a7537258/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="lg:col-span-2 hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#64ffda]/20 to-purple-500/20 blur-xl"></div>
                  <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm bg-black/30 p-1">
                    <img
                      src="/damiGalan.jpg"
                      alt="Damian Diaz"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 rounded-xl border-2 border-[#64ffda]/20 opacity-50"></div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-tr from-[#64ffda] to-blue-500 rounded-full blur-2xl opacity-40"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-[#64ffda]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </section>
        {/* Tecnologías Section */}
        <section id="TECNOLOGIAS" className="py-32 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#080808] to-[#050505] relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#64ffda]/20 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#64ffda]/20 to-transparent"></div>
          
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#64ffda]/5 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <span className="text-[#64ffda] font-mono text-lg inline-block mb-3 tracking-wider">MIS HABILIDADES</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">Tecnologías & Herramientas</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#64ffda] to-purple-500 mx-auto mt-6 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {/* Frontend */}
              <div className="col-span-full mb-12">
                <h3 className="text-xl text-white font-semibold mb-6 flex items-center">
                  <span className="text-[#64ffda] mr-2">01.</span> Frontend
                  <div className="h-px bg-gradient-to-r from-[#64ffda]/50 to-transparent flex-grow ml-4"></div>
                </h3>
                
                
              <Carrusel1 />
              </div> 
              
              {/* Frameworks & Libraries */}
              <div className="col-span-full mb-12">
                <h3 className="text-xl text-white font-semibold mb-6 flex items-center">
                  <span className="text-[#64ffda] mr-2">02.</span> Frameworks & Libraries
                  <div className="h-px bg-gradient-to-r from-[#64ffda]/50 to-transparent flex-grow ml-4"></div>
                </h3>
                
                
                <Carrusel2 />
              </div>
              
              {/* Backend */}
              <div className="col-span-full">
                <h3 className="text-xl text-white font-semibold mb-6 flex items-center">
                  <span className="text-[#64ffda] mr-2">03.</span> Backend
                  <div className="h-px bg-gradient-to-r from-[#64ffda]/50 to-transparent flex-grow ml-4"></div>
                </h3>
                <Carrusel3 />
              </div>
            </div>
            
            <div className="mt-20 text-center">
              <Link to='PROYECTOS' className="inline-flex items-center text-[#64ffda] hover:text-white transition-colors duration-300">
                <span>Ver mis proyectos</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        {/* Proyectos Section */}
        <section id="PROYECTOS" className="py-32 px-6 md:px-16 lg:px-24 relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#64ffda]/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#64ffda]/20 to-transparent"></div>
          
          <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-[#64ffda]/5 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-500/5 blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <span className="text-[#64ffda] font-mono text-lg inline-block mb-3 tracking-wider">MI TRABAJO</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">Proyectos Destacados</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#64ffda] to-purple-500 mx-auto mt-6 rounded-full"></div>
              <p className="text-gray-400 max-w-2xl mx-auto mt-6">
                Una selección de mis trabajos recientes en desarrollo web, mostrando mis habilidades
                en React, Node.js y otras tecnologías.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              {/* Proyecto 3 - Alta Burgers */}
              < Burgers2 />
              {/* Proyecto 4 - Vorttex */}
              <VorttexGamming />
            </div>
            
            <div className="mt-20 text-center">
              <div id="CONTACTO" className="inline-flex items-center text-[#64ffda] hover:text-white transition-colors duration-300">
                <span>¿Interesado en trabajar juntos?</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contacto Section */}
        <Contactos2 />
      </main>
      
      {/* Footer */}
      <Footer2 />
      {/* Botón para subir */}
      {showScrollTop && (
        <Link to='INICIO'
          className="scroll-top-button fixed bottom-6 right-6 flex items-center justify-center w-8 h-14 bg-black/80 border-l border-[#64ffda]/10 rounded-r-md z-50 hover:border-l-[#64ffda]/30 transition-all duration-500 group"
          aria-label="Volver arriba"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#64ffda]/70 group-hover:text-[#64ffda] transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </Link>
      )}
    </div>
  );
}

export default App;
