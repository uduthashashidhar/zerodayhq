import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">ZerodayHQ</span>
            </div>
            <p className="text-gray-400">
              Empowering professionals with industry-leading cybersecurity certifications and training.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-cyan-400 transition duration-300">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-cyan-400 transition duration-300">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition duration-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Certifications</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">CompTIA Security+</li>
              <li className="text-gray-400">Certified Ethical Hacker</li>
              <li className="text-gray-400">CISSP</li>
              <li className="text-gray-400">CISM</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2 text-cyan-400" />
                contact@cybermaster.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2 text-cyan-400" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2 text-cyan-400" />
                123 Cyber Street, Tech City
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} ZerodayHQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer