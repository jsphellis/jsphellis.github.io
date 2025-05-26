'use client'

import React from 'react'

interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  githubUrl?: string
}

const experiences: Experience[] = [
  {
    title: 'Machine Learning Engineer',
    company: 'PushButton.AI - Course Building Program',
    location: 'Orange, California',
    period: 'January 2024 - Present',
    description: [
      'Developed and deployed LLM APIs with Docker and Redis on DigitalOcean, reducing API costs by 60% while ensuring scalability for high-load applications.',
      'Evaluated and optimized open-source HuggingFace LLMs on CUDA cloud hardware, balancing cost, latency, and accuracy for real-time AI solutions.',
      'Implemented high-token-output RAG systems using recursive calls and prompt engineering, increasing model output capacity by 5× and retrieval efficiency.',
      'Integrated web scraping with RAG workflows, enhancing document retrieval quality and increasing customer retention by 15%.',
      'Designed and refined LLM prompts to generate structured 10,000-word program outputs as functional HTML, ensuring readability for 6th to 12th grade levels.',
      'Automated agentic workflows to convert course outlines into 12 structured lessons, integrating task IDs and real-time tracking for dynamic content generation.',
      'Stress-tested API infrastructure to handle peak loads, optimizing request handling and minimizing downtime for high-traffic applications.'
    ]
  },
  {
    title: 'Co-Founder | Cloud Engineer',
    company: 'Ovrsee',
    location: '',
    period: 'January 2024 - October 2024',
    description: [
      'Develop API services via Google Cloud Functions handling TikTok OAuth workflows, processing 48+ daily requests per user',
      'Streamline user metric aggregation (daily/weekly/monthly) using Firebase with automated Cloud Task scheduling - achieving 90% front-end speed improvements',
      'Integrate API operations with Firebase to manage user authentication while structuring database storage systems for 3 customers: brand owner, manager, and creator',
      'Enforce encrypted key management and validations for API requests, safeguarding TikTok API access and user data integrity'
    ],
    githubUrl: 'https://github.com/jsphellis/Ovrsee'
  },
  {
    title: 'Data Scientist Internship',
    company: 'Cabrillo Marine Aquarium',
    location: 'San Pedro, California',
    period: 'June 2023 - August 2023',
    description: [
      'Gained unique experience working with TRACKS data software, inputting, and altering animal data recorded from aquarist activity',
      'Visualized enrichment and welfare animal statistics for the aquarium to display around exhibits',
      'Set up semi-auto generation for visualizations for aquarists to access post internship period',
      'Learned basic feeding, cleaning, and upkeep techniques to assist aquarists with animal care around the facility as needed'
    ]
  }
]

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#f0f4f8]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-[#2c3e50]">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#3498db]">{exp.title}</h3>
                  <p className="text-[#34495e]">{exp.company} {exp.location && `• ${exp.location}`}</p>
                </div>
                <p className="text-[#7f8c8d] mt-2 md:mt-0">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-[#34495e]">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
              {exp.githubUrl && (
                <div className="mt-4">
                  <a
                    href={exp.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3498db] hover:text-[#2980b9]"
                  >
                    <i className="fab fa-github mr-2"></i>View Code
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

