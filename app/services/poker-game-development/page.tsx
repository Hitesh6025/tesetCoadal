
"use client"
import AnimatedBackground from "../../components/AnimatedBackground"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { 
  Spade,
  Heart,
  Diamond,
  Club,
  Trophy,
  Sparkles,
  ArrowRight,
  Crown,
  Shield,
  Users,
  Zap,
  Target,
  Brain,
  Lock,
  Wifi,
  DollarSign,
  Star,
  Gamepad2,
  TrendingUp,
  Eye,
  Timer,
  Coins,
  ChevronRight
} from "lucide-react"

export default function PokerGameDevelopment() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]
  const cardRefs = useRef([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Hero section animations
    const tl = gsap.timeline({ delay: 0.3 })
    
    if (titleRef.current) {
      tl.fromTo(
        titleRef.current, 
        { opacity: 0, y: 100, rotateX: -90 }, 
        { opacity: 1, y: 0, rotateX: 0, duration: 1.5, ease: "power3.out" }
      )
    }
    
    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
        "-=1"
      )
    }
    
    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
    }
    
    // Section animations with ScrollTrigger
    sectionRefs.forEach((ref) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 75%",
              toggleActions: "play none none none"
            }
          }
        )
      }
    })
    
    // Playing card floating animation
    const playingCards = gsap.utils.toArray<HTMLElement>(".playing-card")
    if (playingCards.length > 0) {
      playingCards.forEach((card, index) => {
        gsap.to(card, {
          y: -30 + Math.sin(index * 0.5) * 20,
          x: 20 + Math.cos(index * 0.3) * 15,
          rotation: 15 + index * 5,
          duration: 4 + index * 0.7,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.3,
        })
      })
    }
    
    // Feature cards animation
    const featureCards = gsap.utils.toArray<HTMLElement>(".poker-feature-card")
    featureCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -15,
          scale: 1.05,
          rotateY: 5,
          duration: 0.4,
          ease: "power2.out",
          boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.25)"
        })
      })
      
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          rotateY: 0,
          duration: 0.4,
          ease: "power2.out",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
        })
      })
    })
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-x-hidden">
      <AnimatedBackground />
       
      <main className="relative z-10 pt-24 pb-12 px-4 md:px-8">
        {/* Hero Section - Casino Table Theme */}
        <section ref={heroRef} className="w-full max-w-7xl mx-auto text-center mb-40">
          {/* Floating playing cards */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="playing-card absolute top-20 left-1/4 w-16 h-24 bg-gradient-to-br from-red-600 to-red-800 rounded-lg border-2 border-red-400/30 shadow-lg"></div>
            <div className="playing-card absolute top-32 right-1/3 w-16 h-24 bg-gradient-to-br from-gray-800 to-black rounded-lg border-2 border-gray-600/30 shadow-lg"></div>
            <div className="playing-card absolute top-16 right-1/4 w-16 h-24 bg-gradient-to-br from-red-600 to-red-800 rounded-lg border-2 border-red-400/30 shadow-lg"></div>
          </div>
          
          <div className="relative">
            <h1 ref={titleRef} className="text-6xl md:text-9xl font-black mb-8 leading-none">
              <span className="block bg-gradient-to-r from-red-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
                POKER
              </span>
              <span className="block bg-gradient-to-r from-yellow-500 via-red-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl -mt-4">
                MASTERY
              </span>
            </h1>
            
            <p ref={subtitleRef} className="text-2xl md:text-4xl text-gray-100 mb-16 max-w-4xl mx-auto font-medium leading-relaxed">
              Where Strategy Meets Technology
              <br />
              <span className="text-xl md:text-2xl text-red-400 font-light">Premium Poker Game Development</span>
            </p>
            
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <a href="/contact" className="group relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-red-500 via-red-600 to-orange-600 hover:from-red-400 hover:via-red-500 hover:to-orange-500 text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                  <div className="flex items-center justify-center">
                    <Crown className="h-8 w-8 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Deal Me In</span>
                  </div>
                </div>
              </a>
              
              <div className="flex items-center gap-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
                <div className="flex space-x-2">
                  <Spade className="h-6 w-6 text-gray-300" />
                  <Heart className="h-6 w-6 text-red-400" />
                  <Diamond className="h-6 w-6 text-red-400" />
                  <Club className="h-6 w-6 text-gray-300" />
                </div>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
              </div>
              
              <a href="/portfolio" className="group border-3 border-red-500 hover:border-yellow-400 text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-red-500/20 hover:to-yellow-500/20 backdrop-blur-sm">
                <div className="flex items-center justify-center">
                  <Eye className="h-8 w-8 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span>View Portfolio</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        
        {/* Poker Variants Section - Casino Chip Design */}
        <section ref={sectionRefs[0]} className="w-full max-w-7xl mx-auto mb-40">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-red-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Premium Poker Variants
          </h2>
          
          {/* Casino chip layout */}
          <div className="relative flex flex-wrap justify-center gap-8">
            {/* Texas Hold'em */}
            <div className="poker-feature-card group relative">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-red-600 via-red-700 to-red-900 border-8 border-yellow-400 shadow-2xl flex flex-col items-center justify-center p-8 cursor-pointer transition-all duration-500">
                <div className="absolute inset-4 rounded-full border-4 border-yellow-300/50"></div>
                <div className="relative z-10 text-center">
                  <Crown className="h-16 w-16 text-yellow-400 mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300" />
                  <h3 className="text-2xl font-black text-yellow-300 mb-3">Texas Hold'em</h3>
                  <p className="text-yellow-100 text-sm leading-relaxed">The king of poker games with community cards and strategic betting</p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Omaha */}
            <div className="poker-feature-card group relative">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 border-8 border-silver shadow-2xl flex flex-col items-center justify-center p-8 cursor-pointer transition-all duration-500">
                <div className="absolute inset-4 rounded-full border-4 border-gray-300/50"></div>
                <div className="relative z-10 text-center">
                  <Brain className="h-16 w-16 text-gray-300 mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300" />
                  <h3 className="text-2xl font-black text-gray-200 mb-3">Omaha</h3>
                  <p className="text-gray-100 text-sm leading-relaxed">Four hole cards create endless possibilities and action-packed gameplay</p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Seven Card Stud */}
            <div className="poker-feature-card group relative">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-green-600 via-green-700 to-green-900 border-8 border-bronze shadow-2xl flex flex-col items-center justify-center p-8 cursor-pointer transition-all duration-500">
                <div className="absolute inset-4 rounded-full border-4 border-orange-300/50"></div>
                <div className="relative z-10 text-center">
                  <Star className="h-16 w-16 text-orange-300 mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300" />
                  <h3 className="text-2xl font-black text-orange-200 mb-3">Seven Card Stud</h3>
                  <p className="text-orange-100 text-sm leading-relaxed">Classic poker variant with visible cards and memory-based strategy</p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-orange-300"></div>
                    <div className="w-2 h-2 rounded-full bg-orange-300"></div>
                    <div className="w-2 h-2 rounded-full bg-orange-300"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tournament */}
            <div className="poker-feature-card group relative">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 border-8 border-pink-400 shadow-2xl flex flex-col items-center justify-center p-8 cursor-pointer transition-all duration-500">
                <div className="absolute inset-4 rounded-full border-4 border-pink-300/50"></div>
                <div className="relative z-10 text-center">
                  <Trophy className="h-16 w-16 text-pink-300 mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300" />
                  <h3 className="text-2xl font-black text-pink-200 mb-3">Tournaments</h3>
                  <p className="text-pink-100 text-sm leading-relaxed">Multi-table tournaments with escalating blinds and elimination format</p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-pink-300"></div>
                    <div className="w-2 h-2 rounded-full bg-pink-300"></div>
                    <div className="w-2 h-2 rounded-full bg-pink-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technology Stack - Poker Table Layout */}
        <section ref={sectionRefs[1]} className="w-full max-w-7xl mx-auto mb-40">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Our Tech Arsenal
          </h2>
          
          {/* Poker table representation */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative w-full h-[600px] bg-gradient-to-br from-green-800 via-green-900 to-green-950 rounded-full border-8 border-yellow-600/50 shadow-2xl overflow-hidden">
              {/* Table felt texture */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-700/50 via-transparent to-green-950/50"></div>
              
              {/* Center logo area */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 border-4 border-yellow-400 flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <Gamepad2 className="h-16 w-16 text-yellow-200 mx-auto mb-2" />
                  <div className="text-yellow-200 font-black text-lg">POWERED BY</div>
                  <div className="text-yellow-100 font-bold text-sm">INNOVATION</div>
                </div>
              </div>
              
              {/* Tech cards around the table */}
              {/* Real-time Multiplayer */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                <div className="poker-feature-card bg-gradient-to-br from-red-700 to-red-900 rounded-2xl p-6 border-2 border-red-500/50 shadow-lg w-48 group cursor-pointer">
                  <div className="text-center">
                    <Users className="h-10 w-10 text-red-300 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-black text-red-200 mb-2">Real-time MP</h3>
                    <p className="text-red-100 text-xs">WebSocket connections for instant gameplay</p>
                  </div>
                </div>
              </div>
              
              {/* AI & Bots */}
              <div className="absolute top-20 right-8">
                <div className="poker-feature-card bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-6 border-2 border-blue-500/50 shadow-lg w-48 group cursor-pointer">
                  <div className="text-center">
                    <Brain className="h-10 w-10 text-blue-300 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-black text-blue-200 mb-2">Smart AI</h3>
                    <p className="text-blue-100 text-xs">Advanced poker bots with human-like behavior</p>
                  </div>
                </div>
              </div>
              
              {/* Security */}
              <div className="absolute bottom-20 right-8">
                <div className="poker-feature-card bg-gradient-to-br from-purple-700 to-purple-900 rounded-2xl p-6 border-2 border-purple-500/50 shadow-lg w-48 group cursor-pointer">
                  <div className="text-center">
                    <Shield className="h-10 w-10 text-purple-300 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-black text-purple-200 mb-2">Fort Knox Security</h3>
                    <p className="text-purple-100 text-xs">Bank-grade encryption & anti-cheat systems</p>
                  </div>
                </div>
              </div>
              
              {/* Payment Systems */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="poker-feature-card bg-gradient-to-br from-green-700 to-green-900 rounded-2xl p-6 border-2 border-green-500/50 shadow-lg w-48 group cursor-pointer">
                  <div className="text-center">
                    <DollarSign className="h-10 w-10 text-green-300 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-black text-green-200 mb-2">Payment Hub</h3>
                    <p className="text-green-100 text-xs">Secure transactions & instant payouts</p>
                  </div>
                </div>
              </div>
              
              {/* Analytics */}
              <div className="absolute bottom-20 left-8">
                <div className="poker-feature-card bg-gradient-to-br from-orange-700 to-orange-900 rounded-2xl p-6 border-2 border-orange-500/50 shadow-lg w-48 group cursor-pointer">
                  <div className="text-center">
                    <TrendingUp className="h-10 w-10 text-orange-300 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-black text-orange-200 mb-2">Analytics Pro</h3>
                    <p className="text-orange-100 text-xs">Deep insights & player behavior tracking</p>
                  </div>
                </div>
              </div>
              
              {/* Cross-Platform */}
              <div className="absolute top-20 left-8">
                <div className="poker-feature-card bg-gradient-to-br from-cyan-700 to-cyan-900 rounded-2xl p-6 border-2 border-cyan-500/50 shadow-lg w-48 group cursor-pointer">
                  <div className="text-center">
                    <Target className="h-10 w-10 text-cyan-300 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-black text-cyan-200 mb-2">Cross-Platform</h3>
                    <p className="text-cyan-100 text-xs">Web, mobile, & desktop compatibility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Our Poker Development - Card Hand Layout */}
        <section ref={sectionRefs[2]} className="w-full max-w-7xl mx-auto mb-40">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-20 p-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Royal Flush Features
          </h2>
          
          {/* Playing card hand layout */}
          <div className="flex flex-wrap justify-center gap-6 perspective-1000">
            {/* Card 1 - Security */}
            <div className="poker-feature-card transform rotate-12 hover:rotate-0 transition-all duration-500">
              <div className="w-64 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl border-4 border-gray-800 shadow-2xl p-8 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <Spade className="h-8 w-8 text-gray-800" />
                  <div className="text-right">
                    <div className="text-2xl font-black text-gray-800">A</div>
                    <Spade className="h-6 w-6 text-gray-800" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center text-center">
                  <Shield className="h-16 w-16 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-black text-gray-800 mb-3">Ultimate Security</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">Military-grade encryption, anti-fraud detection, and secure random number generation</p>
                </div>
                <div className="transform rotate-180 flex justify-between items-start">
                  <div className="text-left">
                    <div className="text-2xl font-black text-gray-800">A</div>
                    <Spade className="h-6 w-6 text-gray-800" />
                  </div>
                  <Spade className="h-8 w-8 text-gray-800" />
                </div>
              </div>
            </div>
            
            {/* Card 2 - Performance */}
            <div className="poker-feature-card transform rotate-6 hover:rotate-0 transition-all duration-500">
              <div className="w-64 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl border-4 border-gray-800 shadow-2xl p-8 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <Heart className="h-8 w-8 text-red-600" />
                  <div className="text-right">
                    <div className="text-2xl font-black text-red-600">K</div>
                    <Heart className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center text-center">
                  <Zap className="h-16 w-16 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-black text-gray-800 mb-3">Lightning Fast</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">Sub-second response times with optimized algorithms and cloud infrastructure</p>
                </div>
                <div className="transform rotate-180 flex justify-between items-start">
                  <div className="text-left">
                    <div className="text-2xl font-black text-red-600">K</div>
                    <Heart className="h-6 w-6 text-red-600" />
                  </div>
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
              </div>
            </div>
            
            {/* Card 3 - Scalability */}
            <div className="poker-feature-card transform -rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="w-64 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl border-4 border-gray-800 shadow-2xl p-8 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <Diamond className="h-8 w-8 text-red-600" />
                  <div className="text-right">
                    <div className="text-2xl font-black text-red-600">Q</div>
                    <Diamond className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center text-center">
                  <TrendingUp className="h-16 w-16 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-black text-gray-800 mb-3">Infinite Scale</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">Auto-scaling architecture handling millions of concurrent players seamlessly</p>
                </div>
                <div className="transform rotate-180 flex justify-between items-start">
                  <div className="text-left">
                    <div className="text-2xl font-black text-red-600">Q</div>
                    <Diamond className="h-6 w-6 text-red-600" />
                  </div>
                  <Diamond className="h-8 w-8 text-red-600" />
                </div>
              </div>
            </div>
            
            {/* Card 4 - Analytics */}
            <div className="poker-feature-card transform -rotate-8 hover:rotate-0 transition-all duration-500">
              <div className="w-64 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl border-4 border-gray-800 shadow-2xl p-8 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <Club className="h-8 w-8 text-gray-800" />
                  <div className="text-right">
                    <div className="text-2xl font-black text-gray-800">J</div>
                    <Club className="h-6 w-6 text-gray-800" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center text-center">
                  <Eye className="h-16 w-16 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-black text-gray-800 mb-3">Deep Insights</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">Advanced analytics for player behavior, game balance, and revenue optimization</p>
                </div>
                <div className="transform rotate-180 flex justify-between items-start">
                  <div className="text-left">
                    <div className="text-2xl font-black text-gray-800">J</div>
                    <Club className="h-6 w-6 text-gray-800" />
                  </div>
                  <Club className="h-8 w-8 text-gray-800" />
                </div>
              </div>
            </div>
            
            {/* Card 5 - Support */}
            <div className="poker-feature-card transform -rotate-12 hover:rotate-0 transition-all duration-500">
              <div className="w-64 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl border-4 border-gray-800 shadow-2xl p-8 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <Spade className="h-8 w-8 text-gray-800" />
                  <div className="text-right">
                    <div className="text-2xl font-black text-gray-800">10</div>
                    <Spade className="h-6 w-6 text-gray-800" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center text-center">
                  <Timer className="h-16 w-16 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-black text-gray-800 mb-3">24/7 Support</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">Round-the-clock technical support and maintenance for uninterrupted gameplay</p>
                </div>
                <div className="transform rotate-180 flex justify-between items-start">
                  <div className="text-left">
                    <div className="text-2xl font-black text-gray-800">10</div>
                    <Spade className="h-6 w-6 text-gray-800" />
                  </div>
                  <Spade className="h-8 w-8 text-gray-800" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action - Casino Jackpot Style */}
        <section ref={sectionRefs[3]} className="w-full max-w-6xl mx-auto">
          <div className="relative overflow-hidden">
            {/* Jackpot machine background */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 via-yellow-900/60 to-orange-900/80 rounded-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 rounded-3xl"></div>
            
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-3xl border-4 border-yellow-400/50 shadow-2xl shadow-yellow-400/25"></div>
            
            <div className="relative bg-gradient-to-br from-red-800/90 via-red-900/80 to-yellow-900/90 backdrop-blur-xl rounded-3xl p-16 text-center">
              
              {/* Jackpot styling */}
              <div className="mb-12">
                <div className="inline-flex items-center justify-center mb-6">
                  <div className="flex space-x-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-2xl shadow-yellow-500/50 animate-pulse">
                      <Crown className="h-10 w-10 text-white" />
                    </div>
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-2xl shadow-red-500/50 animate-pulse" style={{animationDelay: '0.5s'}}>
                      <Coins className="h-10 w-10 text-white" />
                    </div>
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-2xl shadow-yellow-500/50 animate-pulse" style={{animationDelay: '1s'}}>
                      <Trophy className="h-10 w-10 text-white" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-2xl">
                  JACKPOT!
                </h3>
                <div className="text-2xl md:text-3xl font-bold text-yellow-200 mb-2">Your Winning Hand Awaits</div>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-100 mb-16 max-w-4xl mx-auto leading-relaxed">
                Ready to develop the next legendary poker platform? Let's create a game that keeps players coming back for more - with cutting-edge technology, unbeatable security, and casino-grade performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <a href="/contact" className="group relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 text-white px-16 py-8 rounded-2xl font-black text-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl flex items-center">
                    <Sparkles className="h-8 w-8 mr-4 animate-spin" />
                    <span>Hit the Jackpot</span>
                    <ChevronRight className="h-8 w-8 ml-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </a>
                
                <div className="text-center">
                  <div className="text-yellow-300 text-lg font-bold mb-2">🎰 BONUS FEATURES 🎰</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-black/30 rounded-lg px-4 py-2 text-yellow-200">
                      <div className="font-bold">Free Consultation</div>
                      <div className="text-xs text-yellow-300">Worth ₹5000</div>
                    </div>
                    <div className="bg-black/30 rounded-lg px-4 py-2 text-yellow-200">
                      <div className="font-bold">24/7 Support</div>
                      <div className="text-xs text-yellow-300">Always Available</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom stats - Slot machine style */}
              <div className="mt-16 pt-8 border-t border-yellow-400/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-black text-yellow-400 mb-2">10M+</div>
                    <div className="text-yellow-200 font-bold">Hands Dealt</div>
                    <div className="text-yellow-300/70 text-sm">Across our platforms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-red-400 mb-2">99.99%</div>
                    <div className="text-red-200 font-bold">Uptime</div>
                    <div className="text-red-300/70 text-sm">Guaranteed reliability</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-orange-400 mb-2">24/7</div>
                    <div className="text-orange-200 font-bold">Gaming Action</div>
                    <div className="text-orange-300/70 text-sm">Never stops</div>
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
