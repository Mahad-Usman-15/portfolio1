import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 flex flex-col sm:flex-row justify-between items-center text-white font-sans tracking-wide p-4 sm:p-6">
      {/* Social Icons */}
      <div className="flex justify-center items-center gap-6 sm:gap-8 mb-4 sm:mb-0 ml-0 lg:ml-32 ">
        <Link href="https://github.com/Mahad-Usman-15">
          <FaGithub className="w-6 h-6 sm:w-8 sm:h-8 hover:text-blue-300 transition-colors" />
        </Link>
       
      </div>

      {/* Copyright Text */}
      <div className="text-center sm:text-right text-sm sm:text-base">
        <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  );
}