import React from 'react';
import { Shield, Lock, Code, Users, Server, Database, Cloud, Terminal, BugIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/back.gif'; 

const services = [
  {
    title: 'Ethical Hacking',
    description: 'Foundation-level security Simulated cyber-attacks to identify security weaknesses and improve defenses',
    icon: Shield,
    features: ['Network Security', 'Social Engineering Assessments', 'Wireless Security Testing', 'Exploitation & Post-Exploitation'],
    price: '$',
  },
  {
    title: 'Penetration Testing',
    description: 'Comprehensive security testing for networks, web apps, APIs, and cloud environments',
    icon: Lock,
    features: ['Network & Infrastructure Pentesting', 'Web & Mobile App Security Testing', 'Cloud Security Assessments', 'API Security & Exploitation'],
    price: '$',
  },
  {
    title: 'Incident Response',
    description: 'Rapid response to security breaches, forensic analysis, and recovery planning',
    icon: Code,
    features: ['Breach Investigation & Containment', 'Malware Analysis & Reverse Engineering', 'Digital Forensics & Log Analysis', 'Disaster Recovery & Risk Mitigation'],
    price: '$',
  },
  {
    title: 'Security Awareness',
    description: 'Corporate training programs for building security-conscious teams.',
    icon: Users,
    features: ['Phishing Awareness', 'Password Security', 'Social Engineering', 'Incident Response'],
    price: '$',
  },
  {
    title: 'Vulnerability Assessment',
    description: 'Identifying, prioritizing, and mitigating security vulnerabilities in systems',
    icon: BugIcon,
    features: ['Automated & Manual Scanning', 'Risk-Based Vulnerability Prioritization', 'Compliance & Regulatory Assessments', ' Patch Management & Remediation'],
    price: '$',
  },
  {
    title: 'Security Operations Center (SOC) Services',
    description: '24/7 security monitoring, threat intelligence, and SIEM-based protection',
    icon: Terminal,
    features: ['Real-Time Threat Monitoring', 'Incident Detection & Response', 'SIEM & Log Analysis', 'Threat Hunting & Intelligence'],
    price: '$',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${bgImage})` }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
              <span className="block text-cyan-400">Professional Cybersecurity Training</span>
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive certification programs and training courses designed to advance your cybersecurity career.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                <service.icon className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Shield className="h-4 w-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block text-center bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
                >
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Training Solution?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We offer customized training programs tailored to your organization's specific needs.
          </p>
          <Link
            to="/contact"
            className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-md transition duration-300 inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
