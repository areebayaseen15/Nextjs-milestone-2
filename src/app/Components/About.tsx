"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import AOS from "aos";
import "aos/dist/aos.css";  
const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });  
  }, []);

  return (
    <div id="AboutMe" className="bg-gradient-to-r from-yellow-100 to-white">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div
              className="relative bg-white rounded-lg shadow-xl p-6 order-2 md:order-1 border-4 border-yellow-300 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
              data-aos="fade-up" 
            >
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full border-4 border-yellow-300 overflow-hidden shadow-lg bg-white hover:border-yellow-400 transition-colors duration-300 ease-in-out">
                <Image
                  className="object-cover object-center rounded-full"
                  alt="Profile pic"
                  width={128}
                  height={128}
                  src={require("../../../public/Assest/Pictures/areeba.png")}
                />
              </div>
              <div className="text-center mt-24">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">Areeba Yaseen</h3>
                <p className="text-gray-600 mb-4">Future Front-End Developer</p>
                <p className="text-pink-600 font-semibold text-base md:text-lg">
                  <Typewriter
                    options={{
                      strings: ['"Bringing creativity and performance together in web development."'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </p>
              </div>
            </div>

            {/*  About Me Text */}
            <div className="order-1 md:order-2" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who I Am
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                Hi, I’m <span className="text-yellow-500 font-bold">Areeba Yaseen</span>, persuing a front-end developer who enjoys crafting visually appealing and responsive websites. 
                With skills in HTML, CSS, TypeScript, and applied in Cloud Native AI, I bring creativity and performance together to build web experiences that stand out.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                I love using modern technology to solve real-world problems, focusing on delivering seamless and dynamic interfaces that provide great user experiences. 
                My passion for design, innovation, and continuous learning drives me to stay updated with the latest trends.
              </p>
              <p className="text-base md:text-lg text-gray-700">
                Outside of work, you can find me reading, exploring new tech, and learning ways to keep enhancing my skills in the ever-evolving tech world.
              </p>
              <div className="mt-8 flex justify-center md:justify-start">
              
                  <button className="mb-20 inline-flex items-center bg-pink-600 border-0 py-2 px-4 focus:outline-none hover:bg-yellow-600 rounded text-base font-medium text-white transition duration-300 ease-in-out transform hover:scale-105">
                  <a href="/Assest/Cv/cv.pdf"> Download CV </a>
                  </button>
               
              </div>
            </div>
            
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;

