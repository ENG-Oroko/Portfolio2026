import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', name: 'Home', section: 'home' },
  { path: '/', name: 'About', section: 'about' },
  { path: '/', name: 'Services', section: 'services' },
  { path: '/', name: 'Projects', section: 'projects' },
  { path: '/', name: 'Skills', section: 'skills' },
  { path: '/', name: 'Blog', section: 'blog' },
  { path: '/', name: 'Contact', section: 'contact' },
];

function NavLinks({ onClick, isMobile = false }) {
  const location = useLocation();
  
  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    onClick?.(); // Close mobile menu if needed
    
    // If we're not on home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // Scroll to section on the same page
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL without refreshing
      window.history.pushState({}, '', `/#${sectionId}`);
    }
  };
  
  const baseClasses = isMobile
    ? "text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
    : "text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300";
    
  const activeClasses = "text-blue-600 bg-blue-50";
  
  // Check if current section is active (for single page)
  const isActiveSection = (sectionId) => {
    if (location.pathname !== '/') return false;
    const hash = window.location.hash.replace('#', '');
    return hash === sectionId || (hash === '' && sectionId === 'home');
  };

  return (
    <>
      {navItems.map((item) => (
        <li key={item.name}>
          <a
            href={`/#${item.section}`}
            onClick={(e) => handleScrollToSection(e, item.section)}
            className={`${baseClasses} ${
              isActiveSection(item.section) ? activeClasses : ''
            }`}
          >
            {item.name}
          </a>
        </li>
      ))}
    </>
  );
}

export default NavLinks;