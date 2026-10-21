import Section from './Section'

const roles = [
  {
    company: 'Buildy', title: 'AI Software Engineer', period: 'Jan 2026 – Present',
    summary: 'Build customer-facing products at an AI business platform: social publishing, paid advertising, AI media generation, and course creation.',
    highlights: [
      'Built a course-creation product covering lesson authoring, pricing and offers, publishing, narration, and an AI tutor, with payments going to the creator\u2019s own Stripe account.',
      'Built publishing integrations for Facebook, LinkedIn, X, and TikTok, and extended them to multiple accounts per platform.',
      'Developed Google Ads connectivity, conversion tracking, and campaign creation for Search and Demand Gen.',
      'Shipped image and video generation across several model providers, with credit metering and publishing to social platforms.',
      'Built context management for the chat agent so long-running projects keep their history.',
    ],
    takeaway: 'Started on marketing tools and ended up building a course product from nothing to something creators can sell.',
  },
  {
    company: 'PushButton.AI', title: 'Machine Learning Engineer', period: 'Jan 2024 – Dec 2025',
    summary: 'Built the LLM backend for an automated course-generation service: content pipelines, async job processing, and model evaluation.',
    takeaway: 'Where I started treating model choice as an engineering decision rather than a preference.',
  },
  {
    company: 'Ovrsee', title: 'Co-Founder, Backend Engineer', period: 'May – Oct 2024',
    summary: 'Built the backend for a TikTok creator analytics product, including account connection, scheduled data collection, and reporting with Firebase and Google Cloud Functions.',
    takeaway: 'The same TikTok auth and token-refresh problem I would meet again eighteen months later.',
  },
  {
    company: 'Cabrillo Marine Aquarium', title: 'Data Science Intern', period: 'Jun – Aug 2023',
    summary: 'Organized animal welfare data and created visualizations for aquarium exhibits. Set up repeatable reporting so aquarists could continue using the work after the internship.',
    takeaway: 'First time building something whose main requirement was that someone else could keep it running.',
  },
]

export default function Work() {
  return (
    <Section id="work" label="Experience">
      <div className="space-y-9">
        {roles.map(role => (
          <article key={role.company}>
            <div className="flex flex-col justify-between gap-x-5 gap-y-1 sm:flex-row sm:items-baseline">
              <h3 className="font-semibold">{role.company}</h3>
              <p className="metadata shrink-0">{role.period}</p>
            </div>
            <p className="mt-1 text-sm text-muted">{role.title}</p>
            <p className="mt-3 text-[0.95rem] leading-[1.7]">{role.summary}</p>
            {role.highlights && (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-[1.7] text-muted marker:text-accent">
                {role.highlights.map(item => <li key={item}>{item}</li>)}
              </ul>
            )}
            {role.takeaway && (
              <p className="mt-2 text-sm leading-relaxed text-muted">{role.takeaway}</p>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
