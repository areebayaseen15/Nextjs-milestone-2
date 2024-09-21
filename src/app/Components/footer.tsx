"use client"
import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Typewriter from 'typewriter-effect';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-200 to-yellow-400 text-gray-600 body-font mt-8 py-6">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <div className="flex items-center mb-4 sm:mb-0">
          <p className="ml-3 text-2xl text-gray-900 font-bold">
            <Typewriter
              options={{
                strings: ['Contact me through'],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </div>
        <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center">
          <a
            href="https://www.facebook.com"
            className="text-black hover:text-blue-900 transition-transform transform hover:scale-110 duration-300 mx-3"
          >
            <FaFacebookF className="h-8 w-8" />
          </a>
          <a
            href="https://www.instagram.com"
            className="text-black hover:text-pink-600 transition-transform transform hover:scale-110 duration-300 mx-3"
          >
            <GrInstagram className="h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/areeba-yaseen-6523552b5/"
            className="text-black hover:text-blue-700 transition-transform transform hover:scale-110 duration-300 mx-3"
          >
            <FaLinkedinIn className="h-8 w-8" />
          </a>
          <a
            href="https://github.com/areebayaseen15"
            className="text-black hover:text-purple-900 transition-transform transform hover:scale-110 duration-300 mx-3"
          >
            <FaGithub className="h-8 w-8" />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            className="text-black hover:text-gray-500 transition-transform transform hover:scale-110 duration-300 mx-3"
          >
            <AiFillTwitterCircle className="h-8 w-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
