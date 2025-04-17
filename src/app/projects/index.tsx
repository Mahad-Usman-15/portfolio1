import { StaticImageData } from "next/image"
import Image from "next/image"
import Typescript from "../images/type.png"
import Nextjs from "../images/next.png"
import Python from "../images/py.png"
import htmlcss from "../images/htmlcss.webp"
import C from "../images/clang.avif"
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link"


type Skills = {
    id: number;
    image: StaticImageData;
    slug: string;
  };
  
  const skills: Skills[] = [
    {
      id: 0,
      image: Nextjs,
      slug: "next-js-projects",
    },
    {
      id: 1,
      image: Typescript,
      slug: "typescript-projects",
    },
    {
      id: 2,
      image: Python,
      slug: "python-projects",
    },
    {
      id: 3,
      image: C,
      slug: "c-projects",
    },
    {
      id: 4,
      image: htmlcss,
      slug: "html-css-projects",
    },
  ];
  
  export default function Projects() {
    return (
      <div id="section3" className="ml-0 lg:ml-32 border-t-2  mt-4 lg:mt-8">
        <h1 className="font-extrabold text-center lg:text-start text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-400 mt-2 mb-4">
          My Projects
        </h1>
        <div className="flex flex-row items-center justify-center flex-wrap gap-6 lg:gap-12">
          {skills.map((item) => (
            <div
              key={item.id}
              className="rounded-lg flex flex-col items-center shadow-lg p-2 w-60 h-46 transform transition-all duration-300 ease-out scale-110 hover:scale-105"
            >
              <Image
                src={item.image}
                alt={item.slug}
                className="object-cover w-full border rounded-none lg:rounded"
                width={240}
                height={140}
              />
              <Link
                href={`/projects/${item.slug}`}
                className="flex flex-row items-center justify-center gap-2 w-full text-blue-900 hover:text-blue-700 bg-white hover:bg-blue-100 rounded-none lg:rounded"
              >
                <span className="items-center p-2">View Projects</span>
                <FaArrowRightLong className="text-blue-900" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }