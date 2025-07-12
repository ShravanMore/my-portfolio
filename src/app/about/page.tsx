import React from "react";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-400 mb-12">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Description */}
          <div className="space-y-6 text-gray-300">
            <p>
              I&#39;m a final-year Artificial Intelligence and Data Science
              student at Thadomal Shahani Engineering College, driven by a
              strong passion for building impactful digital experiences.
            </p>
            <p>
              Over the years, I’ve explored various aspects of software
              development and grown through hands-on projects, collaborative
              work, and internship experience.
            </p>
            <p>
              Previously a core member of GDG TSEC and currently interning as a
              Frontend Developer at Testriq QA Lab, I&#39;m always eager to
              learn, solve real-world problems, and push my creative and
              technical limits.
            </p>
            <p>
              Beyond tech, I enjoy playing video games, solving Rubik&#39;s
              Cubes, and editing travel videos — always seeking a balance
              between logic and creativity.
            </p>
          </div>

          {/* Right: Stats */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-xl p-4 pl-10">
              <h1 className="text-sm text-blue-400 font-bold">Experiences:</h1>
              <p className="font-semibold pt-5">
                Frontend Developer at Testriq QA Lab LLP
              </p>
              <p className="text-sm text-gray-400">July 2025 - August 2025</p>
              <p className="font-semibold pt-5">
                Google Developers Group - TSEC
              </p>
              <p className="text-sm text-gray-400">July 2024 - May 2025</p>
            </div>

            {/* Education */}
            <div className="bg-gray-800 rounded-xl p-4 pl-10">
              <h1 className="text-sm text-blue-400 font-bold">Education:</h1>

              <p className="font-semibold pt-5">
                B.E in AI & Data Science (CGPA: 9.01)
              </p>
              <p className="text-sm text-gray-400">
                Thadomal Shahani Engineering College, 2022–2026
              </p>

              <p className="font-semibold pt-5">HSC - Computer Science</p>
              <p className="text-sm text-gray-400">Pace Jr Science College</p>

              <p className="font-semibold pt-5">SSC (92.60%)</p>
              <p className="text-sm text-gray-400">St. Xaviers High School</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
