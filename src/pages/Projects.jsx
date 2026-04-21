import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with cart, payments, and admin dashboard.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://project1-live.com",
      sourceCode: "https://github.com/username/project1",
      isOpenSource: true,
      image: "https://via.placeholder.com/300x200",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features.",
      techStack: ["Vue.js", "Firebase", "TailwindCSS"],
      liveUrl: "https://project2-live.com",
      sourceCode: "https://github.com/username/project2",
      isOpenSource: true,
      image: "https://via.placeholder.com/300x200",
      category: "Web App"
    },
    {
      id: 3,
      title: "AI Image Generator",
      description: "Generate unique images using AI with custom prompts and styles.",
      techStack: ["Python", "TensorFlow", "React", "FastAPI"],
      liveUrl: "https://project3-live.com",
      sourceCode: null,
      isOpenSource: false,
      image: "https://via.placeholder.com/300x200",
      category: "AI/ML"
    },
    {
      id: 4,
      title: "Portfolio Website Builder",
      description: "Drag-and-drop portfolio builder for creative professionals.",
      techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      liveUrl: "https://project4-live.com",
      sourceCode: "https://github.com/username/project4",
      isOpenSource: true,
      image: "https://via.placeholder.com/300x200",
      category: "Web Builder"
    },
    {
      id: 5,
      title: "Fitness Tracker Mobile App",
      description: "Track workouts, nutrition, and health metrics with analytics.",
      techStack: ["React Native", "Express", "MongoDB"],
      liveUrl: "https://project5-live.com",
      sourceCode: null,
      isOpenSource: false,
      image: "https://via.placeholder.com/300x200",
      category: "Mobile"
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description: "Real-time weather data with interactive maps and forecasts.",
      techStack: ["JavaScript", "OpenWeather API", "Chart.js"],
      liveUrl: "https://project6-live.com",
      sourceCode: "https://github.com/username/project6",
      isOpenSource: true,
      image: "https://via.placeholder.com/300x200",
      category: "Utility"
    },
    {
      id: 7,
      title: "Social Media Analytics",
      description: "Track and analyze social media performance across platforms.",
      techStack: ["Python", "Django", "PostgreSQL", "D3.js"],
      liveUrl: "https://project7-live.com",
      sourceCode: "https://github.com/username/project7",
      isOpenSource: true,
      image: "https://via.placeholder.com/300x200",
      category: "Analytics"
    },
    {
      id: 8,
      title: "Video Conferencing App",
      description: "WebRTC-based video calls with screen sharing and recording.",
      techStack: ["WebRTC", "Socket.io", "React", "Node.js"],
      liveUrl: "https://project8-live.com",
      sourceCode: null,
      isOpenSource: false,
      image: "https://via.placeholder.com/300x200",
      category: "Communication"
    },
    {
      id: 9,
      title: "Blog CMS",
      description: "Headless CMS for blogs with Markdown support and SEO tools.",
      techStack: ["Gatsby", "GraphQL", "Contentful", "Netlify"],
      liveUrl: "https://project9-live.com",
      sourceCode: "https://github.com/username/project9",
      isOpenSource: true,
      image: "https://via.placeholder.com/300x200",
      category: "CMS"
    },
    {
      id: 10,
      title: "Crypto Price Tracker",
      description: "Real-time cryptocurrency prices with portfolio tracking.",
      techStack: ["React", "WebSockets", "CoinGecko API", "Redux"],
      liveUrl: "https://project10-live.com",
      sourceCode: "https://github.com/username/project10",
      isOpenSource: true,
      image: "https://via.placeholder.com/300x200",
      category: "Crypto"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-3">
          My Projects
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore my recent work and side projects
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          >
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                {project.category}
              </span>
            </div>
            
            {/* Content Section */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Buttons Section */}
              <div className="flex gap-3">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-md group/btn"
                >
                  Live Demo
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                
                {project.isOpenSource && project.sourceCode ? (
                  <a 
                    href={project.sourceCode} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-lg transition-all duration-200"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.21.68-.48 0-.24-.01-.88-.01-1.73-2.78.61-3.37-1.2-3.37-1.2-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z" clipRule="evenodd" />
                    </svg>
                    Source Code
                  </a>
                ) : (
                  <button 
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-300 cursor-not-allowed text-gray-600 text-sm font-medium rounded-lg opacity-70"
                    disabled
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Closed Source
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;