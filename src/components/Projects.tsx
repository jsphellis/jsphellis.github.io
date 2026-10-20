import Link from 'next/link'
import Section from './Section'
import { projects } from '@/data/projects'

interface Other {
  title: string
  year: string
  blurb: string
  stack: string
  href?: string
}

const others: Other[] = [
  {
    title: 'PLG SaaS Marketing Mix Modeling',
    stack: 'R · Stan · brms · Bayesian inference',
    year: '2025',
    href: 'https://github.com/jsphellis/PLG-MMR-Analysis',
    blurb:
      'Bayesian MMM in R with adstock decay, Hill saturation, and hierarchical priors, sampled via brms and Stan.',
  },
  {
    title: 'DrugAI-CVAE',
    stack: 'PyTorch · Conditional VAE · SMILES',
    year: '2025',
    href: 'https://github.com/jsphellis/DrugAI---CVAE',
    blurb:
      'Autoregressive conditional VAE generating novel SMILES sequences conditioned on target proteins, with two faculty collaborators.',
  },
  {
    title: 'Notion Work Scheduler',
    stack: 'React · Express · Notion API',
    year: '2025',
    href: 'https://github.com/jsphellis/notion-work-scheduler',
    blurb:
      'Time tracking synced to a Notion database, with local storage fallback so it works before Notion is configured.',
  },
  {
    title: 'Fire Segmentation',
    stack: 'PyTorch · U-Net · Grad-CAM',
    year: '2024',
    href: 'https://github.com/jsphellis/FireSegmentation',
    blurb:
      'U-Net semantic segmentation with Grad-CAM interpretability, to check what the model attends to rather than trusting the metric.',
  },
  {
    title: 'Pest Patrol',
    stack: 'Python · NVIDIA Jetson · GPIO · Threading',
    year: '2024',
    href: 'https://github.com/jsphellis/PestPatrol',
    blurb:
      'Real-time detection on an NVIDIA Jetson driving a servo over GPIO, threaded so actuation never blocks the inference loop. A prototype.',
  },
  {
    title: 'ASL Classification',
    stack: 'TensorFlow · Keras · CNN',
    year: '2024',
    href: 'https://github.com/jsphellis/ASLClassification',
    blurb:
      'CNN classifier on the ASL alphabet, with model code and analysis code cleanly separated over a shared preprocessing pipeline.',
  },
  {
    title: 'Psyche Evaluation',
    stack: 'Python · MySQL · Psychometrics',
    year: '2023',
    href: 'https://github.com/jsphellis/Psyche-Evaluation',
    blurb:
      'Python and MySQL application administering the Big Five and NPI inventories, with scoring, aggregates, and export.',
  },
  {
    title: 'Money Wicket',
    stack: 'R · Ridge / Lasso · Logistic regression',
    year: '2022',
    href: 'https://github.com/jsphellis/MoneyWicket',
    blurb:
      'Cricket transfer scouting via logistic regression with Ridge and Lasso regularization.',
  },
  {
    title: 'Soccer Linear & Logistic Analysis',
    stack: 'Python · pandas · Regression',
    year: '2022',
    href: 'https://github.com/jsphellis/Soccer_Linear-Logistic_Analysis',
    blurb:
      'A self-sourced Premier League dataset run through linear and logistic models in pandas.',
  },
]


export default function Projects() {
  return (
    <Section id="projects" label="Selected projects">
      <div className="space-y-9">
        {projects.map(project => (
          <article key={project.slug} aria-labelledby={`project-${project.slug}`}>
            <div className="flex flex-col justify-between gap-x-5 gap-y-1 sm:flex-row sm:items-baseline">
              <h3 id={`project-${project.slug}`} className="text-base font-semibold">
                <Link className="text-link" href={`/projects/${project.slug}/`}>{project.title}</Link>
              </h3>
              <p className="metadata shrink-0">{project.period}</p>
            </div>
            <p className="mt-3 text-[0.95rem] leading-[1.7]">{project.summary}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{project.takeaway}</p>
            <p className="metadata mt-3">{project.stack.join(' · ')}</p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <Link className="text-link" href={`/projects/${project.slug}/`} aria-label={`Read write-up: ${project.title}`}>Read write-up</Link>
              <a className="text-link" href={project.code} target="_blank" rel="noopener noreferrer" aria-label={`Code for ${project.title} on GitHub`}>Code <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        ))}
      </div>
      <details className="group/archive mt-10 border-t border-hairline">
        <summary className="cursor-pointer py-5 text-sm font-medium marker:text-accent">
          More projects <span className="metadata">({others.length})</span>
        </summary>
        <ul>
          {others.map(project => (
            <li key={project.title} className="group border-t border-hairline py-5">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-sm font-semibold">{project.title}</h3>
                <span className="metadata shrink-0">{project.year}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{project.blurb}</p>
              <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-5 gap-y-2">
                <span className="metadata transition-opacity [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-focus-within:opacity-100 [@media(hover:hover)]:group-hover:opacity-100">{project.stack}</span>
                {project.href && <a className="text-link text-sm" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Code for ${project.title} on GitHub`}>Code <span aria-hidden="true">↗</span></a>}
              </div>
            </li>
          ))}
        </ul>
      </details>
    </Section>
  )
}
