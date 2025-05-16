import { useEffect, useRef, useState } from "react";

const initialBackend = [
  {
    name: "Node.js",
    icon: "./icon/Node.js.svg",
  },
  {
    name: "Express",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
  },
  {
    name: "PostgreSQL",
    icon: "./icon/PostgresSQL.svg",
  },
  {
    name: "Prisma",
    icon: "https://avatars.githubusercontent.com/u/17219288?s=200&v=4",
  },
  {
    name: "Supabase",
    icon: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
  },
];

const Carrusel3 = () => {
  const containerRef = useRef(null);
  const [items, setItems] = useState(initialBackend);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!containerRef.current) return;

      const el = containerRef.current;
      el.style.transition = "transform 0.5s ease-in-out";
      el.style.transform = "translateX(-50%)"; // mobile = 2, desktop = 4 -> movemos 1

      setTimeout(() => {
        el.style.transition = "none";
        el.style.transform = "translateX(0)";

        setItems((prev) => {
          const updated = [...prev];
          const first = updated.shift();
          updated.push(first);
          return updated;
        });
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-6 px-2 py-4"
        ref={containerRef}
      >
        {items.map((item, index) => (
          <div
            key={item.name + index}
            className="w-[calc(50%-0.75rem)] md:w-[calc(25%-1.5rem)] shrink-0 group transition-all duration-500"
          >
            <div className="flex flex-col items-center p-6 rounded-xl bg-[#0a0a0a] border border-gray-800/50 backdrop-blur-sm transition-transform duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#64ffda]/5 hover:border-[#64ffda]/30 h-full">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#64ffda]/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-16 h-16 mb-4 relative z-10"
                />
              </div>
              <span className="text-gray-300 group-hover:text-[#64ffda] transition-colors duration-300 font-medium">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrusel3;
