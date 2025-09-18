import React from 'react'
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import project1 from '../../public/Screenshot From 2025-09-18 18-57-45.png'
import project2 from '@/public/Screenshot From 2025-09-18 21-25-04.png'
import project3 from '@/public/Screenshot From 2025-09-18 21-26-45.png'
import project4 from '@/public/Screenshot From 2025-09-18 21-28-26.png'
import project5 from '@/public/Screenshot From 2025-09-18 21-29-41.png'
import project6 from '@/public/Screenshot From 2025-09-18 21-57-20.png'
import Link from 'next/link';



const Project = () => {

    const projects = [
    {
      title: "Easy Bank",
      description: "A modern, responsive banking landing page built with React and Tailwind CSS, featuring smooth and sleek design.",
      tech: ["React", "Javascript", "Tailwind CSS"],
      image: project1,
      link: "https://easy-bank-3ouw.vercel.app/"
    },
    {
      title: "Task Managment Web App",
      description: "A well functional task management web application with user authentication, real-time updates, and collaborative features.",
      tech: ["React", "Javascript", "Tailwind CSS"],
      image: project2,
      link: "https://task-management-nine-ecru.vercel.app"
    },
    {
      title: "Clone of Bamboo Website",
      description: "A clone of the Bamboo website, showcasing my skills in frontend development and design replication.",
      tech: ["Next.JS", "Typescript", "Tailwind CSS"],
      image: project3,
      link: "https://bamboo-clone.vercel.app/"
    },

    {
      title: "Movie website",
      description: "A movie website that allows users to browse, search, and view details about various movies, built with an API integration.",
      tech: ["Next.JS", "Typescript", "Tailwind CSS"],
      image: project4,
      link: "https://movie-stream-chi.vercel.app/"
    },

    {
      title: "E-commerce Website",
      description: "A E-commerce website for hair with product listings, view product, i was building it for fun and for my sister.",
      tech: ["Next.JS", "Typescript", "Tailwind CSS"],
      image: project5,
      link: "https://t-bella.vercel.app/"
    },

    {
       title: "Ticket Booking Website",
      description: "A ticket booking website that allows users to book tickets for events, with a user-friendly interface.",
      tech: ["React", "Javascript", "Tailwind CSS"],
      image: project6,
      link: "https://new-ticket-generator.vercel.app/"
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
                  <div className="relative h-full w-full rounded-md overflow-hidden">
  {project.image ? (
    <Image
      src={project.image}
      alt="Project img"
      fill
      className="object-cover"
    />
  ) : (
    <Image
      src="/fallback.png"
      alt="Fallback img"
      fill
      className="object-cover"
    />
  )}
</div>

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
                   {project.link ? " Visit Project" : "No live view"} <ExternalLink className="w-4 h-4" />
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
