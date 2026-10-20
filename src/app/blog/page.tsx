import Link from 'next/link'
import { viralityPost as post } from '@/data/posts'

export const metadata = {
  title: 'Writing | Joseph Ellis',
  description: 'Notes on machine learning experiments, data, and software development.',
}
export default function BlogPage() {
  return (
    <main className="mx-auto w-full max-w-[46rem] px-6 pt-16 pb-16 sm:px-8 sm:pt-24">
      <header className="pb-10">
        <Link className="text-link metadata" href="/">← Joseph Ellis</Link>
        <h1 className="mt-7 text-3xl font-semibold tracking-tight">Writing</h1>
        <p className="mt-4 font-display text-xl leading-relaxed text-muted">Notes on machine learning experiments, data, and software development.</p>
      </header>
      <article className="border-y border-hairline py-8">
        <div className="metadata flex flex-wrap gap-x-4 gap-y-1">
          <span className="whitespace-nowrap">{post.date}</span>
          <span className="whitespace-nowrap">{post.category}</span>
          <span className="whitespace-nowrap">{post.readTime}</span>
        </div>
        <h2 className="mt-3 text-lg font-semibold leading-snug">
          <Link className="text-link" href={`/blog/${post.slug}/`}>{post.title}</Link>
        </h2>
        <p className="mt-3 text-[0.95rem] leading-[1.7] text-muted">{post.excerpt}</p>
      </article>
    </main>
  )
}
