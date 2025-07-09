import React from "react";

const skillsData = [
  {
    title: "Programming Languages 💻",
    items: ["Java", "C", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Tools & IDEs 🛠️",
    items: ["VS Code", "GitHub", "IntelliJ IDEA"],
  },
  {
    title: "Web Development 🌐",
    items: [
      "HTML",
      "CSS",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    title: "Coursework 📚",
    items: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Database Management System (DBMS)",
      "OOPS Concept",
      "Machine Learning",
    ],
  },
  {
    title: "Certifications 🏆",
    items: [
      "Data Structures and Algorithms in Java - Apna College",
      "AWS Cloud Practitioner Essentials",
      "Won 1st prize at JamRang'25 Hackathon for developing Legal Ally",
      "Won a Consolation prize at CSI Rubix 2025 among 50+ teams",
    ],
  },
];

export default function SkillsPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-400 mb-12">
            Skills & Certifications
          </h2>
        </div>

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="group bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/30 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-blue-500/50 relative overflow-hidden"
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Animated border shimmer */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-purple-400 mb-6 group-hover:text-purple-300 transition-colors duration-300">
                  {category.title}
                </h3>

                <div className="space-y-3">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 group/item">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-blue-300 transition-colors duration-300"></div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
