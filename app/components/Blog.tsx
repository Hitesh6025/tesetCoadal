"use client"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, Calendar, User, Tag } from "lucide-react"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

interface BlogPost {
  id: number
  title: string
  short_description: string
  author: string
  created_at: string
  custom_url?: string
  category?: string[]
  tags?: string[]
  thumbnail?: string
}

export default function Blog() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch latest 3 blogs
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/fetch-blogs')
        if (response.ok) {
          const blogs = await response.json()
          setBlogPosts(blogs.slice(0, 3)) // Get latest 3 blogs
        }
      } catch (error) {
        console.error('Error fetching blogs:', error)
        // Fallback to static content if API fails
        setBlogPosts([
          {
            id: 1,
            title: "The Art of Procedural Generation in Game Design",
            short_description: "Exploring advanced techniques for creating dynamic, infinite worlds that captivate players with endless possibilities and emergent gameplay.",
            author: "Alex Chen",
            created_at: "2025-07-25T00:00:00Z",
            custom_url: "procedural-generation-game-design",
            category: ["Game Design", "Programming"],
            tags: ["procedural", "generation", "algorithms"],
            thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
          },
          {
            id: 2,
            title: "Optimizing for Performance: A Deep Dive into Unity's URP",
            short_description: "Master Unity's Universal Render Pipeline to achieve stunning visuals while maintaining optimal performance across all target platforms.",
            author: "Sarah Kumar",
            created_at: "2025-07-18T00:00:00Z",
            custom_url: "unity-urp-optimization-guide",
            category: ["Unity", "Performance"],
            tags: ["unity", "URP", "optimization"],
            thumbnail: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?w=600&h=400&fit=crop"
          },
          {
            id: 3,
            title: "Creating Compelling Narratives in Multiplayer Games",
            short_description: "Learn how to weave engaging stories that work seamlessly with multiplayer mechanics and player-driven content creation.",
            author: "David Rodriguez",
            created_at: "2025-07-10T00:00:00Z",
            custom_url: "multiplayer-game-narratives",
            category: ["Game Design", "Storytelling"],
            tags: ["narrative", "multiplayer", "storytelling"],
            thumbnail: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop"
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  useEffect(() => {
    if (!sectionRef.current || loading) return
    gsap.fromTo(
      ".blog-post-card",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      },
    )
  }, [loading])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getBlogUrl = (post: BlogPost) => {
    return `/blog/${post.custom_url || post.id}`
  }

  if (loading) {
    return (
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-magenta-500 mx-auto"></div>
            <p className="text-gray-400 mt-4">Loading latest insights...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="blog" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 " />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our
            <span className="block bg-gradient-to-r from-magenta-400 to-purple-500 bg-clip-text text-transparent">
              Playbook
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Insights, strategies, and stories from the world of development and design.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="blog-post-card group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-magenta-500/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.thumbnail || `https://images.unsplash.com/photo-${1551650975 + index}?w=600&h=400&fit=crop`} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Category badge */}
                {post.category && post.category.length > 0 && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-magenta-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                      {post.category[0]}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.created_at)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-magenta-300 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {post.short_description}
                </p>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md"
                      >
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <Link
                  href={getBlogUrl(post)}
                  className="inline-flex items-center bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 group"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {blogPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No blog posts available at the moment.</p>
            <p className="text-gray-500 mt-2">Check back soon for exciting game development insights!</p>
          </div>
        )}
      </div>
    </section>
  )
}
