import React from 'react'
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import project1 from '../../public/Screenshot From 2025-09-18 18-57-45.png'
import Link from 'next/link';



const Project = () => {

    const projects = [
    {
      title: "Easy Bank",
      description: "A banking website (frontend) project i built as to keep hands.",
      tech: ["React", "Javascript", "Tailwind CSS", "Vite"],
      image: project1,
      link: "https://easy-bank-3ouw.vercel.app/"
    },
    {
      title: "E-Commerce Empire",
      description: "Full-stack e-commerce solution with payment integration and inventory management.",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
      image: ""
    },
    {
      title: "Creative Studio",
      description: "Interactive portfolio website for digital artists with 3D animations and WebGL effects.",
      tech: ["Three.js", "GSAP", "WebGL", "Blender"],
      image: ""
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
                <div className={`w-full h-48 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden`}>
                  <Image src={project.image} className='h-52 rounded-md w-[350px]' alt="Project img" />
                  {/* <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div> */}
                  {/* <ExternalLink className="w-8 h-8 text-white/80 group-hover:scale-110 transition-transform" /> */}
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

                {project.link && (
                  <Link href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-7 text-purple-400 hover:underline">
                    Visit Project <ExternalLink className="w-4 h-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Project
