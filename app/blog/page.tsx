'use client'

import { useEffect, useState } from 'react'
import { Calendar, Clock, User, ArrowRight, Tag, Search, Filter, Plus } from "lucide-react"
import Link from "next/link"
import { Blog } from '@/lib/supabase'

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    fetchBlogs()
  }, [selectedCategory, searchTerm])

  const fetchBlogs = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      
      if (selectedCategory !== 'All') {
        params.append('category', selectedCategory)
      }
      
      if (searchTerm) {
        params.append('search', searchTerm)
      }

      const response = await fetch(`/api/fetch-blogs?${params.toString()}`)
      if (response.ok) {
        const data = await response.json()
        setBlogs(data)
      }
    } catch (error) {
      console.error('Error fetching blogs:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const categories = [
    { name: "All", count: blogs.length },
    { name: "Game Development", count: blogs.filter(b => b.category && b.category.includes("Game Development")).length },
    { name: "Web Development", count: blogs.filter(b => b.category && b.category.includes("Web Development")).length },
    { name: "Mobile Development", count: blogs.filter(b => b.category && b.category.includes("Mobile Development")).length },
    { name: "UI/UX Design", count: blogs.filter(b => b.category && b.category.includes("UI/UX Design")).length },
    { name: "Cloud & DevOps", count: blogs.filter(b => b.category && b.category.includes("Cloud & DevOps")).length },
    { name: "Technology", count: blogs.filter(b => b.category && b.category.includes("Technology")).length }
  ]

  const popularTags = [
    "React", "Mobile Games", "AI", "Performance", "UX", "Cloud", "Next.js", "Unity"
  ]

  // For now, we'll consider the first blog as featured since we don't have a featured field yet
  const featuredBlogs = blogs.slice(0, 1)
  const regularBlogs = blogs.slice(1)

  return (
    <div className=" text-white min-h-screen">
       
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-between items-center mb-8">
            <div></div>
            {/* <Link 
              href="/add-blog"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Blog
            </Link> */}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-magenta-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Insights, tutorials, and industry trends from our expert team. 
            Stay updated with the latest in technology and development.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-magenta-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredBlogs.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {featuredBlogs.slice(0, 1).map((post) => (
              <div key={post.id} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-full overflow-hidden">
                    {post.thumbnail ? (
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="h-full bg-gradient-to-br from-magenta-500/20 to-purple-600/20 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <span className="text-white font-bold">FEATURED</span>
                          </div>
                          <p className="text-magenta-400 font-medium">Featured Article</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-magenta-500/20 text-magenta-400 text-sm rounded-full">
                        {Array.isArray(post.category) ? post.category[0] : post.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.created_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{post.title}</h2>
                    <p className="text-gray-300 text-lg mb-6">{post.short_description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400 text-sm">
                        <User className="h-4 w-4 mr-2" />
                        {post.author}
                      </div>
                      <Link 
                        href={`/blog/${post.custom_url || post.url_title}`}
                        className="flex items-center text-magenta-400 hover:text-magenta-300 transition-colors"
                      >
                        Read More <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Categories and Tags */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"> */}
            {/* Categories */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 border rounded-lg transition-all duration-300 ${
                      selectedCategory === category.name
                        ? 'bg-magenta-500/20 border-magenta-500 text-magenta-400'
                        : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-magenta-500 hover:text-magenta-400'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
            
            {/* Popular Tags */}
            {/* <div>
              <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full hover:bg-magenta-500/20 hover:text-magenta-400 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800">
                  {/* Skeleton Image */}
                  <div className="h-48 bg-gray-700/50 animate-pulse"></div>
                  
                  {/* Skeleton Content */}
                  <div className="p-6">
                    {/* Category and Date Skeleton */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-5 w-20 bg-gray-700/50 rounded animate-pulse"></div>
                      <div className="h-4 w-24 bg-gray-700/50 rounded animate-pulse"></div>
                    </div>

                    {/* Title Skeleton */}
                    <div className="space-y-2 mb-3">
                      <div className="h-6 bg-gray-700/50 rounded animate-pulse"></div>
                      <div className="h-6 w-3/4 bg-gray-700/50 rounded animate-pulse"></div>
                    </div>

                    {/* Description Skeleton */}
                    <div className="space-y-2 mb-4">
                      <div className="h-4 bg-gray-700/50 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-700/50 rounded animate-pulse"></div>
                      <div className="h-4 w-2/3 bg-gray-700/50 rounded animate-pulse"></div>
                    </div>

                    {/* Tags Skeleton */}
                    <div className="flex gap-1 mb-4">
                      <div className="h-6 w-16 bg-gray-700/50 rounded animate-pulse"></div>
                      <div className="h-6 w-12 bg-gray-700/50 rounded animate-pulse"></div>
                      <div className="h-6 w-20 bg-gray-700/50 rounded animate-pulse"></div>
                    </div>

                    {/* Author Skeleton */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-4 w-24 bg-gray-700/50 rounded animate-pulse"></div>
                    </div>

                    {/* Button Skeleton */}
                    <div className="h-10 bg-gray-700/50 rounded-lg animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : regularBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularBlogs.map((post) => (
                <article key={post.id} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-magenta-500/50 transition-all duration-300 hover:scale-105">
                  {/* Post Image */}
                  <div className="h-48 overflow-hidden">
                    {post.thumbnail ? (
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="h-full bg-gradient-to-br from-magenta-500/20 to-purple-600/20 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <span className="text-white text-xs font-bold">BLOG</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2 py-1 bg-magenta-500/20 text-magenta-400 text-xs rounded">
                        {Array.isArray(post.category) ? post.category[0] : post.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.created_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.short_description}</p>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Author and Read Time */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gray-400 text-xs">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                    </div>

                    {/* Read More Button */}
                    <Link 
                      href={`/blog/${post.custom_url || post.url_title}`}
                      className="w-full block py-2 border border-gray-700 text-gray-300 hover:border-magenta-500 hover:text-magenta-400 rounded-lg transition-all duration-300 text-center"
                    >
                      <span className="flex items-center justify-center">
                        Read More <ArrowRight className="h-4 w-4 ml-2" />
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4">No blog posts found</h3>
              <p className="text-gray-400 mb-8">
                {searchTerm || selectedCategory !== 'All' 
                  ? 'Try adjusting your search or filter criteria.'
                  : 'Be the first to create a blog post!'
                }
              </p>
              {/* <Link
                href="/add-blog"
                className="inline-flex items-center bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create First Blog Post
              </Link> */}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}