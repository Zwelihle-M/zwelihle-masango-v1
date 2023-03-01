import Image from "next/legacy/image";
import React from "react";
import Mockup from "../public/images/takealotMockup.png";

import Snap2 from "../public/images/snap2.png";
import { FaGithub, FaReact, FaPlay } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

import Link from "next/link";

const takealotclone = () => {
  return (
    <div className="h-fit w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href={"/"}>
            <div className="flex items-center justify-center my-4 sm:my-8 gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                />
              </svg>{" "}
              <span>Back</span>
            </div>
          </Link>
        </div>

        {/* <h1 className="text-4xl mt-4 sm:mt-2 mb-4 sm:mb-8 text-center">
          Takealot Clone
        </h1> */}

        <div className="relative mx-auto overflow-hidden my-4 sm:my-8 h-60 sm:h-96 w-full sm:w-96">
          <Image
            src={Mockup}
            alt="takealot clone"
            layout="responsive"
            objectFit="contain"
            priority
            quality={100}
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
        </div>

        <h2 className="text-center my-4 text-3xl">Description</h2>

        <p className="px-4 sm:px-0 mx-auto text-left">
          I built this website using Next.js and the MERN stack. Next.js is a
          React-based framework that I used to enable server-side rendering and
          support static site generation, resulting in faster page loading times
          and better search engine optimization. The MERN stack includes four
          key technologies - MongoDB, Express.js, React.js, and Node.js, which I
          utilized to create a NoSQL database for data storage, a Node.js
          framework to build web applications, a JavaScript library to build
          user interfaces, and a runtime environment to run JavaScript on the
          server-side. Additionally, I designed this Takealot clone using Figma,
          a UI/UX/UI design tool that allowed me to create mockups, prototypes,
          and user interfaces that are aesthetically pleasing, easy to navigate,
          and use and brought the design to life using Tailwindcss. Together,
          these technologies enabled me to create a robust and modern website
          that provides a seamless shopping experience to our users.
        </p>

        {/* tech stack */}
        <div
          className="technologies my-4 sm:my-8"
          style={{ animationDuration: "5s" }}
        >
          <h2 className="text-center mb-2 text-3xl">Technologies Used</h2>
          <ul className="flex justify-center items-center gap-4">
            <li>
              <span>
                <FaReact size={30} className="animate-spin  animate-1000" />
              </span>
            </li>
            <li>
              <span>
                <SiTailwindcss size={30} />
              </span>
            </li>

            <li>
              <span>
                <SiNextdotjs size={30} />
              </span>
            </li>

            <li>
              <span>
                <SiJavascript size={30} />
              </span>
            </li>

            <li>
              <span>
                <SiNodedotjs size={30} />
              </span>
            </li>

            <li>
              <span>
                <SiMongodb size={30} />
              </span>
            </li>
          </ul>
        </div>

        {/* images */}

        <div>
          <Image
            src={Snap2}
            alt="takealot clone"
            layout="responsive"
            objectFit="contain"
            priority
            quality={100}

          />
        </div>

        {/* images */}

        {/* tech */}



        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="flex items-center rounded-full bg-gradient-to-r from-fuchsia-800 to-violet-600 py-2 px-2 mt-4 mr-4 text-white hover:scale-110 duration-200">
            Github
            <span className="ml-2">
              <FaGithub />
            </span>
          </button>

          <button className="flex items-center rounded-full bg-gradient-to-r from-fuchsia-800 to-violet-600 py-2 px-3 mt-4 mr-4 text-white hover:scale-110 duration-200">
            Link
            <span className="ml-2">
              <FaPlay />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default takealotclone;
