const Burgers2 = () => {
    return(
        <div>
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
        </div>
    )
}
export default Burgers2