"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Star } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    name: "John Doe",
    company: "CEO, Alpha Games",
    quote:
      "Coadal delivered beyond our expectations. Their technical expertise and creative input were invaluable to our project's success.",
  avatar: "/man.avif",
  },
  {
    name: "Jane Smith",
    company: "Founder, PixelHeart Studios",
    quote:
      "The team's passion for gaming is evident in their work. They are professional, communicative, and incredibly talented.",
  avatar: "/man.avif",
  },
  {
    name: "Sam Wilson",
    company: "Indie Developer",
    quote:
      "As a solo developer, I needed a reliable partner. Coadal's team felt like an extension of my own. Highly recommended!",
  avatar: "/man.avif",
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    gsap.fromTo(
      ".testimonial-card",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      },
    )
  }, [])

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What Our
            <span className="block bg-gradient-to-r from-magenta-400 to-purple-500 bg-clip-text text-transparent">
              Partners Say
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card group bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 hover:scale-[1.02] hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 flex-grow group-hover:text-gray-200 transition-colors duration-300">"{testimonial.quote}"</p>
              <div className="flex items-center">
                {/* <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                /> */}
                <div>
                  <p className="font-bold text-white group-hover:text-purple-300 transition-colors duration-300">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
