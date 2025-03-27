import React from 'react';
import { Mail, Phone, MapPin, Clock, Shield, Linkedin, Instagram, Youtube, Github } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
              <span className="block text-cyan-400">We're Here to Help</span>
            </h1>
            <p className="text-xl text-gray-300">
              Have questions about our certifications? Ready to start your cybersecurity journey? Contact us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Embedded Tally Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <iframe 
                src="https://tally.so/r/wQ4rEA" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                title="Contact Form"
                className="rounded-md shadow-lg">
              </iframe>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-cyan-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">contact@cybermaster.com</p>
                    <p className="text-gray-400">support@cybermaster.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-cyan-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-400">+1 (555) 987-6543</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-cyan-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-400">
                      123 Cyber Street
                      <br />
                      Tech City, TC 12345
                      <br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-cyan-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-400">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Support */}
              <div className="mt-12 p-6 bg-gray-800 rounded-lg">
                <h3 className="text-xl font-bold mb-4">24/7 Student Support</h3>
                <p className="text-gray-400 mb-4">
                  Enrolled students have access to our 24/7 support team for technical assistance and course-related queries.
                </p>
                <div className="flex items-center text-cyan-400">
                  <Shield className="h-5 w-5 mr-2" />
                  Support Portal: support.cybermaster.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-10 bg-gray-800 text-center">
        <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
            <Linkedin className="h-8 w-8" />
          </a>
          <a href="https://www.instagram.com/zero.dayhq/?hl=en" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
            <Instagram className="h-8 w-8" />
          </a>
          <a href="https://www.youtube.com/@ZeroDayHQ-1" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
            <Youtube className="h-8 w-8" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
            <Github className="h-8 w-8" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;