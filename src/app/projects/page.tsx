"use client"
// import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import pic1 from "../images/pic1.png"
import pic2 from "../images/pic2.png"
import pic3 from "../images/pic3.png"
import pic4 from "../images/pic4.png"
import pic5 from "../images/pic5.png"
import pic6 from "../images/pic6.png"
import pic7 from "../images/pic7.png"
import pic8 from "../images/pic8.jpg"
import pic9 from "../images/pic9.webp"
import pic10 from "../images/pic10.webp"
import pic11 from '../images/pic11.jpg'
import pic12 from '../images/pic12.jpg'
import { StaticImageData } from "next/image";
import { useState } from "react";
import { useEffect } from "react";
type Idata = {
  id: number
  title: string
  img: StaticImageData
  githublink: string
}
let data: Idata[] = [
  {
    id: 0,
    title: "CLI ATM",
    img: pic7,
    githublink: "https://github.com/Mahad-Usman-15/CLI-ATM"
  },
  {
    id: 1,
    title: "Currency Convertor",
    img: pic1,
    githublink: "https://github.com/Mahad-Usman-15/CurrencyConvertor"
  },
  {
    id: 2,
    title: "BMI Calculator",
    img: pic2,
    githublink: "https://github.com/Mahad-Usman-15/BMI-calculator"
  },
  {
    id: 3,
    title: "Blogging Website",
    img: pic3,
    githublink: "https://github.com/Mahad-Usman-15/Blogging-website"
  },
  {
    id: 4,
    title: "Todo List",
    img: pic4,
    githublink: "https://github.com/Mahad-Usman-15/TodoList"
  },
  {
    id: 5,
    title: "Number Guessing Game",
    img: pic5,
    githublink: "https://github.com/Mahad-Usman-15/NumberGuessingGame"
  },
  {
    id: 6,
    title: "Calculator",
    img: pic6,
    githublink: "https://github.com/Mahad-Usman-15/Calculator"
  },
  {
    id: 7,
    title: "Word Counter",
    img: pic8,
    githublink: "https://github.com/Mahad-Usman-15/wordcounter"
  },
  {
    id: 8,
    title: "Resume Builder",
    img: pic9,
    githublink: "https://github.com/Mahad-Usman-15/HackathonMilestone"
  },
  {
    id: 9,
    title: "Workout System",
    img: pic10,
    githublink: "https://github.com/Mahad-Usman-15/Workout-"
  },
  {
    id: 10,
    title: "Mathematics Tables",
    img: pic11,
    githublink: "https://github.com/Mahad-Usman-15/tables"
  }
  ,
  {
    id: 11,
    title: "Ecommerce Website UI-Design",
    img: pic12,
    githublink: "https://github.com/Mahad-Usman-15/Hackathon2"
  },
];

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      // Trigger the animation after the component mounts
      setIsVisible(true);
    }, []);
  
    return (
      <div id="section3" className="bg-gray-100 flex justify-center items-center lg:items-start flex-col mt-12 lg:mt-4">
        <div >
        <h1 className="text-2xl sm:text-3xl p-2 md:text-4xl ml-0 sm:ml-32  lg:text-5xl font-extrabold text-blue-400">My Projects</h1>
        
        </div>
         <div className={`flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 p-3 ml-0 lg:ml-28 ${isVisible ? "page-fade-in" : "opacity-0"}`}>
       
        {data.map((proj) => (
          <div
            key={proj.id}
            className="bg-white shadow-[0_4px_8px_-3px_rgba(0,0,0,0.3)] border p-2 w-full max-w-[200px] sm:max-w-[240px] font-[sans-serif] overflow-hidden mx-auto mt-3"
          >
            <div className="min-h-[140px]">
              <Image
                src={proj.img}
                className="w-full h-auto rounded-lg"
                alt={proj.title}
                width={240} // Add width and height for Next.js Image
                height={140}
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="text-base font-bold">{proj.title}</h3>
              <Link href={proj.githublink}>
                <button
                  type="button"
                  className="mt-3 px-3 py-1.5 w-full rounded-lg text-white text-sm tracking-wide font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700"
                >
                  GitHub Link
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
     
    );
  }









{/* <div
            key={proj.id}
            className="flex flex-col items-center w-full sm:w-60 md:w-72 lg:w-80 text-center"
          >
            <Image
              src={proj.img}
              alt={proj.title}
              height={200}
              width={150}
              className="image"
            />
            <div className="text-xl mt-2">
              <h1>{proj.title}</h1>
            </div>
            <div className="flex items-center justify-center mt-2">
              <Link href={proj.githublink}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded button">
                  GitHub Link
                </button>
              </Link>
            </div>
          </div> */}