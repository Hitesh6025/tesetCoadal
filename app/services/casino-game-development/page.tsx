'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedBackground from '../../components/AnimatedBackground'
import { 
  Dice1, Dice2, Dice3, Star, Crown, Trophy, Shield, 
  Zap, TrendingUp, DollarSign, Users, Award, Target, 
  Sparkles, ArrowRight, CircuitBoard, Lock, Coins
} from 'lucide-react'

export default function CasinoGameDevelopment() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]

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
        <section ref={heroRef} className="w-full max-w-5xl mx-auto text-center mb-24">
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
            Casino Game Development
          </h1>
          <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Professional casino games with authentic gambling mechanics, stunning visuals, and secure, fair gaming systems for the ultimate player experience.
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25 flex items-center justify-center">
              <Sparkles className="h-5 w-5 mr-2" />
              <span>Start Your Casino</span>
            </a>
            <a href="/portfolio" className="inline-block border-2 border-yellow-700 hover:border-yellow-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-yellow-400/10 flex items-center justify-center">
              <ArrowRight className="h-5 w-5 mr-2" />
              <span>View Portfolio</span>
            </a>
          </div>
          
          {/* Floating Casino Elements */}
          <div className="absolute top-20 left-10 floating-element">
            <div className="w-12 h-12 bg-red-600 rounded-lg shadow-xl flex items-center justify-center text-white text-2xl font-bold">
              ⚀
            </div>
          </div>
          <div className="absolute top-32 right-10 floating-element">
            <div className="w-14 h-14 bg-green-600 rounded-lg shadow-xl flex items-center justify-center text-white text-2xl font-bold">
              ⚃
            </div>
          </div>
        </section>
        
        {/* Casino Game Types Section */}
        <section ref={sectionRefs[0]} className="w-full max-w-7xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Casino Games We Create
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card bg-gradient-to-br from-red-900/50 to-red-800/30 border border-red-700/30 rounded-2xl p-8 group transition-all duration-300 hover:border-red-400">
              <div className="mb-6 h-16 w-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/20 group-hover:shadow-red-500/40 transition-all duration-300">
                <Star className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-red-400 group-hover:text-red-300 transition-colors">Slot Machines</h3>
              <p className="text-gray-300 mb-4">Engaging slot games with progressive jackpots, bonus rounds, and immersive themes that keep players spinning.</p>
              <ul className="text-gray-400 space-y-1">
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-400 mr-2"></div>
                  Progressive jackpots
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-400 mr-2"></div>
                  3D animations & themes
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-400 mr-2"></div>
                  Bonus games & free spins
                </li>
              </ul>
            </div>
            
            <div className="feature-card bg-gradient-to-br from-green-900/50 to-green-800/30 border border-green-700/30 rounded-2xl p-8 group transition-all duration-300 hover:border-green-400">
              <div className="mb-6 h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:shadow-green-500/40 transition-all duration-300">
                <Trophy className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-green-400 group-hover:text-green-300 transition-colors">Table Games</h3>
              <p className="text-gray-300 mb-4">Classic casino table games with realistic physics, multiplayer support, and authentic gaming experiences.</p>
              <ul className="text-gray-400 space-y-1">
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400 mr-2"></div>
                  Blackjack & Poker
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400 mr-2"></div>
                  Roulette & Baccarat
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400 mr-2"></div>
                  Live dealer integration
                </li>
              </ul>
            </div>
            
            <div className="feature-card bg-gradient-to-br from-purple-900/50 to-purple-800/30 border border-purple-700/30 rounded-2xl p-8 group transition-all duration-300 hover:border-purple-400">
              <div className="mb-6 h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
                <Crown className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-purple-400 group-hover:text-purple-300 transition-colors">Live Casino</h3>
              <p className="text-gray-300 mb-4">Real-time streaming casino games with professional dealers and interactive multiplayer experiences.</p>
              <ul className="text-gray-400 space-y-1">
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-400 mr-2"></div>
                  HD video streaming
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-400 mr-2"></div>
                  Interactive chat systems
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-400 mr-2"></div>
                  Multi-camera angles
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Casino Technology Section */}
        <section ref={sectionRefs[1]} className="w-full max-w-7xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 p-2 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Casino Gaming Technology
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left side - Casino game visualization */}
            <div className="md:w-1/2 relative">
              <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-yellow-700/50 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-amber-500/5 to-orange-500/10"></div>
                
                {/* Mock casino game content */}
                <div className="absolute inset-0 p-6">
                  <div className="h-full w-full rounded-2xl bg-gradient-to-br from-green-800/70 via-green-700/60 to-gray-900/80 overflow-hidden flex flex-col">
                    {/* Game UI header */}
                    <div className="bg-gradient-to-r from-yellow-900/80 to-amber-900/80 flex items-center justify-between px-4 py-3">
                      <div className="text-yellow-400 font-bold flex items-center">
                        <Coins className="h-4 w-4 mr-1" />
                        <span>$2,500</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-yellow-400 font-medium">VIP</span>
                      </div>
                    </div>
                    
                    {/* Game table */}
                    <div className="flex-grow flex flex-col items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-red-800 to-red-900 border-4 border-yellow-700 shadow-inner mb-4 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-700 to-yellow-800 flex items-center justify-center">
                          <Dice3 className="h-8 w-8 text-white animate-bounce" />
                        </div>
                      </div>
                      
                      {/* Card row */}
                      <div className="flex space-x-2 mt-4">
                        <div className="w-8 h-12 rounded-md bg-white shadow-lg flex items-center justify-center text-red-500 font-bold text-sm">A♥</div>
                        <div className="w-8 h-12 rounded-md bg-white shadow-lg flex items-center justify-center text-black font-bold text-sm">K♠</div>
                        <div className="w-8 h-12 rounded-md bg-white shadow-lg flex items-center justify-center text-red-500 font-bold text-sm">Q♦</div>
                      </div>
                    </div>
                    
                    {/* Game controls */}
                    <div className="bg-gradient-to-r from-gray-900/80 to-yellow-900/50 p-3 flex justify-around">
                      <button className="w-12 h-6 rounded-md bg-gradient-to-r from-yellow-500 to-amber-600 text-black text-xs font-bold">BET</button>
                      <button className="w-12 h-6 rounded-md bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold">HIT</button>
                      <button className="w-12 h-6 rounded-md bg-gradient-to-r from-red-500 to-rose-600 text-white text-xs font-bold">FOLD</button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating tech indicators */}
              <div className="floating-element absolute -top-4 -right-4 bg-gradient-to-br from-yellow-500 to-amber-600 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-yellow-500/30">RNG</div>
              <div className="floating-element absolute top-1/4 -left-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-green-500/30">SSL</div>
              <div className="floating-element absolute bottom-1/4 -right-8 bg-gradient-to-br from-red-500 to-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-red-500/30">AI</div>
            </div>
            
            {/* Right side - Features */}
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Casino-Grade Technology
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center shadow-lg shadow-yellow-500/20">
                    <Shield className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-yellow-400">Provably Fair Systems</h4>
                    <p className="text-gray-300">Cryptographic algorithms ensure fair outcomes and transparent RNG processes that players can verify.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/20">
                    <Lock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-green-400">Bank-Level Security</h4>
                    <p className="text-gray-300">Advanced encryption and security protocols protect player data and financial transactions.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-blue-400">Real-time Analytics</h4>
                    <p className="text-gray-300">Comprehensive analytics and reporting for player behavior, game performance, and revenue tracking.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-purple-400">High Performance</h4>
                    <p className="text-gray-300">Optimized for low latency and high concurrency to handle thousands of concurrent players.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Platform Support Section */}
        <section ref={sectionRefs[2]} className="w-full max-w-7xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Multi-Platform Casino Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card bg-gradient-to-br from-blue-900/50 to-blue-800/30 border border-blue-700/30 rounded-2xl p-6 text-center group transition-all duration-300 hover:border-blue-400">
              <div className="mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                <CircuitBoard className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-blue-400">Web Casinos</h3>
              <p className="text-gray-400 text-sm">Browser-based casino games with no download required</p>
            </div>
            
            <div className="feature-card bg-gradient-to-br from-green-900/50 to-green-800/30 border border-green-700/30 rounded-2xl p-6 text-center group transition-all duration-300 hover:border-green-400">
              <div className="mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto shadow-lg shadow-green-500/20 group-hover:shadow-green-500/40 transition-all duration-300">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-green-400">Mobile Apps</h3>
              <p className="text-gray-400 text-sm">Native iOS and Android casino applications</p>
            </div>
            
            <div className="feature-card bg-gradient-to-br from-purple-900/50 to-purple-800/30 border border-purple-700/30 rounded-2xl p-6 text-center group transition-all duration-300 hover:border-purple-400">
              <div className="mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-purple-400">Crypto Casinos</h3>
              <p className="text-gray-400 text-sm">Blockchain-based casinos with cryptocurrency support</p>
            </div>
            
            <div className="feature-card bg-gradient-to-br from-orange-900/50 to-orange-800/30 border border-orange-700/30 rounded-2xl p-6 text-center group transition-all duration-300 hover:border-orange-400">
              <div className="mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-all duration-300">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-orange-400">White Label</h3>
              <p className="text-gray-400 text-sm">Complete casino platform solutions ready to launch</p>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section ref={sectionRefs[3]} className="w-full max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-yellow-900/50 via-amber-900/40 to-orange-900/30 border border-yellow-700/40 rounded-2xl p-12 flex flex-col items-center text-center group transition-transform duration-300 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/10">
            <div className="mb-6 h-24 w-24 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center shadow-lg shadow-yellow-500/30 group-hover:shadow-yellow-500/50 transition-all duration-300 animate-pulse">
              <Award className="h-12 w-12 text-black group-hover:scale-110 transition-transform duration-300" />
            </div>
            
            <h3 className="text-3xl font-extrabold mb-3 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">Ready to Launch Your Casino?</h3>
            
            <p className="text-gray-200 mb-8 text-lg max-w-2xl">
              Partner with us to create a world-class casino gaming platform. From concept to launch, we deliver secure, engaging, and profitable casino solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="inline-block bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25 flex items-center justify-center">
                <Sparkles className="h-5 w-5 mr-2" />
                <span>Start Your Casino</span>
              </a>
              
              <a href="/portfolio" className="inline-block border-2 border-yellow-700 hover:border-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-yellow-500/10 flex items-center justify-center">
                <ArrowRight className="h-5 w-5 mr-2" />
                <span>Explore Portfolio</span>
              </a>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  )
}
