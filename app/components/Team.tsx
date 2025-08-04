"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const teamMembers = [
  { name: "Alex Johnson", role: "Lead Game Developer", imageUrl: "/placeholder.svg?width=400&height=400" },
  { name: "Maria Garcia", role: "Art Director", imageUrl: "/placeholder.svg?width=400&height=400" },
  { name: "David Chen", role: "Lead Game Designer", imageUrl: "/placeholder.svg?width=400&height=400" },
  { name: "Emily White", role: "Producer", imageUrl: "/placeholder.svg?width=400&height=400" },
]

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    gsap.fromTo(
      ".team-member-card",
      { opacity: 0, scale: 0.8, rotation: -10 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      },
    )
  }, [])

  return (
    <section id="team" ref={sectionRef} className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Meet the
            <span className="block bg-gradient-to-r from-magenta-400 to-purple-500 bg-clip-text text-transparent">
              Maestros
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">The passionate minds behind our epic games.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member-card text-center group">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={member.imageUrl || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-magenta-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
