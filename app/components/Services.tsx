"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Smartphone, Monitor, Gamepad, Zap, Users, Code, Cpu, Globe, Shield } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Smartphone,
    title: "Mobile Game Development",
    description: "Native iOS and Android games with stunning graphics and engaging gameplay.",
    features: ["Unity & Unreal Engine", "Cross-platform", "Monetization", "Analytics"],
    gradient: "from-magenta-500 to-purple-600",
  },
  {
    icon: Monitor,
    title: "PC & Console Games",
    description: "High-performance games for PC, PlayStation, Xbox, and Nintendo Switch.",
    features: ["AAA Graphics", "Multiplayer", "Steam Integration", "Optimization"],
    gradient: "from-purple-500 to-cyan-500",
  },
  {
    icon: Gamepad,
    title: "Game Design & Prototyping",
    description: "From concept to playable prototype with rapid iteration cycles.",
    features: ["Concept Art", "Prototyping", "User Testing", "Design Systems"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Custom Game Engines",
    description: "Tailored game engines optimized for your specific requirements.",
    features: ["Performance", "Custom Tools", "Scalability", "Multi-platform"],
    gradient: "from-blue-500 to-magenta-500",
  },
  {
    icon: Users,
    title: "Multiplayer Solutions",
    description: "Robust networking systems for competitive and cooperative play.",
    features: ["Real-time Sync", "Matchmaking", "Anti-cheat", "Server Hosting"],
    gradient: "from-magenta-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Game Porting & Optimization",
    description: "Port existing games to new platforms with performance tuning.",
    features: ["Platform Adaptation", "Performance", "Bug Fixes", "Enhancement"],
    gradient: "from-pink-500 to-purple-500",
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Intelligent NPCs and procedural content generation systems.",
    features: ["Smart NPCs", "Procedural Gen", "Behavior Trees", "ML Models"],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Globe,
    title: "Web3 Gaming",
    description: "Blockchain integration, NFTs, and decentralized gaming platforms.",
    features: ["Blockchain", "NFT Integration", "Smart Contracts", "DeFi Gaming"],
    gradient: "from-indigo-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Game Security",
    description: "Anti-cheat systems and secure gaming infrastructure.",
    features: ["Anti-cheat", "DRM Protection", "Secure APIs", "Data Protection"],
    gradient: "from-cyan-500 to-magenta-500",
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const cards = gsap.utils.toArray(".service-card")

    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 100, rotationX: -15 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our Gaming
            <span className="block bg-gradient-to-r from-magenta-400 to-purple-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive gaming development services to bring your vision to life across all platforms and
            technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-magenta-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-magenta-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700 group-hover:border-magenta-500/30 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
