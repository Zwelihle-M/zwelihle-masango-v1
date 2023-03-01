import React from "react";
import { motion } from "framer-motion";

const BackgroundCircles = () => {
  return (
    <div className="container">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
          borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
        className="relative flex justify-center items-center"
      >
        <div className=" absolute border border-violet-600  opacity-50 rounded-full h-[350px] w-[350px] mt-52 " />
        <div className="rounded-full border border-violet-600 h-[500px] w-[500px] absolute mt-52 animate-pulse " />
        <div className="rounded-full border border-violet-600 opacity-10 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
        <div className="rounded-full border border-violet-600 opacity-50 h-[800px] w-[800px] absolute mt-52 " />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
          borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
        className="relative flex justify-center items-center"
      >
        <div className=" absolute border border-violet-600  opacity-50 square h-[350px] w-[350px] mt-52 " />
        <div className="square border border-violet-600 h-[500px] w-[500px] absolute mt-52 animate-pulse " />
        <div className="square border border-violet-600 opacity-10 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
        <div className="square border border-violet-600 opacity-50 h-[800px] w-[800px] absolute mt-52 " />
      </motion.div>
    </div>
  );
};

export default BackgroundCircles;
