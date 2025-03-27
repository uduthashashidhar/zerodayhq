import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '/src/assets/logo.png'; // ✅ Use absolute path


const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400';
  };

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* ✅ Replaced Shield icon with Your Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="ZeroDayHQ Logo" className="h-10 w-auto" />  
            <span className="text-xl font-bold text-white">ZeroDayHQ</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`${isActive('/')} transition duration-300`}>Home</Link>
            <Link to="/about" className={`${isActive('/about')} transition duration-300`}>About</Link>
            <Link to="/services" className={`${isActive('/services')} transition duration-300`}>Services</Link>
            <Link to="/contact" className={`${isActive('/contact')} transition duration-300`}>Contact</Link>
          </div>
          
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
