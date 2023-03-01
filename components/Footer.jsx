import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube,FaReact } from 'react-icons/fa';

const Footer = () => {
  const author = 'Zwelihle Masango';

  return (
    <div id="projects" className="w-full py-16">
      <div className="max-w-screen-xl mx-auto px-8 text-center">

        <p className="flex flex-row justify-center items-center">

          <a href="https://www.linkedin.com/in/zwelihle-masango-2750081b4/" className="mx-4 hover:text-blue-500"><FaLinkedin size={30} className="hover:text-[#0072b1]"/></a>
          <a href="https://github.com/Zwelihle-M" className="mx-4 "><FaGithub size={30}/></a>
          <a href="https://www.youtube.com/" className="mx-4 hover:text-[#FF0000]"><FaYoutube size={35} /></a>
        </p>
      <p className="mt-4">{`Copyright ${new Date().getFullYear()} ${author}`}</p>

      </div>
    </div>
  );
};

export default Footer;