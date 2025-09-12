// import React from 'react';
// import { Instagram, Github, Linkedin } from 'lucide-react';

// const Portfolio = () => {
//   return (
//     <div className="h-screen flex overflow-hidden bg-black">
//       {/* Left Section - Light Gray */}
//       <div className="flex-1 bg-gradient-to-br from-gray-100 to-gray-200 relative flex flex-col justify-center px-12 lg:px-16">
//         {/* Logo */}
//         <div className="absolute top-10 left-12 lg:left-16 w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center shadow-lg">
//           <span className="text-white font-bold text-xl">TG</span>
//         </div>
        
//         {/* Main Content */}
//         <div className="max-w-lg">
//           <p className="text-2xl text-gray-600 font-light mb-5">Hi, I am</p>
//           <h1 className="text-6xl lg:text-7xl font-black text-gray-900 leading-none mb-6 tracking-tight">
//             Tomasz Gajda
//           </h1>
//           <p className="text-xl text-gray-500 mb-16 font-light">
//             Front-end Developer / UI Designer
//           </p>
          
//           {/* Social Icons */}
//           <div className="flex gap-5">
//             <a 
//               href="#" 
//               className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
//             >
//               <Instagram size={20} />
//             </a>
//             <a 
//               href="#" 
//               className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
//             >
//               <Github size={20} />
//             </a>
//             <a 
//               href="#" 
//               className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
//             >
//               <Linkedin size={20} />
//             </a>
//           </div>
//         </div>
//       </div>
      
//       {/* Right Section - Black Background */}
//       <div className="flex-1 bg-gradient-to-br from-gray-900 to-black relative flex items-center justify-center overflow-hidden">
//         {/* Navigation */}
//         <nav className="absolute top-10 right-12 lg:right-16 flex items-center gap-8 z-20">
//           <a 
//             href="#" 
//             className="text-white/80 hover:text-white font-medium transition-all duration-300 hover:scale-105"
//           >
//             About me
//           </a>
//           <a 
//             href="#" 
//             className="text-white/80 hover:text-white font-medium transition-all duration-300 hover:scale-105"
//           >
//             Skills
//           </a>
//           <a 
//             href="#" 
//             className="text-white/80 hover:text-white font-medium transition-all duration-300 hover:scale-105"
//           >
//             Portfolio
//           </a>
//           <a 
//             href="#" 
//             className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 hover:shadow-2xl"
//           >
//             CONTACT ME
//           </a>
//         </nav>
        
//         {/* Decorative Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         </div>
        
//         {/* Profile Image Container */}
//         <div className="relative z-10">
//           <div className="w-80 h-96 lg:w-96 lg:h-[32rem] bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-2xl relative overflow-hidden animate-bounce-slow">
//             {/* Image Placeholder */}
//             <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
//               {/* Person silhouette illustration */}
//               <div className="w-32 h-32 bg-white/20 rounded-full mb-8"></div>
//               <div className="absolute bottom-1/3 w-40 h-48 bg-white/10 rounded-t-full"></div>
              
//               {/* Photo disclaimer */}
//               <div className="absolute bottom-6 right-6 bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
//                 <p className="text-white/80 text-xs leading-tight">
//                   this is not my photo,<br />
//                   but I dearly hope to<br />
//                   get one just like this
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Custom Styles */}
//       <style jsx>{`
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
//         .animate-bounce-slow {
//           animation: bounce-slow 6s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Portfolio;