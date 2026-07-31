'use client'

import React from 'react'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  technologies: string[]
  githubLink?: string
  linkLabel?: string
  note?: string
  image?: string
  icon?: string
}

const projects: Project[] = [
  {
    title: 'Multi-Agent LLM Research Framework',
    description: '• Built a research platform for training and evaluating LLM agents playing One-Night Ultimate Werewolf — a game whose core skills are deception, persuasion, and belief tracking under incomplete information\n• Implemented the full game engine plus four agent tiers, from a random baseline to LoRA fine-tuned Mistral-7B and GPT-2, trained on 27k examples\n• Designed the reasoning modules: a claim graph tracking accusations as a relationship graph, a probabilistic belief tracker with Bayesian updates, a contradiction-detecting consistency auditor, and a moderation layer guarding against role leaks\n• Evaluated across 499 games and 5 configurations: fine-tuning raised the persuasion score +321% over baseline and consensus rate from 45% to 80%\n• Rebuilt it as a clean package (NewMafia) with the engine separated from agent infrastructure, every capability an ablatable flag, seeded runs, and per-experiment manifests for reproducibility',
    technologies: ['Python', 'Mistral-7B', 'LoRA / PEFT', 'LangChain', 'Bayesian Modeling', 'React'],
    githubLink: 'https://github.com/jsphellis/MetaMafia',
    note: 'Successor rewrite: github.com/jsphellis/NewMafia',
    icon: 'fas fa-users-viewfinder'
  },
  {
    title: 'AI Course-Generation API',
    description: '• Built the production layer around a vendored open-source research agent (gpt-researcher) to turn a topic into a structured course — syllabus outline, then researched lesson content\n• Engineered a FastAPI service with Pydantic request validation and task status tracking, backed by a Celery + Redis async task pipeline with configurable concurrency and timeouts\n• Implemented retry logic with fallback to alternative models, HTML post-processing, and Docker Compose deployment across separate web, worker, and Redis containers\n• Supported hybrid research combining user-supplied document URLs, including PDFs, with live web search',
    technologies: ['Python', 'FastAPI', 'Celery', 'Redis', 'Docker', 'Multi-Agent LLM'],
    note: 'Private repository — the research agent itself is upstream open source; the production system around it is mine',
    icon: 'fas fa-graduation-cap'
  },
  {
    title: 'NBAR - Automated Sports Analytics Pipeline',
    description: '• Shipped an installable R package analyzing NBA player performance against betting odds, backed by a daily scraping pipeline that has run unattended on a schedule for months\n• Automated box-score collection via scheduled GitHub Actions, with a cleaning and preprocessing pipeline feeding data shipped inside the package\n• Packaged properly for distribution — DESCRIPTION, NAMESPACE, .rda data, testthat coverage, installable via remotes::install_github()',
    technologies: ['R', 'Python', 'GitHub Actions', 'CI/CD', 'Sports Analytics'],
    githubLink: 'https://github.com/jsphellis/NBAR',
    image: '/project_pics/nba.png'
  },
  {
    title: 'ChatDB - NBA SQL RAG',
    description: '• Created a natural language–to–SQL interface using OpenAI, mapping conversational questions to structured queries with a focus on accessibility and transparency\n• Built the full data path — scrape, dedupe, merge traditional and advanced box scores, schema design with primary keys — behind a Streamlit and MySQL interface with query tracking and live visuals\n• Implemented regex-based intent classification routing input to query, explore, or modify paths, with safety validation applied specifically to destructive queries\n• Designed a modular, well-documented system with onboarding in mind, reducing dev ramp-up time',
    technologies: ['Python', 'OpenAI', 'MySQL', 'Streamlit', 'RAG', 'Text-to-SQL'],
    githubLink: 'https://github.com/jsphellis/NBA-SQL-RAG',
    image: '/project_pics/nba.png'
  },
  {
    title: 'TikTok Virality Predictor',
    description: '• Fine-tuned R(2+1)D-18, a Kinetics-400 pretrained 3D CNN, to predict virality from the video itself rather than its metadata — as both a binary classifier and a continuous regressor\n• Wrote the web scraping pipeline to download and process TikTok videos, with a custom dataset handling variable-length video via padding and random sampling\n• Engineered the virality target as a composite weighting likes 40%, views 30%, shares 20%, and comments 10% — defining the target was the real intellectual work\n• Evaluated with ROC/AUC, precision-recall, confusion matrices, and MSE/RMSE/MAE, including a best/worst-prediction analysis. Accuracy was moderate; the design is the contribution',
    technologies: ['PyTorch', 'Python', 'Pandas', 'Computer Vision', '3D CNN'],
    githubLink: 'https://github.com/jsphellis/ViralityAnalysis',
    image: '/project_pics/tiktok.png'
  },
  {
    title: 'PLG SaaS Marketing Mix Modeling',
    description: '• Built a full Bayesian MMM pipeline in R with adstock decay, Hill saturation, and hierarchical priors to analyze PLG SaaS marketing impact\n• Simulated realistic multi-channel data with seasonal trends and business logic to validate model assumptions and inference quality\n• Used brms and Stan to run MCMC sampling with custom priors and diagnostics, ensuring robust, reproducible statistical modeling\n• Automated visual reporting for ROI, channel attribution, and diagnostics, translating complex outputs into clear marketing insights',
    technologies: ['R', 'Bayesian Statistics', 'Stan', 'MCMC', 'Marketing Analytics'],
    githubLink: 'https://github.com/jsphellis/PLG-MMR-Analysis',
    image: '/project_pics/SaaS-Business.jpg'
  },
  {
    title: 'DrugAI-CVAE',
    description: 'Built and trained an autoregressive Conditional VAE in PyTorch to generate novel drug molecule sequences (SMILES) conditioned on target protein spikes, trained on human-valid molecules from BindingDB. Positioned explicitly as an alternative architecture to a published transformer-based approach, in collaboration with two faculty members, a statistician, and one peer.',
    technologies: ['PyTorch', 'Generative Models', 'Sequence Modeling', 'Drug Discovery'],
    githubLink: 'https://github.com/jsphellis/DrugAI---CVAE',
    image: '/project_pics/drug.jpeg'
  },
  {
    title: 'Fire Segmentation',
    description: 'U-Net semantic segmentation model trained on a fire-segmentation dataset, with pickled dataset splits for reproducibility, separate training and evaluation scripts, IoU and loss curves, and Grad-CAM interpretability to verify what the model actually attends to rather than trusting the metric alone.',
    technologies: ['PyTorch', 'U-Net', 'Computer Vision', 'Grad-CAM'],
    githubLink: 'https://github.com/jsphellis/FireSegmentation',
    image: '/project_pics/fire.jpg'
  },
  {
    title: 'Pest Patrol',
    description: 'Real-time object detection on an NVIDIA Jetson using SSD-MobileNet-v2 with a GStreamer camera pipeline and live FPS display, wired to a servo over GPIO PWM inside a threaded action class so actuation never blocks the inference loop. A working prototype — detection and actuation are complete, targeting logic is not.',
    technologies: ['Python', 'NVIDIA Jetson', 'Edge ML', 'GPIO', 'Threading'],
    githubLink: 'https://github.com/jsphellis/PestPatrol',
    image: '/project_pics/raccoon.jpeg'
  },
  {
    title: 'Human Activity in VR Research',
    description: '• Designed 13 modular functions to generate advanced 3D models and visualize VR hand/object trajectories through dynamic line charts\n• Leveraged movement pattern visualizations to design a novel rule-based system for identifying and labelling user actions\n• Implemented unsupervised ML models analyzing 8 movement trajectory types for VR activity prediction using spatial patterns',
    technologies: ['Python', '3D Visualization', 'Unsupervised Learning', 'VR'],
    image: '/project_pics/VR.jpg'
  },
  {
    title: 'ASL Classification',
    description: 'CNN classifier on the ASL alphabet in TensorFlow/Keras, structured so model construction runs create, fit, and save as one flow, with a separate visualization module reusing the same preprocessing pipeline and saved training history — clean separation of model code from analysis code.',
    technologies: ['TensorFlow', 'Keras', 'CNN', 'Computer Vision'],
    githubLink: 'https://github.com/jsphellis/ASLClassification',
    icon: 'fas fa-hands'
  },
  {
    title: 'Notion Work Scheduler',
    description: 'Full-stack time tracking with calendar, week, and statistics views over time entries — monthly comparisons, project breakdowns, and trends — syncing to a Notion database via its API, with local storage as a fallback so the app works before Notion is configured. Ships an embeddable view plus Vercel and Railway deploy configs.',
    technologies: ['React', 'Express', 'Notion API', 'Full-Stack'],
    githubLink: 'https://github.com/jsphellis/notion-work-scheduler',
    icon: 'fas fa-calendar-check'
  },
  {
    title: 'Psyche Evaluation',
    description: 'Python and MySQL application administering the Big Five and NPI psychometric inventories: scoring, user management, aggregate averages, Excel export, and per-trait background information, with psychometric sources cited.',
    technologies: ['Python', 'MySQL', 'Psychometrics'],
    githubLink: 'https://github.com/jsphellis/Psyche-Evaluation',
    image: '/project_pics/brain.jpg'
  },
  {
    title: 'Money Wicket',
    description: 'Modern sports data analysis applied to cricket, using logistic regression with Ridge and Lasso regularization to build predictive models for scouting possible transfers and minimizing money expenditure — the first regularization work in my portfolio.',
    technologies: ['R', 'Ridge / Lasso', 'Machine Learning', 'Sports Analytics'],
    githubLink: 'https://github.com/jsphellis/MoneyWicket',
    image: '/project_pics/wicket.jpg'
  },
  {
    title: 'Soccer Linear & Logistic Analysis',
    description: 'Self-sourced a dataset of 2018-19 English Premier League statistics and ran it through linear and logistic models in pandas, with a written report and a recorded video presentation.',
    technologies: ['Python', 'Pandas', 'Regression', 'Sports Analytics'],
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
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-48 w-full">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-[#2c3e50] to-[#3498db]">
                    <i className={`${project.icon ?? 'fas fa-code'} text-5xl text-white/90`}></i>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 text-[#2c3e50]">{project.title}</h3>
                <p className="text-gray-600 mb-4 whitespace-pre-line">{project.description}</p>
                {project.note && (
                  <p className="text-sm italic text-[#7f8c8d] mb-4">{project.note}</p>
                )}
                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#3498db] text-white text-sm rounded-full hover:bg-[#2980b9] transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#3498db] hover:text-[#2980b9] transition-colors duration-300"
                  >
                    {project.linkLabel ?? 'View Code'}
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
