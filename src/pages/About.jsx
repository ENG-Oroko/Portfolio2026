import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Skills data
  const skills = {
    technical: [
      { name: 'React/Next.js', level: 90, color: '#3b82f6' },
      { name: 'Node.js/Python', level: 85, color: '#10b981' },
      { name: 'Database Design', level: 80, color: '#f59e0b' },
      { name: 'Cloud Services', level: 75, color: '#6366f1' },
      { name: 'Mobile Development', level: 70, color: '#ec4899' }
    ],
    soft: [
      { name: 'Leadership', level: 88, color: '#3b82f6' },
      { name: 'Communication', level: 92, color: '#10b981' },
      { name: 'Problem Solving', level: 85, color: '#f59e0b' },
      { name: 'Team Collaboration', level: 90, color: '#6366f1' }
    ]
  };

  // Experience data
  const experience = [
    {
      year: '2022 - Present',
      title: 'Senior Software Engineer',
      company: 'Tech Innovations Inc.',
      description: 'Leading frontend development team, architecting scalable solutions.'
    },
    {
      year: '2020 - 2022',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      description: 'Developed and maintained multiple client applications.'
    },
    {
      year: '2018 - 2020',
      title: 'Junior Developer',
      company: 'StartUp Hub',
      description: 'Built responsive web applications and RESTful APIs.'
    }
  ];

  // Stats data
  const stats = [
    { value: 5, label: 'Years Experience', suffix: '+' },
    { value: 50, label: 'Projects Completed', suffix: '+' },
    { value: 20, label: 'Happy Clients', suffix: '+' },
    { value: 10, label: 'Technologies', suffix: '' }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animated counter effect
  const AnimatedCounter = ({ target, suffix = '' }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (isInView) {
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        
        return () => clearInterval(timer);
      }
    }, [target, isInView]);
    
    return <span>{count}{suffix}</span>;
  };

  // Simple animation styles
  const getAnimationStyle = (type, delay = 0) => {
    if (!isInView) {
      return {
        opacity: 0,
        transform: type === 'fadeUp' ? 'translateY(30px)' : 
                   type === 'fadeLeft' ? 'translateX(-30px)' : 
                   'translateX(30px)'
      };
    }
    return {
      opacity: 1,
      transform: 'translate(0, 0)',
      transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`
    };
  };

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div 
          style={getAnimationStyle('fadeUp')}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <h1 className="text-6xl md:text-7xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate developer with a knack for creating beautiful and functional digital experiences
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Bio Section */}
          <div 
            style={getAnimationStyle('fadeLeft', 0.2)}
            className="space-y-6"
          >
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-200 dark:border-gray-800">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-24 h-24 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                    John Doe
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Full Stack Developer & Tech Enthusiast</p>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                With over 5 years of experience in web development, I specialize in building 
                modern, responsive, and user-centric applications. My journey in tech started 
                with a curiosity for how things work, and evolved into a passion for creating 
                solutions that make a difference.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="group relative px-8 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <span className="relative z-10">Hire Me</span>
                </button>
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300 hover:scale-105">
                  Download CV
                </button>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div 
            style={getAnimationStyle('fadeRight', 0.3)}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <div key={index} className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-800">
                <div className="text-4xl font-black bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div 
          style={getAnimationStyle('fadeUp', 0.4)}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          {/* Tab Buttons */}
          <div className="flex justify-center space-x-4 mb-12">
            {['technical', 'soft'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {activeTab === tab && (
                  <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl -z-10" />
                )}
                <span className="relative z-10">
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Skills
                </span>
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="grid md:grid-cols-2 gap-6">
            {skills[activeTab].map((skill, index) => (
              <div
                key={index}
                style={getAnimationStyle('fadeLeft', 0.1 * index)}
                className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                    <span className="font-semibold text-gray-800 dark:text-white text-lg">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                      width: isInView ? `${skill.level}%` : '0%'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div style={getAnimationStyle('fadeUp', 0.5)}>
          <h2 className="text-4xl font-bold text-center mb-12 bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                style={getAnimationStyle('fadeLeft', 0.1 * index)}
                className="relative pl-8"
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-600 via-purple-600 to-pink-600" />
                
                {/* Timeline dot */}
                <div className="absolute -left-2 top-6 w-5 h-5 bg-linear-to-br from-blue-600 to-purple-600 rounded-full shadow-lg" />
                
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 ml-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800">
                  <div className="inline-block px-3 py-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg text-white text-sm font-semibold mb-3">
                    {exp.year}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;