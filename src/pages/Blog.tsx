import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'The Rise of Ransomware: How to Protect Your Business',
    excerpt: 'Learn about the latest ransomware threats and effective strategies to protect your organization.',
    author: 'Sarah Chen',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Security Threats',
  },
  {
    title: 'Zero Trust Architecture: A Modern Security Approach',
    excerpt: 'Explore the principles of Zero Trust and how it can enhance your organization\'s security posture.',
    author: 'Michael Rodriguez',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Best Practices',
  },
  {
    title: 'Cloud Security Best Practices for 2024',
    excerpt: 'Stay secure in the cloud with these essential security practices and recommendations.',
    author: 'Emily Watson',
    date: 'March 5, 2024',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Cloud Security',
  },
  {
    title: 'The Impact of AI on Cybersecurity',
    excerpt: 'Discover how artificial intelligence is transforming the cybersecurity landscape.',
    author: 'David Kim',
    date: 'March 1, 2024',
    image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231311?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Innovation',
  },
  {
    title: 'Security Awareness Training: Why It Matters',
    excerpt: 'Understanding the importance of security awareness training in preventing cyber attacks.',
    author: 'Sarah Chen',
    date: 'February 25, 2024',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Training',
  },
  {
    title: 'Incident Response Planning Guide',
    excerpt: 'A comprehensive guide to creating and implementing an effective incident response plan.',
    author: 'Michael Rodriguez',
    date: 'February 20, 2024',
    image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Planning',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cybersecurity Insights
              <span className="block text-cyan-400">Latest News & Articles</span>
            </h1>
            <p className="text-xl text-gray-300">
              Stay informed about the latest trends, threats, and best practices in cybersecurity.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
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
                  <button className="mt-4 text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest cybersecurity insights and updates.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-cyan-400"
              />
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-md transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;