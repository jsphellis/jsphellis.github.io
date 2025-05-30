'use client'

import React from 'react'

interface BlogPost {
  title: string
  date: string
  category: string
  excerpt: string
  image: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    title: 'The Viral Vision: Computer Vision Models and the Cultural Zeitgeist',
    date: 'March 4, 2024',
    category: 'Machine Learning',
    excerpt: 'A study on using computer vision techniques to assess and predict TikTok video virality, exploring what makes content go viral and providing insights for content creators.',
    image: '/blog/TikTokVirality/tok.png',
    slug: 'tiktok-virality'
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f0f4f8]">
      {/* Blog Header */}
      <header className="pt-32 pb-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#2c3e50]">My Blog</h1>
          <p className="text-xl text-[#34495e]">Thoughts, projects, and explorations in data science, machine learning, and more</p>
        </div>
      </header>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                >
                  <div className="bg-[#3498db] text-white px-4 py-2 inline-block m-4 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">{post.title}</h3>
                  <p className="text-[#7f8c8d] mb-4">
                    <i className="far fa-calendar-alt mr-2"></i>
                    {post.date}
                  </p>
                  <p className="text-[#34495e] mb-4">{post.excerpt}</p>
                  <a 
                    href={`/blog/${post.slug}`}
                    className="text-[#3498db] hover:text-[#2980b9] font-medium inline-flex items-center"
                  >
                    Read More <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 