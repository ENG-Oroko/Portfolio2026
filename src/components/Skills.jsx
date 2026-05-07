import { useEffect, useRef, useState } from "react";

const skills = {
  proficient: [
    "Flutter",
    "Dart",
    "ReactJS",
    "JavaScript",
    "TypeScript",
    "Git",
    "Firebase",
  ],
  experience: [
    "SwiftUI",
    "Kotlin",
    "Python",
    "Node.js",
    "SQL",
    "Figma",
  ],
};

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const SkillItem = ({ name }) => (
    <div className="flex items-center justify-center px-3 py-2 bg-[#111827] border border-gray-800 rounded-lg text-xs sm:text-sm text-gray-300 hover:border-gray-500 transition">
      {name}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen bg-[#0f172a] px-6 py-20 flex flex-col justify-center"
    >
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-cyan-400 mb-12">
        My Skills
      </h2>

      {/* Proficient */}
      <div
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h3 className="text-center text-gray-400 mb-6 text-sm uppercase tracking-widest">
          Proficient In
        </h3>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.proficient.map((skill, i) => (
            <SkillItem key={i} name={skill} />
          ))}
        </div>
      </div>

      {/* Experience */}
      <div
        className={`mt-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h3 className="text-center text-gray-400 mb-6 text-sm uppercase tracking-widest">
          Experience In
        </h3>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.experience.map((skill, i) => (
            <SkillItem key={i} name={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}