"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExternalLink, Code, Smartphone, Monitor, Gamepad2 } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const technologies = [
  {
    name: "Unity",
    logoPath: "/assets/logos/unity.svg",
    category: "Game Engine",
    description: "Cross-platform game development",
  },
  {
    name: "React",
    logoPath: "/assets/logos/react.svg", 
    category: "Web Development",
    description: "Modern web applications",
  },
  {
    name: "React Native",
    logoPath: "/assets/logos/react-native.svg",
    category: "Mobile Development", 
    description: "Cross-platform mobile apps",
  },
  {
    name: "Node.js",
    logoPath: "/assets/logos/nodejs.svg",
    category: "Backend",
    description: "Server-side development",
  },
  {
    name: "TypeScript",
    logoPath: "/assets/logos/typescript.svg",
    category: "Programming",
    description: "Type-safe development",
  },
  {
    name: "AWS",
    logoPath: "/assets/logos/aws.svg",
    category: "Infrastructure", 
    description: "Scalable cloud solutions",
  },
  {
    name: "Next.js",
    logoPath: "/assets/logos/nextjs.svg",
    category: "Framework",
    description: "Full-stack React framework",
  },
  {
    name: "MongoDB",
    logoPath: "/assets/logos/mongodb.svg",
    category: "Database",
    description: "NoSQL database solutions",
  },
]

const projects = [
  {
    title: "FinWave",
    category: "Fintech",
    imageUrl: "/finwave.jpeg",
    description: "Finwave offers a seamless online banking experience with digital core transactions. It provides a user-friendly platform to manage finances and connect with support effortlessly.",
    technologies: ["React", "Node.js", "MongoDB"],
    icon: Gamepad2,
  },
  {
    title: "My Foot First",
    category: "Web Application",
    imageUrl: "/my-foot-first.jpeg",
    description: "My Foot First is an AI-powered foot health assistant that analyzes foot structure and offers personalized footwear tips. It provides quick scans, progress tracking, and privacy-focused insights.",
    technologies: ["Next.js", "TypeScript", "AWS"],
    icon: Monitor,
  },
  {
    title: "CrickStock11",
    category: "Betting Platform",
    imageUrl: "/crickstock.jpeg",
    description: "An immersive mobile RPG with stunning graphics and engaging gameplay mechanics. Features include character customization, multiplayer battles, and a vast open world.",
    technologies: ["React", "Node.js", "MongoDB"],
    icon: Smartphone,
  },
  {
    title: "Aiexch",
    category: "Game Development",
    imageUrl: "/gamedev.jpeg",
    description: "AIEXCH Gaming Exchange is a vibrant platform with live games, tournaments, and sports betting, offering popular titles like Cyber Strike Elite and Neon Racing, with easy fund management and real-time updates.",
    technologies: ["React", "TypeScript", "PostgreSQL"],
    icon: Code,
  },
]

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    
    // Animate technology badges
    gsap.fromTo(
      ".tech-badge",
      { opacity: 0, scale: 0.5, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      },
    )
    
    // Animate portfolio cards
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
          trigger: ".portfolio-grid",
          start: "top 70%",
        },
      },
    )
  }, [])

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our Epic
            <span className="block bg-gradient-to-r from-magenta-400 to-purple-500 bg-clip-text text-transparent">
              Creations
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bringing ideas to life with cutting-edge technology and creative excellence.
          </p>
        </div>
      

        {/* Portfolio Grid */}
        <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="portfolio-card group relative overflow-hidden rounded-2xl border border-gray-800 hover:border-purple-500/50 hover:scale-[1.02] hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              
              <div className="p-6 bg-gray-900/50 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-magenta-400 bg-magenta-400/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  {/* <project.icon className="h-5 w-5 text-gray-400" /> */}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-magenta-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {/* {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span> */}
                  {/* ))} */}
                </div>
                
                {/* <button className="flex items-center space-x-2 text-magenta-400 hover:text-magenta-300 transition-colors group">
                  <span className="text-sm font-semibold">View Project</span>
                  <ExternalLink className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
