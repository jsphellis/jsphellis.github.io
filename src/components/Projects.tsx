import React from 'react'
import Section from './Section'

interface Selected {
  title: string
  period: string
  body: string
  stack: string[]
  href?: string
  note?: string
}

const selected: Selected[] = [
  {
    title: 'Multi-Agent LLM Research Framework',
    period: '2025 — 2026',
    href: 'https://github.com/jsphellis/MetaMafia',
    body:
      'A research platform for training and evaluating LLM agents playing a social deduction game, where the skills that matter are deception, persuasion, and belief tracking under incomplete information. I built the game engine, four agent tiers from a random baseline up to LoRA fine-tuned Mistral-7B, and the reasoning modules underneath: a claim graph tracking accusations as a relationship graph, a probabilistic belief tracker with Bayesian updates, and a consistency auditor that detects when an agent contradicts itself. Across 499 games and five configurations, fine-tuning raised the persuasion score 321% over baseline and group consensus from 45% to 80%. Win rate, notably, discriminated nothing — it sat at 99–100% for every configuration including random agents, which is exactly why it was the wrong metric to optimize.',
    stack: ['Python', 'Mistral-7B', 'LoRA / PEFT', 'LangChain', 'Bayesian modeling'],
    note: 'Rebuilt as NewMafia — engine split from agent infrastructure, every capability an ablatable flag, seeded runs with a manifest per experiment.',
  },
  {
    title: 'AI Course-Generation API',
    period: '2025',
    body:
      'A production API that turns a topic into a structured course — syllabus outline first, then researched lesson content — by running web research through a multi-agent pipeline. The research agent itself is vendored open source; what I built is the production system around it: a FastAPI service with request validation and task status tracking, a Celery and Redis async pipeline with configurable concurrency, retry logic that falls back to alternative models, and Docker Compose across separate web, worker, and Redis containers. It also supports hybrid research, combining user-supplied PDFs with live web search.',
    stack: ['Python', 'FastAPI', 'Celery', 'Redis', 'Docker'],
    note: 'Private repository.',
  },
  {
    title: 'NBAR',
    period: '2025',
    href: 'https://github.com/jsphellis/NBAR',
    body:
      'An installable R package analyzing NBA player performance against betting odds, backed by a daily scraping pipeline that has run unattended on a schedule for months without my touching it. Box-score collection runs on scheduled GitHub Actions, feeding a cleaning pipeline whose output ships inside the package itself — properly packaged with testthat coverage and installable straight from GitHub.',
    stack: ['R', 'Python', 'GitHub Actions', 'CI/CD'],
  },
  {
    title: 'TikTok Virality Predictor',
    period: '2024 — 2025',
    href: 'https://github.com/jsphellis/ViralityAnalysis',
    body:
      'Predicting whether a video goes viral from the video itself rather than its metadata, by fine-tuning a Kinetics-400 pretrained 3D CNN as both a binary classifier and a continuous regressor. The real intellectual work was defining the target: a composite weighting likes, views, shares, and comments, where deciding that shares matter more than comments is a judgment call you have to be able to defend. Accuracy was moderate and the README says so — the design is the contribution.',
    stack: ['PyTorch', 'R(2+1)D-18', 'Computer vision', 'Pandas'],
  },
]

interface Other {
  title: string
  year: string
  blurb: string
  stack: string
  href?: string
}

const others: Other[] = [
  {
    title: 'ChatDB',
    stack: 'Python · OpenAI · MySQL · Streamlit',
    year: '2025',
    href: 'https://github.com/jsphellis/NBA-SQL-RAG',
    blurb:
      'Natural language to SQL over an NBA database, with intent routing and safety validation applied specifically to destructive queries.',
  },
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
    title: 'Human Activity in VR',
    stack: 'Python · Unsupervised ML · 3D visualization',
    year: '2024',
    blurb:
      'Modular 3D visualization of VR hand and object trajectories, feeding a rule-based labelling system and unsupervised activity prediction.',
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

const linkStyle =
  'underline decoration-hairline decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent'

const Projects: React.FC = () => (
  <Section id="projects" label="Selected Projects">
    <div className="space-y-11">
      {selected.map((p) => (
        <article key={p.title}>
          <div className="flex flex-col gap-x-6 gap-y-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-[0.975rem] font-semibold tracking-[-0.005em]">
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkStyle}
                >
                  {p.title}
                </a>
              ) : (
                p.title
              )}
            </h3>
            <p className="shrink-0 font-mono text-[0.68rem] tabular-nums tracking-[0.04em] text-muted">
              {p.period}
            </p>
          </div>

          <p className="mt-3 max-w-[38rem] text-[0.925rem] leading-[1.7] text-ink">
            {p.body}
          </p>

          {p.note && (
            <p className="mt-2.5 max-w-[38rem] text-[0.825rem] leading-[1.6] text-muted italic">
              {p.note}
            </p>
          )}

          <p className="mt-3.5 font-mono text-[0.68rem] tracking-[0.02em] text-muted">
            {p.stack.join('  ·  ')}
          </p>
        </article>
      ))}
    </div>

    <h3 className="mt-14 mb-6 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted">
      Everything Else
    </h3>

    <ul className="border-t border-hairline">
      {others.map((o) => (
        <li
          key={o.title}
          className="group grid grid-cols-1 gap-x-6 gap-y-1 border-b border-hairline py-4 sm:grid-cols-[minmax(0,13rem)_1fr_auto] sm:items-baseline"
        >
          <span className="text-[0.9rem] font-medium">
            {o.href ? (
              <a
                href={o.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
              >
                {o.title}
              </a>
            ) : (
              o.title
            )}
          </span>
          <span className="text-[0.85rem] leading-[1.6] text-muted">
            {o.blurb}
            {/* Hidden until hover on pointer devices, always shown on touch —
                where there is no hover state to reward. */}
            <span className="mt-1.5 block font-mono text-[0.62rem] tracking-[0.02em] text-accent transition-opacity duration-200 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-focus-within:opacity-100 [@media(hover:hover)]:group-hover:opacity-100">
              {o.stack}
            </span>
          </span>
          <span className="font-mono text-[0.68rem] tabular-nums text-muted">
            {o.year}
          </span>
        </li>
      ))}
    </ul>
  </Section>
)

export default Projects
