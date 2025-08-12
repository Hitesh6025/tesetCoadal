"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Phone, MapPin, MessageCircle, Calendar, Send } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const services = [
  "Mobile App Development",
  "Web Development", 
  "Game Development",
  "UI/UX Design",
  "Cloud & DevOps",
  "Digital Marketing"
]

const budgetRanges = [
  "$10K - $25K",
  "$25K - $50K", 
  "$50K - $100K",
  "$100K - $250K",
  "$250K+"
]

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      let result = null
      try {
        result = await response.json()
      } catch (jsonError) {
        result = {}
      }

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: result.message || `Thank you! Your message has been sent successfully. ${
            result.emailSent
              ? "We've received your inquiry and will contact you within 24 hours."
              : "Your inquiry has been saved and we'll get back to you soon."
          }`
        })
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          description: "",
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: result?.error || result?.message || 'Something went wrong. Please try again.'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Create
            <span className="block bg-gradient-to-r from-magenta-400 to-purple-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have an idea? We'd love to hear about it. Reach out and let's build something amazing together.
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
                  <div className="text-gray-300">support@coadal.com</div>
                  <div className="text-magenta-400 text-sm">We respond within 24 hours</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-lg">Call Us</div>
                  <div className="text-gray-300">+91 95490 98255</div>
                  <div className="text-cyan-400 text-sm">24x7</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-lg">Visit Us</div>
                  <div className="text-gray-300">Jaipur, Rajasthan</div>
                  <div className="text-blue-400 text-sm">By appointment only</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            {/* <div className="space-y-4">
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
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="contact-item">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <h3 className="text-3xl font-bold text-white mb-6">Start Your Project</h3>
              <form onSubmit={handleSubmit} className="contact-form space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-magenta-500 focus:outline-none transition-all"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-magenta-500 focus:outline-none transition-all"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-magenta-500 focus:outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-magenta-500 focus:outline-none transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-magenta-500 focus:outline-none transition-all"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Service Interest *</label>
                  <select 
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-magenta-500 focus:outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Project Budget *</label>
                  <select 
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-magenta-500 focus:outline-none transition-all"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((budget, index) => (
                      <option key={index} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Project Description *</label>
                  <textarea
                    rows={4}
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-magenta-500 focus:outline-none transition-all"
                    placeholder="Tell us about your project, goals, and requirements..."
                  />
                </div>

                {/* Status Message */}
                {submitStatus.type && (
                  <div className={`p-4 rounded-lg border ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-900/20 border-green-500 text-green-400' 
                      : 'bg-red-900/20 border-red-500 text-red-400'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 hover:scale-105'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
