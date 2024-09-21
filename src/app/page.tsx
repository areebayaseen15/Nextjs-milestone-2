import Image from "next/image";
import Hero from "./Components/hero";
import Contact from "./Components/contact"
import Skill from "./Components/skill";
import Project2 from "./Components/project2";
import AboutMe from "./Components/About";


export default function Home() {
  return (
    <div>
    <Hero/>
    <AboutMe/>
    <Skill/>

    <Project2/>
    <Contact/>
    </div>
  )
  }