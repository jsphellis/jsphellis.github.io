import React from 'react'
import BlogPostContent from './BlogPostContent'

interface BlogPost {
  title: string
  date: string
  category: string
  content: string
  image: string
  readTime: string
}

const blogPosts: Record<string, BlogPost> = {
  'tiktok-virality': {
    title: 'The Viral Vision: Computer Vision Models and the Cultural Zeitgeist',
    date: 'March 4, 2024',
    category: 'Machine Learning',
    content: 'This study explores the fascinating intersection of computer vision and social media virality, specifically focusing on TikTok videos. By analyzing visual patterns and content characteristics, we developed models that can predict the potential virality of content, providing valuable insights for content creators and marketers.',
    image: '/blog/TikTokVirality/tok.png',
    readTime: '15 min read'
  }
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

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    return (
      <main className="min-h-screen bg-[#f0f4f8]">
        <div className="container mx-auto px-4 pt-32">
          <h1 className="text-3xl font-bold text-[#2c3e50]">Post not found</h1>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#f0f4f8]">
      <BlogPostContent post={post} />
    </main>
  )
} 