
"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Lightbulb, Palette, Code, TestTube2, Rocket } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const processSteps = [
  {
    icon: Lightbulb,
    title: "Ideation",
    description: "We collaborate with you to transform your vision into a comprehensive project roadmap. Our team conducts thorough market research and competitive analysis to ensure your project stands out.",
    timeline: "Week 1-2",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop&auto=format",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating stunning user interfaces and experiences that captivate your audience. We focus on user-centered design principles to ensure maximum engagement and usability.",
    timeline: "Week 3-6",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop&auto=format",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Code,
    title: "Development",
    description: "Building robust, scalable solutions using cutting-edge technologies and industry best practices. Our developers ensure clean, maintainable code that performs flawlessly.",
    timeline: "Week 7-14",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&auto=format",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: TestTube2,
    title: "Testing",
    description: "Comprehensive quality assurance through automated and manual testing processes. We ensure your product meets the highest standards of performance and reliability.",
    timeline: "Week 15-16",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&auto=format",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Seamless launch process with continuous monitoring and optimization. We provide ongoing support to ensure your project achieves maximum impact and success.",
    timeline: "Week 17-18",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&auto=format",
    color: "from-red-400 to-rose-500"
  },
]

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !timelineRef.current) return
    
    // Get first and last timeline items to sync the line animation
    const timelineItems = sectionRef.current.querySelectorAll(".timeline-item")
    const firstItem = timelineItems[0]
    const lastItem = timelineItems[timelineItems.length - 1]
    
    if (!firstItem || !lastItem) return

    // Create timeline with better trigger points
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: firstItem,
        start: "top 80%",
        end: () => `${lastItem.getBoundingClientRect().bottom + window.scrollY - firstItem.getBoundingClientRect().top - window.scrollY}px bottom`,
        scrub: 1,
      }
    })
    
    // Animate timeline line progressively
    tl.fromTo(
      timelineRef.current,
      { height: "0%" },
      { height: "100%", duration: 2, ease: "power2.out" }
    )

    // Animate each timeline item with staggered animations
    timelineItems.forEach((item, index) => {
      const isEven = index % 2 === 0
      
      // Item container animation
      gsap.fromTo(
        item,
        { 
          opacity: 0, 
          y: 80,
          x: isEven ? -50 : 50
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Icon animation with bounce
      const icon = item.querySelector(".timeline-icon")
      if (icon) {
        gsap.fromTo(
          icon,
          { scale: 0, rotation: -180, opacity: 0 },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 1,
            ease: "back.out(2)",
            delay: 0.3,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Image reveal animation
      const image = item.querySelector(".timeline-image")
      if (image) {
        gsap.fromTo(
          image,
          { scale: 1.2, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            delay: 0.5,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Content slide animation
      const content = item.querySelector(".timeline-content")
      if (content) {
        gsap.fromTo(
          content,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            delay: 0.6,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }
    })

    // Floating animation for icons
    timelineItems.forEach((item) => {
      const icon = item.querySelector(".timeline-icon")
      if (icon) {
        gsap.to(icon, {
          y: -8,
          duration: 2,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          delay: Math.random() * 2
        })
      }
    })

  }, [])

  return (
    <section id="process" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-gray-900/90 dark:to-black"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 dark:from-purple-500/5 dark:to-pink-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 dark:border-gray-700/50 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Our Process</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 dark:from-white dark:via-purple-100 dark:to-white bg-clip-text text-transparent">
            Our Development
            <span className="block bg-gradient-to-r from-magenta-400 to-purple-500 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A streamlined and transparent workflow designed to transform your ideas into exceptional digital experiences.
          </p>
        </div>
        
        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-8 md:left-1/2 w-1 transform md:-translate-x-1/2 z-0" style={{ top: '2rem', bottom: '2rem' }}>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-full rounded-full"></div>
            <div 
              ref={timelineRef}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-magenta-500 via-purple-500 to-cyan-500 rounded-full origin-top shadow-lg"
              style={{ height: '0%' }}
            ></div>
          </div>
          
          {/* Timeline Items */}
          <div className="relative z-10 space-y-16 md:space-y-24">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0
              return (
                <div key={index} className="timeline-item">
                  {/* Mobile Layout */}
                  <div className="md:hidden pl-4">
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div className="timeline-icon relative flex-shrink-0 mt-2">
                        <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-xl border-2 border-white dark:border-gray-900 hover:scale-110 transition-transform duration-300`}>
                          <step.icon className="h-8 w-8 text-white drop-shadow-lg" />
                        </div>
                        <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${step.color} rounded-full opacity-30 animate-ping`}></div>
                      </div>
                      
                      {/* Content */}
                      <div className="timeline-content flex-1">
                        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50 hover:border-purple-500/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group">
                          <div className="flex items-center gap-3 mb-4">
                            <span className={`text-xs font-bold text-white bg-gradient-to-r ${step.color} px-3 py-1 rounded-full`}>
                              {step.timeline}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">Step {index + 1}</span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                            {step.title}
                          </h3>
                          
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm mb-4">
                            {step.description}
                          </p>
                          
                          <div className="timeline-image relative overflow-hidden rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-500">
                            <img 
                              src={step.image} 
                              alt={step.title}
                              className="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-purple-900/30 group-hover:to-transparent transition-all duration-500"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:grid grid-cols-12 gap-8 items-center">
                    {/* Left Side Content (for even indexes) */}
                    {isEven ? (
                      <>
                        {/* Content Card - Left */}
                        <div className="col-span-5">
                          <div className="timeline-content bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:border-purple-500/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
                            {/* Timeline Badge */}
                            <div className="flex items-center justify-between mb-6">
                              <span className={`text-sm font-bold text-white bg-gradient-to-r ${step.color} px-4 py-2 rounded-full shadow-md`}>
                                {step.timeline}
                              </span>
                              <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold">Step {index + 1}</span>
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                              {step.title}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                              {step.description}
                            </p>
                            
                            {/* Timeline Image */}
                            <div className="timeline-image relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                              <img 
                                src={step.image} 
                                alt={step.title}
                                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-purple-900/30 group-hover:to-transparent transition-all duration-500"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Central Icon */}
                        <div className="col-span-2 flex justify-center relative z-20">
                          <div className="timeline-icon relative">
                            <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-900 hover:scale-110 transition-transform duration-300`}>
                              <step.icon className="h-12 w-12 text-white drop-shadow-lg" />
                            </div>
                            
                            {/* Glow Effects */}
                            <div className={`absolute inset-0 w-24 h-24 bg-gradient-to-br ${step.color} rounded-full opacity-30 animate-ping`}></div>
                            <div className={`absolute inset-2 w-20 h-20 bg-gradient-to-br ${step.color} rounded-full opacity-20 blur-md`}></div>
                          </div>
                        </div>
                        
                        {/* Empty Right Side */}
                        <div className="col-span-5"></div>
                      </>
                    ) : (
                      <>
                        {/* Empty Left Side */}
                        <div className="col-span-5"></div>
                        
                        {/* Central Icon */}
                        <div className="col-span-2 flex justify-center relative z-20">
                          <div className="timeline-icon relative">
                            <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-900 hover:scale-110 transition-transform duration-300`}>
                              <step.icon className="h-12 w-12 text-white drop-shadow-lg" />
                            </div>
                            
                            {/* Glow Effects */}
                            <div className={`absolute inset-0 w-24 h-24 bg-gradient-to-br ${step.color} rounded-full opacity-30 animate-ping`}></div>
                            <div className={`absolute inset-2 w-20 h-20 bg-gradient-to-br ${step.color} rounded-full opacity-20 blur-md`}></div>
                          </div>
                        </div>
                        
                        {/* Content Card - Right */}
                        <div className="col-span-5">
                          <div className="timeline-content bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:border-purple-500/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
                            {/* Timeline Badge */}
                            <div className="flex items-center justify-between mb-6">
                              <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold">Step {index + 1}</span>
                              <span className={`text-sm font-bold text-white bg-gradient-to-r ${step.color} px-4 py-2 rounded-full shadow-md`}>
                                {step.timeline}
                              </span>
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                              {step.title}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                              {step.description}
                            </p>
                            
                            {/* Timeline Image */}
                            <div className="timeline-image relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                              <img 
                                src={step.image} 
                                alt={step.title}
                                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-purple-900/30 group-hover:to-transparent transition-all duration-500"></div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
          
          {/* Bottom CTA */}
          
        </div>
      </div>

            <div className="text-center mt-20">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Let's discuss how we can bring your vision to life through our proven development process.
              </p>
              <Link href="/contact" passHref legacyBehavior>
                <button className="bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Get Started Today
                </button>
              </Link>
            </div>
          </div>

    </section>
  )
}
