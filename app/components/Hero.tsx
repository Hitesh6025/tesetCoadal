
"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ArrowRight, Play, Sparkles, Star, Zap, Code, Gamepad2 } from "lucide-react"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })

    // Main content animations with staggered entrance
    if (titleRef.current) {
      gsap.set(titleRef.current.children, { opacity: 0, y: 80, rotationX: 45 })
      tl.to(titleRef.current.children, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15
      })
    }

    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
    }

    if (buttonsRef.current) {
      tl.fromTo(
        buttonsRef.current.children,
        { opacity: 0, y: 30, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.8, 
          ease: "back.out(1.7)",
          stagger: 0.1
        },
        "-=0.6"
      )
    }

    // Floating particles animation
    const particles = gsap.utils.toArray(".particle")
    particles.forEach((particle: any, index) => {
      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      })
      
      gsap.to(particle, {
        y: "-=100",
        x: `+=${Math.random() * 100 - 50}`,
        rotation: 360,
        duration: 8 + Math.random() * 4,
        ease: "none",
        repeat: -1,
        delay: Math.random() * 2,
      })
    })

    // Glow effects
    const glowElements = gsap.utils.toArray(".glow-orb")
    glowElements.forEach((orb: any, index) => {
      gsap.to(orb, {
        scale: 1.5 + Math.sin(index) * 0.3,
        opacity: 0.4 + Math.sin(index) * 0.2,
        duration: 3 + index * 0.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: index * 0.5,
      })
    })

    // Text shimmer effect
    const shimmerElements = gsap.utils.toArray(".shimmer-text")
    shimmerElements.forEach((element: any) => {
      gsap.to(element, {
        backgroundPosition: "200% center",
        duration: 3,
        ease: "none",
        repeat: -1,
      })
    })

  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Animated mesh gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-pink-900/10 to-cyan-900/10 animate-gradient-x"></div>
        
        {/* Floating particles */}
        <div className="particle absolute w-1 h-1 bg-purple-400 rounded-full opacity-60"></div>
        <div className="particle absolute w-2 h-2 bg-pink-400 rounded-full opacity-40"></div>
        <div className="particle absolute w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-50"></div>
        <div className="particle absolute w-1 h-1 bg-violet-400 rounded-full opacity-45"></div>
        <div className="particle absolute w-2.5 h-2.5 bg-fuchsia-400 rounded-full opacity-35"></div>
        <div className="particle absolute w-1 h-1 bg-blue-400 rounded-full opacity-55"></div>
        <div className="particle absolute w-2 h-2 bg-indigo-400 rounded-full opacity-40"></div>
        <div className="particle absolute w-1.5 h-1.5 bg-teal-400 rounded-full opacity-45"></div>

        {/* Large glow orbs */}
        <div className="glow-orb absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="glow-orb absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="glow-orb absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl"></div>

        {/* Subtle tech pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="space-y-2">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="text-sm text-gray-300">Premium Game Development Studio</span>
            <Sparkles className="h-4 w-4 text-purple-400" />
          </div> */}

          {/* Main Title with enhanced styling */}
          <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
            <span className="block shimmer-text bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent bg-size-200 bg-pos-0">
              COADAL
            </span>
            <span className="block shimmer-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent bg-size-200 bg-pos-0 text-3xl md:text-4xl lg:text-5xl">
              Game & Software Development
            </span>
          </h1>

          {/* Subtitle */}
          <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            We transform your gaming vision into reality with cutting-edge technology, 
            <span className="text-purple-300 font-semibold"> immersive experiences</span>, and 
            <span className="text-pink-300 font-semibold"> pixel-perfect execution</span>. 
            From mobile games to AAA productions.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 py-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">40+</div>
              <div className="text-sm text-gray-400">Games Developed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">10M+</div>
              <div className="text-sm text-gray-400">Players Reached</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">99%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact" passHref legacyBehavior>
              <button className="group relative bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-500 flex items-center space-x-3 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden transform perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-12 translate-x-[-100%] group-hover:translate-x-[300%]"></div>
                <Sparkles className="h-6 w-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10 text-lg">Talk To Consultant</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              </button>
            </Link>

            <Link href="/portfolio" passHref legacyBehavior>
              <button className="group relative border-2 border-purple-500/30 hover:border-purple-400 bg-gradient-to-r from-purple-500/5 to-pink-500/5 hover:from-purple-500/10 hover:to-pink-500/10 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-500 flex items-center space-x-3 hover:scale-105 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Play className="h-6 w-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10 text-lg">Watch Our Work</span>
              </button>
            </Link>
          </div>

          {/* Tech Icons */}
          <div className="flex justify-center items-center gap-8 pt-12 opacity-60">
            <div className="group p-3 bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl backdrop-blur-sm hover:scale-110 transition-transform duration-300">
              <Code className="h-8 w-8 text-purple-400 group-hover:text-purple-300" />
            </div>
            <div className="group p-3 bg-gradient-to-r from-pink-500/10 to-transparent border border-pink-500/20 rounded-xl backdrop-blur-sm hover:scale-110 transition-transform duration-300">
              <Gamepad2 className="h-8 w-8 text-pink-400 group-hover:text-pink-300" />
            </div>
            <div className="group p-3 bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-xl backdrop-blur-sm hover:scale-110 transition-transform duration-300">
              <Zap className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
