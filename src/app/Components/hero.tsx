"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Navbar from "./navbar";
import AOS from "aos";
import "aos/dist/aos.css"; 

export default function Hero() {
  useEffect(() => {
    AOS.init({
        duration: 1200, 
        easing: 'ease-in-out', 
        once: true,
    });
}, []);

  return (
    <><Navbar /><div id="#">
      <section className="bg-cover bg-center bg-no-repeat min-h-screen text-gray-600 body-font bg-yellow-50 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-pink-300 to-red-400 opacity-50"></div>
        <div className="relative container mx-auto px-6 py-24 flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left mb-16 md:mb-0">
            <h1 className="title-font text-3xl md:text-4xl mb-4 font-medium text-gray-900">
              Hello! I'm
            </h1>
            <h1 className="title-font text-3xl md:text-4xl mb-4 font-medium text-pink-600">
              <Typewriter
                options={{
                  strings: ["Areeba Yaseen", "Pursuing Web Development", "And Cloud Native AI"],
                  autoStart: true,
                  loop: true,
                }} />
            </h1>
            <p className="mb-8 leading-relaxed text-gray-700">
              "A budding programmer with a passion for learning and creating. I'm excited to share my journey in the world of coding, where I'm constantly discovering new concepts, tools, and technologies. This portfolio showcases my early projects and experiments, highlighting my enthusiasm and dedication to growth. As I continue to learn and improve, I'm eager to take on new challenges and collaborate with others. Join me on this coding adventure, and let's explore the possibilities together!"
            </p>
            <div className="flex w-full justify-center md:justify-start">
              <Link href={"#AboutMe"}>
                <button className="inline-flex text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg transition duration-300 ease-in-out transform hover:scale-105">
                  More About Me
                </button>
              </Link>
            </div>
          </div>
          {/* Image Section */}
          <div className="md:w-1/2 w-full flex justify-center">
            <Image
              className="object-cover object-center rounded-lg shadow-lg max-w-full h-auto"
              alt="Profile pic"
              width={400}
              height={400}
              src={require("../../../public/Assest/Pictures/areeba.png")} />
          </div>
        </div>
      </section>
    </div></>
  );
}
