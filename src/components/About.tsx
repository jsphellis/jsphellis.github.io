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
    details: ['Viterbi School of Engineering', 'GPA: 3.67', 'Coursework in deep learning, data mining, database systems, data visualization, and UX design']
  },
  {
    school: 'Chapman University',
    degree: 'Bachelor of Science in Data Analytics',
    period: 'August 2020 - May 2024',
    details: ['Fowler School of Engineering', 'Magna Cum Laude', 'GPA: 3.87', 'Minor in Business Administration', 'Completed graduate-level Deep Learning & Computer Vision and Human-Centered Computing as an undergraduate']
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
              I&apos;m a software engineer who builds AI products that hold up in production. Day to day that means owning the marketing surface of an AI business platform — social publishing integrations, AI content generation, paid advertising, and media generation — across the full stack in TypeScript, React, and Postgres.
            </p>
            <p className="text-gray-600 mb-4">
              My background is in machine learning and data science, and it still shapes how I work: I&apos;d rather measure a system than trust it. Before swapping a model or a vendor I run a controlled test; before shipping something that spends a user&apos;s money I make it fail closed. The problems I find most interesting are the ones where nothing throws an error — a silently discarded API option, a model quietly rejecting its input, an agent reporting success it didn&apos;t earn.
            </p>
            <p className="text-gray-600 mb-4">
              I have a particular affinity for integrating platforms that don&apos;t want to be integrated — OAuth flows, token lifecycles, and third-party API compliance across Meta, Google, LinkedIn, X, and TikTok — and for the research side of LLM systems, from multi-agent architectures to fine-tuning and evaluation harness design.
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
