import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Logo({ isScrolled, variant = 'default' }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [textColor, setTextColor] = useState('');
  const location = useLocation();

  // Dynamic color based on current page
  useEffect(() => {
    if (location.pathname === '/') {
      setTextColor('text-gray-800');
    } else if (location.pathname.includes('/projects')) {
      setTextColor('text-purple-600');
    } else if (location.pathname.includes('/blog')) {
      setTextColor('text-green-600');
    } else {
      setTextColor('text-gray-800');
    }
  }, [location]);

  // Split text for letter-by-letter animation
  const letters = "Eng-Oroko".split('');

  return (
    <Link 
      to="/" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsClicked(false);
      }}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
      className={`
        relative group
        font-bold
        transition-all duration-500
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 rounded-lg
        ${isScrolled ? 'text-blue-600' : textColor}
      `}
      style={{
        fontSize: 'clamp(1.25rem, 4vw, 1.875rem)'
      }}
    >
      {/* Main Logo Container */}
      <div className="relative flex items-center gap-1">
        {/* Icon/Emoji (optional) */}
        <span 
          className={`
            text-2xl transition-all duration-300
            ${isHovered ? 'rotate-12 scale-110' : 'rotate-0 scale-100'}
          `}
          role="img"
          aria-label="logo-icon"
        >
          
        </span>

        {/* Letter-by-letter animation for hover */}
        <div className="relative">
          {variant === 'letter-animation' ? (
            <div className="flex">
              {letters.map((letter, index) => (
                <span
                  key={index}
                  className={`
                    inline-block transition-all duration-300
                    ${isHovered ? `animate-bounce-${index % 3}` : ''}
                  `}
                  style={{
                    transitionDelay: isHovered ? `${index * 30}ms` : '0ms',
                    transform: isHovered ? `translateY(-${(index % 3) * 2}px)` : 'translateY(0)'
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </div>
          ) : (
            <span className="relative inline-block">
              Eng-Oroko
              
              {/* Animated gradient overlay */}
              <span 
                className={`
                  absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
                  bg-clip-text text-transparent transition-opacity duration-300
                  ${isHovered ? 'opacity-100' : 'opacity-0'}
                `}
                style={{ WebkitTextFillColor: 'transparent' }}
              >
                Eng-Oroko
              </span>
            </span>
          )}
        </div>

        {/* Animated underline with gradient */}
        <span 
          className={`
            absolute -bottom-1 left-0 h-0.5 
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
            transition-all duration-500 ease-out
            ${isHovered ? 'w-full' : 'w-0'}
          `}
          style={{ 
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            backgroundSize: '200% 100%',
            animation: isHovered ? 'gradientShift 1s linear infinite' : 'none'
          }}
        />

        {/* Second underline (thicker, appears on hover) */}
        <span 
          className={`
            absolute -bottom-2 left-0 h-1 
            bg-gradient-to-r from-blue-400/50 to-purple-400/50
            transition-all duration-500 delay-75
            ${isHovered ? 'w-1/2 opacity-100' : 'w-0 opacity-0'}
          `}
        />
      </div>

      {/* Glow effects */}
      <div className={`
        absolute inset-0 -z-10 rounded-lg
        transition-all duration-500
        ${isHovered ? 'opacity-100' : 'opacity-0'}
      `}>
        {/* Outer glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-lg" />
        
        {/* Inner glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-md rounded-lg" />
      </div>

      {/* Ripple effect on click */}
      {isClicked && (
        <span 
          className="absolute inset-0 rounded-lg animate-ripple bg-gradient-to-r from-blue-500 to-purple-500"
          style={{ pointerEvents: 'none' }}
        />
      )}

      {/* Pulse animation for current page indicator */}
      {location.pathname === '/' && !isHovered && (
        <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500 rounded-full animate-pulse-slow" />
      )}

      {/* Accessibility enhancement */}
      <span className="sr-only">
        {isHovered ? 'Navigate to homepage' : 'Homepage'}
      </span>
    </Link>
  );
}

// Add these animations to your global CSS
const styles = `
  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes bounce0 {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  @keyframes bounce1 {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }

  @keyframes bounce2 {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-7px); }
  }

  .animate-bounce-0 { animation: bounce0 0.3s ease-in-out; }
  .animate-bounce-1 { animation: bounce1 0.3s ease-in-out; }
  .animate-bounce-2 { animation: bounce2 0.3s ease-in-out; }
  .animate-pulse-slow {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
`;

// Inject styles if needed
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default Logo;