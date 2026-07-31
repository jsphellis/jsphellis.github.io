'use client'

import React from 'react'

interface Skill {
  category: string
  items: string[]
}

const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'Python', 'SQL', 'R', 'C++', 'GDScript']
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Streamlit', 'Responsive UI', 'Virtualization']
  },
  {
    category: 'Backend & APIs',
    items: ['Node.js', 'FastAPI', 'Express', 'Flask', 'tRPC', 'REST API design', 'Celery', 'Trigger.dev']
  },
  {
    category: 'Data & Storage',
    items: ['PostgreSQL', 'Supabase', 'Firebase / Firestore', 'MySQL', 'Redis', 'Schema design & migrations', 'Pandas', 'NumPy']
  },
  {
    category: 'AI & Machine Learning',
    items: ['LLM & agent architecture', 'Prompt engineering', 'RAG', 'LoRA / PEFT fine-tuning', 'Claude API', 'Vercel AI SDK', 'LangChain', 'PyTorch', 'TensorFlow / Keras', 'Computer vision']
  },
  {
    category: 'Cloud & Infrastructure',
    items: ['Google Cloud Platform', 'AWS', 'DigitalOcean', 'Vercel', 'Docker', 'GitHub Actions', 'Serverless functions']
  },
  {
    category: 'Platform Integrations',
    items: ['OAuth 2.0 & PKCE', 'Token lifecycle management', 'Meta Graph API', 'Google Ads API', 'LinkedIn API', 'X API v2', 'TikTok API', 'Stripe / Autumn billing']
  },
  {
    category: 'Engineering Practices',
    items: ['Reliability engineering', 'Observability & tracing', 'Idempotency & reconciliation', 'Fail-closed design', 'Feature flags & staged rollout', 'Cost engineering', 'API compliance', 'Controlled experiments']
  },
  {
    category: 'Analysis & Statistics',
    items: ['Bayesian inference', 'Marketing mix modeling', 'Regularization (Ridge / Lasso)', 'ggplot', 'Plotly', 'Matplotlib', 'Seaborn', 'Experiment design']
  }
]

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#f0f4f8]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-[#2c3e50]">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
