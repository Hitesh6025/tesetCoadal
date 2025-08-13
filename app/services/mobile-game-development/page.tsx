"use client"
import AnimatedBackground from "../../components/AnimatedBackground"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { 
  Smartphone, 
  Sparkles, 
  ArrowRight,
  Gamepad2,
  Joystick,
  Layers,
  Store,
  CircuitBoard,
  Tablet,
  Blocks,
  Award,
  Zap,
  Target,
  Share2
} from "lucide-react"

export default function MobileGameDevelopment() {
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
    
    // Floating elements animation - lighter animations
    const floatingElements = gsap.utils.toArray<HTMLElement>(".floating-element")
    if (floatingElements.length > 0) {
      floatingElements.forEach((element, index) => {
        gsap.to(element, {
          y: -10 + Math.sin(index) * 8,
          x: 8 + Math.cos(index) * 5,
          rotation: 5,
          duration: 4 + index * 0.3,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.2,
        })
      })
    }

    // Cleanup function to prevent memory leaks
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-x-hidden">
      <AnimatedBackground />
       
      <main className="relative z-10 pt-50 pb-12 px-4 md:px-8">
        {/* Hero Section */}
        <section ref={heroRef} className="w-full max-w-5xl mx-auto text-center mb-24">
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">
            Mobile Game Development
          </h1>
          <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Cutting-edge mobile games for iOS & Android, blending creativity, technology, and user-centric design for maximum impact.
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25 flex items-center justify-center">
              <Sparkles className="h-5 w-5 mr-2" />
              <span>Start Your Project</span>
            </a>
            <a href="/portfolio" className="inline-block border-2 border-cyan-700 hover:border-cyan-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-cyan-400/10 flex items-center justify-center">
              <ArrowRight className="h-5 w-5 mr-2" />
              <span>Explore Portfolio</span>
            </a>
          </div>
        </section>
        
        {/* Mobile Game Types Section */}
        <section ref={sectionRefs[0]} className="w-full max-w-7xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Mobile Game Experiences We Create
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card bg-gradient-to-br from-cyan-900/50 to-blue-900/30 border border-cyan-700/30 rounded-2xl p-8 group transition-all duration-300 hover:border-cyan-400">
              <div className="mb-6 h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
                <Blocks className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors">Casual & Hypercasual</h3>
              <p className="text-gray-300 mb-4">Addictive, easy-to-play games with simple mechanics designed for short play sessions and mass appeal.</p>
              <ul className="text-gray-400 space-y-1">
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 mr-2"></div>
                  One-touch gameplay
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 mr-2"></div>
                  Puzzles & brain teasers
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 mr-2"></div>
                  Arcade & time challenges
                </li>
              </ul>
            </div>
            
            <div className="feature-card bg-gradient-to-br from-green-900/50 to-emerald-900/30 border border-green-700/30 rounded-2xl p-8 group transition-all duration-300 hover:border-green-400">
              <div className="mb-6 h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:shadow-green-500/40 transition-all duration-300">
                <Joystick className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-green-400 group-hover:text-green-300 transition-colors">Mid-core & Strategy</h3>
              <p className="text-gray-300 mb-4">Deeper gameplay with progression systems for engaged mobile gamers seeking more substantial experiences.</p>
              <ul className="text-gray-400 space-y-1">
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400 mr-2"></div>
                  RPGs & adventure games
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400 mr-2"></div>
                  Tower defense & strategy
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400 mr-2"></div>
                  Simulation & management
                </li>
              </ul>
            </div>
            
            <div className="feature-card bg-gradient-to-br from-blue-900/50 to-indigo-900/30 border border-blue-700/30 rounded-2xl p-8 group transition-all duration-300 hover:border-blue-400">
              <div className="mb-6 h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                <Layers className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-blue-400 group-hover:text-blue-300 transition-colors">AR/VR & Immersive</h3>
              <p className="text-gray-300 mb-4">Cutting-edge augmented and virtual reality games that blend digital content with the real world.</p>
              <ul className="text-gray-400 space-y-1">
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                  AR object interaction
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                  VR experiences
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                  Location-based games
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Mobile Tech Section */}
        <section ref={sectionRefs[1]} className="w-full max-w-7xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Mobile Game Technology
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left side - Mobile device visualization */}
            <div className="md:w-1/2 relative">
              <div className="relative w-[280px] h-[560px] mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-[36px] border-[8px] border-gray-700 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-green-500/10"></div>
                
                {/* Mock screen content with animated game elements */}
                <div className="absolute inset-0 p-3">
                  <div className="h-full w-full rounded-3xl bg-gradient-to-br from-cyan-900/70 via-blue-900/60 to-gray-900/80 overflow-hidden">
                    {/* Game UI elements */}
                    <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-cyan-900/80 to-blue-900/80 flex items-center justify-between px-4">
                      <div className="text-cyan-400 font-bold">Level 7</div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-yellow-400 font-medium">2,540</span>
                      </div>
                    </div>
                    
                    {/* Game character */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center animate-bounce">
                      <Gamepad2 className="h-12 w-12 text-white" />
                    </div>
                    
                    {/* Game controls */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-6">
                      <div className="w-14 h-14 rounded-full bg-cyan-500/40 backdrop-blur-sm border border-cyan-400/50 flex items-center justify-center">
                        <ArrowRight className="h-8 w-8 text-white" />
                      </div>
                      <div className="w-14 h-14 rounded-full bg-green-500/40 backdrop-blur-sm border border-green-400/50 flex items-center justify-center">
                        <Zap className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl"></div>
                
                {/* Home button or indicator */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-400 rounded-full"></div>
              </div>
              
              {/* Floating tech indicators */}
              <div className="floating-element absolute -top-4 -right-4 bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-cyan-500/30">Unity</div>
              <div className="floating-element absolute top-1/4 -left-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-green-500/30">Unreal</div>
              <div className="floating-element absolute bottom-1/4 -right-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-blue-500/30">3D Physics</div>
            </div>
            
            {/* Right side - Features */}
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Mobile-First Technology
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <CircuitBoard className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-cyan-400">Optimized Performance</h4>
                    <p className="text-gray-300">Our games are engineered for smooth performance across all mobile devices, with optimized code and assets.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/20">
                    <Tablet className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-green-400">Multi-Platform Development</h4>
                    <p className="text-gray-300">Cross-platform solutions for iOS and Android with shared codebases and native performance.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <Share2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-blue-400">Social & Multiplayer Integration</h4>
                    <p className="text-gray-300">Built-in social features, real-time multiplayer, leaderboards, and cloud saves for enhanced engagement.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                    <Store className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-purple-400">Monetization Strategy</h4>
                    <p className="text-gray-300">Effective IAP systems, ad integration, and subscription models designed for maximum revenue.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section ref={sectionRefs[3]} className="w-full max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-900/50 via-blue-900/40 to-green-900/30 border border-cyan-700/40 rounded-2xl p-12 flex flex-col items-center text-center group transition-transform duration-300 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-400/10">
            <div className="mb-6 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all duration-300 animate-pulse">
              <Smartphone className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            
            <h3 className="text-3xl font-extrabold mb-3 bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 bg-clip-text text-transparent">Ready to Build Your Mobile Game?</h3>
            
            <p className="text-gray-200 mb-8 text-lg max-w-2xl">
              Contact us to turn your mobile game idea into reality. Our experts will guide you from concept to launch with cutting-edge technology and creative design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25 flex items-center justify-center">
                <Sparkles className="h-5 w-5 mr-2" />
                <span>Start Your Project</span>
              </a>
              
              <a href="/portfolio" className="inline-block border-2 border-cyan-700 hover:border-cyan-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-cyan-400/10 flex items-center justify-center">
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
