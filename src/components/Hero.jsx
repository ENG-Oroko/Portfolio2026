import { useEffect, useState } from "react";
import profilePic from "../assets/oroko.png";
import resume from "../assets/resume.pdf";

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
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 90);
    } 
    else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } 
    else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } 
    else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-white overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-70 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-70 animate-pulse" />

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col md:flex-row items-center gap-14 max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >

        {/* Image */}
        <div className="relative group">
          <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition duration-500" />

          <img
            src={profilePic}
            alt="Douglas Oroko"
            className="relative w-72 h-72 md:w-[380px] md:h-[380px] rounded-full object-cover border-4 border-white shadow-2xl transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left">

          {/* Role typing */}
          <p className="text-blue-600 text-sm tracking-[0.3em] uppercase mb-4 font-semibold h-6">
            {text}
            <span className="animate-pulse text-black">|</span>
          </p>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 leading-tight">
            Hi, I'm{" "}
            <span className="text-blue-600">
              Douglas Oroko
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 max-w-2xl mb-8 leading-8 text-lg">
            I build modern full-stack applications, mobile apps, and scalable backend systems.
            I focus on performance, clean UI/UX, and real-world problem solving using modern technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-blue-600 text-white rounded-xl font-medium shadow-lg
              hover:bg-blue-700 hover:scale-105 transition-all duration-300"
            >
              View Resume
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}