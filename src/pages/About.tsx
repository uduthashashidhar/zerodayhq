import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Target } from 'lucide-react';
import bgImage from '../assets/background.gif'; // Import local background image

const stats = [
  { number: 8, label: 'Years Experience' },
  { number: 500, label: 'Certified Professionals' },
  { number: 100, label: 'Success Rate', suffix: '%' },
  { number: 24, label: 'Support', suffix: '/7' },
];

const Counter = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalDuration = 2000;
    const incrementTime = totalDuration / end;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [value]);

  return <>{count}{suffix}</>;
};

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20">
        {/* Background Image from Local Assets */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About ZerodayHQ
              <span className="block text-cyan-400">Leading the Future of Cybersecurity</span>
            </h1>
            <p className="text-xl text-gray-300">
              We're dedicated to empowering professionals with the knowledge and skills needed to excel in cybersecurity.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-5xl font-bold text-cyan-400 mb-2"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Counter value={stat.number} suffix={stat.suffix} />
                </motion.div>
                <div className="text-gray-300 hover:text-cyan-300 transition-colors duration-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                At ZerodayHQ, we're driven by a singular mission: to create the next generation of cybersecurity professionals through comprehensive training and certification programs.
              </p>
              <p className="text-gray-300">
                Our approach combines theoretical knowledge with practical experience, ensuring our students are well-prepared for real-world challenges.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[Shield, Award, Users, Target].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Icon className="h-12 w-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{['Protection', 'Excellence', 'Community', 'Innovation'][index]}</h3>
                  <p className="text-gray-300">{['Comprehensive security knowledge', 'Industry-leading expertise', 'Strong alumni network', 'Cutting-edge training'][index]}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Meet Our Founders</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Udutha Shashidhar', role: 'Cybersecurity Expert & Founder', img: 'https://ik.imagekit.io/6cxgzqbqtn/IMG-20220606-WA0000-01_Original_1_100.jpg?updatedAt=1743056392569' }, 
              { name: 'Smith', role: 'Security and Forensics', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' }
            ].map((founder, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img src={founder.img} alt={founder.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{founder.name}</h3>
                <p className="text-gray-300">{founder.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
