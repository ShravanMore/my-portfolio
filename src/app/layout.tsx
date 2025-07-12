import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shravan More | Software Developer Portfolio",
  description:
    "Welcome to the portfolio of Shravan More — a passionate software developer skilled in React, Node.js, Java, and modern web technologies. Explore my projects, skills, certifications, and contact details.",
  keywords: [
    "Shravan More",
    "Software Developer",
    "Web Developer Portfolio",
    "React Developer",
    "Next.js Portfolio",
    "Java Developer",
    "Full Stack Developer",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [
    {
      name: "Shravan More",
      url: "https://shravan-more-portfolio-web.vercel.app/",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// Footer component can stay inline for now:
function Footer() {
  return (
    <footer className="bg-gray-800 py-4 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} Designed & Built with ❤️ by Shravan More.
    </footer>
  );
}
