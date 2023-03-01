import React from "react";
import Image from "next/legacy/image";
import TakealotClone from "../public/images/takealotclone.png";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Takealot clone",
      imgSrc: TakealotClone,
      url: "/takealotclone",
    },
  ];
  return (
    <div style={{ marginTop: "64px" }}>
      <div id="projects" className="w-full">
        <div className="max-w-screen-xl mx-auto px-8 py-16 pt-24 text-center">
          <h1 className="py-4 text-5xl ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-800 to-violet-600">
              {" "}
              Projects
            </span>
          </h1>

          <div

            className="max-5xl mx-auto grid md:grid-cols-2 gap-8 "
          >
            {" "}
            {projects.map(({ id, title, imgSrc }) => (
              <div key={id}>
                <div className="relative cursor-pointer group shadow-sm overflow-hidden rounded-lg ">
                  <Image
                    src={imgSrc}
                    alt={title}
                    className="duration-200 hover:scale-110 group-hover:opacity-50 rounded-lg "
                  />

                  <div className="hidden group-hover:block absolute top-[40%] left-[50%] translate-x-[-50%] translate-[-50%] ">
                    <h1 className=" text-lg my-4 duration-300 tracking-wide text-center ">
                      {title}
                    </h1>

                    <Link href={"/takealotclone"}>
                      <p className="text-center px-4 py-2 pb-2 rounded-lg bg-gradient-to-r from-fuchsia-800 to-violet-600  text-white">
                        view
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

