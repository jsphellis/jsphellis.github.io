import React from 'react'
import Section from './Section'

interface Role {
  title: string
  company: string
  period: string
  lead: string
  highlights?: string[]
  href?: string
}

const roles: Role[] = [
  {
    title: 'Software Engineer',
    company: 'Buildy',
    period: '2026 — Present',
    lead:
      'I own the marketing surface of an all-in-one AI business platform: organic social publishing, AI content generation and approval, paid advertising, and the AI media library.',
    highlights: [
      'Built the Facebook, LinkedIn, X, and TikTok publishing integrations on a product that previously published to Instagram alone — one publish path absorbing four different auth models, media constraints, and failure modes, while still giving the user a single honest sentence about what went wrong.',
      'Built the Google Ads integration from zero: OAuth connect, conversion tracking and tag injection, Search campaigns, and Demand Gen across video, image, and carousel — shipped incrementally behind launch gates while the API developer token was still under review.',
      'Shipped an AI media library for image and video generation across a range of models, with native credit metering, social video publishing, and per-style animation controls.',
      'Rebuilt AI content generation around a single marketing subagent with per-platform skills, replacing a chain of per-platform LLM generators — better output from less code, and lower recurring prompt cost through presets, skill gating, and cache fixes.',
      'Engineered fail-closed behavior on paths that spend real money: budget writes blocked when the ad account currency cannot be resolved, idempotent campaign publishing that reconciles against remote state on timeout, and proactive token refresh ahead of expiry.',
      'Delivered the third-party compliance work platform access depends on — TikTok Content Sharing audit and posting-settings confirmation, Google Limited Use privacy clauses ahead of OAuth review. None of it shows up in a demo; without it there is no TikTok and no Google Ads.',
    ],
  },
  {
    title: 'Machine Learning Engineer',
    company: 'PushButton.AI',
    period: '2024 — 2026',
    lead:
      'Built and deployed the LLM infrastructure behind an automated course-building product.',
    highlights: [
      'Developed and deployed LLM APIs with Docker and Redis on DigitalOcean, cutting API costs 60% while keeping the system stable under high load.',
      'Implemented high-token-output RAG systems using recursive calls and prompt engineering, increasing output capacity 5× and improving retrieval quality through web scraping integration.',
      'Automated agentic workflows converting course outlines into structured lessons, with task IDs and real-time progress tracking.',
      'Benchmarked Mistral against GPT-3.5-turbo under sustained load, producing the latency and token datasets behind model-selection decisions.',
    ],
  },
  {
    title: 'Co-Founder, Backend Engineer',
    company: 'Ovrsee',
    period: '2024',
    href: 'https://github.com/jsphellis/Ovrsee',
    lead:
      'Backend for a TikTok creator analytics product — the same hard integration I would go on to build again at a different company two years later.',
    highlights: [
      'Hand-wrote a custom Passport.js TikTok OAuth strategy, since TikTok is not a supported provider, with an Express callback persisting creator video data to Firestore.',
      'Built a token-refresher service keeping long-lived creator connections alive without user intervention, and scheduled aggregation jobs computing daily, weekly, and monthly metrics.',
      'Deployed as discrete Google Cloud Functions with encrypted key management and request validation.',
    ],
  },
  {
    title: 'Data Science Intern',
    company: 'Cabrillo Marine Aquarium',
    period: '2023',
    lead:
      'Worked with TRACKS husbandry software to clean and structure animal welfare data, then built the enrichment and welfare visualizations displayed around the exhibits — including semi-automated generation so aquarists could keep producing them after the internship ended.',
  },
]

const Work: React.FC = () => (
  <Section id="work" label="Work">
    <div className="space-y-11">
      {roles.map((role) => (
        <article key={role.company}>
          <div className="flex flex-col gap-x-6 gap-y-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-[0.975rem] font-semibold tracking-[-0.005em]">
              {role.title}
              <span className="text-muted"> · </span>
              {role.href ? (
                <a
                  href={role.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-hairline decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {role.company}
                </a>
              ) : (
                role.company
              )}
            </h3>
            <p className="shrink-0 font-mono text-[0.68rem] tabular-nums tracking-[0.04em] text-muted">
              {role.period}
            </p>
          </div>

          <p className="mt-3 max-w-[38rem] text-[0.925rem] leading-[1.7] text-ink">
            {role.lead}
          </p>

          {role.highlights && (
            <ul className="mt-4 max-w-[38rem] space-y-3">
              {role.highlights.map((item, i) => (
                <li
                  key={i}
                  className="relative pl-5 text-[0.875rem] leading-[1.65] text-muted before:absolute before:left-0 before:text-accent before:content-['—']"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  </Section>
)

export default Work
