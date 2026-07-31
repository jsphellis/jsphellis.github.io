import React from 'react'
import Link from 'next/link'

interface BlogPost {
  title: string
  date: string
  category: string
  excerpt: string
  slug: string
  readTime: string
}

const blogPosts: BlogPost[] = [
  {
    title: 'The Viral Vision: Computer Vision Models and the Cultural Zeitgeist',
    date: 'March 4, 2024',
    category: 'Machine Learning',
    excerpt:
      'Using computer vision to assess and predict TikTok video virality — what the model can actually see in a video, where the signal turns out to live, and why defining the target variable was harder than training the network.',
    slug: 'tiktok-virality',
    readTime: '15 min',
  },
]

export const metadata = {
  title: 'Writing — Joseph Ellis',
  description:
    'Occasional writing on machine learning, data science, and building systems that report honestly.',
}

export default function BlogPage() {
  return (
    <main className="mx-auto w-full max-w-[46rem] px-6 pt-20 pb-16 sm:px-8 sm:pt-24">
      <header className="pb-12">
        <Link
          href="/"
          className="font-mono text-[0.7rem] tracking-[0.06em] text-muted underline decoration-hairline decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          ← Joseph Ellis
        </Link>

        <h1 className="mt-7 text-[1.6rem] font-semibold tracking-[-0.02em] sm:text-[1.75rem]">
          Writing
        </h1>
        <p className="mt-4 max-w-[34rem] font-display text-[1.15rem] leading-[1.5] text-muted">
          Occasional notes on machine learning, data science, and the things
          that break quietly.
        </p>
      </header>

      <ul className="border-t border-hairline">
        {blogPosts.map((post) => (
          <li key={post.slug} className="border-b border-hairline py-8">
            <article>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 font-mono text-[0.68rem] tracking-[0.04em] text-muted">
                <span className="tabular-nums">{post.date}</span>
                <span>{post.category}</span>
                <span className="tabular-nums">{post.readTime}</span>
              </div>

              <h2 className="mt-3 text-[1.075rem] font-semibold leading-snug tracking-[-0.01em]">
                <Link
                  href={`/blog/${post.slug}/`}
                  className="underline decoration-hairline decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {post.title}
                </Link>
              </h2>

              <p className="mt-3 max-w-[38rem] text-[0.925rem] leading-[1.7] text-muted">
                {post.excerpt}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </main>
  )
}
