import React from 'react'
import Section from './Section'

const education = [
  {
    school: 'University of Southern California',
    degree: 'MS, Applied Data Science',
    detail: 'Viterbi School of Engineering · Los Angeles, CA',
    period: '2024 — 2026',
  },
  {
    school: 'Chapman University',
    degree: 'BS, Data Analytics',
    detail:
      'Fowler School of Engineering · Minor in Business Administration · Orange, CA',
    period: '2020 — 2024',
  },
]

const honors = [
  { title: 'Magna Cum Laude', org: 'Chapman University' },
  {
    title: "Provost's List — 7 semesters",
    org: 'Honors standing every semester enrolled',
  },
  { title: "Dean's List", org: 'Chapman University' },
  { title: 'Program Honors', org: 'Chapman University' },
  {
    title: 'Excellence in Computing Studies',
    org: 'Association for Computing Machinery',
  },
]

const Background: React.FC = () => (
  <Section id="background" label="Background">
    <div className="space-y-7">
      {education.map((e) => (
        <div
          key={e.school}
          className="flex flex-col gap-x-6 gap-y-1 sm:flex-row sm:items-baseline sm:justify-between"
        >
          <div>
            <h3 className="text-[0.975rem] font-semibold tracking-[-0.005em]">
              {e.school}
            </h3>
            <p className="mt-0.5 text-[0.9rem] text-ink">{e.degree}</p>
            <p className="mt-0.5 text-[0.825rem] text-muted">{e.detail}</p>
          </div>
          <p className="shrink-0 font-mono text-[0.68rem] tabular-nums tracking-[0.04em] text-muted">
            {e.period}
          </p>
        </div>
      ))}
    </div>

    <h3 className="mt-12 mb-5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted">
      Honors
    </h3>

    <ul className="space-y-2.5">
      {honors.map((h) => (
        <li
          key={h.title}
          className="flex flex-col gap-x-4 gap-y-0.5 sm:flex-row sm:items-baseline sm:justify-between"
        >
          <span className="text-[0.9rem]">{h.title}</span>
          <span className="text-[0.825rem] text-muted">{h.org}</span>
        </li>
      ))}
    </ul>
  </Section>
)

export default Background
