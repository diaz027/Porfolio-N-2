import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contactos2 = () => {
  const [state, handleSubmit] = useForm("mwpoynlj");

  return (
    <div>
      <section
        id="contacto"
        className="py-32 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#050505] to-[#030303] relative overflow-hidden"
      >
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#64ffda]/20 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#64ffda]/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#64ffda] font-mono text-lg inline-block mb-3 tracking-wider">
              CONTACTO
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              ¿Hablamos?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#64ffda] to-purple-500 mx-auto mt-6 rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Actualmente estoy disponible para nuevos proyectos y oportunidades.
              Si tenés alguna pregunta o querés conectar, no dudes en escribirme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Contacto Directo */}
            <div className="order-2 md:order-1">
              <div className="relative p-8 rounded-2xl border border-gray-800/50 bg-[#0a0a0a]/80 backdrop-blur-sm shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/5 to-purple-500/5 rounded-2xl"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-white mb-6">Contacto Directo</h3>
                  <div className="flex flex-col space-y-6">
                    {/* Email */}
                    <a
                      href="mailto:damian.diaz.develop@gmail.com"
                      className="group flex items-center p-4 rounded-xl border border-gray-800/50 hover:border-[#64ffda]/50 transition-all duration-300 bg-[#050505]/50 hover:bg-[#050505]/80"
                    >
                      <div className="p-3 rounded-full bg-gradient-to-br from-[#64ffda]/20 to-purple-500/20 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-[#64ffda]" viewBox="0 0 16 16">
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-gray-300 group-hover:text-[#64ffda] font-medium">Email</h4>
                        <p className="text-gray-500 text-sm">damian.diaz.develop@gmail.com</p>
                      </div>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/damian-diaz-6a7537258/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center p-4 rounded-xl border border-gray-800/50 hover:border-[#64ffda]/50 transition-all duration-300 bg-[#050505]/50 hover:bg-[#050505]/80"
                    >
                      <div className="p-3 rounded-full bg-gradient-to-br from-[#64ffda]/20 to-purple-500/20 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-[#64ffda]" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193V6.169h-2.4v7.225h2.4z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-gray-300 group-hover:text-[#64ffda] font-medium">LinkedIn</h4>
                        <p className="text-gray-500 text-sm">Damian Diaz</p>
                      </div>
                    </a>

                    {/* GitHub */}
                    <a
                      href="https://github.com/diaz027"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center p-4 rounded-xl border border-gray-800/50 hover:border-[#64ffda]/50 transition-all duration-300 bg-[#050505]/50 hover:bg-[#050505]/80"
                    >
                      <div className="p-3 rounded-full bg-gradient-to-br from-[#64ffda]/20 to-purple-500/20 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-[#64ffda]" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8a8.001 8.001 0 0 0 5.47 7.59c.4.07.55-.17.55-.38v-1.3c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.61 7.61 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8.001 8.001 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-gray-300 group-hover:text-[#64ffda] font-medium">GitHub</h4>
                        <p className="text-gray-500 text-sm">diaz027</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#64ffda] to-purple-600 rounded-lg blur opacity-20"></div>
                <div className="relative bg-[#0a0a0a] p-6 rounded-lg border border-gray-800/50">
                  <h3 className="text-2xl font-semibold text-white mb-6">Envíame un mensaje</h3>
                  {state.succeeded ? (
                    <p className="text-green-500 text-lg">¡Gracias por tu mensaje!</p>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Nombre</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 bg-[#050505] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#64ffda]/50 focus:border-transparent text-white"
                          placeholder="Tu nombre"
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 bg-[#050505] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#64ffda]/50 focus:border-transparent text-white"
                          placeholder="tu@email.com"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Mensaje</label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          required
                          className="w-full px-4 py-3 bg-[#050505] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#64ffda]/50 focus:border-transparent text-white resize-none"
                          placeholder="Tu mensaje..."
                        ></textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                      </div>

                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full py-3 px-4 bg-gradient-to-r from-[#64ffda]/90 to-[#64ffda]/70 hover:from-[#64ffda] hover:to-[#64ffda]/80 text-black font-medium rounded-lg transition-all duration-300 shadow-lg shadow-[#64ffda]/20"
                      >
                        Enviar Mensaje
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactos2;
