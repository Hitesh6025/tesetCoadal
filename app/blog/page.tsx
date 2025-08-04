import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import { Calendar, Clock, User, ArrowRight, Tag, Search, Filter } from "lucide-react"

const blogPosts = [
  {
    title: "The Future of Mobile Game Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends in mobile game development, from AI-powered gameplay to cross-platform experiences and the rise of hyper-casual games.",
    author: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Game Development",
    tags: ["Mobile Games", "AI", "Trends", "Unity"],
    image: "/api/placeholder/600/400",
    featured: true
  },
  {
    title: "Building Scalable Web Applications with Next.js 14",
    excerpt: "Learn how to leverage the latest features of Next.js 14 to build high-performance, scalable web applications with improved developer experience.",
    author: "Michael Rodriguez",
    date: "March 12, 2024",
    readTime: "12 min read",
    category: "Web Development",
    tags: ["Next.js", "React", "Performance", "SEO"],
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    title: "The Complete Guide to React Native Performance Optimization",
    excerpt: "Discover proven techniques to optimize your React Native apps for better performance, reduced bundle size, and improved user experience.",
    author: "Alex Thompson",
    date: "March 10, 2024",
    readTime: "15 min read",
    category: "Mobile Development",
    tags: ["React Native", "Performance", "Optimization", "Mobile"],
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    title: "Designing for Accessibility: A Comprehensive Guide",
    excerpt: "Learn how to create inclusive digital experiences by implementing accessibility best practices in your web and mobile applications.",
    author: "Emma Wilson",
    date: "March 8, 2024",
    readTime: "10 min read",
    category: "UI/UX Design",
    tags: ["Accessibility", "UX", "WCAG", "Inclusive Design"],
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    title: "Cloud-Native Development: Best Practices for 2024",
    excerpt: "Explore cloud-native development strategies, from containerization to microservices architecture and serverless computing.",
    author: "David Kim",
    date: "March 5, 2024",
    readTime: "14 min read",
    category: "Cloud & DevOps",
    tags: ["Cloud", "Docker", "Kubernetes", "Microservices"],
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    title: "The Rise of AI in Software Development: Tools and Techniques",
    excerpt: "Discover how artificial intelligence is transforming software development workflows and the tools that are leading this revolution.",
    author: "Lisa Park",
    date: "March 3, 2024",
    readTime: "11 min read",
    category: "Technology",
    tags: ["AI", "Machine Learning", "Development", "Automation"],
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    title: "E-commerce UX Design: Converting Visitors into Customers",
    excerpt: "Learn the essential UX design principles that can significantly improve conversion rates and user engagement in e-commerce platforms.",
    author: "James Miller",
    date: "March 1, 2024",
    readTime: "9 min read",
    category: "UI/UX Design",
    tags: ["E-commerce", "UX", "Conversion", "Design"],
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    title: "Building Real-time Applications with WebSockets and Socket.io",
    excerpt: "A deep dive into building real-time applications, from basic WebSocket implementation to advanced features with Socket.io.",
    author: "Rachel Green",
    date: "February 28, 2024",
    readTime: "13 min read",
    category: "Web Development",
    tags: ["WebSockets", "Socket.io", "Real-time", "Node.js"],
    image: "/api/placeholder/600/400",
    featured: false
  }
]

const categories = [
  { name: "All", count: blogPosts.length },
  { name: "Game Development", count: 1 },
  { name: "Web Development", count: 2 },
  { name: "Mobile Development", count: 1 },
  { name: "UI/UX Design", count: 2 },
  { name: "Cloud & DevOps", count: 1 },
  { name: "Technology", count: 1 }
]

const popularTags = [
  "React", "Mobile Games", "AI", "Performance", "UX", "Cloud", "Next.js", "Unity"
]

export default function BlogPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
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
                className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-magenta-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-full bg-gradient-to-br from-magenta-500/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">FEATURED</span>
                    </div>
                    <p className="text-magenta-400 font-medium">Featured Article</p>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-magenta-500/20 text-magenta-400 text-sm rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{post.title}</h2>
                  <p className="text-gray-300 text-lg mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-sm">
                      <User className="h-4 w-4 mr-2" />
                      {post.author}
                      <Clock className="h-4 w-4 ml-4 mr-2" />
                      {post.readTime}
                    </div>
                    <button className="flex items-center text-magenta-400 hover:text-magenta-300 transition-colors">
                      Read More <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories and Tags */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Categories */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:border-magenta-500 hover:text-magenta-400 transition-all duration-300"
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
            
            {/* Popular Tags */}
            <div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <article key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-magenta-500/50 transition-all duration-300 hover:scale-105">
                {/* Post Image */}
                <div className="h-48 bg-gradient-to-br from-magenta-500/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-xs font-bold">BLOG</span>
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2 py-1 bg-magenta-500/20 text-magenta-400 text-xs rounded">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author and Read Time */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-xs">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button className="w-full mt-4 py-2 border border-gray-700 text-gray-300 hover:border-magenta-500 hover:text-magenta-400 rounded-lg transition-all duration-300 flex items-center justify-center">
                    Read More <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest insights and tutorials delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-magenta-500 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 