import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // ✅ Using Lucide icons for the menu
import Logo from '/src/assets/logo.png';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400';
  };

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ✅ Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="ZeroDayHQ Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-white">ZeroDayHQ</span>
          </Link>

          {/* ✅ Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`${isActive('/')} transition duration-300`}>Home</Link>
            <Link to="/about" className={`${isActive('/about')} transition duration-300`}>About</Link>
            <Link to="/services" className={`${isActive('/services')} transition duration-300`}>Services</Link>
            <Link to="/blog" className={`${isActive('/blog')} transition duration-300`}>Blog</Link>
            <Link to="/contact" className={`${isActive('/contact')} transition duration-300`}>Contact</Link>
          </div>

          {/* ✅ Call-to-Action Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md transition duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* ✅ Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 border-t border-gray-800 py-4 px-4 space-y-4 text-center">
          <Link to="/" className={`${isActive('/')} block transition duration-300`} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className={`${isActive('/about')} block transition duration-300`} onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/services" className={`${isActive('/services')} block transition duration-300`} onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/blog" className={`${isActive('/blog')} block transition duration-300`} onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link to="/contact" className={`${isActive('/contact')} block transition duration-300`} onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link
            to="/contact"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md transition duration-300 block"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
