"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".about-content"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      },
    )
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="about-content">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Who We
              <span className="block bg-gradient-to-r from-magenta-400 to-purple-500 bg-clip-text text-transparent">
                Are
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Coadal is a premier game development studio where creativity meets technology. We are a collective of
              veteran developers, visionary artists, and passionate gamers committed to pushing the boundaries of
              interactive entertainment.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Founded on the principle of crafting high-quality, immersive experiences, we specialize in full-cycle game
              development for mobile, PC, and console. Our mission is to transform ambitious ideas into commercially
              successful and critically acclaimed games that resonate with players worldwide.
            </p>
          </div>
          <div className="mt-10 lg:mt-0 about-content">
            <img
              src="/placeholder.svg?width=600&height=450"
              alt="Coadal Development Team"
              className="rounded-2xl shadow-2xl shadow-magenta-500/20"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
