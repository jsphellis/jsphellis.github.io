'use client'

import React from 'react'
import Image from 'next/image'

interface BlogPost {
  title: string
  date: string
  category: string
  content: string
  image: string
  readTime: string
}

interface BlogPostContentProps {
  post: BlogPost
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <article className="container mx-auto px-4 pt-32 pb-16">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2c3e50]">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-[#7f8c8d]">
            <span className="flex items-center">
              <i className="far fa-calendar-alt mr-2"></i>
              {post.date}
            </span>
            <span className="flex items-center">
              <i className="fas fa-tag mr-2"></i>
              {post.category}
            </span>
            <span className="flex items-center">
              <i className="far fa-clock mr-2"></i>
              {post.readTime}
            </span>
          </div>
        </header>

        <div className="mb-12">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={450}
            className="rounded-lg shadow-md w-full"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-[#34495e] leading-relaxed">{post.content}</p>
          
          {/* PDF Viewer */}
          <div className="mt-8">
            <a
              href="/blog/TikTokVirality/Report.pdf"
              className="inline-flex items-center gap-2 bg-[#3498db] text-white px-6 py-3 rounded-full hover:bg-[#2980b9] transition-colors"
              download
            >
              <i className="fas fa-download"></i>
              Download PDF
            </a>
          </div>

          <div className="mt-8 h-[800px] rounded-lg shadow-md overflow-hidden">
            <iframe
              src="/blog/TikTokVirality/Report.pdf"
              className="w-full h-full"
              title="Blog Post PDF"
            />
          </div>
        </div>
      </div>
    </article>
  )
} 