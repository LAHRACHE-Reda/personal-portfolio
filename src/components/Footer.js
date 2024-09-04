import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="mt-12 text-center text-gray-600">
    <p>Connect with me:</p>
    <div className="flex justify-center space-x-4 mt-2">
      <a href="https://github.com/LAHRACHE-Reda" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center">
        <Github size={18} className="mr-1" /> GitHub
      </a>
      <a href="https://linkedin.com/in/reda-lahrache" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center">
        <Linkedin size={18} className="mr-1" /> LinkedIn
      </a>
    </div>
  </footer>
);

export default Footer;