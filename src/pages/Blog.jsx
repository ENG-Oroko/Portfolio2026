import React, { useState, useEffect } from 'react';

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  
  const categories = [
    { id: 'all', name: 'All Posts', icon: '📝', count: 12 },
    { id: 'webdev', name: 'Web Development', icon: '💻', count: 5 },
    { id: 'javascript', name: 'JavaScript', icon: '🟡', count: 4 },
    { id: 'react', name: 'React', icon: '⚛️', count: 3 },
    { id: 'tutorial', name: 'Tutorials', icon: '📚', count: 4 },
    { id: 'career', name: 'Career', icon: '💼', count: 2 }
  ];
  
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with Modern Patterns",
      excerpt: "Learn advanced React patterns and best practices for building large-scale applications that are maintainable and performant.",
      content: `
        <p>React has evolved significantly over the years, and with the introduction of hooks, context API, and concurrent features, building scalable applications has become more intuitive than ever.</p>
        
        <h2>Key Architecture Patterns</h2>
        <p>When building large-scale React applications, consider these architectural patterns:</p>
        <ul>
          <li><strong>Component Composition:</strong> Build reusable, composable components that can be easily tested and maintained.</li>
          <li><strong>State Management:</strong> Choose the right state management solution based on your needs - from React Context to Redux Toolkit.</li>
          <li><strong>Code Splitting:</strong> Implement lazy loading and code splitting to optimize initial load times.</li>
          <li><strong>Custom Hooks:</strong> Extract reusable logic into custom hooks for better code organization.</li>
        </ul>
        
        <h2>Performance Optimization</h2>
        <p>Performance is crucial for user experience. Here are some strategies:</p>
        <ul>
          <li>Memoization with React.memo and useMemo</li>
          <li>Virtual scrolling for long lists</li>
          <li>Image optimization and lazy loading</li>
          <li>Bundle analysis and optimization</li>
        </ul>
        
        <p>By following these patterns, you can build React applications that scale gracefully with your business needs.</p>
      `,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
      author: "John Doe",
      authorAvatar: "👨‍💻",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "react",
      tags: ["React", "JavaScript", "Architecture", "Performance"],
      likes: 124,
      comments: 18,
      views: 1250
    },
    {
      id: 2,
      title: "Mastering Async JavaScript: Promises, Async/Await, and Beyond",
      excerpt: "Deep dive into asynchronous programming in JavaScript, from callbacks to modern async patterns.",
      content: `
        <p>Asynchronous programming is at the heart of modern JavaScript applications. Understanding how to handle async operations effectively is crucial for building responsive applications.</p>
        
        <h2>The Evolution of Async JavaScript</h2>
        <p>JavaScript has come a long way in handling asynchronous operations:</p>
        <ul>
          <li><strong>Callbacks:</strong> The original approach, leading to callback hell.</li>
          <li><strong>Promises:</strong> A cleaner way to handle async operations with .then() and .catch().</li>
          <li><strong>Async/Await:</strong> Syntactic sugar over promises for more readable code.</li>
        </ul>
        
        <h2>Best Practices</h2>
        <ul>
          <li>Always handle errors with try/catch blocks</li>
          <li>Use Promise.all() for parallel operations</li>
          <li>Implement proper loading states</li>
          <li>Avoid blocking the main thread</li>
        </ul>
        
        <p>Mastering these concepts will make you a more effective JavaScript developer.</p>
      `,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
      author: "Jane Smith",
      authorAvatar: "👩‍💻",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "javascript",
      tags: ["JavaScript", "Async", "Promises", "Best Practices"],
      likes: 98,
      comments: 12,
      views: 980
    },
    {
      id: 3,
      title: "Tailwind CSS Mastery: Building Beautiful Interfaces Faster",
      excerpt: "Learn how to leverage Tailwind CSS utility classes to build responsive, custom designs without leaving your HTML.",
      content: `
        <p>Tailwind CSS has revolutionized how we style web applications. Its utility-first approach provides unprecedented flexibility and speed.</p>
        
        <h2>Why Tailwind CSS?</h2>
        <ul>
          <li>No more context switching between files</li>
          <li>Consistent design system out of the box</li>
          <li>Highly customizable via configuration</li>
          <li>Built-in responsive design utilities</li>
          <li>Production-ready optimizations</li>
        </ul>
        
        <h2>Advanced Techniques</h2>
        <p>Take your Tailwind skills to the next level:</p>
        <ul>
          <li>Creating reusable component classes with @apply</li>
          <li>Custom plugins for extended functionality</li>
          <li>Dark mode implementation</li>
          <li>Animation and transition utilities</li>
        </ul>
        
        <p>With Tailwind CSS, you can build beautiful interfaces in record time.</p>
      `,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
      author: "Mike Johnson",
      authorAvatar: "👨‍🎨",
      date: "2024-01-05",
      readTime: "5 min read",
      category: "webdev",
      tags: ["TailwindCSS", "CSS", "Design", "Frontend"],
      likes: 156,
      comments: 24,
      views: 2100
    },
    {
      id: 4,
      title: "Getting Started with Docker: A Developer's Guide",
      excerpt: "Containerize your applications with Docker for consistent development and deployment environments.",
      content: `
        <p>Docker has become an essential tool for modern development workflows. It ensures consistency across different environments and simplifies deployment.</p>
        
        <h2>Docker Basics</h2>
        <ul>
          <li>Images and containers explained</li>
          <li>Writing efficient Dockerfiles</li>
          <li>Docker Compose for multi-container apps</li>
          <li>Volume management for persistent data</li>
        </ul>
        
        <h2>Real-world Examples</h2>
        <p>Learn how to containerize:</p>
        <ul>
          <li>Node.js applications</li>
          <li>React applications with Nginx</li>
          <li>Database services (PostgreSQL, MongoDB)</li>
          <li>Full-stack applications with Docker Compose</li>
        </ul>
        
        <p>Start your Docker journey today and streamline your development workflow.</p>
      `,
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335d?w=800",
      author: "Sarah Williams",
      authorAvatar: "👩‍🔧",
      date: "2024-01-01",
      readTime: "7 min read",
      category: "tutorial",
      tags: ["Docker", "DevOps", "Containers", "Deployment"],
      likes: 87,
      comments: 9,
      views: 750
    },
    {
      id: 5,
      title: "The Future of Web Development: What's Coming in 2024",
      excerpt: "Explore emerging trends and technologies that will shape web development in the coming year.",
      content: `
        <p>The web development landscape is constantly evolving. Let's look at the trends that will dominate 2024.</p>
        
        <h2>Emerging Technologies</h2>
        <ul>
          <li><strong>AI-Powered Development:</strong> GitHub Copilot and similar tools</li>
          <li><strong>Edge Computing:</strong> Faster content delivery and reduced latency</li>
          <li><strong>WebAssembly:</strong> High-performance applications in the browser</li>
          <li><strong>Serverless Architecture:</strong> Reduced operational overhead</li>
        </ul>
        
        <h2>Framework Evolution</h2>
        <p>Keep an eye on:</p>
        <ul>
          <li>React Server Components</li>
          <li>Vue 3 adoption</li>
          <li>Svelte's growing popularity</li>
          <li>Astro for static sites</li>
        </ul>
        
        <p>Stay ahead of the curve by embracing these technologies early.</p>
      `,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      author: "Alex Chen",
      authorAvatar: "👨‍🚀",
      date: "2023-12-28",
      readTime: "9 min read",
      category: "career",
      tags: ["Trends", "Future", "Web Development", "Technology"],
      likes: 203,
      comments: 31,
      views: 3200
    },
    {
      id: 6,
      title: "Building RESTful APIs with Node.js and Express",
      excerpt: "Step-by-step guide to creating robust, scalable REST APIs using Node.js and Express framework.",
      content: `
        <p>Node.js and Express make it easy to build powerful REST APIs. This guide will walk you through the process.</p>
        
        <h2>API Design Principles</h2>
        <ul>
          <li>Use proper HTTP methods (GET, POST, PUT, DELETE)</li>
          <li>Implement proper status codes</li>
          <li>Version your APIs</li>
          <li>Document with OpenAPI/Swagger</li>
        </ul>
        
        <h2>Implementation Steps</h2>
        <ul>
          <li>Setting up Express server</li>
          <li>Route handling and middleware</li>
          <li>Database integration with MongoDB/PostgreSQL</li>
          <li>Authentication with JWT</li>
          <li>Error handling and validation</li>
        </ul>
        
        <p>Follow best practices to create APIs that are maintainable and scalable.</p>
      `,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
      author: "Chris Taylor",
      authorAvatar: "👨‍💼",
      date: "2023-12-20",
      readTime: "10 min read",
      category: "tutorial",
      tags: ["Node.js", "Express", "API", "Backend"],
      likes: 145,
      comments: 22,
      views: 1850
    }
  ];
  
  const featuredPosts = blogPosts.slice(0, 3);
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  
  const handleLike = (postId) => {
    console.log(`Liked post ${postId}`);
  };
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmailSubscribed(true);
    setTimeout(() => setShowNewsletter(false), 3000);
  };
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Blog Post Modal
  const BlogPostModal = ({ post, onClose }) => (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="min-h-screen px-4 py-8">
        <div className="relative max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Hero Image */}
          <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
          
          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Category and Date */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                {categories.find(c => c.id === post.category)?.name}
              </span>
              <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
              <span className="text-sm text-gray-500">• {post.readTime}</span>
            </div>
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
            
            {/* Author Info */}
            <div className="flex items-center mb-6 pb-6 border-b">
              <div className="text-3xl mr-3">{post.authorAvatar}</div>
              <div>
                <div className="font-semibold text-gray-800">{post.author}</div>
                <div className="text-sm text-gray-500">Software Developer</div>
              </div>
            </div>
            
            {/* Content */}
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            
            {/* Tags */}
            <div className="mt-8 pt-6 border-t">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    onClick={() => {
                      setSearchQuery(tag);
                      onClose();
                    }}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-blue-100 hover:text-blue-600 cursor-pointer transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Engagement Stats */}
            <div className="mt-6 flex items-center gap-6">
              <button onClick={() => handleLike(post.id)} className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>{post.likes} likes</span>
              </button>
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>{post.comments} comments</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>{post.views} views</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Thoughts & Insights
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
              Exploring technology, development practices, and the future of web development
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Bar */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>
            
            {/* Newsletter Button */}
            <button
              onClick={() => setShowNewsletter(true)}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              📧 Subscribe to Newsletter
            </button>
          </div>
        </div>
        
        {/* Categories */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex gap-3 pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category.icon} {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
        
        {/* Featured Posts */}
        {selectedCategory === 'all' && searchQuery === '' && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 w-2 h-8 rounded-full mr-3"></span>
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute top-3 left-3 px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                      Featured
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-gray-500">{formatDate(post.date)}</span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Blog Posts Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 w-2 h-8 rounded-full mr-3"></span>
            {selectedCategory === 'all' ? 'Latest Articles' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl shadow-lg">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No posts found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute top-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-sm text-white text-xs rounded-full">
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-blue-600 font-semibold">
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{formatDate(post.date)}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="text-xl">{post.authorAvatar}</div>
                        <div className="text-sm text-gray-700">{post.author}</div>
                      </div>
                      <div className="flex items-center gap-3 text-gray-500 text-sm">
                        <span>❤️ {post.likes}</span>
                        <span>💬 {post.comments}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Newsletter Modal */}
      {showNewsletter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 animate-slide-up">
            <div className="text-center mb-4">
              <div className="text-5xl mb-3">📧</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Subscribe to Newsletter</h3>
              <p className="text-gray-600">Get the latest posts delivered right to your inbox</p>
            </div>
            
            {emailSubscribed ? (
              <div className="text-center py-6">
                <div className="text-green-500 text-5xl mb-3">✅</div>
                <p className="text-gray-800 font-semibold">Thanks for subscribing!</p>
                <p className="text-gray-600 text-sm">Check your email to confirm subscription</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all"
                >
                  Subscribe Now
                </button>
              </form>
            )}
            
            <button
              onClick={() => setShowNewsletter(false)}
              className="mt-4 w-full text-gray-500 hover:text-gray-700 text-sm"
            >
              Maybe later
            </button>
          </div>
        </div>
      )}
      
      {/* Blog Post Modal */}
      {selectedPost && (
        <BlogPostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .prose {
          color: #374151;
          line-height: 1.75;
        }
        
        .prose h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #1f2937;
        }
        
        .prose p {
          margin-bottom: 1.25rem;
        }
        
        .prose ul {
          list-style-type: disc;
          margin-left: 1.5rem;
          margin-bottom: 1.25rem;
        }
        
        .prose li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
}

export default Blog;