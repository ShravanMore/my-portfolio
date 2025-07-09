"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Logo & Hamburger */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">Portfolio</div>
          <button
            className="md:hidden text-gray-300 text-xl"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Links */}
        <ul
          className={`flex-col md:flex-row md:flex md:space-x-8 text-gray-300 transition-all duration-300 ease-in-out ${
            isOpen ? "flex mt-2" : "hidden md:flex"
          }`}
        >
          <li>
            <Link href="/" className="hover:text-blue-300 block py-2">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-300 block py-2">
              About
            </Link>
          </li>
          <li>
            <Link href="/skills" className="hover:text-blue-300 block py-2">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-blue-300 block py-2">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-300 block py-2">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
