import React from 'react';
import { FaCode, FaBriefcase, FaProjectDiagram, FaAward } from 'react-icons/fa';

const Navigation = ({ activeSection, setActiveSection, isScrolled }) => (
  <nav className={`flex flex-wrap justify-center gap-2 transition-all duration-300 ease-in-out ${
    isScrolled ? 'sm:justify-end' : 'w-full sm:w-auto'
  }`}>
    {[
      { name: 'skills', icon: <FaCode size={14} /> },
      { name: 'experience', icon: <FaBriefcase size={14} /> },
      { name: 'projects', icon: <FaProjectDiagram size={14} /> },
      { name: 'certifications', icon: <FaAward size={14} /> }
    ].map(({ name, icon }) => (
      <button
        key={name}
        onClick={() => setActiveSection(name)}
        className={`px-2 py-1 sm:px-3 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors flex items-center space-x-1 sm:space-x-2 ${
          activeSection === name
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        {icon}
        <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
      </button>
    ))}
  </nav>
);

export default Navigation;