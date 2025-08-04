"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: "CyberRonin: Neo-Kyoto",
    category: "PC & Console",
    imageUrl: "/placeholder.svg?width=800&height=600",
    description:
      "An open-world action RPG set in a futuristic cyberpunk city. Features advanced combat and deep narrative.",
  },
  {
    title: "Galaxy Raiders",
    category: "Mobile",
    imageUrl: "/placeholder.svg?width=800&height=600",
    description: "A fast-paced multiplayer space shooter for iOS and Android with extensive ship customization.",
  },
  {
    title: "Mythic Realms",
    category: "PC & Console",
    imageUrl: "/placeholder.svg?width=800&height=600",
    description: "A high-fantasy MMORPG with a vast world, epic raids, and a player-driven economy.",
  },
  {
    title: "Pixel Racers",
    category: "Mobile",
    imageUrl: "/placeholder.svg?width=800&height=600",
    description: "A retro-style arcade racing game with pixel art graphics and addictive gameplay.",
  },
]

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    gsap.fromTo(
      ".portfolio-card",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      },
    )
  }, [])

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our Epic
            <span className="block bg-gradient-to-r from-magenta-400 to-purple-500 bg-clip-text text-transparent">
              Creations
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">A glimpse into the worlds we've brought to life.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="portfolio-card group relative overflow-hidden rounded-2xl border border-gray-800"
            >
              <img
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <span className="text-sm font-semibold text-magenta-400">{project.category}</span>
                <h3 className="text-3xl font-bold mt-2 mb-4">{project.title}</h3>
                <p className="text-gray-300 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
