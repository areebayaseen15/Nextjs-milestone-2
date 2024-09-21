"use client";
import React, { useEffect } from 'react';
import Image from "next/image";
import Navbar2 from '../Components/nav2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CssProjects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar2 />
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="container mx-auto">
          <h1 className="text-5xl font-extrabold text-center text-pink-700 mb-16" data-aos="fade-up">
            My CSS Projects
          </h1>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-gradient-to-r from-pink-200 via-yellow-100 to-pink-200 shadow-xl rounded-xl overflow-hidden transform transition-transform duration-500 ease-out hover:translate-y-3 hover:scale-105" data-aos="fade-right">
  <Image
    src={require("../../../public/Assest/Pictures/food panda.gif")}
    alt="Food Panda Card"
    className="w-full h-56 object-cover rounded-t-xl ease-in-out transform hover:scale-110" 
  />
  <div className="p-6">
    <h2 className="text-2xl font-semibold text-gray-900 mb-3">Food Panda Card</h2>
    <p className="text-gray-700 mb-4">
      Created a Food Panda card with simple and elegant CSS.
    </p>
    <a
      href="https://github.com/areebayaseen15/BQl-Web-Dev-Assignments.git"
      className="inline-block bg-pink-400 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-500 transition duration-300 font-medium"
    >
      GitHub Link
    </a>
  </div>
</div>


            {/* Card 2 */}
            <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105" data-aos="fade-left">
              <Image
                src={require("../../../public/Assest/Pictures/flexbox.gif")}
                alt="Flexbox Practice"
                className="w-full h-56 object-cover rounded-t-xl ease-in-out transform hover:scale-105" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">Flexbox Practice</h2>
                <p className="text-gray-700 mb-4">
                  A single web page created to practice Flexbox layout techniques.
                </p>
                <a
                  href="https://github.com/areebayaseen15/BQl-Web-Dev-Assignments.git"
                  className="inline-block ml-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition duration-300 font-medium"
                >
                  GitHub Link
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-r from-red-200 via-yellow-50 to-red-200 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105" data-aos="fade-right">
              <Image
                src={require("../../../public/Assest/Pictures/Netflix.gif")}
                alt="Netflix Clone"
                className="w-full h-56 object-cover rounded-t-xl ease-in-out transform hover:scale-105" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">Netflix Clone</h2>
                <p className="text-gray-700 mb-4">
                  A clone of the Netflix homepage built with HTML and CSS.
                </p>
                <a
                  href="https://areebayaseen15.github.io/NetflixClon-html-css/"
                  className="inline-block bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition duration-300 font-medium"
                >
                  Deployed Site
                </a>
                <a
                  href="https://github.com/areebayaseen15/NetflixClon-html-css.git"
                  className="inline-block ml-4 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition duration-300 font-medium"
                >
                  GitHub Link
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-r from-green-100 via-white to-green-100 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105" data-aos="fade-left">
              <Image
                src={require("../../../public/Assest/Pictures/banoQabil.jpg")}
                alt="Bano Qabil Clone"
                className="w-full h-56 object-cover rounded-t-xl ease-in-out transform hover:scale-105" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">Bano Qabil Clone</h2>
                <p className="text-gray-700 mb-4">
                  A simple and clean clone of the Bano Qabil website.
                </p>
                <a
                  href="https://areebayaseen15.github.io/Bnoqabil-WebsiteProject/"
                  className="inline-block bg-green-900 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition duration-300 font-medium"
                >
                  Deployed Site
                </a>
                <a
                  href="https://github.com/areebayaseen15/Bnoqabil-WebsiteProject.git"
                  className="inline-block ml-4 bg-blue-800 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300 font-medium"
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

export default CssProjects;
