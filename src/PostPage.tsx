import React from 'react';
import { useParams, Link } from 'react-router-dom';

const posts = [
  {
    title: 'The Rise of Ransomware: How to Protect Your Business',
    content: 'This is the detailed content of the blog post...',
    author: 'Sarah Chen',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
    category: 'Security Threats',
  },
  {
    title: 'Why Zero Trust is the Future of Cybersecurity',
    content: 'Zero Trust is a security model that requires strict identity verification...',
    author: 'John Doe',
    date: 'April 10, 2024',
    image: 'https://images.unsplash.com/photo-1605902711834-901c5c91a47a?auto=format&fit=crop&w=1000&q=80',
    category: 'Cybersecurity Strategy',
  },
];

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts[parseInt(id || '0')];

  if (!post) {
    return <h1 className="text-center text-red-500">Post not found</h1>;
  }

  return (
    <div className="min-h-screen bg-black text-white pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <img src={post.image} alt={post.title} className="w-full h-60 object-cover rounded-md mb-6" />
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-400">{post.category} | {post.date}</p>
        <p className="mt-6 text-lg">{post.content}</p>
        <Link to="/" className="mt-6 inline-block text-cyan-400 hover:text-cyan-300">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default PostPage;
