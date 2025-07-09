"use client";

import { useState, useRef, useEffect } from "react";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // or a loading skeleton

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_he5i3ok", // 🔁 Replace with your Service ID
        "template_79y90p9", // 🔁 Replace with your Template ID
        formRef.current,
        "WyZiVCdwV8kw-QudZ" // 🔁 Replace with your Public Key
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          formRef.current?.reset();
          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setLoading(false);
        }
      );
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-400 mb-12">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactItem
              icon={<FiMail size={24} />}
              label="Email"
              value="shravanmore125@gmail.com"
              link="mailto:shravanmore125@gmail.com"
            />
            <ContactItem
              icon={<FiLinkedin size={24} />}
              label="LinkedIn"
              value="linkedin.com/in/shravanmore"
              link="https://www.linkedin.com/in/shravanmore/"
            />
            <ContactItem
              icon={<FiGithub size={24} />}
              label="GitHub"
              value="github.com/ShravanMore"
              link="https://github.com/ShravanMore/"
            />
            <ContactItem
              icon={<SiLeetcode size={24} />}
              label="Leetcode"
              value="leetcode.com/u/ShravanMore"
              link="https://leetcode.com/u/ShravanMore"
            />
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label
                htmlFor="from_name"
                className="block font-medium text-sm mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="from_email"
                className="block font-medium text-sm mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                name="from_email"
                id="from_email"
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block font-medium text-sm mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 transition-all text-white font-semibold shadow-md hover:shadow-purple-400/30 disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {sent && (
              <p className="text-green-400 text-sm mt-2">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}

const ContactItem = ({
  icon,
  label,
  value,
  link,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  link: string;
}) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-4 group hover:opacity-90"
  >
    <div className="p-3 bg-purple-600/10 border border-purple-600/30 rounded-lg text-purple-400 group-hover:text-purple-300 transition">
      {icon}
    </div>
    <div>
      <p className="font-medium text-white">{label}</p>
      <p className="text-gray-400 text-sm break-all">{value}</p>
    </div>
  </a>
);
