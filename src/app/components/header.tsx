"use client";

import { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

export default function SideBar() {
  const [IsOpen, SetIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    const isDark = savedMode ? JSON.parse(savedMode) : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
    document.body.classList.toggle("dark", isDark);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle("dark", newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    SetIsOpen(false);
  };

  return (
    <div>
      {/* Desktop Sidebar */}
      <div className={`navbar hidden lg:block flex h-screen top-0 left-0 justify-start flex-col z-10 fixed items-center w-28 shadow-lg ${darkMode ? "bg-gray-900" : "bg-white"}`}>
        <div className="bg-blue-700 w-full flex justify-center items-center h-12">
          <h1 className="font-extrabold text-sm text-white">Mahad Usman</h1>
        </div>
        <div className="flex justify-center items-center mt-4">
          <ul className="flex justify-center items-center align-center flex-col gap-12">
         <button
              onClick={() => scroll("section1")}
              className={`font-extrabold text-sm ${darkMode ? "text-blue-300 hover:text-blue-100" : "text-blue-400 hover:text-blue-600"}`}
            >
              <FaHome className="ml-2 h-8 w-8" />
              Home
            </button>
            <button
              onClick={() => scroll("section2")}
              className={`font-extrabold text-sm ${darkMode ? "text-blue-300 hover:text-blue-100" : "text-blue-400 hover:text-blue-600"}`}
            >
              <FaBookOpenReader className="ml-4 h-8 w-8" />
              About Me
            </button>
            <button
              onClick={() => scroll("section3")}
              className={`font-extrabold text-sm ${darkMode ? "text-blue-300 hover:text-blue-100" : "text-blue-400 hover:text-blue-600"}`}
            >
              <GrProjects className="ml-[11px] h-8 w-8" />
              Projects
            </button>
            <button
              onClick={() => scroll("section4")}
              className={`font-extrabold text-sm ${darkMode ? "text-blue-300 hover:text-blue-100" : "text-blue-400 hover:text-blue-600"}`}
            >
              <MdContactPhone className="ml-2 h-8 w-8" />
              Contact
            </button>
          </ul>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className={`flex justify-between items-center flex-row block lg:hidden p-2 w-full h-14 shadow-md fixed z-20 mr-12 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
        <div>
          <h1 className={`text-blue-700 text-2xl sm:text-3xl font-extrabold ${darkMode ? "text-blue-300" : ""}`}>
            Mahad Usman
          </h1>
        </div>
        <div className="flex flex-row items-left gap-2">
          <button onClick={toggleDarkMode}>
            {darkMode ? (
              <MdOutlineLightMode className="h-6 w-6 shadow-xs text-yellow-300 hover:text-yellow-100" />
            ) : (
              <MdOutlineDarkMode className="h-6 w-6 shadow-xs text-gray-900 hover:text-gray-600" />
            )}
          </button>
          <button onClick={() => SetIsOpen(!IsOpen)}>
            <RxHamburgerMenu className={`h-6 w-6 border rounded ${darkMode ? "border-blue-300 bg-blue-600 text-white" : "border-blue-900 bg-blue-400 text-white"}`} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Backdrop */}
      <div
        className={`mobile-sidebar-backdrop ${IsOpen ? "open" : ""}`}
        onClick={() => SetIsOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${IsOpen ? "open" : ""} ${darkMode ? "bg-gray-900" : "bg-white"}`}>
        <ul className="flex justify-center items-center align-center flex-col gap-12">
          <li
            onClick={() => scroll("section1")}
            className={`font-extrabold text-sm ${darkMode ? "text-blue-300 hover:text-blue-100" : "text-blue-400 hover:text-blue-600"} cursor-pointer`}
          >
            <FaHome className="ml-2 h-8 w-8" />
            Home
          </li>
          <li
            onClick={() => scroll("section2")}
            className={`font-extrabold text-sm ${darkMode ? "text-blue-300 hover:text-blue-100" : "text-blue-400 hover:text-blue-600"} cursor-pointer`}
          >
            <FaBookOpenReader className="ml-[6px] h-8 w-8" />
            About
          </li>
          <li
            onClick={() => scroll("section3")}
            className={`font-extrabold text-sm ${darkMode ? "text-blue-300 hover:text-blue-100" : "text-blue-400 hover:text-blue-600"} cursor-pointer`}
          >
            <GrProjects className="ml-[10px] h-8 w-8" />
            Projects
          </li>
          <li
            onClick={() => scroll("section4")}
            className={`font-extrabold text-sm ${darkMode ? "text-blue-300 hover:text-blue-100" : "text-blue-400 hover:text-blue-600"} cursor-pointer`}
          >
            <MdContactPhone className="ml-2 h-8 w-8" />
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}