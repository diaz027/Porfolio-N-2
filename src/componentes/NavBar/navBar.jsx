import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Inicio");
  
  // Detectar scroll para cambiar estilo de navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Detectar sección activa básica (se puede mejorar con IntersectionObserver)
      if (window.scrollY < 500) {
        setActiveSection("Inicio");
      } else if (window.scrollY < 1500) {
        setActiveSection("Proyectos");
      } else {
        setActiveSection("Contactos");
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 select-none ${
      scrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo y nombre */}
          <div className="flex-shrink-0 flex items-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-70 blur transition-all duration-300"></div>
              <img
                className="relative h-10 w-10 rounded-full object-cover border-2 border-transparent group-hover:border-white/50 transition-all"
                src="/damiGalan.jpg"
                alt="Damian Diaz"
              />
            </div>
            
            <div className="ml-3">
              <h1 className="text-xl font-bold tracking-tight text-white">
                <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                  Damian Diaz
                </span>
              </h1>
              <p className="text-xs text-gray-400 -mt-1">Full Stack Developer</p>
            </div>
          </div>
          
          {/* Navegación */}
          <nav className="flex space-x-1">
            {[
              { name: 'INICIO', to: 'Inicio' },
              { name: 'PROYECTOS', to: 'Proyectos' },
              { name: 'CONTACTO', to: 'Contactos' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeSection === item.to
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                {activeSection === item.to && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full"></span>
                )}
              </Link>
            ))}
            
            {/* Botón CV */}
            <a
              href="#"
              className="ml-4 px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center"
              onClick={(e) => {
                e.preventDefault();
                // Agregar aquí lógica para descargar CV
                alert('Descargando CV');
              }}
            >
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              CV
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
