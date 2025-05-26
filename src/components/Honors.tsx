'use client'

import React from 'react'

interface Honor {
  title: string
  organization: string
  description?: string
  icon: string
}

const honors: Honor[] = [
  {
    title: 'Provosts List',
    organization: 'Chapman University',
    description: 'GPA above 3.8 for a semester (2020-2024)',
    icon: 'fas fa-award'
  },
  {
    title: 'Program Honors',
    organization: 'Chapman University',
    icon: 'fas fa-medal'
  },
  {
    title: 'Excellence in Computing Studies',
    organization: 'Association for Computing Machinery',
    icon: 'fas fa-trophy'
  }
]

const Honors: React.FC = () => {
  return (
    <section id="honors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-[#2c3e50]">Honors & Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {honors.map((honor, index) => (
            <div key={index} className="bg-[#f0f4f8] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="text-2xl text-[#3498db]">
                  <i className={honor.icon}></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#3498db]">{honor.title}</h3>
                  <p className="text-[#34495e]">{honor.organization}</p>
                  {honor.description && (
                    <p className="text-[#7f8c8d] mt-2">{honor.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Honors

