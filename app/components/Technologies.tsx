"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const technologies = [
  { name: "Unity", iconUrl: "/Technologies/unity-small-svgrepo-com.svg" },
  { name: "Unreal Engine", iconUrl: "/Technologies/unreal-engine-svgrepo-com.svg" },
  { name: "Blender", iconUrl: "/Technologies/blender-svgrepo-com.svg" },
  { name: "Maya", iconUrl: "/Technologies/autodesk-svgrepo-com.svg" },
  { name: "Android", iconUrl: "/Technologies/android-color-svgrepo-com.svg" },
  { name: "iOS", iconUrl: "/Technologies/ios-svgrepo-com.svg" },
  { name: "AWS", iconUrl: "/Technologies/aws-svgrepo-com.svg" },
  { name: "Node.js", iconUrl: "/Technologies/node-svgrepo-com.svg" },
  { name: "React", iconUrl: "/Technologies/react-svgrepo-com.svg" },
  { name: "Vue.js", iconUrl: "/Technologies/vue-svgrepo-com.svg" },
  { name: "Flutter", iconUrl: "/Technologies/flutter-svgrepo-com.svg" },
  { name: "Swift", iconUrl: "/Technologies/swift-svgrepo-com.svg" },
  { name: "Docker", iconUrl: "/Technologies/docker-svgrepo-com.svg" },
  { name: "Kotlin", iconUrl: "/Technologies/kotlin-svgrepo-com.svg" },
  { name: "Python", iconUrl: "/Technologies/python-svgrepo-com.svg" },
  { name: "PostgreSQL", iconUrl: "/Technologies/postgresql-logo-svgrepo-com.svg" },
  { name: "MongoDB", iconUrl: "/Technologies/mongo-svgrepo-com.svg" },
  { name: "Salesforce", iconUrl: "/Technologies/salesforce-svgrepo-com.svg" },
]

export default function Technologies() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    gsap.fromTo(
      ".tech-item",
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      },
    )
  }, [])

  return (
    <section id="technologies" ref={sectionRef} className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Technologies
            <span className="block bg-gradient-to-r from-magenta-400 to-purple-500 bg-clip-text text-transparent">
              We Master
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leveraging cutting-edge tools and platforms to deliver high-performance, cross-platform games.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {technologies.map((tech) => (
            <div key={tech.name} className="tech-item flex flex-col items-center gap-4 group">
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-700 group-hover:border-magenta-500 transition-all duration-300 group-hover:scale-110">
                <img src={tech.iconUrl || "/placeholder.svg"} alt={`${tech.name} logo`} className="h-12 w-12" />
              </div>
              <span className="text-gray-300 font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
