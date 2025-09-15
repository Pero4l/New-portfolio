import React from 'react'
import Image from 'next/image';
import logo from '@/public/logo.png'
import { Code, Palette, Pencil } from 'lucide-react';
import { FaFlag, FaPen, FaLaptopCode, FaCode } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";

const Myservices = () => {
  return (
    <div>
        <section id="services" className="py-32 px-6 relative overflow-hidden">
                        {/* Background Elements */}
                        <div className="absolute inset-0">
                          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
                          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                        </div>
                
                        <div className="max-w-7xl mx-auto relative z-10">
                          <div className="text-center mb-20">
                            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
                              My Services
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                          </div>
                          
                          <div className="grid lg:grid-cols-1 gap-16 items-center">
                            {/* Left side - Content */}
                            <div className="space-y-8">
        
                            <div className=''>

                               <div className="relative bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl py-5 border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-[1.02] group">
                                
                                <div className="">
                                    <div className='text-6xl text-center flex justify-center pb-8'><FaPen/></div>
                                  <h3 className="text-2xl font-bold mb-4 text-white text-center">Creative Design</h3>
                                  
                                  <p className="text-lg text-center text-white/80 leading-relaxed mb-6">
                                  Bringing ideas to life with creativity and precision. Explore my world of 
                                  stunning designs, where innovation meets aesthetics. 
                                  </p>
                                </div>
                              </div>
        
        
                              <div className="relative mt-20 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl py-5 lg:px-3 border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-[1.02] group">
                                <div className="">
                                 <div className='text-6xl text-center flex justify-center pb-8'><FaFlag/></div>
                                  <h3 className="text-2xl font-bold mb-4 text-white text-center">Branding</h3>
                                  
                                  <p className="text-lg text-center text-white/80 leading-relaxed mb-6">
                                    Crafting impactful brand identities that leave a lasting impression.
                                     Let’s build a brand that stands out and speaks volumes! 
                                  </p>
                                </div>
                              </div>
                
                              <div className="relative mt-20 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl py-5 border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-[1.02] group">
                                <div className="">
                                  <div className='text-6xl text-center flex justify-center pb-8'><FaLaptopCode/></div>
                                  <h3 className="text-2xl font-bold mb-4 text-white text-center">User Interface</h3>
                                  
                                  <p className="text-lg text-center text-white/80 leading-relaxed mb-6">
                                    Creating visually stunning and user-friendly interfaces that
                                     make every interaction effortless and engaging.  
                                  </p>
                                </div>
                              </div>

                               <div className="relative mt-20 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl py-5 px-3 border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-[1.02] group">
                                <div className="">
                                  <div className='text-6xl text-center flex justify-center pb-8'><FaUsers/></div>
                                  <h3 className="text-2xl font-bold mb-4 text-white text-center">User Experience</h3>
                                  
                                  <p className="text-lg text-center text-white/80 leading-relaxed mb-6">
                                   Enhancing digital experiences with intuitive, user-centered designs that make 
                                   every interaction seamless and meaningful.
                                  </p>
                                </div>
                              </div>


                               <div className="relative mt-20 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl py-5 px-3 border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-[1.02] group">
                                <div className="">
                                  <div className='text-6xl text-center flex justify-center pb-8'><FaCode/></div>
                                  <h3 className="text-2xl font-bold mb-4 text-white text-center">Clean Code</h3>
                                  
                                  <p className="text-lg text-center text-white/80 leading-relaxed mb-6">
                                   Writing clean, efficient, and maintainable code, 
                                   because great software starts with a solid foundation.   
                                  </p>
                                </div>
                              </div>


                               <div className="relative mt-20 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl py-5 px-4 border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-[1.02] group">
                                <div className="">
                                  <div className='text-6xl text-center flex justify-center pb-8'><BiSupport/></div>
                                  <h3 className="text-2xl font-bold mb-4 text-white text-center">Fast Support</h3>
                                  
                                  <p className="text-lg text-center text-white/80 leading-relaxed mb-6">
                                    Reliable, responsive, and always ready. A fast support you 
                                    can count on when it matters most.   
                                  </p>
                                </div>
                              </div>
                            </div>
                
                              
                            
                            {/* Right side - Visual */}
                            {/* <div className="relative">
                              <div className="relative w-full max-w-lg mx-auto"> */}
                                {/* Main card */}
                                {/* <div className="relative bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-[1.02] group"> */}
                                  
                                  {/* Floating elements */}
                                  {/* <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl rotate-12 group-hover:rotate-45 transition-transform duration-500 flex items-center justify-center">
                                    <Code className="w-8 h-8 text-white" />
                                  </div>
                                  
                                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-pink-500 to-blue-500 rounded-2xl -rotate-12 group-hover:-rotate-45 transition-transform duration-500 flex items-center justify-center">
                                    <Palette className="w-10 h-10 text-white" />
                                  </div> */}
                
                                  {/* Profile area */}
                                  {/* <div className="text-center mb-8">
                                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full flex items-center justify-center text-5xl font-bold shadow-2xl relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                                      <Image className="relative z-10 text-white" src={logo} alt='PTB LOGO' />
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-white mb-2">Peter Idiku</h3>
                                    <p className="text-purple-300 font-medium">Creative Developer</p>
                                  </div> */}
                
                                  {/* Achievement badges */}
                                  {/* <div className="space-y-4">
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
                                  </div> */}
                
                                  {/* Decorative gradient overlay */}
                                  {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-3xl group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div> */}
                                </div>
                
                                {/* Background decoration */}
                                {/* <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl blur-xl"></div> */}
                              {/* </div>
                            </div> */}
                          {/* </div> */}
                        </div>
                        </div>
                      </section>
    </div>
  )
}

export default Myservices
