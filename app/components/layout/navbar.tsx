import React from 'react'
import Image from 'next/image'
import logo from '@/public/logo.png'

const Navbar = () => {
  return (
    <div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Peter Idiku
          </div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
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
    </div>
  )
}

export default Navbar
