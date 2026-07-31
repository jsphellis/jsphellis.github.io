import React from 'react'
import Link from 'next/link'
import BlogPostContent from './BlogPostContent'

interface BlogPost {
  title: string
  date: string
  category: string
  content: string
  readTime: string
  pdf?: string
}

const blogPosts: Record<string, BlogPost> = {
  'tiktok-virality': {
    title: 'The Viral Vision: Computer Vision Models and the Cultural Zeitgeist',
    date: 'March 4, 2024',
    category: 'Machine Learning',
    content:
      'A study at the intersection of computer vision and social media virality, asking whether a model can predict how a TikTok video performs from the video itself rather than from its metadata. The work fine-tunes a Kinetics-400 pretrained 3D CNN as both a binary classifier and a continuous regressor, over a scraped dataset with a custom loader handling variable-length video. The harder problem turned out to be upstream of the network: defining what "viral" means as a number, which is a weighting judgment about likes, views, shares, and comments that the model then inherits. The full report covers the dataset construction, the target definition, and the evaluation — ROC/AUC, precision-recall, and an analysis of the best and worst predictions.',
    readTime: '15 min',
    pdf: '/blog/TikTokVirality/Report.pdf',
  },
}

export const dynamic = 'force-static'
export const dynamicParams = false

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts[slug]
  if (!post) return { title: 'Not found — Joseph Ellis' }
  return { title: `${post.title} — Joseph Ellis` }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    return (
      <main className="mx-auto w-full max-w-[46rem] px-6 pt-24 pb-16 sm:px-8">
        <h1 className="text-[1.5rem] font-semibold tracking-[-0.02em]">
          That post doesn&apos;t exist
        </h1>
        <p className="mt-4 text-[0.95rem] text-muted">
          It may have been renamed or never published.
        </p>
        <Link
          href="/blog/"
          className="mt-6 inline-block font-mono text-[0.7rem] tracking-[0.06em] text-muted underline decoration-hairline decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          ← Back to writing
        </Link>
      </main>
    )
  }

  return (
    <main>
      <BlogPostContent post={post} />
    </main>
  )
}
