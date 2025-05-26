'use client'

import React from 'react'

interface Education {
  school: string
  degree: string
  period: string
  details: string[]
}

const education: Education[] = [
  {
    school: 'University of Southern California',
    degree: 'Master of Science in Applied Data Science',
    period: 'August 2024 - May 2026',
    details: ['Viterbi School of Engineering', 'GPA: 3.86']
  },
  {
    school: 'Chapman University',
    degree: 'Bachelor of Science in Data Analytics',
    period: 'August 2020 - May 2024',
    details: ['Fowler School of Engineering', 'GPA: 3.86', 'Minor in Business Administration']
  }
]

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-[#2c3e50]">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-gray-600 mb-4">
              I&apos;m a Data Scientist and Machine Learning Engineer with a passion for building intelligent systems that solve real-world problems. My expertise lies in developing and deploying machine learning models, with a particular focus on computer vision and natural language processing.
            </p>
            <p className="text-gray-600 mb-4">
              I&apos;m currently working on projects that combine my interests in sports analytics and machine learning, developing tools that help teams make data-driven decisions and gain competitive advantages.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[#2c3e50]">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-[#f0f4f8] p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-[#3498db]">{edu.school}</h4>
                  <p className="text-[#2c3e50] font-medium">{edu.degree}</p>
                  <p className="text-[#7f8c8d]">{edu.period}</p>
                  {edu.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-[#34495e]">{detail}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
