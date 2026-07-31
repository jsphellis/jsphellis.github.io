import React from 'react'
import Link from 'next/link'

interface BlogPost {
  title: string
  date: string
  category: string
  content: string
  readTime: string
  pdf?: string
}

interface BlogPostContentProps {
  post: BlogPost
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <article className="mx-auto w-full max-w-[46rem] px-6 pt-20 pb-16 sm:px-8 sm:pt-24">
      <Link
        href="/blog/"
        className="font-mono text-[0.7rem] tracking-[0.06em] text-muted underline decoration-hairline decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
      >
        ← Writing
      </Link>

      <header className="mt-7 border-b border-hairline pb-8">
        <h1 className="text-balance text-[1.65rem] font-semibold leading-tight tracking-[-0.02em] sm:text-[2rem]">
          {post.title}
        </h1>
        <div className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1 font-mono text-[0.68rem] tracking-[0.04em] text-muted">
          <span className="tabular-nums">{post.date}</span>
          <span>{post.category}</span>
          <span className="tabular-nums">{post.readTime}</span>
        </div>
      </header>

      <div className="mt-8 max-w-[38rem] space-y-5 text-[0.975rem] leading-[1.75] text-ink">
        <p>{post.content}</p>
      </div>

      {post.pdf && (
        <>
          <div className="mt-8">
            <a
              href={post.pdf}
              download
              className="inline-block border border-hairline px-4 py-2 font-mono text-[0.72rem] tracking-[0.04em] text-muted transition-colors hover:border-accent hover:text-accent"
            >
              Download the full report (PDF)
            </a>
          </div>

          <div className="mt-6 h-[80vh] min-h-[32rem] w-full overflow-hidden border border-hairline">
            <iframe
              src={post.pdf}
              className="h-full w-full"
              title={`${post.title} — full report`}
            />
          </div>
        </>
      )}
    </article>
  )
}
