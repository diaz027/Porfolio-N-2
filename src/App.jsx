import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Proyect from "./componentes/rick-and-morty/rick";
import Pokemons from "./componentes/pokemons/pokemos";
import Vorttex from "./componentes/vorttex/Vorttex";
import AltaBurgers from "./componentes/alta-Burges/alta-Burges";
import Foter from "./componentes/foter/Contacto";

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
            <a 
              href="#contacto" 
              className="px-5 py-2 text-sm font-medium text-[#64ffda] border border-[#64ffda] rounded-md hover:bg-[#64ffda]/10 transition-colors duration-300"
            >
              Contacto
            </a>
          </div>
        </div>
      </header>
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="inicio" className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 relative overflow-hidden pt-24">
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
                  <a 
                    href="#proyectos" 
                    className="group relative px-8 py-4 overflow-hidden font-mono font-medium text-[#64ffda] border border-[#64ffda] rounded-md hover:text-black transition-colors duration-300 shadow-lg shadow-[#64ffda]/10"
                  >
                    <span className="absolute inset-0 w-full h-full bg-[#64ffda] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    <span className="relative group-hover:text-black flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      Ver Proyectos
                    </span>
                  </a>
                  <a 
                    href="#contacto" 
                    className="group relative px-8 py-4 overflow-hidden font-mono font-medium bg-white/5 backdrop-blur-sm text-white border border-white/20 rounded-md hover:text-black transition-colors duration-300 shadow-lg"
                  >
                    <span className="absolute inset-0 w-full h-full bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    <span className="relative group-hover:text-black flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Contacto
                    </span>
                  </a>
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
        <section id="tecnologias" className="py-32 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#080808] to-[#050505] relative overflow-hidden">
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
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="group">
                    <div className="flex flex-col items-center p-6 rounded-xl bg-[#0a0a0a] border border-gray-800/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#64ffda]/5 hover:border-[#64ffda]/30">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#64ffda]/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" className="w-16 h-16 mb-4 relative z-10" />
                      </div>
                      <span className="text-gray-300 group-hover:text-[#64ffda] transition-colors duration-300 font-medium">HTML5</span>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex flex-col items-center p-6 rounded-xl bg-[#0a0a0a] border border-gray-800/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#64ffda]/5 hover:border-[#64ffda]/30">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#64ffda]/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" className="w-16 h-16 mb-4 relative z-10" />
                      </div>
                      <span className="text-gray-300 group-hover:text-[#64ffda] transition-colors duration-300 font-medium">CSS3</span>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex flex-col items-center p-6 rounded-xl bg-[#0a0a0a] border border-gray-800/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#64ffda]/5 hover:border-[#64ffda]/30">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#64ffda]/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" className="w-16 h-16 mb-4 relative z-10" />
                      </div>
                      <span className="text-gray-300 group-hover:text-[#64ffda] transition-colors duration-300 font-medium">JavaScript</span>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex flex-col items-center p-6 rounded-xl bg-[#0a0a0a] border border-gray-800/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#64ffda]/5 hover:border-[#64ffda]/30">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#64ffda]/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" className="w-16 h-16 mb-4 relative z-10" />
                      </div>
                      <span className="text-gray-300 group-hover:text-[#64ffda] transition-colors duration-300 font-medium">Tailwind CSS</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Frameworks & Libraries */}
              <div className="col-span-full mb-12">
                <h3 className="text-xl text-white font-semibold mb-6 flex items-center">
                  <span className="text-[#64ffda] mr-2">02.</span> Frameworks & Libraries
                  <div className="h-px bg-gradient-to-r from-[#64ffda]/50 to-transparent flex-grow ml-4"></div>
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="group">
                    <div className="flex flex-col items-center p-6 rounded-xl bg-[#0a0a0a] border border-gray-800/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#64ffda]/5 hover:border-[#64ffda]/30">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#64ffda]/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" className="w-16 h-16 mb-4 relative z-10" />
                      </div>
                      <span className="text-gray-300 group-hover:text-[#64ffda] transition-colors duration-300 font-medium">React</span>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex flex-col items-center p-6 rounded-xl bg-[#0a0a0a] border border-gray-800/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#64ffda]/5 hover:border-[#64ffda]/30">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#64ffda]/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" className="w-16 h-16 mb-4 relative z-10" />
                      </div>
                      <span className="text-gray-300 group-hover:text-[#64ffda] transition-colors duration-300 font-medium">Redux</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Backend */}
              <div className="col-span-full">
                <h3 className="text-xl text-white font-semibold mb-6 flex items-center">
                  <span className="text-[#64ffda] mr-2">03.</span> Backend
                  <div className="h-px bg-gradient-to-r from-[#64ffda]/50 to-transparent flex-grow ml-4"></div>
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="group">
                    <div className="flex flex-col items-center p-6 rounded-xl bg-[#0a0a0a] border border-gray-800/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#64ffda]/5 hover:border-[#64ffda]/30">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#64ffda]/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" className="w-16 h-16 mb-4 relative z-10 dark-icon" />
                      </div>
                      <span className="text-gray-300 group-hover:text-[#64ffda] transition-colors duration-300 font-medium">Node.js</span>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex flex-col items-center p-6 rounded-xl bg-[#0a0a0a] border border-gray-800/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#64ffda]/5 hover:border-[#64ffda]/30">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#64ffda]/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" className="w-16 h-16 mb-4 relative z-10 dark-icon" />
                      </div>
                      <span className="text-gray-300 group-hover:text-[#64ffda] transition-colors duration-300 font-medium">Express</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-20 text-center">
              <a href="#proyectos" className="inline-flex items-center text-[#64ffda] hover:text-white transition-colors duration-300">
                <span>Ver mis proyectos</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
        {/* Proyectos Section */}
        <section id="proyectos" className="py-32 px-6 md:px-16 lg:px-24 relative overflow-hidden">
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
              {/* Proyecto 1 - Rick and Morty */}
              <div className="group">
                <div className="relative overflow-hidden rounded-xl border border-gray-800/50 bg-[#0a0a0a] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#64ffda]/10 hover:border-[#64ffda]/30 h-[500px] md:h-[550px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="project-container w-full h-full flex items-center justify-center">
                      <Proyect />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#64ffda] transition-colors duration-300">Rick and Morty App</h3>
                  <p className="text-gray-400 mt-2">Aplicación web interactiva que utiliza la API de Rick and Morty para mostrar información detallada sobre personajes.</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs px-2 py-1 rounded-full bg-[#0f0f0f] text-[#64ffda] border border-[#64ffda]/20">React</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-[#0f0f0f] text-[#64ffda] border border-[#64ffda]/20">API</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-[#0f0f0f] text-[#64ffda] border border-[#64ffda]/20">Tailwind CSS</span>
                  </div>
                </div>
              </div>
              
              {/* Proyecto 2 - Pokémon */}
              <div className="group">
                <div className="relative overflow-hidden rounded-xl border border-gray-800/50 bg-[#0a0a0a] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#64ffda]/10 hover:border-[#64ffda]/30 h-[500px] md:h-[550px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="project-container w-full h-full flex items-center justify-center">
                      <Pokemons />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#64ffda] transition-colors duration-300">Pokémon Explorer</h3>
                  <p className="text-gray-400 mt-2">Aplicación que permite explorar y buscar Pokémon, mostrando sus características, habilidades y estadísticas.</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs px-2 py-1 rounded-full bg-[#0f0f0f] text-[#64ffda] border border-[#64ffda]/20">React</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-[#0f0f0f] text-[#64ffda] border border-[#64ffda]/20">PokéAPI</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-[#0f0f0f] text-[#64ffda] border border-[#64ffda]/20">CSS Modules</span>
                  </div>
                </div>
              </div>
              
              {/* Proyecto 3 - Alta Burgers */}
              <div className="group">
                <div className="relative overflow-hidden rounded-xl border border-gray-800/50 bg-[#0a0a0a] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#64ffda]/10 hover:border-[#64ffda]/30 h-[500px] md:h-[550px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="project-container w-full h-full flex items-center justify-center">
                      <AltaBurgers />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#64ffda] transition-colors duration-300">Alta Burgers</h3>
                  <p className="text-gray-400 mt-2">Sitio web para una hamburgesería gourmet, con menú interactivo, sistema de pedidos y reservas online.</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs px-2 py-1 rounded-full bg-[#0f0f0f] text-[#64ffda] border border-[#64ffda]/20">React</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-[#0f0f0f] text-[#64ffda] border border-[#64ffda]/20">Node.js</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-[#0f0f0f] text-[#64ffda] border border-[#64ffda]/20">Express</span>
                  </div>
                </div>
              </div>
              
              {/* Proyecto 4 - Vorttex */}
              <div className="group">
                <div className="relative overflow-hidden rounded-xl border border-gray-800/50 bg-[#0a0a0a] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#64ffda]/10 hover:border-[#64ffda]/30 h-[500px] md:h-[550px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="project-container w-full h-full flex items-center justify-center">
                      <Vorttex />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#64ffda] transition-colors duration-300">Vorttex</h3>
                  <p className="text-gray-400 mt-2">Plataforma de comercio electrónico con carrito de compras, pasarela de pagos y panel de administración.</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs px-2 py-1 rounded-full bg-[#0f0f0f] text-[#64ffda] border border-[#64ffda]/20">React</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-[#0f0f0f] text-[#64ffda] border border-[#64ffda]/20">Redux</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-[#0f0f0f] text-[#64ffda] border border-[#64ffda]/20">MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-20 text-center">
              <a href="#contacto" className="inline-flex items-center text-[#64ffda] hover:text-white transition-colors duration-300">
                <span>¿Interesado en trabajar juntos?</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
        
        {/* Contacto Section */}
        <section id="contacto" className="py-32 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#050505] to-[#030303] relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#64ffda]/20 to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#64ffda]/5 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <span className="text-[#64ffda] font-mono text-lg inline-block mb-3 tracking-wider">CONTACTO</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">Hablamos?</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#64ffda] to-purple-500 mx-auto mt-6 rounded-full"></div>
              <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                Actualmente estoy disponible para nuevos proyectos y oportunidades. 
                Si tienes alguna pregunta o quieres conectar, no dudes en escribirme.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="relative p-8 rounded-2xl border border-gray-800/50 bg-[#0a0a0a]/80 backdrop-blur-sm shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/5 to-purple-500/5 rounded-2xl"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold text-white mb-6">Contacto Directo</h3>
                    
                    <div className="flex flex-col space-y-6">
                      <a 
                        href="mailto:damidiaz@gmail.com" 
                        className="group flex items-center p-4 rounded-xl border border-gray-800/50 hover:border-[#64ffda]/50 transition-all duration-300 bg-[#050505]/50 hover:bg-[#050505]/80"
                      >
                        <div className="p-3 rounded-full bg-gradient-to-br from-[#64ffda]/20 to-purple-500/20 mr-4 group-hover:from-[#64ffda]/30 group-hover:to-purple-500/30 transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-[#64ffda]" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-gray-300 group-hover:text-[#64ffda] transition-colors duration-300 font-medium">Email</h4>
                          <p className="text-gray-500 text-sm">damidiaz@gmail.com</p>
                        </div>
                      </a>
                      
                      <a 
                        href="https://www.linkedin.com/in/damian-diaz-6a7537258/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center p-4 rounded-xl border border-gray-800/50 hover:border-[#64ffda]/50 transition-all duration-300 bg-[#050505]/50 hover:bg-[#050505]/80"
                      >
                        <div className="p-3 rounded-full bg-gradient-to-br from-[#64ffda]/20 to-purple-500/20 mr-4 group-hover:from-[#64ffda]/30 group-hover:to-purple-500/30 transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-[#64ffda]" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-gray-300 group-hover:text-[#64ffda] transition-colors duration-300 font-medium">LinkedIn</h4>
                          <p className="text-gray-500 text-sm">Damian Diaz</p>
                        </div>
                      </a>
                      
                      <a 
                        href="https://github.com/diaz027" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center p-4 rounded-xl border border-gray-800/50 hover:border-[#64ffda]/50 transition-all duration-300 bg-[#050505]/50 hover:bg-[#050505]/80"
                      >
                        <div className="p-3 rounded-full bg-gradient-to-br from-[#64ffda]/20 to-purple-500/20 mr-4 group-hover:from-[#64ffda]/30 group-hover:to-purple-500/30 transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-[#64ffda]" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-gray-300 group-hover:text-[#64ffda] transition-colors duration-300 font-medium">GitHub</h4>
                          <p className="text-gray-500 text-sm">diaz027</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#64ffda] to-purple-600 rounded-lg blur opacity-20"></div>
                  <div className="relative bg-[#0a0a0a] p-6 rounded-lg border border-gray-800/50">
                    <h3 className="text-2xl font-semibold text-white mb-6">Envíame un mensaje</h3>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Nombre</label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 bg-[#050505] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#64ffda]/50 focus:border-transparent text-white"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 bg-[#050505] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#64ffda]/50 focus:border-transparent text-white"
                          placeholder="tu@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Mensaje</label>
                        <textarea
                          id="message"
                          rows="4"
                          className="w-full px-4 py-3 bg-[#050505] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#64ffda]/50 focus:border-transparent text-white resize-none"
                          placeholder="Tu mensaje..."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3 px-4 bg-gradient-to-r from-[#64ffda]/90 to-[#64ffda]/70 hover:from-[#64ffda] hover:to-[#64ffda]/80 text-black font-medium rounded-lg transition-all duration-300 shadow-lg shadow-[#64ffda]/20"
                      >
                        Enviar Mensaje
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-10 bg-gradient-to-b from-[#030303] to-[#020202] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
        <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-purple-500/5 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-gray-800/30 pb-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-2">Damian Diaz</h3>
              <p className="text-gray-400 text-sm">Full Stack Developer</p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/diaz027" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#0a0a0a] border border-gray-800/50 hover:border-[#64ffda]/50 transition-all duration-300 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-gray-400 group-hover:text-[#64ffda] transition-colors duration-300" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/damian-diaz-6a7537258/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#0a0a0a] border border-gray-800/50 hover:border-[#64ffda]/50 transition-all duration-300 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-gray-400 group-hover:text-[#64ffda] transition-colors duration-300" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
              <a 
                href="mailto:damidiaz@gmail.com" 
                className="p-2 rounded-full bg-[#0a0a0a] border border-gray-800/50 hover:border-[#64ffda]/50 transition-all duration-300 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-gray-400 group-hover:text-[#64ffda] transition-colors duration-300" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2023 Damian Diaz. Todos los derechos reservados.
            </p>
            
            <div className="flex space-x-6">
              <a href="#inicio" className="text-gray-400 hover:text-[#64ffda] text-sm transition-colors duration-300">Inicio</a>
              <a href="#tecnologias" className="text-gray-400 hover:text-[#64ffda] text-sm transition-colors duration-300">Tecnologías</a>
              <a href="#proyectos" className="text-gray-400 hover:text-[#64ffda] text-sm transition-colors duration-300">Proyectos</a>
              <a href="#contacto" className="text-gray-400 hover:text-[#64ffda] text-sm transition-colors duration-300">Contacto</a>
            </div>
          </div>
        </div>
      </footer>
      {/* Botón para subir */}
      {showScrollTop && (
        <a 
          href="#inicio" 
          className="scroll-top-button fixed bottom-6 right-6 flex items-center justify-center w-8 h-14 bg-black/80 border-l border-[#64ffda]/10 rounded-r-md z-50 hover:border-l-[#64ffda]/30 transition-all duration-500 group"
          aria-label="Volver arriba"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#64ffda]/70 group-hover:text-[#64ffda] transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </a>
      )}
    </div>
  );
}

export default App;
