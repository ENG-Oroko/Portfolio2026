// App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Hero from './pages/Hero.jsx';
import About from './pages/About.jsx';
import Service from './pages/Services.jsx';
import Project from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';

// Scroll to top component for route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// Main App Content
function AppContent() {
  const location = useLocation();

  // Handle hash links for navigation
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navbar />
      
      <main>
        {/* Home Section */}
        <section id="home" className="scroll-mt-20">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        {/* Services Section */}
        <section id="services" className="scroll-mt-20">
          <Service />
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-20">
          <Project />
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-20">
          <Skills />
        </section>

        {/* Blog Section */}
        <section id="blog" className="scroll-mt-20">
          <Blog />
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>

      {/* Optional: Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Oroko Douglas. All rights reserved..</p>
          <p className="text-gray-400 text-sm mt-2">Built with React Tailwind CSS Node.js Expres & MongoDB</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;