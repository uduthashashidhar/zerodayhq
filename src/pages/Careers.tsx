import React from 'react';
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';

const jobs = [
  {
    title: 'Senior Security Engineer',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$130,000 - $180,000',
    description: 'Lead security engineering initiatives and implement robust security solutions.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '5+ years of security engineering experience',
      'Strong knowledge of cloud security',
      'Experience with security tools and frameworks',
    ],
  },
  {
    title: 'Penetration Tester',
    location: 'Remote',
    type: 'Full-time',
    salary: '$100,000 - $150,000',
    description: 'Conduct security assessments and identify vulnerabilities in client systems.',
    requirements: [
      'Relevant security certifications (CEH, OSCP)',
      '3+ years of penetration testing experience',
      'Strong knowledge of web security',
      'Experience with security testing tools',
    ],
  },
  {
    title: 'Security Analyst',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$90,000 - $120,000',
    description: 'Monitor security systems and respond to security incidents.',
    requirements: [
      'Bachelor\'s degree in Cybersecurity or related field',
      '2+ years of security analysis experience',
      'Knowledge of SIEM tools',
      'Incident response experience',
    ],
  },
  {
    title: 'Security Consultant',
    location: 'Chicago, IL',
    type: 'Full-time',
    salary: '$110,000 - $160,000',
    description: 'Provide security consulting services to clients and develop security strategies.',
    requirements: [
      'Bachelor\'s degree in related field',
      '4+ years of security consulting experience',
      'Strong communication skills',
      'Experience with risk assessment',
    ],
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Team
              <span className="block text-cyan-400">Shape the Future of Cybersecurity</span>
            </h1>
            <p className="text-xl text-gray-300">
              Be part of a team that's dedicated to making the digital world safer. We're always looking for talented individuals to join our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Join ZeroDayHQ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-400">
                Work with cutting-edge technology and contribute to the future of cybersecurity.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Growth</h3>
              <p className="text-gray-400">
                Continuous learning opportunities and clear career progression paths.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Impact</h3>
              <p className="text-gray-400">
                Make a real difference in protecting businesses and organizations worldwide.
              </p>
            
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Open Positions</h2>
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-cyan-400">{job.title}</h3>
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md transition duration-300">
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-300 mb-4">{job.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center text-gray-400">
                    <MapPin className="h-5 w-5 mr-2 text-cyan-400" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock className="h-5 w-5 mr-2 text-cyan-400" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <DollarSign className="h-5 w-5 mr-2 text-cyan-400" />
                    {job.salary}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-400">
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;