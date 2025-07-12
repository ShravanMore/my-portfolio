"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6 pb-10 pt-10">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-15">
        {/* Left - Text Section */}
        <div className="text-center md:text-left">
          <p className="text-lg sm:text-xl text-blue-400">Hello, I am</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-blue-300 mt-2">
            <TypeAnimation
              sequence={[
                "Shravan More",
                1500,
                "Student",
                1500,
                "Web Developer",
                1500,
                "React Enthusiast",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            I&#39;m a 4th-year AI &amp; Data Science student with a passion for
            crafting clean, responsive web experiences. Skilled in modern web
            technologies and programming, I love turning ideas into functional,
            user-friendly products.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link href="/projects">
              <button className="bg-gradient-to-br from-blue-400 via-blue-600 to-purple-800 text-white hover:opacity-90 cursor-pointer font-bold px-6 py-3 sm:py-4 rounded-full w-full sm:w-auto">
                View Projects
              </button>
            </Link>
            <a
              href="/Shravan_Resume.pdf" // ✅ Path inside public folder
              download // ✅ Tells browser to download instead of opening
              className="text-white hover:bg-gray-700 cursor-pointer font-semibold px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-full w-full sm:w-auto text-center"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right - Image Section */}
        <div className="flex justify-center">
          <div
            className="w-64 h-64 sm:w-80 sm:h-80 relative rounded-full bg-gradient-to- from-purple-500 to-blue-500 p-1 shadow-[0_0_30px_5px_rgba(59,130,246,0.5)]
 transition-transform duration-300 hover:scale-110"
          >
            <div className="rounded-full overflow-hidden w-full h-full bg-gray-800">
              <Image
                src="/hero.jpeg"
                alt="Profile Picture"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
