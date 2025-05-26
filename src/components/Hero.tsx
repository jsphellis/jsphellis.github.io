'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const roles = ['Data Scientist', 'Machine Learning Engineer', 'AI Enthusiast']
  const [currentRole, setCurrentRole] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        setCurrentRole((prev) => (prev + 1) % roles.length)
      }
      setIsTyping(!isTyping)
    }, 3000)

    return () => clearInterval(typingInterval)
  }, [isTyping, roles.length])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#f0f4f8] relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(52,152,219,0.05)_50%,transparent_75%)] bg-[length:20px_20px] animate-[gradient_15s_linear_infinite]" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`mb-8 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative inline-block">
            <Image
              src="/headshot.jpg"
              alt="Joseph Ellis Headshot"
              width={150}
              height={150}
              className="rounded-full mx-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
        
        <h1 className={`text-4xl md:text-6xl font-bold mb-4 text-[#2c3e50] transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          Hi, I&apos;m <span className="text-[#3498db] relative">
            Joseph Ellis
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#3498db] transform scale-x-0 hover:scale-x-100 transition-transform duration-300" />
          </span>
        </h1>
        
        <p className={`text-xl md:text-2xl text-[#34495e] mb-8 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {roles[currentRole]}
        </p>
        
        <div className={`flex justify-center gap-4 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <a 
            href="#projects" 
            className="bg-[#3498db] text-white px-6 py-3 rounded-md hover:bg-[#2980b9] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="bg-white text-[#2c3e50] px-6 py-3 rounded-md hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className={`mt-8 flex justify-center gap-6 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <a href="https://github.com/jsphellis" target="_blank" rel="noopener noreferrer" 
             className="text-[#34495e] hover:text-[#3498db] transition-colors duration-300">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href="https://linkedin.com/in/joseph-ellis" target="_blank" rel="noopener noreferrer"
             className="text-[#34495e] hover:text-[#3498db] transition-colors duration-300">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="mailto:jsphellis@gmail.com"
             className="text-[#34495e] hover:text-[#3498db] transition-colors duration-300">
            <i className="fas fa-envelope text-2xl"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
