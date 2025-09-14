import React from 'react'
import Image from 'next/image';
import logo from '@/public/logo.png'
import { Github, Linkedin, Twitter, Mail, ChevronDown, ExternalLink, Code, Palette, Zap } from 'lucide-react';

const Aboutme = () => {

    const skills = [
    { name: "Frontend Development", icon: <Code className="w-6 h-6" />, level: 100 },
    { name: "UI/UX Design", icon: <Palette className="w-6 h-6" />, level: 88 },
    { name: "Performance Optimization", icon: <Zap className="w-6 h-6" />, level: 92 }
  ];

  return (
    <div>

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
                          <h3 className="text-2xl font-bold mb-4 text-white">Who I Am</h3>
                          <p className="text-lg text-white/80 leading-relaxed mb-6">
                          My name is Peter Idiku, a passionate Freelancer & Full Stack Developer 
                          based in Jos, Nigeria. With hands-on experience building modern web solutions, 
                          I’ve developed the skills to craft premium, high-quality websites and
                           applications that solve real-world problems.
                          </p>
                        </div>
                      </div>


                      <div className="relative">
                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                        <div className="pl-8">
                          <h3 className="text-2xl font-bold mb-4 text-white">Digital Craftsman</h3>
                          <p className="text-lg text-white/80 leading-relaxed mb-6">
                            I live at the intersection of design and technology, where creativity 
                            meets functionality. My focus is on transforming complex ideas into elegant
                             digital experiences that captivate users and deliver meaningful results.
                          </p>
                        </div>
                      </div>
        
                      <div className="relative">
                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-pink-500 to-blue-500 rounded-full"></div>
                        <div className="pl-8">
                          <h3 className="text-2xl font-bold mb-4 text-white">Innovation & Excellence</h3>
                          <p className="text-lg text-white/80 leading-relaxed mb-6">
                            From pixel-perfect UI design to robust full-stack development, my 
                            journey is driven by curiosity, continuous learning, and a commitment 
                            to excellence. I believe in pushing boundaries, embracing new technologies,
                             and building solutions that are not only functional, but truly extraordinary.
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
                          { number: "30+", label: "Projects Completed" },
                          { number: "2+", label: "Years Experience" },
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
                              <Image className="relative z-10 text-white" src={logo} alt='PTB LOGO' />
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mb-2">Peter Idiku</h3>
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
      
    </div>
  )
}

export default Aboutme
