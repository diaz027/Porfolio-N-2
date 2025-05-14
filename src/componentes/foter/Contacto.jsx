import React from "react";
import Gmail from "./gmail.png";
import instagram from "./instagram.png";
import wsp from "./whatsapp.png";

function Foter() {
  return (
    <div className="bg-black text-center xl:mt-40 mt-40 2xl:mt-52">
      <h1 className="text-3xl xl:text-4xl font-roboto italic py-4 2xl:text-5xl">
        ¿Trabajemos juntos?
      </h1>
      <div>
        <img
          src={wsp}
          className=" w-[10vw] ml-[20%] pt-6  xl:w-[3vw] xl:ml-[41%] 2xl:ml-[39%]"
        />
        <h1 className="text-white text-2xl ml-[15%] mt-[-8%]  xl:text-xl xl:ml-[2%]  xl:mt-[-2.5%] 2xl:text-3xl">
          +54 1134546732
        </h1>
      </div>

      <div className="text-white">

        <img
          align="center"
          src={Gmail}
          alt="Gmail"
          className="w-[10vw] ml-[20%] pt-6 xl:w-[3vw] xl:ml-[41%] xl:mt-2 2xl:ml-[39%]"
        />
        <h1 className="ml-[32%] mt-[-8%] text-xl xl:ml-[12%]  xl:mt-[-2.5%] break-words overflow-wrap 2xl:text-3xl 2xl:ml-[16.5%]">
          damian.diaz.develop@gmail.com
        </h1>
      </div>

      <div className="flex justify-center mt-8 xl:mt-6 pb-4 2xl:mt-8 2xl:pb-6">
        <button className="w-[20vw] xl:w-[5vw]">
          <a href="https://www.instagram.com/damicitoo/">
            <img src={instagram} className="w-[15vw] xl:w-[3vw] " />
          </a>
        </button>
        <button className="w-[20vw] xl:w-[5vw]">
          <a
            href="https://www.linkedin.com/in/damian-diaz-6a7537258/"
            target="_blank"
          >
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
              alt="LinkedIn"
              className=" w-[15vw] xl:w-[3vw] "
            />
          </a>
        </button>
        <button className="w-[20vw] xl:w-[5vw]">
          <a href="https://github.com/diaz027" target="_blank">
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg"
              alt="GitHub"
              className=" w-[15vw] xl:w-[3vw] "
            />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Foter;
