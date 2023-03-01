import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const pageTransition = {
  duration: 0.5,
  ease: "easeInOut",
};

const About = () => {
  return (
    <motion.div
      className="w-full"
      id="about"
      key="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={pageTransition}
    >
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-center ">
        <h1 className="text-5xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-800 to-violet-600">
            About
          </span>
        </h1>

        <div className="my-8 px-8">
          <p className="py-4 max-w-2xl mx-auto text-left text-md">
            Hello...I{"'"}m Zwelihle Masango a CTU Training Solutions graduate, I completed both the
            Programming Foundation and Software Development courses. In the
            Programming Foundation course, I gained a strong understanding of
            programming concepts and learned the fundamentals of coding
            languages. The Software
            Development course allowed me to further develop my programming
            skills and knowledge, with a focus on more advanced topics such as
            database design, software testing, and project management.These
            courses have provided me with a solid foundation in software
            development, and I{"'"}m excited to apply my skills to real-world
            projects.
          </p>
          <p className="py-4 max-w-2xl mx-auto text-left">
            When I{"'"}m not coding, you can find me unleashing my creativity in
            a variety of ways. I{"'"}m an avid gamer, always ready for the next
            challenge. In my free time, I love to explore new things, whether it
            {"'"}s new places or new ways of thinking. Drawing and making music
            are two of my favorite ways to express myself, and I bring that same
            artistic spirit to my web development work. There{"'"}s nothing
            quite like the feeling of creating something from scratch, and I
            {"'"}m always looking for new ways to push my boundaries and try new
            things.
          </p>
          {/* <p className="py-4 max-w-2xl mx-auto text-left">
            Thank you for taking the time to visit my portfolio! As a passionate
            and dedicated web developer, I am thrilled to have the opportunity
            to share my work with you. I hope that you found everything
            informative and engaging, and that you{"'"}re just as excited about
            my projects as I am. If you have any questions or would like to
            discuss potential job oppoturnities or collaborations, please don{"'"}t hesitate to reach
            out. Thanks again for stopping by!
          </p> */}
        </div>
        {/* cv download */}
        <Link href={"/resume.txt"} download={true}>
          <div className=" rounded-full ">
            <button className="relative inline-flex items-center justify-center my-12 p-4 px-5 py-3 overflow-hidden transition duration-300 ease-out rounded-full shadow-xl group   ">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-violet-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-fuchsia-800 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white">Download CV</span>
            </button>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default About;
