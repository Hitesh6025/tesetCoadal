"use client"
import AnimatedBackground from "../../components/AnimatedBackground"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { 
  Monitor, 
  Sparkles, 
  ArrowRight,
  Gamepad2,
  Globe,
  Code,
  Palette,
  Cpu,
  Layers,
  Award,
  Zap,
  Target,
  Share2,
  MousePointer2,
  Keyboard,
  Headphones,
  Play,
  Wifi,
  Cloud,
  Rocket,
  Users,
  Puzzle,
  Flame,
  Bolt,
  Trophy
} from "lucide-react"

export default function BrowserGameDevelopment() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]
  const featureCardRefs = useRef([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Configure ScrollTrigger for better performance
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
    })
    
    // Hero section animations
    const tl = gsap.timeline({ delay: 0.3 })
    
    if (titleRef.current) {
      tl.fromTo(
        titleRef.current, 
        { opacity: 0, y: 80, scale: 0.9 }, 
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
      )
    }
    
    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.8"
      )
    }
    
    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      )
    }
    
    // Section animations with ScrollTrigger - optimized for better scrolling
    sectionRefs.forEach((ref) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none none",
              fastScrollEnd: true,
              preventOverlaps: true
            }
          }
        )
      }
    })

    // Cleanup function to prevent memory leaks
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-x-hidden">
      <AnimatedBackground />
       
      <main className="relative z-10 pt-24 pb-12 px-4 md:px-8">
        {/* Hero Section */}
        <section ref={heroRef} className="w-full max-w-6xl mx-auto text-center mb-32">
          {/* Floating browser windows */}
          <div className="relative mb-12">
            <div className="floating-element absolute -top-8 left-1/4 w-24 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg border border-cyan-400/30 backdrop-blur-sm"></div>
            <div className="floating-element absolute -top-4 right-1/3 w-20 h-12 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-lg border border-green-400/30 backdrop-blur-sm"></div>
            <div className="floating-element absolute top-8 left-1/6 w-16 h-10 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-lg border border-blue-400/30 backdrop-blur-sm"></div>
          </div>
          
          <h1 ref={titleRef} className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-cyan-300 via-purple-400 to-green-300 bg-clip-text text-transparent drop-shadow-2xl">
            Browser Game
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">Revolution</span>
          </h1>
          <p ref={subtitleRef} className="text-2xl md:text-3xl text-gray-100 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Immersive web experiences that push the boundaries of what's possible in a browser
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/contact" className="group relative inline-block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 hover:from-cyan-500 hover:via-purple-600 hover:to-pink-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center">
                <Rocket className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                <span>Launch Your Game</span>
              </div>
            </a>
            <a href="/portfolio" className="group inline-block border-3 border-cyan-500 hover:border-purple-400 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 backdrop-blur-sm">
              <div className="flex items-center justify-center">
                <Globe className="h-6 w-6 mr-3 group-hover:spin transition-transform duration-1000" />
                <span>Explore Web Games</span>
              </div>
            </a>
          </div>
        </section>
        
        {/* Browser Game Types Section - Unique Hexagonal Layout */}
        <section ref={sectionRefs[0]} className="w-full max-w-7xl mx-auto mb-32">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Game Genres We Master
          </h2>
          
          {/* Hexagonal grid layout */}
          <div className="relative">
            {/* Center hexagon */}
            <div className="flex justify-center mb-8">
              <div className="group relative">
                <div className="w-80 h-80 bg-gradient-to-br from-purple-900/60 via-pink-900/40 to-orange-900/60 backdrop-blur-sm border-2 border-purple-500/50 rounded-3xl p-8 transform hover:scale-105 transition-all duration-500 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/25">
                  <div className="text-center h-full flex flex-col justify-center">
                    <div className="mb-6 h-20 w-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:rotate-12">
                      <Flame className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-purple-300 group-hover:text-purple-200 transition-colors">Action & Adventure</h3>
                    <p className="text-gray-300 mb-4">High-octane browser games with stunning visuals and immersive storytelling</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300">3D Adventures</span>
                      <span className="px-3 py-1 bg-pink-500/20 rounded-full text-xs text-pink-300">Platformers</span>
                      <span className="px-3 py-1 bg-orange-500/20 rounded-full text-xs text-orange-300">Racing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Top row */}
            <div className="flex justify-center gap-8 mb-8">
              <div className="group relative">
                <div className="w-64 h-64 bg-gradient-to-br from-cyan-900/60 via-blue-900/40 to-teal-900/60 backdrop-blur-sm border-2 border-cyan-500/50 rounded-2xl p-6 transform hover:scale-105 transition-all duration-500 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/25">
                  <div className="text-center h-full flex flex-col justify-center">
                    <div className="mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all duration-300">
                      <Puzzle className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-cyan-300 group-hover:text-cyan-200 transition-colors">Puzzle & Strategy</h3>
                    <p className="text-gray-300 text-sm mb-3">Mind-bending puzzles and strategic gameplay</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      <span className="px-2 py-0.5 bg-cyan-500/20 rounded-full text-xs text-cyan-300">Match-3</span>
                      <span className="px-2 py-0.5 bg-blue-500/20 rounded-full text-xs text-blue-300">Tower Defense</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="w-64 h-64 bg-gradient-to-br from-green-900/60 via-emerald-900/40 to-lime-900/60 backdrop-blur-sm border-2 border-green-500/50 rounded-2xl p-6 transform hover:scale-105 transition-all duration-500 hover:border-green-400 hover:shadow-2xl hover:shadow-green-500/25">
                  <div className="text-center h-full flex flex-col justify-center">
                    <div className="mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-green-500/30 group-hover:shadow-green-500/50 transition-all duration-300">
                      <Users className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-green-300 group-hover:text-green-200 transition-colors">Multiplayer MMO</h3>
                    <p className="text-gray-300 text-sm mb-3">Massive online worlds with real-time interaction</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      <span className="px-2 py-0.5 bg-green-500/20 rounded-full text-xs text-green-300">Real-time</span>
                      <span className="px-2 py-0.5 bg-emerald-500/20 rounded-full text-xs text-emerald-300">PvP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom row */}
            <div className="flex justify-center gap-8">
              <div className="group relative">
                <div className="w-64 h-64 bg-gradient-to-br from-yellow-900/60 via-orange-900/40 to-red-900/60 backdrop-blur-sm border-2 border-yellow-500/50 rounded-2xl p-6 transform hover:scale-105 transition-all duration-500 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/25">
                  <div className="text-center h-full flex flex-col justify-center">
                    <div className="mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center mx-auto shadow-lg shadow-yellow-500/30 group-hover:shadow-yellow-500/50 transition-all duration-300">
                      <Bolt className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-yellow-300 group-hover:text-yellow-200 transition-colors">Casual & Hypercasual</h3>
                    <p className="text-gray-300 text-sm mb-3">Instantly playable, addictive gameplay</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      <span className="px-2 py-0.5 bg-yellow-500/20 rounded-full text-xs text-yellow-300">One-tap</span>
                      <span className="px-2 py-0.5 bg-orange-500/20 rounded-full text-xs text-orange-300">Viral</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="w-64 h-64 bg-gradient-to-br from-indigo-900/60 via-purple-900/40 to-pink-900/60 backdrop-blur-sm border-2 border-indigo-500/50 rounded-2xl p-6 transform hover:scale-105 transition-all duration-500 hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-500/25">
                  <div className="text-center h-full flex flex-col justify-center">
                    <div className="mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all duration-300">
                      <Trophy className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-indigo-300 group-hover:text-indigo-200 transition-colors">Competitive Esports</h3>
                    <p className="text-gray-300 text-sm mb-3">Tournament-ready competitive games</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      <span className="px-2 py-0.5 bg-indigo-500/20 rounded-full text-xs text-indigo-300">Leaderboards</span>
                      <span className="px-2 py-0.5 bg-purple-500/20 rounded-full text-xs text-purple-300">Tournaments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Browser Tech Section - Interactive Tech Stack */}
        <section ref={sectionRefs[1]} className="w-full max-w-7xl mx-auto mb-32">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 p-4 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Next-Gen Web Technology
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Interactive browser mockup */}
            <div className="relative">
              <div className="relative w-full max-w-[500px] mx-auto">
                {/* Browser window */}
                <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl border-2 border-cyan-500/30">
                  {/* Browser header */}
                  <div className="h-12 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 flex items-center px-4 border-b border-gray-600">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                    <div className="flex-1 mx-4 h-6 bg-gray-600 rounded-lg flex items-center px-3">
                      <Globe className="h-3 w-3 text-gray-400 mr-2" />
                      <span className="text-xs text-gray-300">your-game.com</span>
                      <div className="ml-auto">
                        <Wifi className="h-3 w-3 text-green-400" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Game viewport */}
                  <div className="h-80 bg-gradient-to-br from-purple-900/60 via-cyan-900/40 to-blue-900/60 relative overflow-hidden">
                    {/* Animated game elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-pink-500/10"></div>
                    
                    {/* Game HUD */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between">
                      <div className="bg-black/50 backdrop-blur-sm rounded-xl px-4 py-2 border border-cyan-400/30">
                        <div className="flex items-center">
                          <Trophy className="h-4 w-4 text-yellow-400 mr-2" />
                          <span className="text-cyan-400 font-bold text-sm">Score: 15,420</span>
                        </div>
                      </div>
                      <div className="bg-black/50 backdrop-blur-sm rounded-xl px-4 py-2 border border-purple-400/30">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-purple-400 mr-2" />
                          <span className="text-purple-400 font-bold text-sm">Players: 1,284</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Central game element */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 flex items-center justify-center animate-pulse shadow-2xl shadow-purple-500/50">
                        <Play className="h-12 w-12 text-white animate-bounce" />
                      </div>
                    </div>
                    
                    {/* Floating particles */}
                    <div className="floating-element absolute top-16 left-8 w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"></div>
                    <div className="floating-element absolute top-24 right-12 w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50"></div>
                    <div className="floating-element absolute bottom-20 left-16 w-2.5 h-2.5 rounded-full bg-pink-400 shadow-lg shadow-pink-400/50"></div>
                    <div className="floating-element absolute bottom-16 right-8 w-3 h-3 rounded-full bg-green-400 shadow-lg shadow-green-400/50"></div>
                    
                    {/* Performance indicator */}
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1 border border-green-400/30">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                          <span className="text-green-400 text-xs font-medium">60 FPS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating tech badges */}
                <div className="floating-element absolute -top-6 -right-6 bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-sm font-bold px-4 py-2 rounded-xl shadow-lg shadow-cyan-500/30 border border-cyan-400/50">
                  WebGL 2.0
                </div>
                <div className="floating-element absolute top-1/4 -left-8 bg-gradient-to-br from-purple-500 to-pink-600 text-white text-sm font-bold px-4 py-2 rounded-xl shadow-lg shadow-purple-500/30 border border-purple-400/50">
                  WebAssembly
                </div>
                <div className="floating-element absolute bottom-1/4 -right-8 bg-gradient-to-br from-green-500 to-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-xl shadow-lg shadow-green-500/30 border border-green-400/50">
                  Real-time MP
                </div>
                <div className="floating-element absolute -bottom-4 left-1/4 bg-gradient-to-br from-orange-500 to-red-600 text-white text-sm font-bold px-4 py-2 rounded-xl shadow-lg shadow-orange-500/30 border border-orange-400/50">
                  WebGPU
                </div>
              </div>
            </div>
            
            {/* Right side - Technology features */}
            <div className="space-y-8">
              <h3 className="text-4xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Powered by Innovation
              </h3>
              
              <div className="space-y-6">
                {/* Tech feature cards */}
                <div className="group flex gap-6 items-start p-6 bg-gradient-to-r from-cyan-900/30 via-purple-900/20 to-pink-900/30 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all duration-300 group-hover:rotate-6">
                    <Cpu className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2 text-cyan-300 group-hover:text-cyan-200 transition-colors">WebGPU & WebGL 2.0</h4>
                    <p className="text-gray-300 leading-relaxed">Next-generation graphics APIs delivering console-quality visuals with advanced shaders, lighting, and post-processing effects.</p>
                  </div>
                </div>
                
                <div className="group flex gap-6 items-start p-6 bg-gradient-to-r from-purple-900/30 via-pink-900/20 to-orange-900/30 rounded-2xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:rotate-6">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2 text-purple-300 group-hover:text-purple-200 transition-colors">WebAssembly Performance</h4>
                    <p className="text-gray-300 leading-relaxed">Near-native execution speed for complex game logic, physics simulations, and AI systems running directly in the browser.</p>
                  </div>
                </div>
                
                <div className="group flex gap-6 items-start p-6 bg-gradient-to-r from-green-900/30 via-emerald-900/20 to-cyan-900/30 rounded-2xl border border-green-500/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:shadow-green-500/50 transition-all duration-300 group-hover:rotate-6">
                    <Cloud className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2 text-green-300 group-hover:text-green-200 transition-colors">Cloud-Native Architecture</h4>
                    <p className="text-gray-300 leading-relaxed">Scalable multiplayer infrastructure with real-time synchronization, matchmaking, and global leaderboards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Browser Game Impact Section - Stats & Metrics */}
        <section ref={sectionRefs[2]} className="w-full max-w-7xl mx-auto mb-32">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 p-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            The Browser Gaming Revolution
          </h2>
          
          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="group text-center p-8 bg-gradient-to-br from-cyan-900/40 via-blue-900/30 to-teal-900/40 rounded-3xl border-2 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/25">
              <div className="mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all duration-300 group-hover:rotate-12">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-black text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors">0.5s</div>
              <div className="text-gray-300 font-medium">Instant Load Time</div>
              <div className="text-gray-400 text-sm mt-1">No downloads needed</div>
            </div>
            
            <div className="group text-center p-8 bg-gradient-to-br from-green-900/40 via-emerald-900/30 to-lime-900/40 rounded-3xl border-2 border-green-500/30 hover:border-green-400/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/25">
              <div className="mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto shadow-lg shadow-green-500/30 group-hover:shadow-green-500/50 transition-all duration-300 group-hover:rotate-12">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-black text-green-300 mb-2 group-hover:text-green-200 transition-colors">3.2B</div>
              <div className="text-gray-300 font-medium">Browser Users</div>
              <div className="text-gray-400 text-sm mt-1">Massive reach potential</div>
            </div>
            
            <div className="group text-center p-8 bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-rose-900/40 rounded-3xl border-2 border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mx-auto shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:rotate-12">
                <Share2 className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-black text-purple-300 mb-2 group-hover:text-purple-200 transition-colors">1-Click</div>
              <div className="text-gray-300 font-medium">Social Sharing</div>
              <div className="text-gray-400 text-sm mt-1">Viral potential</div>
            </div>
            
            <div className="group text-center p-8 bg-gradient-to-br from-orange-900/40 via-red-900/30 to-pink-900/40 rounded-3xl border-2 border-orange-500/30 hover:border-orange-400/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/25">
              <div className="mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center mx-auto shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 transition-all duration-300 group-hover:rotate-12">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-black text-orange-300 mb-2 group-hover:text-orange-200 transition-colors">100%</div>
              <div className="text-gray-300 font-medium">Cross-Platform</div>
              <div className="text-gray-400 text-sm mt-1">Any device, anywhere</div>
            </div>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group p-8 bg-gradient-to-br from-indigo-900/50 via-purple-900/40 to-pink-900/50 rounded-3xl border-2 border-indigo-500/40 hover:border-indigo-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mr-4 shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all duration-300">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-indigo-300 group-hover:text-indigo-200 transition-colors">Instant Accessibility</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Players can jump into your game immediately - no app store approvals, no lengthy downloads, no storage concerns. Just click and play.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 mr-3"></div>
                  Zero installation friction
                </li>
                <li className="flex items-center text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mr-3"></div>
                  Instant updates & patches
                </li>
                <li className="flex items-center text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mr-3"></div>
                  Works on any modern device
                </li>
              </ul>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-emerald-900/50 via-cyan-900/40 to-blue-900/50 rounded-3xl border-2 border-emerald-500/40 hover:border-emerald-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center mr-4 shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all duration-300">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-300 group-hover:text-emerald-200 transition-colors">Viral Distribution</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Browser games spread organically through social sharing, streaming, and word-of-mouth, creating explosive growth opportunities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mr-3"></div>
                  Easy social media integration
                </li>
                <li className="flex items-center text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
                  Streamer-friendly features
                </li>
                <li className="flex items-center text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                  Embeddable anywhere
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section - Unique Interactive Design */}
        <section ref={sectionRefs[3]} className="w-full max-w-6xl mx-auto">
          <div className="relative overflow-hidden">
            {/* Background gradient orbs */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-green-500/10 to-emerald-600/10 rounded-full blur-2xl"></div>
            
            <div className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-xl border-2 border-cyan-500/30 rounded-3xl p-12 text-center group transition-all duration-500 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/20">
              
              {/* Floating elements around CTA */}
              <div className="floating-element absolute -top-4 left-1/4 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-60"></div>
              <div className="floating-element absolute -top-2 right-1/3 w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 opacity-60"></div>
              <div className="floating-element absolute -bottom-3 left-1/3 w-7 h-7 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 opacity-60"></div>
              <div className="floating-element absolute -bottom-4 right-1/4 w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-red-500 opacity-60"></div>
              
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="h-32 w-32 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl shadow-purple-500/40 group-hover:shadow-purple-500/60 transition-all duration-500 animate-pulse group-hover:scale-110">
                    <Monitor className="h-16 w-16 text-white group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                  {/* Orbiting elements */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center animate-bounce">
                    <Code className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center animate-bounce" style={{animationDelay: '0.5s'}}>
                    <Gamepad2 className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-500">
                Ready to Go Viral?
              </h3>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
                Transform your game idea into a browser sensation that reaches millions instantly. No barriers, no limitations - just pure gaming magic delivered through the web.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="/contact" className="group/btn relative inline-block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 hover:from-cyan-300 hover:via-purple-400 hover:to-pink-400 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/40 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-700 to-pink-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    <Rocket className="h-7 w-7 mr-3 group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-transform duration-300" />
                    <span>Launch Into Web</span>
                  </div>
                </a>
                
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                  <span className="text-gray-400 font-medium">or</span>
                  <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                </div>
                
                <a href="/services" className="group/btn2 inline-block border-3 border-cyan-500 hover:border-purple-400 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 backdrop-blur-sm">
                  <div className="flex items-center justify-center">
                    <Globe className="h-7 w-7 mr-3 group-hover/btn2:spin transition-transform duration-1000" />
                    <span>Explore Portfolio</span>
                  </div>
                </a>
              </div>
              
              {/* Bottom stats */}
              <div className="mt-12 pt-8 border-t border-gray-700/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">50M+</div>
                    <div className="text-gray-400 text-sm">Players Reached</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">99.9%</div>
                    <div className="text-gray-400 text-sm">Uptime Guaranteed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-400 mb-1">24/7</div>
                    <div className="text-gray-400 text-sm">Global Availability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
