import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link,
} from "@nextui-org/react";

export default function NavMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Inicio");

  // Detectar scroll para cambiar estilo del navbar y la seccin activa
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Detectar secciu00f3n activa bu00e1sica (se puede mejorar con IntersectionObserver)
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
  
  const menuItems = [
    { name: 'INICIO', id: 'Inicio' },
    { name: 'PROYECTOS', id: 'Proyectos' },
    { name: 'CONTACTO', id: 'Contactos' },
  ];

  const handleItemClick = (itemId) => {
    document.getElementById(itemId).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    setIsMenuOpen(false); // Cerrar meniu00fa al hacer clic
  };

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen} 
      maxWidth="full"
      className={`fixed top-0 ${
        scrolled || isMenuOpen ? 'bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      } transition-all duration-300 pb-0`}
      isBlurred={true}
    >
      <NavbarContent className="pr-3" justify="start">
        <div className="flex items-center">
          <div className="relative group mr-2">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-70 blur transition-all duration-300"></div>
            <img
              className="relative h-8 w-8 rounded-full object-cover border-2 border-transparent group-hover:border-white/50 transition-all"
              src="/damiGalan.jpg"
              alt="Damian Diaz"
            />
          </div>
          
          <div>
            <h1 className="text-lg font-bold tracking-tight">
              <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                Damian Diaz
              </span>
            </h1>
            <p className="text-xs text-gray-400 -mt-1">Full Stack Developer</p>
          </div>
        </div>
      </NavbarContent>
      
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-white"
        />
      </NavbarContent>
      
      <NavbarMenu className="bg-black/95 backdrop-blur-xl pt-10 pb-6">
        <div className="flex flex-col gap-5 items-center mt-5">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              className={`w-2/3 py-6 ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-sky-500/20 to-blue-600/20 border border-sky-500/30 text-white font-bold'
                  : 'bg-transparent text-gray-300'  
              } rounded-xl`}
              variant="flat"
              onClick={() => handleItemClick(item.id)}
            >
              {item.name}
              {activeSection === item.id && (
                <span className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-1/2 bg-gradient-to-b from-sky-400 to-blue-600 rounded-full"></span>
              )}
            </Button>
          ))}
          
          <Button
            className="mt-5 w-2/3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium py-6 rounded-xl"
            endContent={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            }
          >
            Descargar CV
          </Button>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
