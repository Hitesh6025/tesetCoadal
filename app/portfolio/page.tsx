"use client"
import { ExternalLink, Github, Play, Smartphone, Globe, Gamepad2, Palette, BarChart3 } from "lucide-react"

import { useState } from "react"

const projects = [
  {
    title: "CrickStock11",
    category: "Betting Platform",
    icon: Gamepad2,
    image: "/crickstock.jpeg",
    description: "An immersive mobile RPG with stunning graphics and engaging gameplay mechanics. Features include character customization, multiplayer battles, and a vast open world.",
    technologies: ["Unity", "C#", "Firebase", "AWS"],
    stats: { downloads: "2M+", rating: "4.8", revenue: "$500K+" },
    links: { live: "#", github: "#", demo: "#" }
  },
  {
    title: "Xegality",
    category: "Legal Law Firm",
    icon: Globe,
    image: "/xegality.jpeg",
    description: "Xegality AI is an innovative platform designed to support legal students with comprehensive study tools. It offers features like consulting, research, and legal writing to enhance learning and professional skills.",
    technologies: ["React", "Node.js", "MongoDB", "D3.js"],
    stats: { users: "50K+", uptime: "99.9%", performance: "95%" },
    links: { live: "#", github: "#", demo: "#" }
  },
  {
    title: "My Foot First",
    category: "Website Development",
    icon: Smartphone,
    image: "/my-foot-first.jpeg",
    description: "My Foot First is an AI-powered foot health assistant that analyzes foot structure and offers personalized footwear tips. It provides quick scans, progress tracking, and privacy-focused insights.",
    technologies: ["React Native", "Python", "TensorFlow", "Apple Health"],
    stats: { users: "100K+", workouts: "1M+", rating: "4.9" },
    links: { live: "#", github: "#", demo: "#" }
  },
  {
    title: "FinWave",
    category: "FinTech",
    icon: Globe,
    image: "/finwave.jpeg",
    description: "Finwave offers a seamless online banking experience with digital core transactions. It provides a user-friendly platform to manage finances and connect with support effortlessly.",
    technologies: ["React", "Node.js", "MongoDB"],
    stats: { sales: "$2M+", products: "10K+", customers: "25K+" },
    links: { live: "#", github: "#", demo: "#" }
  },
  {
    title: "Aiexch",
    category: "Game Development",
    icon: Gamepad2,
  image: "/gamedev.jpeg",
    description: "AIEXCH Gaming Exchange is a vibrant platform with live games, tournaments, and sports betting, offering popular titles like Cyber Strike Elite and Neon Racing, with easy fund management and real-time updates.",
    technologies: ["Unreal Engine", "C++", "Oculus SDK", "SteamVR"],
    stats: { players: "10K+", rating: "4.7", awards: "3" },
    links: { live: "#", github: "#", demo: "#" }
  },
  {
    title: "Make My Trip",
    category: "Travel",
    icon: Palette,
    image: "/make-my-trip.jpeg",
    description: "Make My Trip is a comprehensive travel booking platform that offers a wide range of services, including flight and hotel bookings, vacation packages, and travel insurance.",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    stats: { users: "1M+", bookings: "500K+", rating: "4.8" },
    links: { live: "#", github: "#", demo: "#" }
  }
]

const categories = [
  { name: "All", value: "all", count: projects.length },
  { name: "Game Development", value: "game", count: 2 },
  { name: "Web Development", value: "web", count: 2 },
  { name: "Mobile Development", value: "mobile", count: 1 },
  { name: "UI/UX Design", value: "design", count: 1 }
]

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "25+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "99%", label: "Client Satisfaction" }
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => {
        if (selectedCategory === "game") return project.category === "Game Development"
        if (selectedCategory === "web") return project.category === "Web Development"
        if (selectedCategory === "mobile") return project.category === "Mobile Development"
        if (selectedCategory === "design") return project.category === "UI/UX Design"
        return true
      })

  return (
    <div className="text-white min-h-screen">
       
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-magenta-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Discover our innovative projects that have transformed businesses and delighted users worldwide. 
            Each project represents our commitment to excellence and cutting-edge technology.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-magenta-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full border border-gray-700 text-gray-300 hover:border-magenta-500 hover:text-magenta-400 transition-all duration-300 ${selectedCategory === category.value ? "border-magenta-500 text-magenta-400" : ""}`}
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-magenta-500/50 transition-all duration-300 hover:scale-105">
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-magenta-500/20 to-purple-600/20 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                  <div className="absolute top-4 right-4 flex gap-2 z-10">
                    {/* <button className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-magenta-500 transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                    <button className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-magenta-500 transition-colors">
                      <Github className="h-5 w-5" />
                    </button>
                    <button className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-magenta-500 transition-colors">
                      <Play className="h-5 w-5" />
                    </button> */}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-magenta-400 font-medium">{project.category}</span>
                    <div className="flex gap-2">
                      {Object.entries(project.stats).map(([key, value], statIndex) => (
                        <div key={statIndex} className="text-xs bg-gray-800 px-2 py-1 rounded">
                          {value}
                        </div>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-800 text-xs rounded-full text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                      <button
                        className="flex-1 bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
                        onClick={() => window.location.href = '/contact'}
                      >
                        Get Info
                      </button>
                    {/* <button className="px-4 py-2 border border-gray-600 text-gray-300 hover:border-magenta-500 hover:text-magenta-400 rounded-lg font-medium transition-all duration-300">
                      Case Study
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's bring your vision to life with our expertise and innovative approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              <a href="/contact" className="block w-full h-full">Start Your Project</a>
            </button>
            {/* <button className="border border-magenta-500 text-magenta-400 hover:bg-magenta-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
              View Case Studies
            </button> */}
          </div>
        </div>
      </section>
    </div>
  )
} 