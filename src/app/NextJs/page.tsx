"use client";
import React, { useEffect } from 'react';
import Image from "next/image";
import Navbar2 from '../Components/nav2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NextJsProjects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <>
      <Navbar2 />
      <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-white py-10 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl font-extrabold text-center text-yellow-600 mb-16" data-aos="fade-up">
            My Next.Js Projects
          </h1>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-gradient-to-b from-indigo-200 to-indigo-100 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out" data-aos="fade-right">
              <Image
                src={require("../../../public/Assest/Pictures/helloWorld.gif")}
                alt="Project 1"
                className="w-full h-48 object-cover ease-in-out transform hover:scale-105" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">MILESTONE 1: Hello World</h2>
                <p className="text-gray-600 mb-4">
                  Developed a simple webpage that displays a personalized "Hello World" message with basic styling.
                </p>
                <a
                  href="#"
                  className="inline-block px-4 py-2 bg-pink-600 text-white font-bold rounded hover:bg-yellow-500 transition-colors duration-300"
                >
                  GitHub Link
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-b from-pink-200 to-yellow-50 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out" data-aos="fade-left">
              <Image
                src={require("../../../public/Assest/Pictures/portfolio.gif")}
                alt="Project 2"
                className="w-full h-48 object-cover ease-in-out transform hover:scale-105" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">MILESTONE 2: Basic UI Design with Tailwind CSS</h2>
                <p className="text-gray-600 mb-4">
                  Designed and developed a personal portfolio website with at least 3 pages (Home, About, Contact).
                  <br /> Used Tailwind CSS for styling and layout.
                </p>
                <a
                  href="#"
                  className="inline-block px-4 py-2 bg-pink-600 text-white font-bold rounded hover:bg-yellow-500 transition-colors duration-300"
                >
                  Deployed Site
                </a>
                <br />
                <a
                  href="#"
                  className="inline-block mt-2 px-4 py-2 bg-pink-600 text-white font-bold rounded hover:bg-yellow-500 transition-colors duration-300"
                >
                  GitHub Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NextJsProjects;
