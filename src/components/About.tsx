import React from 'react'
import Section from './Section'

const stack: { label: string; items: string }[] = [
  {
    label: 'Languages',
    items: 'TypeScript · Python · SQL · R · C++',
  },
  {
    label: 'Product',
    items: 'React · Next.js · Node.js · Tailwind · tRPC',
  },
  {
    label: 'Data',
    items: 'PostgreSQL · Supabase · Redis · Firebase · Trigger.dev',
  },
  {
    label: 'AI',
    items:
      'LLM & agent architecture · RAG · prompt engineering · LoRA fine-tuning · PyTorch · TensorFlow',
  },
  {
    label: 'Platform',
    items: 'OAuth 2.0 & PKCE · Meta · Google Ads · LinkedIn · X · TikTok',
  },
  {
    label: 'Infra',
    items: 'GCP · AWS · Docker · GitHub Actions · Vercel',
  },
]

const About: React.FC = () => (
  <Section id="about" label="About">
    <div className="max-w-[38rem] space-y-5 text-[0.975rem] leading-[1.7] text-ink">
      <p>
        I own the marketing surface of an AI business platform end to end —
        social publishing integrations, AI content generation, paid advertising,
        and media generation — working across the stack in TypeScript, React,
        and Postgres.
      </p>
      <p>
        My background is in machine learning and data science, and it still
        shapes how I work. Before swapping a model or a vendor I run a
        controlled test; before shipping something that spends a user&apos;s
        money I make it fail closed. The problems I find most interesting are
        the ones where nothing throws an error — a silently discarded API
        option, a model quietly rejecting its input, an agent reporting success
        it didn&apos;t earn.
      </p>
      <p>
        I have a particular affinity for integrating platforms that don&apos;t
        want to be integrated, and for the research side of LLM systems:
        multi-agent architectures, fine-tuning, and designing the evaluation
        harness that tells you whether any of it actually worked.
      </p>
    </div>

    <dl className="mt-10 space-y-3">
      {stack.map((row) => (
        <div
          key={row.label}
          className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-[5.5rem_1fr]"
        >
          <dt className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted sm:pt-[0.15rem]">
            {row.label}
          </dt>
          <dd className="text-[0.9rem] leading-[1.6] text-ink">{row.items}</dd>
        </div>
      ))}
    </dl>
  </Section>
)

export default About
