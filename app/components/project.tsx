import React from 'react'
import { ExternalLink } from 'lucide-react';

const Project = () => {

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

  return (
    <div>

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
      
    </div>
  )
}

export default Project
