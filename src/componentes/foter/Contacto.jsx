import React from "react";
import Gmail from "./gmail.png";
import instagram from "./instagram.png";
import wsp from "./whatsapp.png";

function Foter() {
  return (
    <div className="bg-black text-center md:mt-40 mt-40 ">
      <h1 className="text-3xl md:text-4xl font-roboto italic md:py-4">
        ¿Trabajemos juntos?
      </h1>
      <div>
        <img
          src={wsp}
          className=" w-[10vw] ml-[20%] pt-6  md:w-[3vw] md:ml-[41%]"
        />
        <h1 className="text-white text-2xl ml-[15%] mt-[-8%]  md:text-xl md:ml-[2%]  md:mt-[-2.5%]">
          +54 1134546732
        </h1>
      </div>

      <div className="text-white">
        <a
          href="mailto:tu_correo@gmail.com"
          target="_blank"
          className="symbol"
          id="gmailIcon"
        >
          <img
            align="center"
            src={Gmail}
            alt="Gmail"
            className="w-[10vw] ml-[20%] pt-6 md:w-[3vw] md:ml-[41%] md:mt-2"
          />
        </a>
        <h1 className="ml-[32%] mt-[-8%] text-xl md:ml-[12%]  md:mt-[-2.5%] break-words overflow-wrap">
          damian.diaz.develop@gmail.com
        </h1>
      </div>

      <div className="flex justify-center mt-8 md:mt-6">
        <button className="w-[20vw] md:w-[5vw]">
          <a href="https://www.instagram.com/damicitoo/">
            <img src={instagram} className="w-[15vw] md:w-[3vw] " />
          </a>
        </button>
        <button className="w-[20vw] md:w-[5vw]">
          <a
            href="https://www.linkedin.com/in/damian-diaz-6a7537258/"
            target="_blank"
          >
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
              alt="LinkedIn"
              className=" w-[15vw] md:w-[3vw] "
            />
          </a>
        </button>
        <button className="w-[20vw] md:w-[5vw]">
          <a href="https://github.com/diaz027" target="_blank">
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg"
              alt="GitHub"
              className=" w-[15vw] md:w-[3vw] "
            />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Foter;
