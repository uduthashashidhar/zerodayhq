import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'The Rise of Ransomware: How to Protect Your Business',
    excerpt: 'Learn about the latest ransomware threats and effective strategies to protect your organization.',
    author: 'Sarah Chen',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
    category: 'Security Threats',
  },
  
  {
    title: 'The Importance of Multi-Factor Authentication (MFA)',
    excerpt: 'MFA adds an extra layer of security to your accounts and systems. Here’s why it’s essential.',
    author: 'Michael Smith',
    date: 'June 20, 2024',
    image: 'https://images.unsplash.com/photo-1556741533-411cf82e4e2d?auto=format&fit=crop&w=1000&q=80',
    category: 'Authentication',
  },
  {
    title: 'How to Secure Your IoT Devices from Cyber Threats',
    excerpt: 'IoT devices are increasingly targeted by hackers. Learn how to protect your smart devices.',
    author: 'Sophia Martinez',
    date: 'July 8, 2024',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    category: 'IoT Security',
  },
  {
    title: 'Best Practices for Secure Cloud Computing',
    excerpt: 'Cloud security is more important than ever. Here are best practices to keep your data safe.',
    author: 'Daniel Brown',
    date: 'August 12, 2024',
    image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1000&q=80',
    category: 'Cloud Security',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-gray-800 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <img src={post.image} alt={`${post.title} image`} className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-6">
                  <div className="text-cyan-400 text-sm mb-2">{post.category}</div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <Link
                    to={`/post/${index}`}
                    className="mt-4 text-cyan-400 hover:text-cyan-300 inline-flex items-center"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
