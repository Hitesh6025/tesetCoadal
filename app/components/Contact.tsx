"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Phone, MapPin, MessageCircle, Calendar } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    message: "",
  })

  useEffect(() => {
    if (!sectionRef.current) return
    gsap.fromTo(
      ".contact-form",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      },
    )
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Create
            <span className="block bg-gradient-to-r from-magenta-400 to-purple-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a game idea? We'd love to hear about it. Reach out and let's build the next big hit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="contact-item space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you're a startup with a groundbreaking idea or an established company looking to expand into
                gaming, we're here to help bring your vision to life.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-magenta-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-lg">Email Us</div>
                  <div className="text-gray-300">hello@coadal.com</div>
                  <div className="text-magenta-400 text-sm">We respond within 24 hours</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-lg">Call Us</div>
                  <div className="text-gray-300">+1 (555) 123-4567</div>
                  <div className="text-cyan-400 text-sm">Mon-Fri, 9AM-6PM PST</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-lg">Visit Us</div>
                  <div className="text-gray-300">San Francisco, CA</div>
                  <div className="text-blue-400 text-sm">By appointment only</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Quick Actions</h4>
              <div className="flex flex-col space-y-3">
                <button className="flex items-center space-x-3 p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-magenta-500/50 transition-all duration-300 text-left group">
                  <MessageCircle className="h-6 w-6 text-magenta-400" />
                  <div>
                    <div className="text-white font-semibold group-hover:text-magenta-300 transition-colors">
                      Live Chat
                    </div>
                    <div className="text-gray-400 text-sm">Get instant answers</div>
                  </div>
                </button>

                <button className="flex items-center space-x-3 p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 text-left group">
                  <Calendar className="h-6 w-6 text-purple-400" />
                  <div>
                    <div className="text-white font-semibold group-hover:text-purple-300 transition-colors">
                      Schedule Call
                    </div>
                    <div className="text-gray-400 text-sm">Book a consultation</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-item">
            <form onSubmit={handleSubmit} className="contact-form space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:outline-none transition-all"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:outline-none transition-all"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:outline-none transition-all"
              ></textarea>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
