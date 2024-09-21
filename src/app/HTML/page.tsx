 "use client"
import React, { useEffect } from 'react';
import Image from "next/image";
import Navbar2 from '../Components/nav2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HtmlProjects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <>
      <Navbar2 />
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="container mx-auto">
          <h1
            className="text-5xl font-extrabold text-center text-sky-700 mb-16"
            data-aos="fade-up"  
          >
            My HTML Projects
          </h1>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div
              className="bg-gradient-to-r from-green-200 via-green-100 to-green-200 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105"
              data-aos="fade-up" 
            >
              <Image
                src={require("../../../public/Assest/Pictures/cv.gif")}
                alt="CV"
                className="w-full h-56 object-cover rounded-t-xl  ease-in-out transform hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">CV</h2>
                <p className="text-gray-700 mb-4">
                  Created a personal and simple CV using only HTML
                </p>
                <a
                  href="https://github.com/areebayaseen15/BQl-Web-Dev-Assignments.git"
                  className="inline-block bg-green-400 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-500 transition duration-300 font-medium"
                >
                  GitHub Link
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="bg-gradient-to-r from-pink-300 via-white to-pink-300 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105"
              data-aos="fade-up" 
            >
              <Image
                src={require("../../../public/Assest/Pictures/Table.gif")}
                alt="Table in HTML"
                className="w-full h-56 object-cover rounded-t-xl  ease-in-out transform hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">Table in HTML</h2>
                <p className="text-gray-700 mb-4">
                  Practiced creating tables with HTML
                </p>
                <a
                  href="https://github.com/areebayaseen15/BQl-Web-Dev-Assignments.git"
                  className="inline-block ml-4 bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition duration-300 font-medium"
                >
                  GitHub Link
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="bg-gradient-to-r from-indigo-200 via-indigo-50 to-indigo-200 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105"
              data-aos="fade-up" 
            >
              <Image
                src={require("../../../public/Assest/Pictures/form.gif")}
                alt="HTML Form"
                className="w-full h-56 object-cover rounded-t-xl  ease-in-out transform hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">HTML Form</h2>
                <p className="text-gray-700 mb-4">
                  Learned how to create forms in HTML
                </p>
                <a
                  href="https://github.com/areebayaseen15/BQl-Web-Dev-Assignments.git"
                  className="inline-block ml-4 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition duration-300 font-medium"
                >
                  GitHub Link
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="bg-gradient-to-r from-pink-300 via-white to-pink-300 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105"
              data-aos="fade-up" 
            >
              <Image
                src={require("../../../public/Assest/Pictures/portfolionext.gif")}
                alt="Portfolio"
                className="w-full h-56 object-cover rounded-t-xl  ease-in-out transform hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">Portfolio</h2>
                <p className="text-gray-700 mb-4">
                  Created a simple one-page portfolio using HTML and inline CSS
                </p>
                <a
                  href="https://github.com/areebayaseen15/BQl-Web-Dev-Assignments.git"
                  className="inline-block ml-4 bg-pink-800 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition duration-300 font-medium"
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

export default HtmlProjects;
