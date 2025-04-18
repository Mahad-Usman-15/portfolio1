"use client"
import Link from "next/link";
import Image from "next/image";
import pic1 from "../../images/pic1.png"
import pic2 from "../../images/pic2.png"
import pic3 from "../../images/pic3.png"
import pic4 from "../../images/pic4.png"
import pic5 from "../../images/pic5.png"
import pic6 from "../../images/pic6.png"
import pic7 from "../../images/pic7.png"
import pic8 from "../../images/pic8.jpg"
import pic9 from "../../images/pic9.webp"
import pic10 from "../../images/pic10.webp"
import pic11 from '../../images/pic11.jpg'
import pic12 from '../../images/pic12.jpg'
import { StaticImageData } from "next/image";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { use } from "react";
type Idata = {
  id: number;
  title: string;
  img: StaticImageData;
  githublink: string;
  slug: string;
};

const data: Idata[] = [
  {
    id: 0,
    title: "CLI ATM",
    img: pic7,
    githublink: "https://github.com/Mahad-Usman-15/CLI-ATM",
    slug: "typescript-projects",
  },
  {
    id: 1,
    title: "Currency Convertor",
    img: pic1,
    githublink: "https://github.com/Mahad-Usman-15/CurrencyConvertor",
    slug: "typescript-projects",
  },
  {
    id: 2,
    title: "BMI Calculator",
    img: pic2,
    githublink: "https://github.com/Mahad-Usman-15/BMI-calculator",
    slug: "typescript-projects",
  },
  {
    id: 3,
    title: "Blogging Website",
    img: pic3,
    githublink: "https://github.com/Mahad-Usman-15/Blogging-website",
    slug: "next-js-projects",
  },
  {
    id: 4,
    title: "Todo List",
    img: pic4,
    githublink: "https://github.com/Mahad-Usman-15/TodoList",
    slug: "typescript-projects",
  },
  {
    id: 5,
    title: "Number Guessing Game",
    img: pic5,
    githublink: "https://github.com/Mahad-Usman-15/NumberGuessingGame",
    slug: "typescript-projects",
  },
  {
    id: 6,
    title: "Calculator",
    img: pic6,
    githublink: "https://github.com/Mahad-Usman-15/Calculator",
    slug: "typescript-projects",
  },
  {
    id: 7,
    title: "Word Counter",
    img: pic8,
    githublink: "https://github.com/Mahad-Usman-15/wordcounter",
    slug: "typescript-projects",
  },
  {
    id: 8,
    title: "Resume Builder",
    img: pic9,
    githublink: "https://github.com/Mahad-Usman-15/HackathonMilestone",
    slug: "html-css-projects",
  },
  {
    id: 9,
    title: "Workout System",
    img: pic10,
    githublink: "https://github.com/Mahad-Usman-15/Workout-",
    slug: "typescript-projects",
  },
  {
    id: 10,
    title: "Mathematics Tables",
    img: pic11,
    githublink: "https://github.com/Mahad-Usman-15/tables",
    slug: "typescript-projects",
  },
  {
    id: 11,
    title: "Ecommerce Website UI-Design",
    img: pic12,
    githublink: "https://github.com/Mahad-Usman-15/Hackathon2",
    slug: "next-js-projects",
  },
];


export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap the params promise
  const { slug } = use(params);
  
  const filteredProjects = data.filter(
    (proj) => proj.slug.toLowerCase() === slug.toLowerCase()
  );

  if (filteredProjects.length === 0) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <p className="text-xl">Projects coming soon..</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center ">
    <button 
  className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50
             flex items-center justify-center gap-2
             bg-gradient-to-r from-blue-600 to-blue-500 text-white 
             font-medium px-8 py-3 rounded-full shadow-lg
             transition-all duration-300 ease-in-out
             hover:from-blue-700 hover:to-blue-600 hover:shadow-xl
             active:scale-95"
  onClick={() => window.history.back()}
>
< FaLongArrowAltLeft/>

  Back
</button>
<div className={`mt-12 flex flex-row flex-wrap justify-center items-center gap-4 p-3 ml-0 lg:ml-28`}>

{filteredProjects.map((proj) => (
  <div
    key={proj.id}
    className="bg-white shadow-[0_4px_8px_-3px_rgba(0,0,0,0.3)] border p-2 w-full max-w-[200px] sm:max-w-[240px] font-[sans-serif] overflow-hidden mx-auto mt-3"
  >
    <div className="min-h-[140px]">
      <Image
        src={proj.img}
        className="w-full h-auto rounded-lg"
        alt={proj.title}
        width={240}
        height={140}
      />
    </div>
    <div className="p-3 text-center">
      <h3 className="text-base font-bold">{proj.title}</h3>
      <Link
        href={proj.githublink}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-3 px-3 py-1.5 w-full rounded-lg text-white text-sm tracking-wide font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700"
      >
        GitHub Link
      </Link>
    </div>
  </div>
))}
</div>
    </div>
    
  );
}
