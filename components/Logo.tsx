/**
 * Logo Component
 * 
 * A modern, animated logo for the Donezo application featuring:
 * - Gradient background with pulse animation
 * - Animated checkmark that draws itself
 * - Gradient text with hover effect
 * - Smooth transitions and animations
 * 
 * @component
 * @example
 * return (
 *   <Logo />
 * )
 */

import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* Logo container with animated gradient background */}
      <div className="relative w-10 h-10">
        {/* Outer circle with pulsing gradient effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 animate-pulse">
          <div className="absolute inset-0.5 rounded-full bg-white"></div>
        </div>
        {/* Animated checkmark SVG */}
        <svg
          className="absolute inset-0 w-10 h-10 p-2 text-emerald-500 transform transition-transform duration-200 hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 13l4 4L19 7"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-draw"
          />
        </svg>
      </div>
      {/* Brand text with gradient and hover effect */}
      <span className="text-2xl font-extrabold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent hover:from-teal-500 hover:to-emerald-500 transition-all duration-300">
        Donezo
      </span>
    </div>
  );
};

export default Logo;
