"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Gamepad2, ChevronDown, Smartphone, Globe, Code, Palette, BarChart3, Cloud } from "lucide-react"
import { gsap } from "gsap"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover"

const navItems = [
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

const servicesDropdown = [
  {
    category: "Mobile App Development",
    icon: Smartphone,
    services: [
      { name: "iOS App Development", href: "/services/ios-development" },
      { name: "Android App Development", href: "/services/android-development" },
      { name: "React Native Development", href: "/services/react-native" },
      { name: "Flutter Development", href: "/services/flutter" }
    ]
  },
  {
    category: "Web Development",
    icon: Globe,
    services: [
      { name: "Frontend Development", href: "/services/frontend" },
      { name: "Backend Development", href: "/services/backend" },
      { name: "Full Stack Development", href: "/services/fullstack" },
      { name: "E-commerce Development", href: "/services/ecommerce" }
    ]
  },
  {
    category: "Game Development",
    icon: Code,
    services: [
      { name: "Mobile Games", href: "/services/mobile-games" },
      { name: "PC Games", href: "/services/pc-games" },
      { name: "Console Games", href: "/services/console-games" },
      { name: "VR/AR Games", href: "/services/vr-ar-games" }
    ]
  },
  {
    category: "UI/UX Design",
    icon: Palette,
    services: [
      { name: "User Interface Design", href: "/services/ui-design" },
      { name: "User Experience Design", href: "/services/ux-design" },
      { name: "Prototyping", href: "/services/prototyping" },
      { name: "Design Systems", href: "/services/design-systems" }
    ]
  },
  {
    category: "Digital Marketing",
    icon: BarChart3,
    services: [
      { name: "SEO Optimization", href: "/services/seo" },
      { name: "Social Media Marketing", href: "/services/social-media" },
      { name: "Content Marketing", href: "/services/content-marketing" },
      { name: "PPC Advertising", href: "/services/ppc" }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    services: [
      { name: "Cloud Migration", href: "/services/cloud-migration" },
      { name: "DevOps Implementation", href: "/services/devops" },
      { name: "Infrastructure as Code", href: "/services/iac" },
      { name: "Container Orchestration", href: "/services/kubernetes" }
    ]
  }
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    gsap.fromTo(".nav-item", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.2 })
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 nav-item">
            <div className="w-10 h-10 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Gamepad2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              COADAL
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="nav-item text-gray-300 hover:text-magenta-400 transition-colors duration-300 font-medium flex items-center">
                        {item.name}
                        <ChevronDown className="h-4 w-4 ml-1" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[600px] p-0 bg-black/95 backdrop-blur-md border border-gray-800 rounded-xl shadow-2xl" align="start">
                      <div className="p-6">
                        <div className="grid grid-cols-2 gap-8">
                          {/* Left Column */}
                          <div className="space-y-6">
                            {/* Mobile App Development */}
                            <div className="space-y-3">
                              <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                                  <Smartphone className="h-4 w-4 text-white" />
                                </div>
                                <h3 className="text-sm font-semibold text-white">Mobile App Development</h3>
                              </div>
                              <div className="space-y-1 ml-11">
                                <Link href="/services/ios-development" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                  iOS App Development
                                </Link>
                                <Link href="/services/android-development" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                  Android App Development
                                </Link>
                                <Link href="/services/react-native" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                  React Native Development
                                </Link>
                                <Link href="/services/flutter" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                  Flutter Development
                                </Link>
                              </div>
                            </div>

                            {/* UI/UX Design */}
                            <div className="space-y-3">
                              <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                                  <Palette className="h-4 w-4 text-white" />
                                </div>
                                <h3 className="text-sm font-semibold text-white">UI/UX Design</h3>
                              </div>
                              <div className="space-y-1 ml-11">
                                <Link href="/services/ui-design" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                  User Interface Design
                                </Link>
                                <Link href="/services/ux-design" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                  User Experience Design
                                </Link>
                                <Link href="/services/prototyping" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                  Prototyping
                                </Link>
                                <Link href="/services/design-systems" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                  Design Systems
                                </Link>
                              </div>
                            </div>
                          </div>

                          {/* Right Column */}
                          <div className="space-y-6">
                            {/* Web Development */}
                            <div className="space-y-3">
                              <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                                  <Globe className="h-4 w-4 text-white" />
                                </div>
                                <h3 className="text-sm font-semibold text-white">Web Development</h3>
                              </div>
                              <div className="space-y-1 ml-11">
                                <Link href="/services/frontend" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                  Frontend Development
                                </Link>
                                <Link href="/services/backend" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                  Backend Development
                                </Link>
                                <Link href="/services/fullstack" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                  Full Stack Development
                                </Link>
                                <Link href="/services/ecommerce" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                  E-commerce Development
                                </Link>
                              </div>
                            </div>

                            {/* Digital Marketing */}
                            <div className="space-y-3">
                              <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                                  <BarChart3 className="h-4 w-4 text-white" />
                                </div>
                                <h3 className="text-sm font-semibold text-white">Digital Marketing</h3>
                              </div>
                              <div className="space-y-1 ml-11">
                                <Link href="/services/seo" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                  SEO Optimization
                                </Link>
                                <Link href="/services/social-media" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                  Social Media Marketing
                                </Link>
                                <Link href="/services/content-marketing" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                  Content Marketing
                                </Link>
                                <Link href="/services/ppc" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                  PPC Advertising
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Bottom CTA */}
                        <div className="mt-6 pt-4 border-t border-gray-800">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-white text-sm font-semibold mb-1">Ready to get started?</h4>
                              <p className="text-gray-400 text-xs">Let's discuss your project requirements</p>
                            </div>
                            <Link
                              href="/contact"
                              className="bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
                            >
                              Get Free Quote
                            </Link>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                ) : (
                  <Link
                    href={item.href}
                    className="nav-item text-gray-300 hover:text-magenta-400 transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <button className="nav-item bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Start Project
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-magenta-400 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                      className="block w-full text-left py-3 text-gray-300 hover:text-magenta-400 transition-colors flex items-center justify-between"
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isServicesDropdownOpen && (
                      <div className="pl-4 border-l border-gray-700 ml-4">
                        {/* Mobile App Development */}
                        <div className="py-2">
                          <div className="flex items-center mb-2">
                            <Smartphone className="h-4 w-4 text-magenta-400 mr-2" />
                            <span className="text-sm font-medium text-gray-400">Mobile App Development</span>
                          </div>
                          <div className="space-y-1">
                            <Link href="/services/ios-development" className="block py-1 pl-6 text-sm text-gray-300 hover:text-magenta-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                              iOS App Development
                            </Link>
                            <Link href="/services/android-development" className="block py-1 pl-6 text-sm text-gray-300 hover:text-magenta-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                              Android App Development
                            </Link>
                            <Link href="/services/react-native" className="block py-1 pl-6 text-sm text-gray-300 hover:text-magenta-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                              React Native Development
                            </Link>
                            <Link href="/services/flutter" className="block py-1 pl-6 text-sm text-gray-300 hover:text-magenta-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                              Flutter Development
                            </Link>
                          </div>
                        </div>

                        {/* Web Development */}
                        <div className="py-2">
                          <div className="flex items-center mb-2">
                            <Globe className="h-4 w-4 text-magenta-400 mr-2" />
                            <span className="text-sm font-medium text-gray-400">Web Development</span>
                          </div>
                          <div className="space-y-1">
                            <Link href="/services/frontend" className="block py-1 pl-6 text-sm text-gray-300 hover:text-magenta-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                              Frontend Development
                            </Link>
                            <Link href="/services/backend" className="block py-1 pl-6 text-sm text-gray-300 hover:text-magenta-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                              Backend Development
                            </Link>
                            <Link href="/services/fullstack" className="block py-1 pl-6 text-sm text-gray-300 hover:text-magenta-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                              Full Stack Development
                            </Link>
                            <Link href="/services/ecommerce" className="block py-1 pl-6 text-sm text-gray-300 hover:text-magenta-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                              E-commerce Development
                            </Link>
                          </div>
                        </div>

                        {/* UI/UX Design */}
                        <div className="py-2">
                          <div className="flex items-center mb-2">
                            <Palette className="h-4 w-4 text-magenta-400 mr-2" />
                            <span className="text-sm font-medium text-gray-400">UI/UX Design</span>
                          </div>
                          <div className="space-y-1">
                            <Link href="/services/ui-design" className="block py-1 pl-6 text-sm text-gray-300 hover:text-magenta-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                              User Interface Design
                            </Link>
                            <Link href="/services/ux-design" className="block py-1 pl-6 text-sm text-gray-300 hover:text-magenta-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                              User Experience Design
                            </Link>
                            <Link href="/services/prototyping" className="block py-1 pl-6 text-sm text-gray-300 hover:text-magenta-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                              Prototyping
                            </Link>
                            <Link href="/services/design-systems" className="block py-1 pl-6 text-sm text-gray-300 hover:text-magenta-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                              Design Systems
                            </Link>
                          </div>
                        </div>

                        {/* Digital Marketing */}
                        <div className="py-2">
                          <div className="flex items-center mb-2">
                            <BarChart3 className="h-4 w-4 text-magenta-400 mr-2" />
                            <span className="text-sm font-medium text-gray-400">Digital Marketing</span>
                          </div>
                          <div className="space-y-1">
                            <Link href="/services/seo" className="block py-1 pl-6 text-sm text-gray-300 hover:text-magenta-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                              SEO Optimization
                            </Link>
                            <Link href="/services/social-media" className="block py-1 pl-6 text-sm text-gray-300 hover:text-magenta-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                              Social Media Marketing
                            </Link>
                            <Link href="/services/content-marketing" className="block py-1 pl-6 text-sm text-gray-300 hover:text-magenta-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                              Content Marketing
                            </Link>
                            <Link href="/services/ppc" className="block py-1 pl-6 text-sm text-gray-300 hover:text-magenta-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                              PPC Advertising
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block w-full text-left py-3 text-gray-300 hover:text-magenta-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
