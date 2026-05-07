import { useEffect, useState } from "react";
import profilePic from "../assets/oroko.png";

const roles = [
  "Software Developer",
  "Full Stack Developer",
  "MERN Stack Developer",
  "Mobile App Developer",
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] text-white overflow-hidden">

      {/* Background Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />

      {/* Content */}
      <div className={`relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>

        {/* Profile Image */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-lg opacity-60" />

          <img
            src={profilePic}
            alt="Douglas Oroko"
            className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-white/20 shadow-2xl transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left">

          {/* Auto typing role */}
          <p className="text-cyan-400 text-sm tracking-widest uppercase mb-2 h-5">
            {text}
            <span className="animate-pulse">|</span>
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="text-cyan-400">
              Douglas Oroko
            </span>
          </h1>

          <p className="text-gray-300 max-w-xl mb-6 leading-7">
            I am a passionate software developer specializing in building
            full-stack web applications, mobile apps, and scalable backend systems.
            I focus on clean UI/UX, performance, and modern architecture.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            <a
              href="/resume.pdf"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl font-medium transition transform hover:scale-105"
            >
              View Resume
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}