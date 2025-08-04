"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Lightbulb, PencilRuler, Code, TestTube2, Rocket, Gamepad2 } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const processSteps = [
  {
    icon: Lightbulb,
    title: "Concept & Ideation",
    description: "We collaborate with you to refine your game idea into a solid concept and vision.",
  },
  {
    icon: PencilRuler,
    title: "Pre-production",
    description: "Creating game design documents, concept art, and technical specifications.",
  },
  {
    icon: Code,
    title: "Production",
    description: "The core development phase where our team builds the game, from coding to asset creation.",
  },
  {
    icon: TestTube2,
    title: "QA & Testing",
    description: "Rigorous testing to ensure a bug-free, polished, and balanced gameplay experience.",
  },
  {
    icon: Rocket,
    title: "Launch & Deployment",
    description: "Managing the release process across all target platforms, from submission to marketing support.",
  },
  {
    icon: Gamepad2,
    title: "Post-launch Support",
    description: "Providing ongoing updates, new content, and community management to keep players engaged.",
  },
]

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const steps = sectionRef.current.querySelectorAll(".process-step")
    gsap.fromTo(
      steps,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      },
    )
  }, [])

  return (
    <section id="process" ref={sectionRef} className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our Development
            <span className="block bg-gradient-to-r from-magenta-400 to-purple-500 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A streamlined and transparent workflow to take your game from idea to reality.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-800 hidden md:block" />
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step flex flex-col md:flex-row items-center">
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:order-2"}`}>
                  <h3 className="text-2xl font-bold text-magenta-400 mb-2">{`Step ${index + 1}: ${step.title}`}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                <div className="flex-shrink-0 my-4 md:my-0 md:mx-8 md:order-1">
                  <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center border-4 border-magenta-500">
                    <step.icon className="h-10 w-10 text-magenta-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
