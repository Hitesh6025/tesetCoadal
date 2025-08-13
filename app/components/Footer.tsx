"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { 
  Gamepad2, 
  Mail, 
  Phone, 
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  ExternalLink
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!footerRef.current) return
    
    gsap.fromTo(
      footerRef.current.querySelectorAll(".footer-item"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      }
    )
  }, [])

  const services = [
    { name: "Browser Game Development", href: "/services/browser-game-development" },
    { name: "Android App Development", href: "/services/android-development" },
    { name: "E-commerce Development", href: "/services/ecommerce-development" },
    { name: "Full Stack Development", href: "/services/fullstack-development" },
  ]

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    // { name: "GitHub", icon: Github, href: "https://github.com/coadal", color: "hover:text-gray-300" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/amansharma5105?s=21", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/coadal-technology-private-limited/?viewAsMember=true", color: "hover:text-blue-500" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/coadal_technology/?hl=en", color: "hover:text-pink-400" },
  ]

  return (
    <footer 
      ref={footerRef} 
      className="bg-gradient-to-b from-black via-gray-900 to-black border-t border-gray-800 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-magenta-500/5 via-transparent to-purple-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-magenta-500/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1 footer-item">
              <Link href="/" className="flex items-center space-x-3 mb-6 group">
                <div className="w-24 h-24 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img src="/coadal.svg" alt="Coadal Logo" className="h-20 w-20" />
                </div>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Expert gaming software development services. We create epic gaming experiences across mobile, PC, and console platforms.
              </p>
              
              {/* Contact Info */}
              {/* <div className="space-y-3">
                <div className="flex items-center text-gray-400 hover:text-magenta-400 transition-colors duration-300">
                  <Mail className="h-4 w-4 mr-3 text-magenta-500" />
                  <a href="mailto:coadalhello@.com" className="text-sm">hello@coadal.com</a>
                </div>
                <div className="flex items-center text-gray-400 hover:text-magenta-400 transition-colors duration-300">
                  <Phone className="h-4 w-4 mr-3 text-magenta-500" />
                  <a href="tel:+1234567890" className="text-sm">+1 (234) 567-890</a>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="h-4 w-4 mr-3 text-magenta-500" />
                  <span className="text-sm">Global Remote Team</span>
                </div>
              </div> */}

              <div>
                <p className="text-gray-400 text-sm mb-4">Follow us on social media</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 transform`}
                        aria-label={social.name}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="footer-item">
              <h3 className="text-white font-semibold text-lg mb-6 relative">
                Services
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-magenta-500 to-purple-600" />
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      href={service.href}
                      className="text-gray-400 hover:text-magenta-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="footer-item">
              <h3 className="text-white font-semibold text-lg mb-6 relative">
                Company
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-magenta-500 to-purple-600" />
              </h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-gray-400 hover:text-magenta-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div className="footer-item">
              <h3 className="text-white font-semibold text-lg mb-6 relative">
                Contact
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-magenta-500 to-purple-600" />
              </h3>


                <div className="space-y-3">
                <div className="flex items-center text-gray-400 hover:text-magenta-400 transition-colors duration-300">
                  <Mail className="h-4 w-4 mr-3 text-magenta-500" />
                  <a href="mailto:info@coadal.com" className="text-sm">info@coadal.com</a>
                </div>
                <div className="flex items-center text-gray-400 hover:text-magenta-400 transition-colors duration-300">
                  <Phone className="h-4 w-4 mr-3 text-magenta-500" />
                  <a href="tel:+91 9549098255" className="text-sm">+91 95490 98255</a>
                </div>
                <div className="flex items-center text-gray-400">
                    <MapPin className="h-5 w-5 mr-3 text-magenta-500" />
                  <span className="text-sm">Sansthan Path, Jhalana Gram, Malviya Nagar, Jaipur, Rajasthan 302017</span>
                </div>
              </div>
              
              
              {/* Newsletter */}
              {/* <div className="mb-6">
                <p className="text-gray-400 text-sm mb-4">
                  Subscribe to our newsletter for the latest updates and gaming insights.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-l-lg text-white text-sm focus:outline-none focus:border-magenta-500 transition-colors duration-300"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white rounded-r-lg transition-all duration-300 hover:scale-105">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div> */}

              {/* Social Links */}
              {/* <div>
                <p className="text-gray-400 text-sm mb-4">Follow us on social media</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 transform`}
                        aria-label={social.name}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    )
                  })}
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <div className="items-center text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} COADAL. All rights reserved.
            </div>
            {/* <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <Link href="/privacy" className="hover:text-magenta-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-magenta-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-magenta-400 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
