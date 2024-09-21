"use client"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

export default function Contact() {
  return (
    <div id="contact">
      <section className="text-gray-600 body-font relative bg-gradient-to-r from-yellow-100 to-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12" data-aos="fade-up">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
            <Typewriter
                    options={{
                      strings: ['Contact me if you have any querries.'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2" data-aos="fade-right">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2" data-aos="fade-left">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-2 w-full" data-aos="fade-up">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-2 px-4 resize-none transition duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-2 w-full" data-aos="zoom-in">
                <button className="flex mx-auto text-white bg-pink-600 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg transition duration-300 ease-in-out transform hover:scale-105">
                  Send
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center" data-aos="fade-up">
                <a href="mailto:areebayaseen15@gmail.com" className="flex items-center justify-center text-yellow-500 mb-4">
                  <FaEnvelope className="mr-2" />
                  areebayaseen15@gmail.com
                </a>
                <p className="leading-normal my-5">
                  <FaPhone className="inline mr-2" /> Phone: 381062438
                  <br />
                  <FaMapMarkerAlt className="inline mr-2" /> Saeedabad, Baldia Town, Karachi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
