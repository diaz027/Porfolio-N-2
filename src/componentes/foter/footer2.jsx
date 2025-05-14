import { Link } from "react-scroll"

const Footer2 = () =>{
    return(
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
                href="mailto:damian.diaz.develop@gmail.com" 
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
              <Link to="INICIO" className="text-gray-400 hover:text-[#64ffda] text-sm transition-colors duration-300">Inicio</Link>
              <Link to="TECNOLOGIAS" className="text-gray-400 hover:text-[#64ffda] text-sm transition-colors duration-300">Tecnologías</Link>
              <Link to="PROYECTOS" className="text-gray-400 hover:text-[#64ffda] text-sm transition-colors duration-300">Proyectos</Link>
              <Link to="CONTACTO" className="text-gray-400 hover:text-[#64ffda] text-sm transition-colors duration-300">Contacto</Link>
            </div>
          </div>
        </div>
      </footer>
    )
}
export default Footer2