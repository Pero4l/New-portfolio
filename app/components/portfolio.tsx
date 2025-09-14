'use client'

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, ChevronDown, ExternalLink, Code, Palette, Zap } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Neural Dashboard",
      description: "AI-powered analytics platform with real-time data visualization and machine learning insights.",
      tech: ["React", "TypeScript", "D3.js", "Python"],
      image: "bg-gradient-to-br from-purple-600 to-blue-600"
    },
    {
      title: "E-Commerce Empire",
      description: "Full-stack e-commerce solution with payment integration and inventory management.",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
      image: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      title: "Creative Studio",
      description: "Interactive portfolio website for digital artists with 3D animations and WebGL effects.",
      tech: ["Three.js", "GSAP", "WebGL", "Blender"],
      image: "bg-gradient-to-br from-pink-500 to-orange-500"
    }
  ];

  const skills = [
    { name: "Frontend Development", icon: <Code className="w-6 h-6" />, level: 95 },
    { name: "UI/UX Design", icon: <Palette className="w-6 h-6" />, level: 88 },
    { name: "Performance Optimization", icon: <Zap className="w-6 h-6" />, level: 92 }
  ];

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Portfolio
          </div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/70 hover:text-white transition-all duration-300 hover:scale-105"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div 
                suppressHydrationWarning
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="text-center z-10 px-6">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl animate-bounce-gentle">
              YN
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-fade-in">
            Your Name
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Creative Developer & Digital Artist
          </p>
          
          <div className="text-lg text-white/60 mb-12 max-w-3xl mx-auto">
            Crafting exceptional digital experiences through innovative design and cutting-edge technology
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            {[Github, Linkedin, Twitter, Mail].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 border border-white/20"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center mx-auto">
            View My Work
            <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                <div className="pl-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">Digital Craftsman</h3>
                  <p className="text-lg text-white/80 leading-relaxed mb-6">
                    I'm a passionate creator who lives at the intersection of design and technology. 
                    With over 5 years of experience, I transform complex ideas into elegant digital experiences 
                    that captivate users and drive results.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-pink-500 to-blue-500 rounded-full"></div>
                <div className="pl-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">Innovation & Excellence</h3>
                  <p className="text-lg text-white/80 leading-relaxed mb-6">
                    My journey spans from pixel-perfect UI design to robust full-stack architecture. 
                    I believe in pushing boundaries, embracing new technologies, and creating solutions 
                    that are not just functional, but truly extraordinary.
                  </p>
                </div>
              </div>

              {/* Skills with enhanced design */}
              <div className="space-y-8 pt-8">
                {skills.map((skill, index) => (
                  <div key={index} className="group relative">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <div className="text-white group-hover:rotate-12 transition-transform duration-300">
                              {skill.icon}
                            </div>
                          </div>
                          <span className="text-xl font-semibold text-white">{skill.name}</span>
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative w-full bg-white/10 rounded-full h-3 overflow-hidden">
                        <div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full transition-all duration-2000 ease-out shadow-lg"
                          style={{ width: `${skill.level}%` }}
                        />
                        <div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-400/50 via-pink-400/50 to-blue-400/50 rounded-full animate-pulse"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { number: "50+", label: "Projects Completed" },
                  { number: "5+", label: "Years Experience" },
                  { number: "100%", label: "Client Satisfaction" }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105">
                      <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-white/70 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right side - Visual */}
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Main card */}
                <div className="relative bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-[1.02] group">
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl rotate-12 group-hover:rotate-45 transition-transform duration-500 flex items-center justify-center">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-pink-500 to-blue-500 rounded-2xl -rotate-12 group-hover:-rotate-45 transition-transform duration-500 flex items-center justify-center">
                    <Palette className="w-10 h-10 text-white" />
                  </div>

                  {/* Profile area */}
                  <div className="text-center mb-8">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full flex items-center justify-center text-5xl font-bold shadow-2xl relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                      <span className="relative z-10 text-white">YN</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">Your Name</h3>
                    <p className="text-purple-300 font-medium">Creative Developer</p>
                  </div>

                  {/* Achievement badges */}
                  <div className="space-y-4">
                    {[
                      { icon: "🚀", text: "Always pushing boundaries" },
                      { icon: "✨", text: "Obsessed with details" },
                      { icon: "🎯", text: "Results-driven approach" },
                      { icon: "💡", text: "Innovation mindset" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-3xl group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>
                </div>

                {/* Background decoration */}
                <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className={`w-full h-48 ${project.image} rounded-xl mb-6 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <ExternalLink className="w-8 h-8 text-white/80 group-hover:scale-110 transition-transform" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-white/70 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300 border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Create Something Amazing
          </h2>
          
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something extraordinary together.
          </p>
          
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.5; }
          50% { transform: translateY(-20px); opacity: 1; }
        }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0px); }
        }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-bounce-gentle { animation: bounce-gentle 3s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;