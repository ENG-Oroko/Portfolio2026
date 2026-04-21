import React, { useState, useEffect } from 'react';

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  
  const services = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      icon: "💻",
      description: "End-to-end web application development using modern technologies like React, Node.js, and databases.",
      longDescription: "I build complete web solutions from scratch, handling both frontend and backend development. Using cutting-edge technologies and best practices, I create scalable, secure, and high-performance applications tailored to your business needs.",
      features: [
        "Custom web applications",
        "API development & integration",
        "Database design & optimization",
        "Authentication & security",
        "Performance optimization",
        "Responsive design"
      ],
      pricing: [
        { name: "Basic", price: "$2,000", features: ["Single page app", "Basic database", "3 months support"] },
        { name: "Professional", price: "$5,000", features: ["Full-stack app", "Advanced database", "6 months support", "API integration"] },
        { name: "Enterprise", price: "$10,000+", features: ["Complex system", "Scalable architecture", "12 months support", "DevOps setup"] }
      ],
      technologies: ["React", "Node.js", "MongoDB", "PostgreSQL", "Docker"],
      deliveryTime: "4-8 weeks",
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: 2,
      title: "Mobile App Development",
      icon: "📱",
      description: "Cross-platform mobile applications with Flutter and React Native for iOS and Android.",
      longDescription: "Create beautiful, native-quality mobile experiences for both iOS and Android platforms from a single codebase. I specialize in Flutter and React Native development, delivering smooth, responsive apps that users love.",
      features: [
        "Cross-platform development",
        "Native performance",
        "Push notifications",
        "Offline support",
        "App store deployment",
        "Analytics integration"
      ],
      pricing: [
        { name: "Basic", price: "$3,000", features: ["Single platform", "Basic UI/UX", "3 months support"] },
        { name: "Professional", price: "$7,000", features: ["Cross-platform", "Advanced features", "6 months support", "App store submission"] },
        { name: "Enterprise", price: "$15,000+", features: ["Complex features", "Real-time sync", "12 months support", "Backend integration"] }
      ],
      technologies: ["Flutter", "Dart", "React Native", "Firebase", "REST APIs"],
      deliveryTime: "6-12 weeks",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      title: "Database Architecture",
      icon: "🗄️",
      description: "Design and optimize database systems for performance, scalability, and data integrity.",
      longDescription: "Expert database design and optimization services for both SQL and NoSQL databases. I ensure your data is structured efficiently, queries are optimized, and your system can scale seamlessly.",
      features: [
        "Database design & modeling",
        "Query optimization",
        "Data migration",
        "Backup & recovery",
        "Performance tuning",
        "Security implementation"
      ],
      pricing: [
        { name: "Basic", price: "$1,500", features: ["Single database", "Basic optimization", "2 months support"] },
        { name: "Professional", price: "$4,000", features: ["Complex design", "Advanced optimization", "4 months support", "Migration assistance"] },
        { name: "Enterprise", price: "$8,000+", features: ["Multi-database", "High availability", "6 months support", "24/7 monitoring"] }
      ],
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma"],
      deliveryTime: "2-6 weeks",
      color: "from-green-600 to-teal-600"
    },
    {
      id: 4,
      title: "DevOps & Deployment",
      icon: "🚀",
      description: "Streamline your development pipeline with CI/CD, containerization, and cloud deployment.",
      longDescription: "Implement modern DevOps practices to automate your deployment pipeline, ensure consistency across environments, and reduce deployment risks. I help teams ship faster and more reliably.",
      features: [
        "CI/CD pipeline setup",
        "Docker containerization",
        "Cloud deployment (AWS/GCP/Azure)",
        "Monitoring & logging",
        "Infrastructure as Code",
        "Performance monitoring"
      ],
      pricing: [
        { name: "Basic", price: "$2,500", features: ["Basic CI/CD", "Docker setup", "3 months support"] },
        { name: "Professional", price: "$6,000", features: ["Advanced pipeline", "Cloud deployment", "6 months support", "Monitoring setup"] },
        { name: "Enterprise", price: "$12,000+", features: ["Full DevOps", "Multi-cloud", "12 months support", "24/7 monitoring"] }
      ],
      technologies: ["Docker", "GitHub Actions", "AWS", "Kubernetes", "Terraform"],
      deliveryTime: "3-6 weeks",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "UI/UX Design",
      icon: "🎨",
      description: "Create beautiful, intuitive interfaces with modern design principles and user-centered approach.",
      longDescription: "Design engaging user experiences that convert. I combine aesthetic appeal with functional design, creating interfaces that are both beautiful and easy to use.",
      features: [
        "Responsive web design",
        "Mobile app design",
        "Prototyping & wireframing",
        "User research",
        "Design systems",
        "Accessibility"
      ],
      pricing: [
        { name: "Basic", price: "$1,500", features: ["5 page design", "Wireframes", "2 months support"] },
        { name: "Professional", price: "$4,000", features: ["10+ pages", "Interactive prototype", "4 months support", "Design system"] },
        { name: "Enterprise", price: "$9,000+", features: ["Full product design", "User testing", "6 months support", "Brand guidelines"] }
      ],
      technologies: ["Figma", "Adobe XD", "TailwindCSS", "Framer", "Sketch"],
      deliveryTime: "2-5 weeks",
      color: "from-pink-600 to-rose-600"
    },
    {
      id: 6,
      title: "Technical Consulting",
      icon: "💡",
      description: "Expert advice on technology stack, architecture decisions, and best practices.",
      longDescription: "Leverage my experience to make better technical decisions. I provide unbiased advice on technology choices, architecture patterns, and development methodologies.",
      features: [
        "Tech stack assessment",
        "Architecture review",
        "Code quality audit",
        "Performance analysis",
        "Security assessment",
        "Team training"
      ],
      pricing: [
        { name: "Basic", price: "$500/day", features: ["4 hours consultation", "Basic assessment", "Report"] },
        { name: "Professional", price: "$1,000/day", features: ["Full day", "Detailed analysis", "Actionable recommendations"] },
        { name: "Enterprise", price: "$5,000/week", features: ["Week-long engagement", "Team mentoring", "Implementation support"] }
      ],
      technologies: ["Architecture", "Best Practices", "Code Review", "Security", "Performance"],
      deliveryTime: "Ongoing",
      color: "from-yellow-600 to-amber-600"
    }
  ];
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Working with this developer transformed our business. The full-stack solution delivered exceeded our expectations and came in under budget.",
      rating: 5,
      avatar: "👩💼",
      service: "Full-Stack Web Development"
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateCo",
      content: "The mobile app developed was flawless. Users love it, and we've seen a 200% increase in engagement. Highly recommended!",
      rating: 5,
      avatar: "👨💻",
      service: "Mobile App Development"
    },
    {
      name: "Emily Rodriguez",
      role: "CTO, DataFlow",
      content: "Database optimization services were exceptional. Our query times improved by 80%, and the system handles 10x more traffic now.",
      rating: 5,
      avatar: "👩‍🔬",
      service: "Database Architecture"
    }
  ];
  
  const stats = [
    { value: "50+", label: "Projects Completed", icon: "✅" },
    { value: "30+", label: "Happy Clients", icon: "😊" },
    { value: "98%", label: "Client Satisfaction", icon: "⭐" },
    { value: "24/7", label: "Support Available", icon: "🛡️" }
  ];
  
  const handleContactClick = (service) => {
    setSelectedService(service);
    setShowContactModal(true);
  };
  
  const handlePlanSelect = (service, plan) => {
    setSelectedService(service);
    setSelectedPlan(plan);
    setShowContactModal(true);
  };
  
  const Modal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-slide-up">
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold">Get Started</h3>
              <p className="text-blue-100 mt-1">{selectedService?.title}</p>
            </div>
            <button
              onClick={() => setShowContactModal(false)}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <form className="p-6 space-y-4">
          {selectedPlan && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Selected Plan:</p>
              <p className="font-semibold text-blue-600">{selectedPlan.name} - {selectedPlan.price}</p>
            </div>
          )}
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
            <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details *</label>
            <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell me about your project..." required></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-[1.02]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-4 animate-bounce">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-4">
            My Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to bring your ideas to life and scale your business
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300 group">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ padding: '2px', borderRadius: '1rem', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
              
              <div className="relative bg-white rounded-2xl p-6 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 3 && (
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      +{service.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Delivery Time */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {service.deliveryTime} delivery
                </div>
                
                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  <button
                    onClick={() => handleContactClick(service)}
                    className={`flex-1 bg-gradient-to-r ${service.color} text-white py-2 rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105`}
                  >
                    Inquire Now
                  </button>
                  <button
                    onClick={() => setSelectedService(selectedService === service ? null : service)}
                    className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all"
                  >
                    Details
                  </button>
                </div>
                
                {/* Expanded Details */}
                {selectedService?.id === service.id && (
                  <div className="mt-6 pt-6 border-t-2 border-gray-100 animate-slide-down">
                    <p className="text-gray-700 mb-4">{service.longDescription}</p>
                    
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="space-y-1 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <h4 className="font-semibold text-gray-800 mb-2">Pricing Plans:</h4>
                    <div className="space-y-2 mb-4">
                      {service.pricing.map((plan, idx) => (
                        <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-gray-800">{plan.name}</span>
                            <span className="text-blue-600 font-bold">{plan.price}</span>
                          </div>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {plan.features.map((feature, fIdx) => (
                              <li key={fIdx}>✓ {feature}</li>
                            ))}
                          </ul>
                          <button
                            onClick={() => handlePlanSelect(service, plan)}
                            className="mt-2 w-full text-sm bg-blue-50 text-blue-600 py-1 rounded hover:bg-blue-100 transition-colors"
                          >
                            Select Plan
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Why Choose Me Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 mb-16 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Me?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-blue-100">Timely delivery without compromising quality</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-3">💎</div>
              <h3 className="text-xl font-semibold mb-2">Quality Code</h3>
              <p className="text-blue-100">Clean, maintainable, and scalable solutions</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-blue-100">Always available for your technical needs</p>
            </div>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic">"{testimonial.content}"</p>
                <div className="mt-3 text-xs text-blue-600">{testimonial.service}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-6">Let's discuss how I can help bring your vision to life</p>
          <button
            onClick={() => setShowContactModal(true)}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get a Free Consultation
          </button>
        </div>
      </div>
      
      {/* Modal */}
      {showContactModal && <Modal />}
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
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
        
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default Services;