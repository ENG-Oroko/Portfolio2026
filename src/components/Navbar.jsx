import React, { useState, useEffect } from 'react';
import Logo from './Navigation/Logo';
import DesktopNav from './Navigation/DesktopNav';
import MobileMenuButton from './Navigation/MobileMenuButton';
import MobileMenu from './Navigation/MobileMenu';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener to change navbar style when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg backdrop-blur-sm bg-white/95' 
          : 'bg-white shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <Logo isScrolled={isScrolled} />

            {/* Desktop Menu */}
            <DesktopNav />

            {/* Mobile Menu Button */}
            <MobileMenuButton isOpen={isOpen} onClick={toggleMenu} />
          </div>

          {/* Mobile Menu */}
          <MobileMenu isOpen={isOpen} onClose={closeMenu} />
        </div>
      </nav>

      {/* Spacer div to prevent content from hiding behind fixed navbar */}
      <div className="h-9"></div>
    </>
  );
}

export default Navbar;