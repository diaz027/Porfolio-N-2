import React from "react";
import Gmail from "./gmail.png";
import instagram from "./instagram.png";
import wsp from "./whatsapp.png";

function Foter() {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
        ¿Trabajemos juntos?
      </h2>
      
      <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 text-sky-400">Contacto</h3>
            
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-white/10">
                <img src={wsp} className="w-6 h-6" alt="WhatsApp" />
              </div>
              <div>
                <p className="text-sm text-gray-400">WhatsApp</p>
                <p className="text-lg">+54 1134546732</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-white/10">
                <img src={Gmail} className="w-6 h-6" alt="Email" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-lg break-all">damian.diaz.develop@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-sky-400">Redes Sociales</h3>
            <p className="text-gray-300 mb-6">
              Sígueme en mis redes sociales para estar al tanto de mis últimos proyectos y actividades.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/damicitoo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <img src={instagram} className="w-6 h-6" alt="Instagram" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/damian-diaz-6a7537258/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <img 
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" 
                  alt="LinkedIn" 
                  className="w-6 h-6" 
                />
              </a>
              
              <a 
                href="https://github.com/diaz027" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <img 
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg" 
                  alt="GitHub" 
                  className="w-6 h-6 dark-icon" 
                />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Damian Diaz. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
}

export default Foter;