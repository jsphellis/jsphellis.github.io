'use client'

import React from 'react'

interface Skill {
  category: string
  items: string[]
}

const skills: Skill[] = [
  {
    category: 'Programming Languages',
    items: ['Python', 'R', 'SQL', 'HTML']
  },
  {
    category: 'Data Analysis & Visualization',
    items: ['Pandas', 'ggplot', 'Plotly', 'NumPy', 'Matplotlib']
  },
  {
    category: 'Machine Learning',
    items: ['Keras', 'Tensorflow', 'PyTorch', 'LLMs', 'NLP', 'Langchain', 'Computer Vision', 'Deep Learning']
  },
  {
    category: 'Software Deployment',
    items: ['Google Cloud Projects', 'Docker', 'git', 'Amazon Web Services', 'Firebase', 'REST API', 'Flask', 'Redis', 'Cloud']
  }
]

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#f0f4f8]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-[#2c3e50]">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#3498db]">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-[#34495e]">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

