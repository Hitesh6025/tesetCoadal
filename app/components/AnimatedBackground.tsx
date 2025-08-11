"use client"
import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    let particles: Particle[] = []

    window.addEventListener("resize", () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    })

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor(x: number, y: number, size: number, speedX: number, speedY: number, color: string) {
        this.x = x
        this.y = y
        this.size = size
        this.speedX = speedX
        this.speedY = speedY
        this.color = color
      }

      update() {
        if (this.x > width || this.x < 0) this.speedX *= -1
        if (this.y > height || this.y < 0) this.speedY *= -1
        this.x += this.speedX
        this.y += this.speedY
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function init() {
      if (!canvas) return
      particles = []
      const numberOfParticles = (canvas.width * canvas.height) / 9000
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1
        const x = Math.random() * (width - size * 2) + size
        const y = Math.random() * (height - size * 2) + size
        const speedX = Math.random() * 0.4 - 0.2
        const speedY = Math.random() * 0.4 - 0.2
        const color = `rgba(${Math.random() > 0.5 ? 220 : 148}, ${Math.random() > 0.5 ? 38 : 0}, ${Math.random() > 0.5 ? 127 : 211}, ${Math.random()})` // Magenta/Purple tones
        particles.push(new Particle(x, y, size, speedX, speedY, color))
      }
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)
      for (const particle of particles) {
        particle.update()
        particle.draw()
      }
      connect()
      requestAnimationFrame(animate)
    }

    function connect() {
      if (!ctx) return
      let opacityValue = 1
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance = Math.sqrt((particles[a].x - particles[b].x) ** 2 + (particles[a].y - particles[b].y) ** 2)
          if (distance < 100) {
            opacityValue = 1 - distance / 100
            ctx.strokeStyle = `rgba(200, 200, 200, ${opacityValue})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    init()
    animate()

    return () => {
      window.removeEventListener("resize", () => {})
    }
  }, [])

  return <canvas ref={canvasRef} className="bg-black fixed top-0 left-0 w-full h-full -z-50" />
}
