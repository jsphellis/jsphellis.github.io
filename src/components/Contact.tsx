'use client'

import React from 'react'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#f0f4f8]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-[#2c3e50]">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <i className="fas fa-map-marker-alt text-[#3498db] text-xl"></i>
                <p className="text-[#34495e]">Los Angeles, California</p>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-phone text-[#3498db] text-xl"></i>
                <p className="text-[#34495e]">502-655-6998</p>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-envelope text-[#3498db] text-xl"></i>
                <p className="text-[#34495e]">jsphellis.2020@gmail.com</p>
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/jsphellis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#34495e] hover:text-[#3498db] transition-colors"
                aria-label="GitHub Profile"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href="https://linkedin.com/in/jsphellis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#34495e] hover:text-[#3498db] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="/2025_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#34495e] hover:text-[#3498db] transition-colors"
                aria-label="Resume"
              >
                <i className="fas fa-file-pdf text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

