'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Calendar, Clock, User, ArrowLeft, Tag } from 'lucide-react'
import Link from 'next/link'
import { Blog } from '../../../lib/supabase'

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string
  const [blog, setBlog] = useState<Blog | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (slug) {
      fetchBlog()
    }
  }, [slug])

  const fetchBlog = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/blog/${slug}`)
      
      if (!response.ok) {
        throw new Error('Blog not found')
      }
      
      const blogData = await response.json()
      setBlog(blogData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch blog')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="bg-black text-white min-h-screen">
         
        <div className="pt-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-700 rounded mb-4"></div>
              <div className="h-4 bg-gray-700 rounded mb-8"></div>
              <div className="h-64 bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !blog) {
    return (
      <div className="bg-black text-white min-h-screen">
         
        <div className="pt-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
            <p className="text-gray-400 mb-8">{error || 'The requested blog post could not be found.'}</p>
            <Link 
              href="/blog"
              className="inline-flex items-center text-magenta-400 hover:text-magenta-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black text-white min-h-screen">
       
      
      {/* Blog Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/blog"
            className="inline-flex items-center text-magenta-400 hover:text-magenta-300 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-magenta-500/20 text-magenta-400 text-sm rounded-full">
              {Array.isArray(blog.category) ? blog.category[0] : blog.category}
            </span>
            <div className="flex items-center text-gray-400 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(blog.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center text-white">
            {blog.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {blog.short_description}
          </p>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Blog Featured Image */}
      {blog.thumbnail && (
        <section className="pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden border border-gray-800 max-w-3xl mx-auto">
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Blog Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {blog.content && blog.content.length > 0 ? (
              blog.content.map((block, index) => (
                <div key={index} className="space-y-6">
                  {/* Render paragraph */}
                  {block.paragraph && (
                    <div className="prose prose-invert prose-lg max-w-none">
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {block.paragraph}
                      </p>
                    </div>
                  )}
                  
                  {/* Render image */}
                  {block.image && (
                    <div className="flex justify-center my-8">
                      <div className="rounded-2xl overflow-hidden border border-gray-800 max-w-2xl w-full">
                        <img
                          src={block.image}
                          alt={`Content image ${index + 1}`}
                          className="w-full h-auto object-cover max-h-96"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed">
                  This blog post content will be available soon. Please check back later.
                </p>
              </div>
            )}
          </div>

          {/* Author at end of content */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex items-center justify-center text-gray-300">
              <User className="h-5 w-5 mr-3" />
              <span className="text-lg font-medium">Written by {blog.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts or Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Enjoyed this article?</h2>
          <p className="text-gray-300 mb-8">
            Check out more of our insights and tutorials on our blog.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            View All Posts
          </Link>
        </div>
      </section>
    </div>
  )
}
