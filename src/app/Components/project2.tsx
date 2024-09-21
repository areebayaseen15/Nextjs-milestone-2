"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image"; 
import Link from "next/link";

export default function Project2() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div id="project2">
      <section className="text-gray-600 body-font py-24 bg-gradient-to-r from-pink-100 via-yellow-100 to-white">
        <div className="container px-5 py-24 mx-auto">
          <div
            className="flex flex-col text-center w-full mb-20"
            data-aos="fade-up"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
              "I built these projects to challenge myself and showcase my skills in HTML, CSS, TypeScript, and Next.js. 
              Through hands-on practice and experimentation, I aimed to push my limits and explore the possibilities 
              of modern web development. Each project represents a milestone in my learning journey, demonstrating my
              growth and proficiency in creating responsive, efficient, and user-friendly web applications."
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div
              className="lg:w-1/4 sm:w-1/2 p-4"
              data-aos="flip-left"
            >
              <div className="relative group">
                <Image
                  alt="HTML Assignments"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  src={require("../../../public/Assest/Pictures/html.jpeg")}
                />
                <div className="relative z-10 w-full h-full flex items-center justify-center bg-white bg-opacity-80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <div className="px-8 py-10">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">HTML Assignments</h2>
                    <p className="leading-relaxed text-gray-700 mb-4">
                      The first step of any web developer. I didn't make any projects related to HTML but made some assignments for practice.
                    </p>
                    <Link className="text-indigo-600 font-semibold hover:underline" href="/HTML">
                      View Projects...
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Add similar AOS effects for the other project cards */}
            <div
              className="lg:w-1/4 sm:w-1/2 p-4"
              data-aos="flip-left"
            >
              <div className="relative group">
                <Image
                  alt="CSS Projects"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  src={require("../../../public/Assest/Pictures/css.jpeg")}
                />
                <div className="relative z-10 w-full h-full flex items-center justify-center bg-white bg-opacity-80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <div className="px-8 py-10">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">CSS Projects</h2>
                    <p className="leading-relaxed text-gray-700 mb-4">
                      I created these projects during the learning of CSS. Making these projects, I first experienced creating a web page.
                    </p>
                    <Link className="text-indigo-600 font-semibold hover:underline" href="/CSS">
                      View Projects...
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="lg:w-1/4 sm:w-1/2 p-4"
              data-aos="flip-left"
            >
              <div className="relative group">
                <Image
                  alt="TypeScript Projects"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  src={require("../../../public/Assest/Pictures/type.jpeg")}
                />
                <div className="relative z-10 w-full h-full flex items-center justify-center bg-white bg-opacity-80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <div className="px-8 py-10">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">TypeScript Projects</h2>
                    <p className="leading-relaxed text-gray-700 mb-4">
                      I created these projects during the learning of TypeScript. This is the first programmming language I learned.
                    </p>
                    <Link className="text-indigo-600 font-semibold hover:underline" href="/typescript">
                      View Projects...
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="lg:w-1/4 sm:w-1/2 p-4"
              data-aos="flip-left"
            >
              <div className="relative group">
                <Image
                  alt="Next.js Projects"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  src={require("../../../public/Assest/Pictures/next.jpeg")}
                />
                <div className="relative z-10 w-full h-full flex items-center justify-center bg-white bg-opacity-80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <div className="px-8 py-10">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Next.js Projects</h2>
                    <p className="leading-relaxed text-gray-700 mb-4">
                      I am currently learning Next.Js the framework of react to enhance my web development skills with React.
                    </p>
                    <Link className="text-indigo-600 font-semibold hover:underline" href="/NextJs">
                      View Projects...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
