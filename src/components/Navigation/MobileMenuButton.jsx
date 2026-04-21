import React, { useState } from 'react';

function MobileMenuButton({ isOpen, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsPressed(false);
        }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        className={`
          relative group
          w-12 h-12
          flex items-center justify-center
          rounded-full
          transition-all duration-300 ease-out
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
          ${isOpen 
            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
            : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50'
          }
          ${isHovered && !isOpen ? 'scale-105 shadow-md' : ''}
          ${isPressed ? 'scale-95' : ''}
        `}
        style={{
          transform: isPressed ? 'scale(0.95)' : isHovered && !isOpen ? 'scale(1.05)' : 'scale(1)',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {/* Ripple effect container */}
        <span className="absolute inset-0 rounded-full overflow-hidden">
          <span 
            className={`
              absolute inset-0 rounded-full
              bg-gradient-to-r from-blue-400 to-purple-400
              transform transition-transform duration-500
              ${isHovered ? 'scale-150 opacity-20' : 'scale-0 opacity-0'}
            `}
          />
        </span>

        {/* Animated SVG Icon */}
        <div className="relative z-10">
          <svg
            className={`
              h-6 w-6 transition-all duration-300 ease-in-out
              ${isOpen ? 'rotate-90' : 'rotate-0'}
            `}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              // Animated X icon with rotation
              <g>
                <path 
                  d="M6 18L18 6M6 6l12 12" 
                  className="transition-all duration-300"
                  style={{ strokeDasharray: 20, strokeDashoffset: isOpen ? 0 : 20 }}
                />
              </g>
            ) : (
              // Animated hamburger icon with sequential lines
              <g>
                <path 
                  d="M4 6h16" 
                  className="transition-all duration-300"
                  style={{ 
                    strokeDasharray: 20, 
                    strokeDashoffset: isOpen ? 20 : 0,
                    transformOrigin: 'center'
                  }}
                />
                <path 
                  d="M4 12h16" 
                  className="transition-all duration-300 delay-75"
                  style={{ 
                    strokeDasharray: 20, 
                    strokeDashoffset: isOpen ? 20 : 0,
                    opacity: isOpen ? 0 : 1
                  }}
                />
                <path 
                  d="M4 18h16" 
                  className="transition-all duration-300 delay-150"
                  style={{ 
                    strokeDasharray: 20, 
                    strokeDashoffset: isOpen ? 20 : 0,
                    transformOrigin: 'center'
                  }}
                />
              </g>
            )}
          </svg>
        </div>

        {/* Pulse animation when menu is open */}
        {isOpen && (
          <span className="absolute inset-0 rounded-full animate-ping-slow bg-gradient-to-r from-blue-500 to-purple-500 opacity-40" />
        )}
      </button>

      {/* Tooltip for desktop users (optional) */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block">
        <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded whitespace-nowrap">
          {isOpen ? 'Close menu' : 'Menu'}
        </span>
      </div>
    </div>
  );
}

export default MobileMenuButton;