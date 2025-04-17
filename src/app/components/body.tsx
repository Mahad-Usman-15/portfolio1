"use client";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
<FaGithubSquare />
import pic from "../images/mahaD2.jpg";
import Contact from "../contact/page";
import Projects from "../projects/index";
import AboutUs from "../about/page";
<FaLinkedin />
import Link from "next/link";

export default function Hom() {
  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div >
      {/* Section 1: Hero Section */}
      <div
        id="section1"
        className="flex flex-col sm:flex-row justify-between items-center min-h-screen p-8 lg:ml-32"
      >
        {/* Content */}
        <div className="flex justify-center items-center  lg:items-start  flex-col text-center mt-16 sm:text-left">
          <h3 className="text-2xl text-blue-600">Hello there...</h3>
          <h1 className="text-4xl sm:text-6xl text-blue-900 font-extrabold mt-2">
            Mahad Usman
          </h1>
          <p className="mt-2 text-blue-600 text-2xl">
            I am passionate{" "}
            <span className="typing-animation text-blue-600 font-semibold">
              NextJS Developer
            </span>
          </p>
          <p className="mt-4 text-xl text-blue-600 max-w-md">
            I am specializing in designing and developing responsive, user-friendly
            websites that work seamlessly across all devices. My focus is on
            creating visually appealing, high-performing sites that deliver
            exceptional user experiences.
          </p>
          <div className="flex justify-center items-center flex-row gap-10 mt-4 sm:mr-40">
            <div>
              <button
                onClick={() => scroll("section3")}
                className="w-28 h-12 text-white font-bold bg-blue-900 hover:bg-transparent hover:text-blue-900 hover:border hover:border-blue-900 transition-all duration-300 ease-in-out"
              >
                My Work
              </button>
            </div>
            <div>
              <button
                onClick={() => scroll("section4")}
                className="w-28 h-12 text-blue-900 bg-transparent border border-blue-900 hover:bg-blue-900 hover:text-white font-bold transition-all duration-300 ease-in-out"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
        <div className=" relative mt-8 sm:mt-0">
          <Image
            src={pic}
            alt="pic"
            height={500}
            width={500}
            className="rounded-lg shadow-lg border-4 "
          />
        </div>
          <div className="absolute -top-2 -left-0 mt-10 lg:mt-4 p-2 gap-2">
            <Link href="https://github.com/Mahad-Usman-15"><FaGithubSquare className="w-10 h-10 text-gray-600"/></Link>
            <Link href="https://www.linkedin.com/in/mahad-usman-45497a353/"><FaLinkedin className="w-10 h-10  text-blue-600"/></Link>
          </div>


        </div>
      </div>

      {/* Image */}



      {/* Other Sections */}
      <AboutUs />
      <Projects />
      <Contact />
    </div>
  );
}