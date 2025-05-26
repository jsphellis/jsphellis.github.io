'use client'

import React from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'ChatDB - NBA SQL RAG',
    description: '• Created a natural language–to–SQL interface using OpenAI, mapping conversational questions to structured queries with a focus on accessibility and transparency\n• Built a Streamlit and MySQL interface with query tracking and live data visuals, reducing barriers for non-technical users and demonstrating empathetic product thinking\n• Implemented secure database modification with rollback and validation, emphasizing trustworthiness and long-term maintainability\n• Designed a modular, well-documented system with onboarding in mind, reducing dev ramp-up time and showing commitment to team success',
    technologies: ['Python', 'OpenAI', 'MySQL', 'Streamlit', 'RAG'],
    githubLink: 'https://github.com/jsphellis/NBA-SQL-RAG',
    image: '/project_pics/nba.png'
  },
  {
    title: 'TikTok Virality Predictor',
    description: 'Trained a computer vision model built on ResNet (2+1)D leveraging PyTorch to predict virality from TikTok video input. Wrote web scraping scripts to download and process TikTok videos using Python and Pandas to engineer virality score.',
    technologies: ['PyTorch', 'Python', 'Pandas', 'Computer Vision'],
    githubLink: 'https://github.com/jsphellis/ViralityAnalysis',
    image: '/project_pics/tiktok.png'
  },
  {
    title: 'DrugAI-CVAE',
    description: 'Built and trained an Autoregressive CVAE in PyTorch to generate novel drug molecule sequences (SMILE) based on target proteins.',
    technologies: ['PyTorch', 'Deep Learning', 'Drug Discovery'],
    githubLink: 'https://github.com/jsphellis/DrugAI---CVAE',
    image: '/project_pics/drug.jpeg'
  },
  {
    title: 'Human Activity in VR Research',
    description: '• Designed 13 modular functions to generate advanced 3D models and visualize VR hand/object trajectories through dynamic line charts\n• Leveraged movement pattern visualizations to design novel rule-based system for identifying and labelling user actions\n• Implemented unsupervised ML models analyzing 8 movement trajectory types for VR activity prediction using spatial pattern',
    technologies: ['Python', '3D Visualization', 'Machine Learning', 'VR'],
    githubLink: 'https://github.com/jsphellis',
    image: '/project_pics/VR.jpg'
  },
  {
    title: 'NBAR',
    description: 'This project provides a robust framework for analyzing NBA player performance data against betting odds. It features automated data collection from official NBA box scores, integration with betting odds APIs, and statistical modeling to identify patterns and potential value opportunities in the sports betting market.',
    technologies: ['Python', 'Data Analysis', 'Sports Analytics'],
    githubLink: 'https://github.com/jsphellis/NBAR',
    image: '/project_pics/nba.png'
  },
  {
    title: 'Game of Life',
    description: 'C++ implementation of Conway\'s Game of Life.',
    technologies: ['C++', 'Algorithms'],
    githubLink: 'https://github.com/jsphellis/GameOfLife',
    image: '/project_pics/gameoflife.png'
  },
  {
    title: 'Pest Patrol',
    description: 'Implementation of detect-net software on NVIDIA Jetson Nano to detect and spray pests like Raccoons for protection.',
    technologies: ['Computer Vision', 'NVIDIA Jetson', 'Python'],
    githubLink: 'https://github.com/jsphellis/PestPatrol',
    image: '/project_pics/raccoon.jpeg'
  },
  {
    title: 'Fire Segmentation',
    description: 'U-Net model trained on a custom dataset of fire and non-fire images to segment fire in real-time video streams.',
    technologies: ['PyTorch', 'Computer Vision', 'Deep Learning'],
    githubLink: 'https://github.com/jsphellis/FireSegmentation',
    image: '/project_pics/fire.jpg'
  },
  {
    title: 'Psyche Evaluation',
    description: 'Front-end and back-end development of a SQL application to evaluate psyches and provide analyses on scores. The application includes Big-5 and Narcissism tests.',
    technologies: ['SQL', 'Web Development', 'Psychology'],
    githubLink: 'https://github.com/jsphellis/Psyche-Evaluation',
    image: '/project_pics/brain.jpg'
  },
  {
    title: 'Money Wicket',
    description: 'MoneyWicket is a representation of modern sports data analysis applied to the game of Cricket. It utilizes Logistic Regression and regularization models like Ridge and Lasso in an attempt to create predictive models that could be used to help scout possible transfers and minimize money expenditures (only buying good players for the team).',
    technologies: ['Python', 'Machine Learning', 'Sports Analytics'],
    githubLink: 'https://github.com/jsphellis/MoneyWicket',
    image: '/project_pics/wicket.jpg'
  },
  {
    title: 'Soccer Linear & Logistic Analysis',
    description: 'Personal class project where I collected a dataset of 2018-19 English Premier League statistics and used python + pandas to put the data through different tools and models.',
    technologies: ['Python', 'Pandas', 'Data Analysis', 'Sports Analytics'],
    githubLink: 'https://github.com/jsphellis/Soccer_Linear-Logistic_Analysis',
    image: '/project_pics/soccer.jpg'
  }
]

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#2c3e50]">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#2c3e50]">{project.title}</h3>
                <p className="text-gray-600 mb-4 whitespace-pre-line">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-[#3498db] text-white text-sm rounded-full hover:bg-[#2980b9] transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#3498db] hover:text-[#2980b9] transition-colors duration-300"
                >
                  View Code
                  <svg 
                    className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

