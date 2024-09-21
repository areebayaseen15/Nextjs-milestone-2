import Link from "next/link";
import React from "react";
import Image from "next/image";

function Navbar2() {
    return (
        //   NavBar

        <div className="bg-white shadow-md z-50 sticky top-0">
            <header className="text-gray-600 body-font bg-yellow-50">
                <div className="container mx-auto flex flex-wrap p-4 md:p-6 flex-col md:flex-row items-center">
                    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl font-mono text-yellow-600">
                            <a href="#Home">
                                <Image
                                    className="object-cover object-center rounded-full border-2 border-yellow-600"
                                    alt="Profile pic"
                                    width={150}
                                    height={150}
                                    src={require("../../../public/Assest/Pictures/myPort.jpeg")}
                                />
                            </a>
                        </span>
                    </div>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link href={"/"} className="mr-5 hover:text-pink-600 font-semibold transition-colors duration-300">Home</Link>
                        <Link href={"/HTML"} className="mr-5 hover:text-pink-600 font-semibold transition-colors duration-300">Html</Link>
                        <Link href={"/CSS"} className="mr-5 hover:text-pink-600 font-semibold transition-colors duration-300">Css</Link>
                        <Link href={"/typescript"} className="mr-5 hover:text-pink-600 font-semibold transition-colors duration-300">Typescript</Link>
                        <Link href={"/NextJs"} className="mr-5 hover:text-pink-600 font-semibold transition-colors duration-300">Nextjs</Link>
                    </nav>
                    
                </div>
            </header>
        </div>
    );
}

export default Navbar2;
