"use client"
import React, { useEffect } from 'react';
import Image from "next/image";
import Navbar2 from '../Components/nav2';
import Aos from 'aos';
import 'aos/dist/aos.css';

const TypeScriptProjects = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, 
      easing: 'ease-in-out', 
    });
  }, []);
  return (
    
    <><Navbar2 /><div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-10">
          My TypeScript Projects
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* card1 */}
          <div data-aos="fade-up" className="bg-gradient-to-r from-indigo-200 via-white to-indigo-200 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105">
            <Image
              src={require("../../../public/Assest/Pictures/calculator.jpeg")}
              alt="Project 1"
              className="w-full h-48 object-cover  ease-in-out transform hover:scale-105" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">Cli CALCULATOR</h2>
              <p className="text-gray-600 mt-4">
                The TypeScript CLI Calculator is a command-line application developed using TypeScript, designed to perform basic arithmetic operations like addition, subtraction, multiplication, and division.
              </p>
              <a href="#" className="inline-block mt-4 text-pink-500 font-bold hover:text-yellow-600">npx ar15-simple-calculator</a><br />
              <br />  <a
                href="https://github.com/areebayaseen15/Typescript-NodeProject00-Cli-Calculator.git"
                className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-500 transition duration-300 font-medium"
              >
                github Link
              </a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div data-aos="fade-up" className="bg-gradient-to-r from-orange-200 via-orange-100 to-orange-200 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105">
            <Image
              src={require("../../../public/Assest/Pictures/todos.jpeg")}
              alt="Project 1"
              className="w-full h-48 object-cover  ease-in-out transform hover:scale-105" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">Cli TODOS APP</h2>
              <p className="text-gray-600 mt-4">
                The TypeScript CLI To-Do List Application is a command-line tool built to help users efficiently manage their daily tasks. This project showcases my ability to develop robust, interactive, and user-friendly CLI applications using TypeScript.

              </p>
              <a href="#" className="inline-block mt-4 text-pink-500 font-bold hover:text-yellow-600">npx npx-todo-app</a><br />
              <br />  <a
                href="https://github.com/areebayaseen15/typescript-NodeProject03-Todos.git"
                className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-500 transition duration-300 font-medium"
              >
                github Link
              </a>
            </div>
          </div>

          {/* Project Card 3 */}
          <div data-aos="fade-up" className="bg-gradient-to-r from-yellow-200 via-white to-yellow-100 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105">
            <Image
              src={require("../../../public/Assest/Pictures/atm.jpg")}
              alt="Project 1"
              className="w-full h-48 object-cover  ease-in-out transform hover:scale-105 " />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">Cli ATM</h2>
              <p className="text-gray-600 mt-4">
                The TypeScript CLI ATM Application is a fully functional command-line program designed to simulate the core features of an ATM machine. This project demonstrates my ability to develop secure, user-friendly financial applications using TypeScript, showcasing my skills in working with logic, data structures, and CLI interactivity.
              </p>
              <a href="#" className="inline-block mt-4 text-pink-500 font-bold hover:text-yellow-600">npx ar15-atm</a><br />
              <br />  <a
                href="https://github.com/areebayaseen15/Typescript-NodeProject02-ATM.git"
                className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-500 transition duration-300 font-medium"
              >
                github Link
              </a>

            </div>
          </div>
          {/* //Card 4 */}
          <div data-aos="fade-up" className="bg-gradient-to-r from-red-200 via-pink-100 to-red-200 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105">
            <Image
              src={require("../../../public/Assest/Pictures/guessing number.jpeg")}
              alt="Project 1"
              className="w-full h-48 object-cover ease-in-out transform hover:scale-105 " />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">CLI GUESSING NUMBER GAME</h2>
              <p className="text-gray-600 mt-4">
                The TypeScript CLI Number Guessing Game is an interactive command-line game where players try to guess a randomly generated number within a specified range. This project highlights my ability to build engaging and interactive CLI applications using TypeScript, focusing on user experience, logic, and input handling.

              </p>
              <a href="#" className="inline-block mt-4 text-pink-500 font-bold hover:text-yellow-600">npx  ar15-cli-guessing-number</a><br />
              <br />   <a
                href="https://github.com/areebayaseen15/Typescript-NodeProject01-Cli-Guessing-Game.git"
                className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-500 transition duration-300 font-medium"
              >
                github Link
              </a>
            </div>
          </div>
          {/* cARD 5 */}
          <div data-aos="fade-up" className="bg-gradient-to-r from-gray-400 via-gray-100 to-gray-300 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105">
            <Image
              src={require("../../../public/Assest/Pictures/currencyconvertor.png")}
              alt="Project 1"
              className="w-full h-48 object-cover  ease-in-out transform hover:scale-105 " />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">Cli CURRENCYY CONVERTOR</h2>
              <p className="text-gray-600 mt-4">
                The TypeScript CLI Currency Converter is a command-line tool that allows users to convert between different currencies in real-time. This project demonstrates my ability to integrate external APIs and work with real-time data in a CLI environment using TypeScript.
              </p>
              <a href="#" className="inline-block mt-4 text-pink-500 font-bold hover:text-yellow-600">Npx ar15-cli-currency-convertor</a><br />
              <br /> <a
                href="https://github.com/areebayaseen15/Typescript-NodeProject04_Currency-convertor.git"
                className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-500 transition duration-300 font-medium"
              >
                github Link
              </a>
            </div>
          </div>

          {/* Card 6*/}
          <div data-aos="fade-up" className="bg-gradient-to-r from-gray-200 via-sky-100 to-gray-200 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105">
            <Image
              src={require("../../../public/Assest/Pictures/wordscounter.jpeg")}
              alt="Project 1"
              className="w-full h-48 object-cover  ease-in-out transform hover:scale-105 " />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">Cli WORDS COUNTER</h2>
              <p className="text-gray-600 mt-4">
                The TypeScript CLI Word Counter is a command-line tool that counts the number of words, characters, and sentences in a given text input. This project showcases my ability to process and analyze text in a CLI environment using TypeScript.
              </p>
              <a href="#" className="inline-block mt-4 text-pink-500 font-bold hover:text-yellow-600">npx ar15-words-counter</a><br />
              <br />  <a
                href="https://github.com/areebayaseen15/Project-05-Words-Counter.git"
                className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-500 transition duration-300 font-medium"
              >
                github Link
              </a>
            </div>
          </div>
          {/* Card 7 */}

          <div data-aos="fade-up" className="bg-gradient-to-r from-red-400 via-pink-100 to-red-300 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105">
            <Image
              src={require("../../../public/Assest/Pictures/countdown.gif")}
              alt="Project 9"
              className="w-full h-48 object-cover ease-in-out transform hover:scale-105 " />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">Cli COUNTDOWN TIMER</h2>
              <p className="text-gray-600 mt-4">
                The TypeScript CLI Countdown Timer is a command-line application that provides a simple yet effective countdown timer for various tasks such as study sessions, workouts, or cooking. This project highlights my ability to manage time-based operations and user interaction within a CLI environment using TypeScript.
              </p>
              <a href="#" className="inline-block mt-4 text-pink-500 font-bold hover:text-yellow-600">npx ar15-countdown</a><br />
              <br />  <a
                href="https://github.com/areebayaseen15/Typescript-Project09-CountDown.git"
                className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-500 transition duration-300 font-medium"
              >
                github Link
              </a>
            </div>
          </div>

          {/* Card 8 */}
          <div  data-aos="fade-up" className="bg-gradient-to-r from-red-200 via-blue-100 to-red-200 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105">
            <Image
              src={require("../../../public/Assest/Pictures/adventure game.jpeg")}
              alt="Project 7"
              className="w-full h-48 object-cover  ease-in-out transform hover:scale-105" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">Cli ADVENTURE GAME</h2>
              <p className="text-gray-600 mt-4">
                This project showcases a text-based adventure game developed using TypeScript, highlighting modern coding practices and robust design principles. Players will embark on an immersive journey where their choices shape the outcome of their adventure.
              </p>
              <a href="#" className="inline-block mt-4 text-pink-500 font-bold hover:text-yellow-600">npx ar15-adventur-game</a><br />
              <br />  <a
                href="https://github.com/areebayaseen15/Typescript-NodeProject-07-Adventure-Game.git"
                className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-500 transition duration-300 font-medium"
              >
                github Link
              </a>
            </div>
          </div>
          {/* Card 8*/}
          <div  data-aos="fade-up" className="bg-gradient-to-r from-green-200 via-green-100 to-green-200 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105">
            <Image
              src={require("../../../public/Assest/Pictures/Webp.net-compress-image.jpg")}
              alt="Project 8"
              className="w-full h-48 object-cover  ease-in-out transform hover:scale-105 " />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">Cli QUIZZ APP</h2>
              <p className="text-gray-600 mt-4">
                Dive into the world of interactive learning with this command-line quiz application built using TypeScript!

                This project demonstrates a CLI-based quiz app where users can test their knowledge on various topics through a series of questions. Utilizing TypeScript ensures robust type safety and enhances the maintainability of the application.
              </p>
              <a href="#" className="inline-block mt-4 text-pink-500 font-bold hover:text-yellow-600">npx quiz-system-by-ar15</a><br />
              <br />   <a
                href="https://github.com/areebayaseen15/Typescript-Project08-quizz-System.git"
                className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-500 transition duration-300 font-medium"
              >
                github Link
              </a>
            </div>
          </div>

          {/* Card 9 */}
          <div  data-aos="fade-up" className="bg-gradient-to-r from-indigo-200 via-white to-indigo-200 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105">
            <Image
              src={require("../../../public/Assest/Pictures/studentmanagement.jpeg")}
              alt="Project 6"
              className="w-full h-48 object-cover ease-in-out transform hover:scale-105 " />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">Cli STUDENT MANAGMENT SYSTEM</h2>
              <p className="text-gray-600 mt-4">
                The TypeScript CLI Student Management System is a command-line tool designed to manage student records efficiently. This project showcases my ability to develop robust and user-friendly management systems using TypeScript, featuring a variety of operations for adding, updating, and viewing student data in a simple, intuitive interface.
              </p>
              <a href="#" className="inline-block mt-4 text-pink-500 font-bold hover:text-yellow-600">npx ar15-student-management-system</a><br />
              <br />  <a
                href="https://github.com/areebayaseen15/Typescript_Work/tree/main/Typescript%20Node-Projects/Project%2006%20Student-management-system"
                className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-500 transition duration-300 font-medium"
              >
                github Link
              </a>
            </div>
          </div>

          {/* Card 10 */}

          <div  data-aos="fade-up" className="bg-gradient-to-r from-yellow-200 via-orange-100 to-yellow-200 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105">
            <Image
              src={require("../../../public/Assest/Pictures/oop.jpeg")}
              alt="Project 10"
              className="w-full h-48 object-cover  ease-in-out transform hover:scale-105" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">Cli OOP APP</h2>
              <p className="text-gray-600 mt-4">
                This project showcases the use of OOP principles to design a scalable and maintainable CLI app. Leveraging TypeScript, the application demonstrates how OOP concepts such as classes, inheritance, and encapsulation can be effectively implemented in a CLI environment.
              </p>
              <a href="#" className="inline-block mt-4 text-pink-500 font-bold hover:text-yellow-600">npx object-programingar-15</a><br />
              <br /> <a
                href="https://github.com/areebayaseen15/Typescript-Project10-OOP.git"
                className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-500 transition duration-300 font-medium"
              >
                github Link
              </a>
            </div>
          </div>

          {/* Card 11 */}
          <div  data-aos="fade-up" className="bg-gradient-to-r from-purple-200 via-white to-purple-200 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105">
            <Image
              src={require("../../../public/Assest/Pictures/bank.jpeg")}
              alt="Project 11"
              className="w-full h-48 object-cover  ease-in-out transform hover:scale-105 " />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">Cli BANK SYSTEM</h2>
              <p className="text-gray-600 mt-4">
                This project presents a robust banking system implemented via a command-line interface, leveraging OOP to ensure a clean, scalable, and maintainable codebase. It allows users to manage bank accounts, perform transactions, and view account details through a text-based interface.
              </p>
              <a href="#" className="inline-block mt-4 text-pink-500 font-bold hover:text-yellow-600">mybank-ar15</a><br />
              <br /> <a
                href="https://github.com/areebayaseen15/Typescript-Project-11-BankSystem.gitt"
                className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-500 transition duration-300 font-medium"
              >
                github Link
              </a>
            </div>
          </div>
          {/*
                 
                           {/* Card 12 */}
          <div  data-aos="fade-up" className="bg-gradient-to-r from-purple-400 via-yellow-100 to-purple-400 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105">
            <Image
              src={require("../../../public/Assest/Pictures/eid Mubarak.webp")}
              alt="Project 1"
              className="w-full h-48 object-cover  ease-in-out transform hover:scale-105" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">EID MUBARK WISH</h2>
              <p className="text-gray-600 mt-4">
                I created this typescript Cli greet Eid Mubarak for greeting my belovedand respectable teachers of GIAIC
                .This project was done on the day of Eid which shows my love for coding.
              </p>
              <br />  <a
                href="#"
                className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-500 transition duration-300 font-medium"
              >
                github Link
              </a>
            </div>
          </div>

          {/* Card 13 */}
          <div data-aos="fade-up" className="bg-gradient-to-r from-orange-200 via-white to-orange-200 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105">
            <Image
              src={require("../../../public/Assest/Pictures/birthday wish.gif")}
              alt="Project 1"
              className="w-full h-48 object-cover ease-in-out transform hover:scale-105 " />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">Cli BIRTHDAY WISh</h2>
              <p className="text-gray-600 mt-4">
                I generated this command line birthday wisher on my birthday while learning typescript to wish myself
                HAPPY BIRTHDAY in a programmer style.I made it cli and published to npm for others to also use it to wish
                their beloved ones.
              </p>
              <a href="#" className="inline-block mt-4 text-pink-500 font-bold hover:text-yellow-600">npx ar15-atm</a><br />
              <br />   <a
                href="https://github.com/areebayaseen15/birthday-Wisher.git"
                className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-500 transition duration-300 font-medium"
              >
                github Link
              </a>
            </div>
          </div>

          {/* card 14 */}
          <div  data-aos="fade-up" className="bg-gradient-to-r from-yellow-200 via-white to-yellow-200 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105">
            <Image
              src={require("../../../public/Assest/Pictures/45-assignment.gif")}
              alt="Project 1"
              className="w-full h-48 object-cover  ease-in-out transform hover:scale-105" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">Typescript 45 assignments questions</h2>
              <p className="text-gray-600 mt-4">
                These are the first Assignments Question I started solving in my programming journey.these are basically
                problem solving and logic building quuestiions of typescript.These Questions are very
                closed to my heart as it helped me to stand out in the class.
              </p>
              <br />  <a
                href="https://github.com/areebayaseen15/typescript-45-assignment-questions.git"
                className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-500 transition duration-300 font-medium"
              >
                github Link
              </a>
            </div>
          </div>

          {/* card 15 */}
          <div  data-aos="fade-up"  className="bg-gradient-to-r from-indigo-500 via-indigo-100 to-indigo-500 shadow-xl rounded-xl  ease-in-out transform hover:scale-105">
            <Image
              src={require("../../../public/Assest/Pictures/100days.jpg")}
              alt="Project 1"
              className="w-full h-48 object-cover  ease-in-out transform hover:scale-105" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">100 DAYS OF CODING</h2>
              <p className="text-gray-600 mt-4  ease-in-out transform hover:scale-105">
                This 100 days of coding challenge were assigned to us by or stuedent Ambassador Sir Asharib Ali
                for hands on practice of coding.I also tried to be the participator of this challenge And have done almost half
                of days so far.This challenge helped me think critically and enhane my skills of problem solving.
              </p>
              <br />  <a
                href="https://github.com/areebayaseen15/Typescript-100days_Of_Coding_ChallengebyAsharibAli.git"
                className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-500 transition duration-300 font-medium"
              >
                github Link
              </a>
            </div>
          </div>

        </div>
      </div>
    </div></>
  );
};

export default TypeScriptProjects;
