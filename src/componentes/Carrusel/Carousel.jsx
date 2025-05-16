import { useEffect, useRef, useState } from "react";

const initialTechs = [
  {
    name: "HTML5",
    icon: "./icon/HTML5.svg",
  },
  {
    name: "CSS3",
    icon: "./icon/CSS3.svg",
  },
  {
    name: "JavaScript",
    icon: "./icon/JavaScript.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "./icon/Tailwind CSS.svg",
  },
  {
    name: "TypeScript",
    icon: "./icon/TypeScript.svg",
  },
];

const Carrusel1 = () => {
  const containerRef = useRef(null);
  const [techs, setTechs] = useState(initialTechs);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!containerRef.current) return;

      const el = containerRef.current;
      el.style.transition = "transform 0.5s ease-in-out";
      el.style.transform = "translateX(-25%)"; // mueve un ítem

      setTimeout(() => {
        // una vez que terminó el slide, reacomodamos
        el.style.transition = "none";
        el.style.transform = "translateX(0)";

        setTechs((prev) => {
          const updated = [...prev];
          const first = updated.shift();
          updated.push(first);
          return updated;
        });
      }, 500); // debe coincidir con el tiempo del `transition`
    }, 2500); // tiempo de cambio entre ítems

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <div className="flex gap-6 px-2 py-4" ref={containerRef}>
        {techs.map((tech, index) => (
          <div
            key={tech.name + index}
            className="w-[calc(50%-1rem)] md:w-[calc(25%-1.5rem)] shrink-0 group transition-all duration-500"
          >
            <div className="flex flex-col items-center p-6 rounded-xl bg-[#0a0a0a] border border-gray-800/50 backdrop-blur-sm transition-transform duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#64ffda]/5 hover:border-[#64ffda]/30 h-full">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#64ffda]/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 mb-4 relative z-10"
                />
              </div>
              <span className="text-gray-300 group-hover:text-[#64ffda] transition-colors duration-300 font-medium">
                {tech.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrusel1;
