import React, { useState, useEffect } from 'react';
import { Shield, Award, BookOpen, Users, Target, Brain, CheckCircle, ArrowRight, Clock, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/cybersecurity-bg.gif'; // Ensure this image is in your assets folder

const certifications = [
  {
    title: 'Basic Cybersecurity Roadmap',
    description: 'A step-by-step guide to kickstart your journey in cybersecurity.',
    icon: Map,
    details: 'Covers fundamental concepts, certifications, hands-on experience, and career guidance.',
    duration: '4 Weeks',
  },
  {
    title: 'Networking Fundamentals',
    description: 'Learn the basics of networking, including protocols, IP addressing, and troubleshooting.',
    icon: BookOpen,
    details: 'Ideal for beginners looking to understand networking concepts and build a strong foundation.',
    duration: '6 Weeks',
  },
  {
    title: 'Cybersecurity Fundamentals',
    description: 'An introduction to cybersecurity principles and best practices.',
    icon: CheckCircle,
    details: 'Covers fundamental security principles, threat detection, and mitigation strategies.',
    duration: '5 Weeks',
  },
  {
    title: 'Certified Ethical Hacker (CEH)',
    description: 'Learn to think like a hacker and understand attack vectors and defense mechanisms.',
    icon: Target,
    details: 'Master ethical hacking techniques, penetration testing, and security auditing. Hands-on experience with real-world scenarios.',
    duration: '8 Weeks',
  },
  {
    title: 'CISSP',
    description: 'Advanced certification for security professionals covering eight domains of cybersecurity.',
    icon: Award,
    details: 'Industry-leading certification for experienced security professionals. Comprehensive coverage of security and risk management.',
    duration: '12 Weeks',
  },
  {
    title: 'CompTIA Security+',
    description: 'Foundation-level security certification covering network security, compliance, and identity management.',
    icon: Shield,
    details: 'Perfect for beginners starting their cybersecurity journey. Covers essential security concepts, risk management, and network security.',
    duration: '7 Weeks',
  }
];

const features = [
  {
    title: 'Expert Instructors',
    description: 'Learn from industry veterans with real-world experience',
    icon: Users,
    stat: '50+ Experts',
  },
  {
    title: 'Hands-on Labs',
    description: 'Practice in real-world scenarios using state-of-the-art tools',
    icon: BookOpen,
    stat: '200+ Labs',
  },
  {
    title: 'Adaptive Learning',
    description: 'Personalized learning paths tailored to your goals',
    icon: Brain,
    stat: '24/7 Support',
  },
];

function Home() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setAnimatedStats(features.map(f => f.stat));
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section with Background Image */}
      <header className="relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="bg-gray-900 bg-opacity-70 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Master Cybersecurity with ZerodayHQ
            <span className="block text-cyan-400 animate-pulse">Certifications & Training</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advance your career with industry-recognized certifications and hands-on training from leading cybersecurity experts.
          </p>
          <Link
            to="/contact"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 inline-flex items-center"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </header>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Popular Certifications</h2>
          <div className="grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible">
            {certifications.map((cert, index) => (
              <div
                key={index}
                role="button"
                aria-expanded={selectedCert === index}
                className={`bg-gray-800 rounded-xl p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 ${
                  selectedCert === index ? 'ring-2 ring-cyan-400' : ''
                }`}
                onClick={() => setSelectedCert(selectedCert === index ? null : index)}
              >
                <cert.icon className={`h-12 w-12 text-cyan-400 mb-4 transition-transform duration-300 ${
                  selectedCert === index ? 'scale-110' : ''
                }`} />
                <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-400 mb-4">{cert.description}</p>
                <div className="flex items-center text-cyan-400 mb-4">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{cert.duration}</span>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${
                  selectedCert === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-gray-300 mt-4 border-t border-gray-700 pt-4">
                    {cert.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
