import React, { useState, useEffect, useRef } from 'react';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [animatedSkills, setAnimatedSkills] = useState(new Set());
  const sectionRef = useRef(null);
  
  const skillCategories = {
    frontend: {
      name: "Frontend Development",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      skills: [
        { name: "React.js", level: 90, icon: "⚛️", color: "#61DAFB", years: 3 },
        { name: "JavaScript (ES6+)", level: 88, icon: "🟡", color: "#F7DF1E", years: 4 },
        { name: "Tailwind CSS", level: 92, icon: "🎨", color: "#06B6D4", years: 2 },
      ]
    },
    backend: {
      name: "Backend Development",
      icon: "M5 12h14M12 5l7 7-7 7",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢", color: "#339933", years: 3 },
        { name: "RESTful APIs", level: 90, icon: "🔗", color: "#FF6B6B", years: 3 },
        { name: "Authentication (JWT)", level: 82, icon: "🔐", color: "#9B59B6", years: 2 },
        { name: "WebSockets", level: 75, icon: "🔌", color: "#E74C3C", years: 1 }
      ]
    },
    database: {
      name: "Database Technologies",
      icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
      skills: [
        { name: "MongoDB", level: 86, icon: "🍃", color: "#47A248", years: 2.5 },
        { name: "MySQL", level: 84, icon: "🐬", color: "#4479A1", years: 3 },
        { name: "PostgreSQL", level: 82, icon: "🐘", color: "#336791", years: 2 },
      ]
    },
    devops: {
      name: "DevOps & Tools",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
      skills: [
        { name: "Docker", level: 84, icon: "🐳", color: "#2496ED", years: 2 },
        { name: "Git/GitHub", level: 88, icon: "📦", color: "#F05032", years: 4 },
        { name: "Linux/Unix", level: 80, icon: "🐧", color: "#FCC624", years: 3 },
      ]
    },
    languages: {
      name: "Programming Languages",
      icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      skills: [
        { name: "JavaScript", level: 88, icon: "📜", color: "#F7DF1E", years: 4 },
        { name: "Dart", level: 82, icon: "🎯", color: "#00B4AB", years: 1.5 },
      ]
    }
  };
  
  const certifications = [
    { name: "Meta Frontend Developer Certificate", issuer: "Meta/Coursera", year: 2023, icon: "🎓" },
    { name: "MongoDB Developer Certification", issuer: "MongoDB University", year: 2023, icon: "🍃" },
    { name: "Docker Essentials", issuer: "IBM/Coursera", year: 2023, icon: "🐳" },
    { name: "JavaScript Algorithms & Data Structures", issuer: "freeCodeCamp", year: 2022, icon: "📜" }
  ];
  
  const tools = [
    { name: "VS Code", icon: "💻", category: "IDE" },
    { name: "Postman", icon: "📮", category: "API Testing" },
    { name: "MongoDB Compass", icon: "🍃", category: "Database" },
    { name: "Docker Desktop", icon: "🐳", category: "Container" },
    { name: "GitHub Actions", icon: "⚙️", category: "CI/CD" },
  ];
  
  const getLevelColor = (level) => {
    if (level >= 90) return "from-emerald-500 to-green-500";
    if (level >= 80) return "from-blue-500 to-indigo-500";
    if (level >= 70) return "from-yellow-500 to-orange-500";
    return "from-gray-500 to-gray-600";
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillId = entry.target.getAttribute('data-skill-id');
            setAnimatedSkills(prev => new Set([...prev, skillId]));
          }
        });
      },
      { threshold: 0.3 }
    );
    
    const skillElements = document.querySelectorAll('.skill-bar');
    skillElements.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);
  
  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return Object.values(skillCategories).flatMap(cat => cat.skills);
    }
    return skillCategories[activeCategory]?.skills || [];
  };
  
  const getAverageSkillLevel = () => {
    const allSkills = getFilteredSkills();
    const total = allSkills.reduce((sum, skill) => sum + skill.level, 0);
    return Math.round(total / allSkills.length);
  };
  
  const averageLevel = getAverageSkillLevel();
  const filteredSkills = getFilteredSkills();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Crafting digital experiences with modern technologies and best practices
          </p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-4 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-600">{Object.keys(skillCategories).length}</div>
            <div className="text-sm text-gray-600">Skill Categories</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-600">
              {Object.values(skillCategories).reduce((sum, cat) => sum + cat.skills.length, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Skills</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-600">{averageLevel}%</div>
            <div className="text-sm text-gray-600">Average Proficiency</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-600">3+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
            }`}
          >
            All Skills
          </button>
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Skills Progress Bars */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 w-2 h-8 rounded-full mr-3"></span>
              Proficiency Levels
            </h2>
            <div className="space-y-6">
              {filteredSkills.map((skill, index) => (
                <div key={index} className="skill-bar" data-skill-id={`${skill.name}-${index}`}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {skill.years} {skill.years === 1 ? 'year' : 'years'}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-blue-600">{skill.level}%</span>
                  </div>
                  <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: animatedSkills.has(`${skill.name}-${index}`) ? `${skill.level}%` : '0%',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tools & Technologies */}
          <div className="space-y-8">
            {/* Tools Grid */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 w-2 h-8 rounded-full mr-3"></span>
                Tools & Technologies
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="group p-3 bg-gray-50 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {tool.icon}
                    </div>
                    <div className="font-semibold text-gray-800 text-sm">{tool.name}</div>
                    <div className="text-xs text-gray-500">{tool.category}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-6 sm:p-8 text-white">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-3xl mr-3">🏆</span>
                Certifications
              </h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{cert.icon}</div>
                      <div className="flex-1">
                        <div className="font-semibold">{cert.name}</div>
                        <div className="text-sm text-blue-100">{cert.issuer} • {cert.year}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Category Details */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <div
              key={key}
              className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-800">{category.skills.length}</div>
                  <div className="text-xs text-gray-500">Skills</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.slice(0, 3).map((skill, idx) => (
                  <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {skill.name}
                  </span>
                ))}
                {category.skills.length > 3 && (
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    +{category.skills.length - 3} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Skill Distribution Chart */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 w-2 h-8 rounded-full mr-3"></span>
            Skill Distribution
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(skillCategories).map(([key, category]) => {
              const avgLevel = Math.round(
                category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length
              );
              return (
                <div key={key} className="text-center">
                  <div className="relative inline-flex items-center justify-center">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle
                        className="text-gray-200"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="48"
                        cy="48"
                      />
                      <circle
                        className="text-blue-600 transition-all duration-1000"
                        strokeWidth="8"
                        strokeDasharray={2 * Math.PI * 40}
                        strokeDashoffset={2 * Math.PI * 40 * (1 - avgLevel / 100)}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="48"
                        cy="48"
                      />
                    </svg>
                    <div className="absolute text-center">
                      <div className="text-xl font-bold text-gray-800">{avgLevel}%</div>
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mt-2">{category.name.split(' ')[0]}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}

export default Skills;