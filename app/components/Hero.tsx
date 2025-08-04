"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ArrowRight, Play, Sparkles, Gamepad2, Zap, Code, Cpu } from "lucide-react"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const floatingElementsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })

    // Main content animations
    if (titleRef.current) {
      tl.fromTo(titleRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" })
    }

    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6",
      )
    }

    if (buttonsRef.current) {
      tl.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4",
      )
    }

    if (imageRef.current) {
      tl.fromTo(
        imageRef.current,
        { opacity: 0, x: 100, scale: 0.8 },
        { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power3.out" },
        "-=1",
      )
    }

    // Floating elements animation
    const floatingElements = gsap.utils.toArray(".floating-element")
    if (floatingElements.length > 0) {
      floatingElements.forEach((element: any, index) => {
        gsap.to(element, {
          y: -30 + Math.sin(index) * 10,
          x: 20 + Math.cos(index) * 15,
          rotation: 360,
          duration: 4 + index * 0.5,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.2,
        })
      })
    }

    // Pulsing glow effects
    const glowElements = gsap.utils.toArray(".glow-effect")
    if (glowElements.length > 0) {
      gsap.to(glowElements, {
        scale: 1.2,
        opacity: 0.6,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      })
    }

    // Floating icons animation
    const floatingIcons = gsap.utils.toArray(".floating-icon")
    if (floatingIcons.length > 0) {
      floatingIcons.forEach((icon: any, index) => {
        gsap.to(icon, {
          y: -20 + Math.sin(index * 2) * 10,
          x: 15 + Math.cos(index * 2) * 10,
          rotation: 15,
          duration: 3 + index * 0.3,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.4,
        })
      })
    }

    // New animations from updates
    tl.fromTo(".hero-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
      .fromTo(".hero-subtitle", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .fromTo(
        ".hero-cta",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.5",
      )
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Animated particles */}
        <div className="floating-element absolute top-20 left-10 w-3 h-3 bg-magenta-500 rounded-full opacity-60 shadow-lg shadow-magenta-500/50"></div>
        <div className="floating-element absolute top-40 right-20 w-4 h-4 bg-purple-500 rounded-full opacity-40 shadow-lg shadow-purple-500/50"></div>
        <div className="floating-element absolute bottom-32 left-1/4 w-2 h-2 bg-cyan-500 rounded-full opacity-50 shadow-lg shadow-cyan-500/50"></div>
        <div className="floating-element absolute bottom-20 right-1/3 w-5 h-5 bg-magenta-400 rounded-full opacity-30 shadow-lg shadow-magenta-400/50"></div>
        <div className="floating-element absolute top-1/2 left-20 w-3 h-3 bg-blue-500 rounded-full opacity-45 shadow-lg shadow-blue-500/50"></div>
        <div className="floating-element absolute top-1/3 right-1/4 w-4 h-4 bg-pink-500 rounded-full opacity-35 shadow-lg shadow-pink-500/50"></div>

        {/* Enhanced gradient overlays */}
        <div className="glow-effect absolute top-1/4 left-1/4 w-96 h-96 bg-magenta-500/15 rounded-full blur-3xl"></div>
        <div className="glow-effect absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl"></div>
        <div className="glow-effect absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

        {/* Floating tech icons */}
        <div ref={floatingElementsRef} className="absolute inset-0">
          <div className="floating-icon absolute top-1/4 left-1/6 p-3 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
            <Code className="h-6 w-6 text-magenta-400" />
          </div>
          <div className="floating-icon absolute top-1/3 right-1/5 p-3 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
            <Cpu className="h-6 w-6 text-purple-400" />
          </div>
          <div className="floating-icon absolute bottom-1/3 left-1/5 p-3 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
            <Zap className="h-6 w-6 text-cyan-400" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 ref={titleRef} className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Crafting Epic Gaming Worlds
          </h1>

          <p ref={subtitleRef} className="hero-subtitle text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
            We are Coadal, a passionate team of developers and designers dedicated to building unforgettable gaming
            experiences across all platforms.
          </p>

          <div ref={buttonsRef} className="hero-cta flex flex-col sm:flex-row gap-4">
            <button className="group bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg hover:shadow-magenta-500/25 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
              <Sparkles className="h-5 w-5 relative z-10" />
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </button>

            <button className="group border-2 border-gray-600 hover:border-magenta-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:bg-magenta-500/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-magenta-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Play className="h-5 w-5 relative z-10" />
              <span className="relative z-10">Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Right Content - Enhanced Gaming Visual */}
        <div ref={imageRef} className="relative">
          <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-2xl shadow-magenta-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-magenta-500/20 via-purple-500/10 to-cyan-500/20"></div>

            {/* Animated grid background */}
            <div className="absolute inset-0 opacity-20">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(233, 30, 99, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(233, 30, 99, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: "30px 30px",
                  animation: "gridMove 10s linear infinite",
                }}
              />
            </div>

            {/* Gaming Interface Mockup */}
            <div className="absolute top-6 left-6 right-6">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 shadow-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-magenta-500 rounded-full animate-pulse"></div>
                  <div
                    className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
                <div className="text-sm text-gray-300">Game Engine Console</div>
                <div className="mt-2 text-xs text-magenta-400 font-mono">{">"} Initializing game systems...</div>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 shadow-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Performance</span>
                  <span className="text-sm text-magenta-400 animate-pulse">98% Optimized</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-magenta-500 to-purple-600 h-2 rounded-full w-[98%] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Central Gaming Element with enhanced animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse shadow-2xl shadow-magenta-500/50">
                  <Gamepad2 className="h-16 w-16 text-white" />
                </div>
                {/* Rotating ring */}
                <div
                  className="absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-spin"
                  style={{ animationDuration: "3s" }}
                ></div>
                <div
                  className="absolute inset-2 border border-magenta-400/20 rounded-full animate-spin"
                  style={{ animationDuration: "2s", animationDirection: "reverse" }}
                ></div>
              </div>
            </div>

            {/* Floating data points */}
            <div className="absolute top-20 right-20 bg-black/30 backdrop-blur-sm rounded-lg p-2 border border-magenta-500/30 animate-bounce">
              <div className="text-xs text-magenta-400">FPS: 120</div>
            </div>
            <div
              className="absolute bottom-20 left-20 bg-black/30 backdrop-blur-sm rounded-lg p-2 border border-cyan-500/30 animate-bounce"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-xs text-cyan-400">Latency: 12ms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
