import React, { useState, useRef, useEffect } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [characterCount, setCharacterCount] = useState(0);
  
  const formRef = useRef(null);
  const nameInputRef = useRef(null);
  
  const socialLinks = [
    {
      platform: 'GitHub',
      url: 'https://github.com/username',
      icon: 'M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.21.68-.48 0-.24-.01-.88-.01-1.73-2.78.61-3.37-1.2-3.37-1.2-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z',
      color: 'hover:bg-gray-800',
      bgColor: 'bg-gray-900'
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/username',
      icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
      color: 'hover:bg-blue-700',
      bgColor: 'bg-blue-800'
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/username',
      icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.557-11.705c0-.21-.003-.423-.012-.634A9.935 9.935 0 0024 4.59z',
      color: 'hover:bg-blue-500',
      bgColor: 'bg-blue-600'
    },
    {
      platform: 'Email',
      url: 'mailto:your.email@example.com',
      icon: 'M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z',
      color: 'hover:bg-red-600',
      bgColor: 'bg-red-500'
    }
  ];
  
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' }
  ];
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'message') {
      setCharacterCount(value.length);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Success simulation
    if (formData.name && formData.email && formData.message) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setCharacterCount(0);
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } else {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    }
    
    setIsSubmitting(false);
  };
  
  useEffect(() => {
    // Animation for form fields on mount
    const inputs = document.querySelectorAll('.animate-field');
    inputs.forEach((input, index) => {
      input.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-4 animate-pulse">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 bg-clip-text text-transparent mb-4 animate-fade-in">
            Let's Connect
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up">
            I'm always excited to collaborate on innovative projects or discuss new opportunities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form Section */}
          <div className="animate-slide-in-left">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-8 sm:px-8">
                <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>
                <p className="text-indigo-100">Fill out the form below and I'll get back to you within 24 hours</p>
              </div>
              
              <form ref={formRef} onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
                {/* Name Field */}
                <div className="animate-field opacity-0 animate-slide-up">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'name' ? 'transform scale-[1.02]' : ''}`}>
                    <input
                      ref={nameInputRef}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none"
                      placeholder="John Doe"
                      required
                    />
                    <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                
                {/* Email Field */}
                <div className="animate-field opacity-0 animate-slide-up">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'transform scale-[1.02]' : ''}`}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none"
                      placeholder="john@example.com"
                      required
                    />
                    <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                
                {/* Subject Field */}
                <div className="animate-field opacity-0 animate-slide-up">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'subject' ? 'transform scale-[1.02]' : ''}`}>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none"
                      placeholder="Project Collaboration"
                    />
                    <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>
                  </div>
                </div>
                
                {/* Message Field */}
                <div className="animate-field opacity-0 animate-slide-up">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'message' ? 'transform scale-[1.02]' : ''}`}>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows="5"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none resize-none"
                      placeholder="Tell me about your project or idea..."
                      required
                      maxLength="500"
                    />
                    <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                      {characterCount}/500
                    </div>
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="animate-field opacity-0 animate-slide-up">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Send Message
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    )}
                  </button>
                </div>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg animate-slide-up">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-green-700">Message sent successfully! I'll get back to you soon.</p>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg animate-slide-up">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <p className="text-red-700">Please fill in all required fields correctly.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
          
          {/* Contact Info & Social Section */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Contact Information Card */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center text-white group cursor-pointer transform hover:translate-x-2 transition-all duration-200">
                    <div className="bg-white/20 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-indigo-100 text-sm">Email</p>
                      <p className="font-medium">orokodouglas7@hotmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-white group cursor-pointer transform hover:translate-x-2 transition-all duration-200">
                    <div className="bg-white/20 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-indigo-100 text-sm">Location</p>
                      <p className="font-medium">Migori KE</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-white group cursor-pointer transform hover:translate-x-2 transition-all duration-200">
                    <div className="bg-white/20 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-indigo-100 text-sm">Response Time</p>
                      <p className="font-medium">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.bgColor} text-white p-4 rounded-xl flex items-center justify-center space-x-2 transform hover:scale-105 transition-all duration-200 hover:shadow-lg group`}
                  >
                    <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                    <span className="font-medium">{social.platform}</span>
                  </a>
                ))}
              </div>
              
              {/* Availability Status */}
              <div className="mt-6 pt-6 border-t-2 border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
                    <span className="text-sm text-gray-600">Available for work</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Open to opportunities
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
        }
        
        .animate-field {
          animation: slide-up 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default Contact;