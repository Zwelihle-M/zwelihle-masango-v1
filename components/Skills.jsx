import { motion } from "framer-motion";
import Image from "next/legacy/image";
import React from "react";
import Css from "../public/images/css.svg";
import Figma from "../public/images/figma.svg";
import Firebase from "../public/images/firebase.svg";
import Git from "../public/images/git.svg";
import Html from "../public/images/html.svg";
import Javascript from "../public/images/javascript.svg";
import Mongodb from "../public/images/mongodb.svg";
import Mysql from "../public/images/mysql.svg";
import Nextjs from "../public/images/nextjs.svg";
import Node from "../public/images/node.svg";
import ReactLogo from "../public/images/react.svg";
import ReduxLogo from "../public/images/redux.svg";
import Tailwind from "../public/images/tailwind.svg";
import Csharp from "../public/images/csharp.svg";
import Vscode from "../public/images/vscode.svg";
import Mssql from "../public/images/mssql.svg";

const Skills = () => {
  const skills = [
    { id: 1, title: "Html", description: "Html 5", src: Html },
    { id: 2, title: "CSS", description: "Css 3", src: Css },
    {
      id: 3,
      title: "Javascript",
      description: "Javascript ES6+",
      src: Javascript,
    },
    { id: 4, title: "Tailwind", description: "Tailwindcss", src: Tailwind },
    { id: 5, title: "Figma", description: "Figma", src: Figma },
    { id: 6, title: "Node", description: "Nodejs", src: Node },
    { id: 7, title: "React", description: "Reactjs", src: ReactLogo },
    { id: 8, title: "Nextjs", description: "Nextjs", src: Nextjs },
    { id: 9, title: "Redux", description: "Redux", src: ReduxLogo },
    { id: 10, title: "Csharp", description: "Csharp", src: Csharp },
    { id: 11, title: "Mssql", description: "Mssql", src: Mssql },
    { id: 12, title: "Mysql", description: "Mysql", src: Mysql },
    { id: 13, title: "Firebase", description: "Firebase", src: Firebase },
    { id: 14, title: "Mongodb", description: "Mongodb", src: Mongodb },
    { id: 15, title: "Vscode", description: "Vscode", src: Vscode },
    { id: 16, title: "Git", description: "Git", src: Git },
  ];
  return (
    <motion.div
      id="skills"
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen  xl:space-y-0 mx-auto items-center overflow-hidden justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className=" absolute top-24 text-5xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-800 to-violet-600">
          Skills
        </span>
      </h3>
      {/* <h4 className="absolute top-30">My skills and tools</h4> */}

      <motion.div className="grid grid-cols-4 gap-5 pt-24 ">
        {skills.map(({ id, title, src, description }) => (
          <div
            key={id}
            className="group relative flex flex-col lg:flex-row gap-10 lg:gap-0 items-center p-6 ease-in duration-500 rounded-full border border-gray-400 object-cover sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 hover:scale-110"
          >
            <Image
              src={src}
              alt={title}
              priority
              className="filter group-hover:grayscale"
              quality={100}
              as="image"
            />

            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out rounded-full z-0 group-hover:bg-white h-24 w-24 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex items-center justify-center h-full text-center">
                <p className="text-md opacity-100 text-gray-900 font-semibold">
                  {description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
