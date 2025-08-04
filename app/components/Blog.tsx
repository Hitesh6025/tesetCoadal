"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const blogPosts = [
  {
    title: "The Art of Procedural Generation in Game Design",
    date: "July 25, 2025",
    imageUrl: "/placeholder.svg?width=600&height=400",
  },
  {
    title: "Optimizing for Performance: A Deep Dive into Unity's URP",
    date: "July 18, 2025",
    imageUrl: "/placeholder.svg?width=600&height=400",
  },
  {
    title: "Creating Compelling Narratives in Multiplayer Games",
    date: "July 10, 2025",
    imageUrl: "/placeholder.svg?width=600&height=400",
  },
]

export default function Blog() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
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
  }, [])

  return (
    <section id="blog" ref={sectionRef} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            From Our
            <span className="block bg-gradient-to-r from-magenta-400 to-purple-500 bg-clip-text text-transparent">
              Playbook
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and news from the world of game development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="blog-post-card group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-magenta-500/50 transition-all duration-300"
            >
              <img src={post.imageUrl || "/placeholder.svg"} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-white mb-4 h-20">{post.title}</h3>
                <a
                  href="#"
                  className="font-semibold text-magenta-400 inline-flex items-center group-hover:text-magenta-300"
                >
                  Read More{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
