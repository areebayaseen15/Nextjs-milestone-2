"use client";
import React, { useEffect } from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Skill = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, 
            easing: 'ease-in-out', 
            once: true,
        });
    }, []);

    return (
        <div id="Skills" className="bg-gradient-to-r from-yellow-100 to-white py-24">
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto text-center">
                    <h1 className="sm:text-4xl text-3xl font-extrabold title-font text-gray-900 mb-6">
                        My Skills
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600 mb-12">
                        <q>Skilled in HTML, CSS, TypeScript, and Next.js, with expertise in building responsive and scalable web applications. Passionate about delivering high-quality solutions and staying up-to-date with the latest web development trends and technologies.</q>
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        {/* Skill Card 1 */}
                        <div
                            className="p-6 flex flex-col items-center text-center bg-white rounded-lg shadow-lg transition-transform transform  hover:scale-105 hover:shadow-2xl"
                            data-aos="fade-up"
                        >
                            <FaHtml5 className="h-24 w-24 text-orange-600 mb-4 transition-transform transform hover:rotate-12" />
                            <h2 className="text-gray-900 text-xl font-semibold mb-2">
                                HTML
                            </h2>
                            <p className="text-gray-600 text-sm">
                                Building structured and semantic web pages.
                            </p>
                        </div>
                        
                        {/* Skill Card 2 */}
                        <div
                            className="p-6 flex flex-col items-center text-center bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <FaCss3Alt className="h-24 w-24 text-blue-600 mb-4 transition-transform transform hover:rotate-12" />
                            <h2 className="text-gray-900 text-xl font-semibold mb-2">
                                CSS
                            </h2>
                            <p className="text-gray-600 text-sm">
                                Crafting beautiful and responsive designs.
                            </p>
                        </div>
                        
                        {/* Skill Card 3 */}
                        <div
                            className="p-6 flex flex-col items-center text-center bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <SiTypescript className="h-24 w-24 text-blue-600 mb-4 transition-transform transform hover:rotate-12" />
                            <h2 className="text-gray-900 text-xl font-semibold mb-2">
                                TypeScript
                            </h2>
                            <p className="text-gray-600 text-sm">
                                Enhancing JavaScript with type safety.
                            </p>
                        </div>
                        
                        {/* Skill Card 4 */}
                        <div
                            className="p-6 flex flex-col items-center text-center bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <RiNextjsFill className="h-24 w-24 text-gray-800 mb-4 transition-transform transform hover:rotate-12" />
                            <h2 className="text-gray-900 text-xl font-semibold mb-2">
                                Next.js
                            </h2>
                            <p className="text-gray-600 text-sm">
                                Building fast and scalable React applications.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skill;
