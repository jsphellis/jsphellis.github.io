import Link from 'next/link'
import type { viralityPost } from '@/data/posts'

export default function BlogPostContent({ post }: { post: typeof viralityPost }) {
  return (
    <main className="mx-auto w-full max-w-[46rem] px-6 pt-16 pb-16 sm:px-8 sm:pt-24">
      <Link className="text-link metadata" href="/blog/">← Writing</Link>
      <article>
        <header className="mt-7 border-b border-hairline pb-8">
          <h1 className="text-balance text-[1.65rem] font-semibold leading-tight tracking-tight sm:text-[2rem]">{post.title}</h1>
          <div className="metadata mt-5 flex flex-wrap gap-x-4 gap-y-1">
            <span className="whitespace-nowrap">{post.date}</span>
            <span className="whitespace-nowrap">{post.category}</span>
            <span className="whitespace-nowrap">{post.readTime}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">A summary of the collaborative report by {post.authors}.</p>
        </header>
        <p className="mt-8 text-base leading-[1.75]">{post.intro}</p>
        <div className="mt-9 space-y-9">
          {post.sections.map(section => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold">{section.title}</h2>
              <div className="mt-3 space-y-4 text-base leading-[1.75]">
                {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>
        <aside className="mt-10 border-y border-hairline py-6" aria-label="Full report">
          <h2 className="text-base font-semibold">The full study</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">The original report includes the dataset construction, training curves, prediction examples, and evaluation tables.</p>
          <a className="text-link mt-4 inline-block text-sm" href={post.pdf}>Read the full report (PDF) ↗</a>
        </aside>
        <p className="mt-6 text-sm"><Link className="text-link" href="/projects/tiktok-virality/">Project overview and code →</Link></p>
      </article>
    </main>
  )
}
