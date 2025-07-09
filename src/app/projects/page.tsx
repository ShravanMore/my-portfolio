import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description:
    "Explore my top projects showcasing full-stack development, AI applications, and modern UI design.",
  keywords: [
    "MyBlogSpace",
    "CULTURAL AI",
    "Fin-Gyaan",
    "React",
    "Node.js",
    "Firebase",
    "Portfolio",
    "Full Stack Projects",
  ],
  openGraph: {
    title: "Projects | Portfolio",
    description:
      "Full-stack and AI-based project showcase with modern UI and backend integration.",
    type: "website",
  },
};

const projects = [
  {
    title: "MyBlogSpace",
    subtitle: "React.js, Node.js, Express.js, MySQL",
    date: "May 2025",
    description:
      "Full-stack blog platform with JWT auth, file uploads, protected routes, and MySQL JOIN queries. Users can filter posts by category and view author-specific content.",
    tags: ["React", "Node.js", "Express", "MySQL", "JWT"],
    image: "/projects/blogspace.png",
    github: "https://github.com/yourusername/myblogspace",
    live: "https://myblogspace.live",
  },
  {
    title: "CULTURAL AI",
    subtitle: "React JS, Tailwind CSS, Node.js, Google AI Studio",
    date: "January 2025",
    description:
      "Hackathon project for AI-based artifact recognition and cultural preservation. Built Climate Impact Analysis with Gemini AI to forecast effects on heritage sites.",
    tags: ["React", "Tailwind", "Node.js", "Google AI", "Gemini"],
    image: "/projects/CulturalAI.png",
    github: "https://github.com/ShravanMore/Cultural_AI",
    live: "https://culturalheritageexplorer.netlify.app/",
  },
  {
    title: "Fin-Gyaan",
    subtitle: "React JS, Tailwind CSS, Firebase",
    date: "May 2024",
    description:
      "A platform to educate users on finance via tools, courses, news, events & games. Features Firebase authentication and responsive design using Tailwind CSS.",
    tags: ["React", "Firebase", "Tailwind", "Auth"],
    image: "/projects/Fingyaan.png",
    github: "https://github.com/ShravanMore/Fin-Gyaan",
    live: "https://codeissance2024.web.app/",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-400 mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-purple-500/30 transition-shadow duration-300"
            >
              {/* Image with overlay icons */}
              <div className="relative w-full h-52 group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:opacity-80 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
                  <Link href={project.github} target="_blank">
                    <FiGithub className="text-white text-2xl hover:text-purple-400 transition" />
                  </Link>
                  <Link href={project.live} target="_blank">
                    <FiExternalLink className="text-white text-2xl hover:text-purple-400 transition" />
                  </Link>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-purple-300 mb-1">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-gray-500 mb-4">{project.date}</p>
                  <p className="text-gray-400 text-sm line-clamp-4 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 text-xs text-gray-300 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href={project.live} target="_blank">
                  <span className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-all">
                    View Project →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
