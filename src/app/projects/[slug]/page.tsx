import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'

export const dynamicParams = false
export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }))
}
type Props = { params: Promise<{ slug: string }> }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const project = projects.find(item => item.slug === slug)
  if (!project) return {}
  return { title: `${project.title} | Joseph Ellis`, description: project.summary }
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find(item => item.slug === slug)
  if (!project) notFound()
  return (
    <main className="mx-auto w-full max-w-[46rem] px-6 pt-16 pb-16 sm:px-8 sm:pt-24">
      <Link className="text-link metadata" href="/#projects">← Selected projects</Link>
      <article>
        <header className="mt-8 border-b border-hairline pb-8">
          <p className="metadata">{project.period} · Project notes</p>
          <h1 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight">{project.title}</h1>
          <p className="mt-5 text-base leading-[1.7]">{project.summary}</p>
          <p className="metadata mt-5">{project.stack.join(' · ')}</p>
          <a className="text-link mt-5 inline-block text-sm" href={project.code} target="_blank" rel="noopener noreferrer">View source on GitHub <span aria-hidden="true">↗</span></a>
        </header>
        <div className="mt-9 space-y-9">
          {project.sections.map(section => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold">{section.title}</h2>
              <div className="mt-3 space-y-4 text-base leading-[1.75]">
                {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {section.results && (
                <figure className="mt-7 border-t border-hairline pt-6">
                  <figcaption className="metadata">{section.results.caption}</figcaption>
                  <div className="mt-5 space-y-6">
                    {section.results.metrics.map(metric => (
                      <div key={metric.name}>
                        <h3 className="text-sm font-semibold">{metric.name}</h3>
                        <div className="mt-3 space-y-3">
                          {metric.bars.map(bar => (
                            <div key={bar.label}>
                              <div className="flex items-baseline justify-between gap-4">
                                <span className="text-sm text-muted">{bar.label}</span>
                                <span className="metadata tabular-nums">{bar.display}</span>
                              </div>
                              {/* the figures are printed above, so the bar itself is decorative */}
                              <div aria-hidden="true" className="mt-1.5 h-1.5 w-full overflow-hidden rounded-[1px] bg-tint">
                                <div
                                  className={bar.lead ? 'h-full bg-accent' : 'h-full bg-muted'}
                                  style={{ width: `${Math.round((bar.value / metric.max) * 1000) / 10}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </figure>
              )}
            </section>
          ))}
        </div>
        {project.related && (
          <p className="mt-9 border-t border-hairline pt-6 text-sm">
            {project.related.href.startsWith('/') ? (
              <Link className="text-link" href={project.related.href}>{project.related.label} →</Link>
            ) : (
              <a className="text-link" href={project.related.href} target="_blank" rel="noopener noreferrer">{project.related.label} ↗</a>
            )}
          </p>
        )}
      </article>
      <nav aria-label="Project navigation" className="mt-12 border-t border-hairline pt-6 text-sm">
        <Link className="text-link" href="/#projects">← All selected projects</Link>
      </nav>
    </main>
  )
}
