"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Award, Users, Code, Star } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { icon: Award, value: 40, label: "Games Launched" },
  { icon: Users, value: 10, label: "Million Players" },
  { icon: Code, value: 100, label: "Expert Developers" },
  { icon: Star, value: 4.9, label: "Client Rating", decimals: 1 },
]

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    gsap.fromTo(
      ".stat-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    gsap.utils.toArray<HTMLElement>(".stat-value").forEach((el) => {
      const target = { val: 0 }
      const endValue = Number.parseFloat(el.dataset.value || "0")
      const decimals = Number.parseInt(el.dataset.decimals || "0")

      gsap.to(target, {
        val: endValue,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
        onUpdate: () => {
          el.textContent = target.val.toFixed(decimals) + (el.dataset.label === "Million Players" ? "M+" : "")
        },
      })
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item group hover:scale-105 transition-all duration-500 hover:bg-gray-800/30 hover:shadow-lg p-6 rounded-2xl border border-transparent hover:border-purple-500/30">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-magenta-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3
                className="stat-value text-4xl md:text-5xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300"
                data-value={stat.value}
                data-decimals={stat.decimals || 0}
                data-label={stat.label}
              >
                0
              </h3>
              <p className="text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
