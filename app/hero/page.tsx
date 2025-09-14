import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Twitter, Mail, ChevronDown, ExternalLink, Code, Palette, Zap } from 'lucide-react';
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import Link from 'next/link';


const socials = [
  { icon: Github, href: "https://github.com/Pero4l" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/peter-idiku-911178338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { icon: Twitter, href: "https://x.com/pero4l?s=21" },
  { icon: Mail, href: "mailto:peteridiku@gmail.com" },
];

const Hero = () => {
  return (
    <div className="">
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

        <div className="flex flex-col lg:flex-row-reverse lg:gap-20 items-center text-center z-10 px-6">
          <div className="mb-8">
            <div className="lg:w-72 lg:h-72 w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl animate-bounce-gentle">
              PI
            </div>
          </div>
          
         <div>
             <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-fade-in">
            <span className='text-xl md:text-2xl text-white/80 font-normal'>Hello My Name Is</span> <br />Peter Idiku
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            A Creative Freelancer & Full Stack Developer
          </p>
          
          <div className="text-lg text-white/60 mb-12 max-w-3xl mx-auto">
            Crafting exceptional digital experiences through innovative design and cutting-edge technology
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            {socials.map(({ icon: Icon, href }, index) => (
        <Link
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center 
                     hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 border border-white/20"
        >
          <Icon className="w-6 h-6" />
        </Link>
      ))}
          </div>

          <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center mx-auto">
            View My Work
            <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
         </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;