"use client";
import Image from "next/image";

import pic from "../images/mahaD2.jpg";
import Contact from "../contact/page";
import Projects from "../projects/page";
import AboutUs from "../about/page";

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
              Web developer
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

        {/* Image */}
        <div className="mt-8 sm:mt-0">
          <Image
            src={pic}
            alt="pic"
            height={500}
            width={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Other Sections */}
      <AboutUs />
      <Projects />
      <Contact />
    </div>
  );
}