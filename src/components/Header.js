import React, { useState, useEffect } from 'react';
import profileImg from '../assets/profile.png';
import Navigation from './Navigation';

const Header = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      isScrolled 
        ? 'bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col items-center py-4 transition-all duration-300 ease-in-out ${
          isScrolled ? 'sm:flex-row sm:justify-between sm:py-2' : 'py-6 space-y-4'
        }`}>
          <div className="flex items-center">
            <div className={`flex-shrink-0 transition-all duration-300 ease-in-out ${
              isScrolled ? 'w-12 h-12' : 'w-20 h-20 sm:w-24 sm:h-24'
            }`}>
              <div className="w-full h-full rounded-full p-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                <div className="w-full h-full bg-white rounded-full overflow-hidden">
                  <img 
                    src={profileImg} 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className={`ml-4 ${isScrolled ? '' : 'text-center'}`}>
              <h1 className={`font-bold text-gray-900 transition-all duration-300 ease-in-out ${
                isScrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
              }`}>Reda Lahrache</h1>
              <p className={`text-gray-600 transition-all duration-300 ease-in-out ${
                isScrolled ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'
              }`}>Software Engineer @HPS</p>
            </div>
          </div>
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} isScrolled={isScrolled} />
        </div>
      </div>
    </header>
  );
};

export default Header;