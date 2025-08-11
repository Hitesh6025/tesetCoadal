"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { 
  Users, 
  Target, 
  Eye, 
  Award, 
  Gamepad2, 
  Code, 
  Palette, 
  Zap,
  Globe,
  Heart,
  TrendingUp,
  Star,
  CheckCircle,
  Lightbulb,
  Rocket,
  Shield
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const teamMembers = [
  {
    name: "Alex Rodriguez",
    role: "CEO & Lead Game Developer",
    bio: "10+ years creating AAA games. Specialized in Unity and Unreal Engine development.",
    image: "/placeholder.svg?width=300&height=300",
    skills: ["Unity", "Unreal Engine", "C#", "Game Design"]
  },
  {
    name: "Sarah Chen",
    role: "CTO & Full Stack Developer",
    bio: "Expert in scalable web architectures and cloud infrastructure for gaming platforms.",
    image: "/placeholder.svg?width=300&height=300",
    skills: ["React", "Node.js", "AWS", "DevOps"]
  },
  {
    name: "Marcus Johnson",
    role: "Creative Director",
    bio: "Award-winning designer with a passion for creating immersive gaming experiences.",
    image: "/placeholder.svg?width=300&height=300",
    skills: ["UI/UX", "3D Design", "Art Direction", "Branding"]
  },
  {
    name: "Emily Davis",
    role: "Mobile Development Lead",
    bio: "Specialist in iOS and Android game development with 8+ years of experience.",
    image: "/placeholder.svg?width=300&height=300",
    skills: ["Swift", "Kotlin", "React Native", "Flutter"]
  }
]

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We push the boundaries of technology to create groundbreaking gaming experiences that captivate and inspire."
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Our love for gaming drives everything we do. We're not just developers; we're gamers creating for gamers."
  },
  {
    icon: Shield,
    title: "Quality",
    description: "We never compromise on quality. Every line of code, every design element is crafted with precision and care."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe great games are built by great teams. Collaboration and communication are at our core."
  }
]

const achievements = [
  {
    icon: Award,
    title: "50+ Successful Projects",
    description: "Delivered across mobile, PC, and console platforms"
  },
  {
    icon: Users,
    title: "1M+ Active Players",
    description: "Engaging experiences reaching millions worldwide"
  },
  {
    icon: Star,
    title: "4.9/5 Client Rating",
    description: "Consistently exceeding client expectations"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Games published in 50+ countries"
  }
]

export default function AboutUs() {
  const heroRef = useRef<HTMLDivElement>(null)
  const missionRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  const achievementsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero section animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".hero-item"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.3
        }
      )
    }

    // Mission section animation
    if (missionRef.current) {
      gsap.fromTo(
        missionRef.current.querySelectorAll(".mission-item"),
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 70%",
          },
        }
      )
    }

    // Team section animation
    if (teamRef.current) {
      gsap.fromTo(
        teamRef.current.querySelectorAll(".team-card"),
        { opacity: 0, y: 80, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 70%",
          },
        }
      )
    }

    // Values section animation
    if (valuesRef.current) {
      gsap.fromTo(
        valuesRef.current.querySelectorAll(".value-item"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 70%",
          },
        }
      )
    }

    // Achievements section animation
    if (achievementsRef.current) {
      gsap.fromTo(
        achievementsRef.current.querySelectorAll(".achievement-item"),
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: achievementsRef.current,
            start: "top 70%",
          },
        }
      )
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-magenta-500/10 via-transparent to-purple-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-magenta-500/5 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="hero-item">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About
              <span className="block bg-gradient-to-r from-magenta-400 to-purple-500 bg-clip-text text-transparent">
                COADAL
              </span>
            </h1>
          </div>
          <div className="hero-item">
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We are a team of passionate developers, designers, and gamers dedicated to creating 
              extraordinary digital experiences that push the boundaries of what's possible.
            </p>
          </div>
          <div className="hero-item">
            <div className="flex justify-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <Gamepad2 className="h-6 w-6 text-magenta-500" />
                <span>Game Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="h-6 w-6 text-purple-500" />
                <span>Software Engineering</span>
              </div>
              <div className="flex items-center space-x-2">
                <Palette className="h-6 w-6 text-pink-500" />
                <span>Creative Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section ref={missionRef} className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="mission-item">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To revolutionize the gaming industry by creating immersive, innovative, and technically 
                  superior gaming experiences that bring joy and excitement to players worldwide. We strive 
                  to transform creative visions into reality through cutting-edge technology and exceptional craftsmanship.
                </p>
              </div>

              <div className="mission-item">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the global leader in game development and software engineering, recognized for our 
                  innovation, quality, and ability to deliver extraordinary digital experiences that shape 
                  the future of interactive entertainment and technology.
                </p>
              </div>
            </div>

            <div className="mission-item">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-magenta-500/20 to-purple-500/20 rounded-2xl blur-xl" />
                <img
                  src="/placeholder.svg?width=600&height=400"
                  alt="Team collaboration"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our
              <span className="block bg-gradient-to-r from-magenta-400 to-purple-500 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Talented individuals united by a shared passion for creating extraordinary gaming experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="team-card group cursor-pointer"
              >
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-magenta-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-magenta-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-magenta-500 to-purple-600 p-1">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2 text-center">{member.name}</h3>
                    <p className="text-magenta-400 text-center mb-4 font-medium">{member.role}</p>
                    <p className="text-gray-400 text-sm text-center mb-4 leading-relaxed">{member.bio}</p>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our
              <span className="block bg-gradient-to-r from-magenta-400 to-purple-500 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our work and define who we are as a company
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="value-item group">
                  <div className="text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-magenta-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section ref={achievementsRef} className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our
              <span className="block bg-gradient-to-r from-magenta-400 to-purple-500 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Milestones that showcase our commitment to excellence and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div key={index} className="achievement-item">
                  <div className="text-center bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-magenta-500/50 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{achievement.title}</h3>
                    <p className="text-gray-400">{achievement.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work
            <span className="block bg-gradient-to-r from-magenta-400 to-purple-500 bg-clip-text text-transparent">
              Together?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's collaborate to bring your vision to life. Whether it's a game, web application, 
            or mobile app, we're here to make it extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-magenta-500/25"
            >
              Start a Project
            </a>
            <a
              href="/portfolio"
              className="border-2 border-magenta-500 text-magenta-500 hover:bg-magenta-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
