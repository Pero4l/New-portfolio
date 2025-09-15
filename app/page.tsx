'use client'
import React, { useState, useEffect } from 'react';
import Hero from "./hero/page";
import Portfolio from "./components/portfolio";
import Aboutme from "./components/aboutme";
import Myservices from "./components/myservices";

export default function Home() {

  const [scrollY, setScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Hero/>
      <Aboutme/>
      <Myservices/>
      <Portfolio/>

    </div>
  );
}
