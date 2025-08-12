"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Globe, Users, Award } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: ["support@coadal.com", "info@coadal.com"],
    description: "Get in touch with our team"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 95490 98255"],
    description: "Speak with our experts"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Sansthan Path, Jhalana Gram, Malviya Nagar, Jaipur, Rajasthan 302017"],
    description: "Our headquarters"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["24x7"],
    description: "We're here to help"
  }
]

const officeLocations = [
  {
    city: "Jaipur",
    country: "India",
    address: "Sansthan Path, Jhalana Gram, Malviya Nagar, Jaipur, Rajasthan 302017",
    phone: "+91 95490 98255",
    email: "jaipur@coadal.com",
    timezone: "IST (UTC+5:30)"
  },
  {
    city: "Melbourne",
    country: "Australia",
    address: "Melbourne, Australia 3000",
    phone: "+91 95490 98255",
    email: "jaipur@coadal.com",
    timezone: "AEDT (UTC+11)"
  },
  {
    city: "Miami",
    country: "USA",
    address: "Miami, FL 33101",
    phone: "+91 95490 98255",
    email: "jaipur@coadal.com",
    timezone: "EST (UTC-5)"
  }
]

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

export default function ContactPage() {
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
        // If response is not JSON, treat as generic error
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
        // Reset form
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
    <div className="text-white min-h-screen">
       
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-magenta-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Ready to start your next project? Let's discuss your vision and create something extraordinary together.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-magenta-500/50 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                <p className="text-gray-400 mb-4">{info.description}</p>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-magenta-400 font-medium">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Office Locations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <h2 className="text-3xl font-bold text-white mb-6">Start Your Project</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-magenta-500 focus:outline-none"
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
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-magenta-500 focus:outline-none"
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
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-magenta-500 focus:outline-none"
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
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-magenta-500 focus:outline-none"
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
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-magenta-500 focus:outline-none"
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
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-magenta-500 focus:outline-none"
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
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-magenta-500 focus:outline-none"
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
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-magenta-500 focus:outline-none"
                    placeholder="Tell us about your project, goals, and requirements..."
                  ></textarea>
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

            {/* Office Locations */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-8">Our Offices</h2>
              {officeLocations.map((office, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{office.city}</h3>
                    <span className="px-3 py-1 bg-magenta-500/20 text-magenta-400 text-sm rounded-full">
                      {office.country}
                    </span>
                  </div>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-magenta-400 mr-3 mt-0.5" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-magenta-400 mr-3" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-magenta-400 mr-3" />
                      <span>{office.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-magenta-400 mr-3" />
                      <span>{office.timezone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-magenta-400 mb-2">50+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-magenta-400 mb-2">50+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-magenta-400 mb-2">5+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-magenta-400 mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on complexity and scope. A simple mobile app might take 8-12 weeks, while complex enterprise solutions can take 6-12 months. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you provide ongoing support and maintenance?",
                answer: "Yes, we offer comprehensive support and maintenance packages. This includes bug fixes, updates, security patches, and feature enhancements to ensure your project continues to perform optimally."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "We work with a wide range of technologies including React, React Native, Flutter, Unity, Unreal Engine, Node.js, Python, AWS, and many more. We choose the best technology stack for your specific project requirements."
              },
              {
                question: "How do you handle project communication?",
                answer: "We maintain transparent communication throughout the project with regular updates, progress reports, and milestone reviews. We use modern collaboration tools and schedule regular check-ins to keep you informed."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 