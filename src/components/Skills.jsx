import React from "react";

// Icons
import dart from "../assets/icons/dart.png";
import flutter from "../assets/icons/flutter.png";
import github from "../assets/icons/github.png";
import nodejs from "../assets/icons/nodejs.png";
import react from "../assets/icons/react.png";
import sql from "../assets/icons/sql.webp";
import swiftui from "../assets/icons/swiftui.png";
import java from "../assets/icons/JavaScript.png";
import typescript from "../assets/icons/TypeScript.png";

// Note: You'll need to add these additional icons to your assets folder
// or replace with alternative icons for the missing skills
// Missing from original: JavaScript, TypeScript, Git, Firebase, Kotlin, Python, SQLite, Figma

export default function Skills() {
  // Complete skills list based on the reference image
  const proficientSkills = [
    { name: "Flutter", icon: flutter, category: "proficient" },
    { name: "Dart", icon: dart, category: "proficient" },
    { name: "ReactJS", icon: react, category: "proficient" },
    { name: "JavaScript", icon: java, category: "proficient" },
    { name: "TypeScript", icon: typescript, category: "proficient" },
    { name: "GitHub", icon: github, category: "proficient" },
  
  ];

  const experienceSkills = [
    { name: "JavaScript", icon: java, category: "proficient" },
    { name: "ReactJS", icon: react, category: "proficient" },
    { name: "Flutter", icon: flutter, category: "proficient" },
    { name: "Node.js", icon: nodejs, category: "experience" },
    { name: "SQL", icon: sql, category: "experience" },
  ];

  // Helper function to render icon (either image or fallback)
  const renderIcon = (skill) => {
    if (skill.icon) {
      return (
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-10 h-10 object-contain"
        />
      );
    }
    // Fallback icon using first letter of skill name
    return (
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-md">
        <span className="text-white font-bold text-lg">
          {skill.name.charAt(0)}
        </span>
      </div>
    );
  };

  const SkillCard = ({ skill }) => (
    <div className="group bg-white border border-gray-200 rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-cyan-300 cursor-default">
      {renderIcon(skill)}
      <p className="text-gray-700 font-semibold text-sm tracking-wide">
        {skill.name}
      </p>
    </div>
  );

  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h1>
          <p className="text-gray-600 max-w-2xl text-lg">
            Core technologies I use to build modern mobile, web, and full-stack applications.
          </p>
        </div>

        {/* Proficient In Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-800">Proficient In</h2>
            <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full">
              advanced
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {proficientSkills.map((skill, i) => (
              <SkillCard key={`proficient-${i}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Experience In Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-800">Experience In</h2>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
              hands-on
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {experienceSkills.map((skill, i) => (
              <SkillCard key={`experience-${i}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Additional Tools Strip - inspired by the repeated items */}
        <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-slate-100 rounded-2xl border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-700">Development Toolkit</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["GitHub", "Linux", "Figma", "Postman", "VSCode", "Android Studio"].map((tool, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 font-medium shadow-sm hover:shadow hover:border-cyan-300 transition-all"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}