import { notFound } from 'next/navigation'
import BlogPostContent from './BlogPostContent'
import { viralityPost } from '@/data/posts'

export const dynamicParams = false
export function generateStaticParams() { return [{ slug: viralityPost.slug }] }
type Props = { params: Promise<{ slug: string }> }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  if (slug !== viralityPost.slug) return {}
  return { title: `${viralityPost.title} | Joseph Ellis`, description: viralityPost.excerpt }
}
export default async function Page({ params }: Props) {
  const { slug } = await params
  if (slug !== viralityPost.slug) notFound()
  return <BlogPostContent post={viralityPost} />
}
