"use client";

import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";


export default function SideBar() {
  const [IsOpen, SetIsOpen] = useState(false);

  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    SetIsOpen(false); // Close the mobile sidebar after scrolling
  };

  return (
    <div>
      {/* Desktop Sidebar */}
      <div className="navbar hidden lg:block flex h-screen top-0 left-0 justify-start flex-col z-10 fixed items-center w-28 shadow-lg bg-white">
        <div className="bg-blue-700 w-full flex justify-center items-center h-12">
          <h1 className="font-extrabold text-sm text-white">Mahad Usman</h1>
        </div>
        <div className="flex justify-center items-center mt-4">
          <ul className="flex justify-center items-center align-center flex-col gap-12">
            <button
              onClick={() => scroll("section1")}
              className="font-extrabold text-sm text-blue-400 hover:text-blue-600"
            >
           <FaHome className="ml-2 h-8 w-8" />
              Home
            </button>
            <button
              onClick={() => scroll("section2")}
              className="font-extrabold text-sm text-blue-400 hover:text-blue-600"
            >
              <FaBookOpenReader className="ml-4 h-8 w-8" />
              About Me
            </button>
            <button
              onClick={() => scroll("section3")}
              className="font-extrabold text-sm text-blue-400 hover:text-blue-600"
            >
              <GrProjects className="ml-[11px] h-8 w-8" />
              Projects
            </button>
            <button
              onClick={() => scroll("section4")}
              className="font-extrabold text-sm text-blue-400 hover:text-blue-600"
            >
              <MdContactPhone className="ml-2 h-8 w-8" />
              Contact
            </button>
          </ul>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex justify-between items-center flex-row block lg:hidden p-2 w-full h-14 shadow-md fixed bg-white z-20 mr-12">
        <div>
          <h1 className="text-blue-700 text-2xl sm:text-3xl font-extrabold">
            Mahad Usman
          </h1>
        </div>
        <div className="items-left">
          <button onClick={() => SetIsOpen(!IsOpen)}>
            <RxHamburgerMenu className="text-white h-6 w-6 border border-blue-900 rounded bg-blue-400" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Backdrop */}
      <div
        className={`mobile-sidebar-backdrop ${IsOpen ? "open" : ""}`}
        onClick={() => SetIsOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${IsOpen ? "open" : ""}`}>
        <ul className="flex justify-center items-center align-center flex-col gap-12">
          <li
            onClick={() => scroll("section1")}
            className="font-extrabold text-sm text-blue-400 hover:text-blue-600 cursor-pointer"
          >
            <FaHome className="ml-2 h-8 w-8" />
            Home
          </li>
          <li
            onClick={() => scroll("section2")}
            className="font-extrabold text-sm text-blue-400 hover:text-blue-600 cursor-pointer"
          >
            <FaBookOpenReader className="ml-2 h-8 w-8" />
            About
          </li>
          <li
            onClick={() => scroll("section3")}
            className="font-extrabold text-sm text-blue-400 hover:text-blue-600 cursor-pointer"
          >
            <GrProjects className="ml-[11px] h-8 w-8" />
            Projects
          </li>
          <li
            onClick={() => scroll("section4")}
            className="font-extrabold text-sm text-blue-400 hover:text-blue-600 cursor-pointer"
          >
            <MdContactPhone className="ml-2 h-8 w-8" />
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}