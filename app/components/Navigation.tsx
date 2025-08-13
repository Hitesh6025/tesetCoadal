"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Gamepad2, ChevronDown, Smartphone, Globe, Code, Palette, BarChart3, Cloud } from "lucide-react"
import { gsap } from "gsap"
import { motion, AnimatePresence } from "framer-motion"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover"

const navItems = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Hire Developer", href: "/hire-developer" },
  { name: "Blog", href: "/blog" },
  // { name: "Contact", href: "/contact" }, 
]

// Animation variants for dropdown
const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.2,
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.05
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.2,
    }
  }
}

const categoryVariants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1
    }
  }
}

const linkVariants = {
  hidden: {
    opacity: 0,
    x: -10
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    }
  },
  hover: {
    x: 5,
    transition: {
      duration: 0.2,
    }
  }
}

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
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
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

  // Focus management for mobile menu
  useEffect(() => {
    if (isMenuOpen && mobileMenuRef.current) {
      // Focus the mobile menu container when it opens
      mobileMenuRef.current.focus()
      // Prevent background scrolling when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      // Re-enable background scrolling when menu is closed
      document.body.style.overflow = 'unset'
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 nav-item">
            <div className="w-24 h-24 flex items-center justify-center">
              <img src="/coadal.svg" alt="Coadal Logo" className="h-20 w-20" />
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <button className="nav-item text-gray-300 hover:text-magenta-400 transition-colors duration-300 font-medium flex items-center">
                      {item.name}
                      <motion.div
                        animate={{ rotate: isServicesDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-4 w-4 ml-1" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {isServicesDropdownOpen && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-full left-0 mt-2 w-[600px] bg-black/95 backdrop-blur-md border border-gray-800 rounded-xl shadow-2xl overflow-hidden"
                        >
                          <div className="p-6">
                            <motion.div
                              variants={categoryVariants}
                              initial="hidden"
                              animate="visible"
                              className="grid grid-cols-3 gap-8"
                            >
                              {/* Mobile App Development */}
                              <motion.div
                                variants={categoryVariants}
                                className="space-y-6"
                                onMouseEnter={() => setHoveredCategory("mobile")}
                                onMouseLeave={() => setHoveredCategory(null)}
                              >
                                <div className="space-y-3">
                                  <div className="flex items-center mb-3">
                                    <motion.div
                                      whileHover={{ scale: 1.1, rotate: 5 }}
                                      className="w-8 h-8 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center mr-3"
                                    >
                                      <Smartphone className="h-4 w-4 text-white" />
                                    </motion.div>
                                    <h3 className="text-sm font-semibold text-white">Mobile App Development</h3>
                                  </div>
                                  <div className="space-y-1 ml-11">
                                    <motion.div variants={linkVariants} whileHover="hover">
                                      <Link href="/services/ios-development" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                        iOS App Development
                                      </Link>
                                    </motion.div>
                                    <motion.div variants={linkVariants} whileHover="hover">
                                      <Link href="/services/android-development" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                        Android App Development
                                      </Link>
                                    </motion.div>
                                    <motion.div variants={linkVariants} whileHover="hover">
                                      <Link href="/services/react-native" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                        React Native Development
                                      </Link>
                                    </motion.div>
                                    <motion.div variants={linkVariants} whileHover="hover">
                                      <Link href="/services/flutter" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                        Flutter Development
                                      </Link>
                                    </motion.div>
                                  </div>
                                </div>
                              </motion.div>
                              
                              {/* Web Development */}
                              <motion.div
                                variants={categoryVariants}
                                className="space-y-6"
                                onMouseEnter={() => setHoveredCategory("web")}
                                onMouseLeave={() => setHoveredCategory(null)}
                              >
                                <div className="space-y-3">
                                  <div className="flex items-center mb-3">
                                    <motion.div
                                      whileHover={{ scale: 1.1, rotate: 5 }}
                                      className="w-8 h-8 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center mr-3"
                                    >
                                      <Globe className="h-4 w-4 text-white" />
                                    </motion.div>
                                    <h3 className="text-sm font-semibold text-white">Web Development</h3>
                                  </div>
                                  <div className="space-y-1 ml-11">
                                    <motion.div variants={linkVariants} whileHover="hover">
                                      <Link href="/services/frontend-development" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                        Frontend Development
                                      </Link>
                                    </motion.div>
                                    <motion.div variants={linkVariants} whileHover="hover">
                                      <Link href="/services/backend-development" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                        Backend Development
                                      </Link>
                                    </motion.div>
                                    <motion.div variants={linkVariants} whileHover="hover">
                                      <Link href="/services/fullstack-development" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                        Full Stack Development
                                      </Link>
                                    </motion.div>
                                    <motion.div variants={linkVariants} whileHover="hover">
                                      <Link href="/services/ecommerce-development" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                        E-commerce Development
                                      </Link>
                                    </motion.div>
                                  </div>
                                </div>
                              </motion.div>
                              
                              {/* Game Development */}
                              <motion.div
                                variants={categoryVariants}
                                className="space-y-6"
                                onMouseEnter={() => setHoveredCategory("game")}
                                onMouseLeave={() => setHoveredCategory(null)}
                              >
                                <div className="space-y-3">
                                  <div className="flex items-center mb-3">
                                    <motion.div
                                      whileHover={{ scale: 1.1, rotate: 5 }}
                                      className="w-8 h-8 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center mr-3"
                                    >
                                      <Gamepad2 className="h-4 w-4 text-white" />
                                    </motion.div>
                                    <h3 className="text-sm font-semibold text-white">Game Development</h3>
                                  </div>
                                  <div className="space-y-1 ml-11">
                                    <motion.div variants={linkVariants} whileHover="hover">
                                      <Link href="/services/game-development/poker-game-development" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                        Poker Game Development
                                      </Link>
                                    </motion.div>
                                    <motion.div variants={linkVariants} whileHover="hover">
                                      <Link href="/services/game-development/casino-game-development" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                        Casino Game Development
                                      </Link>
                                    </motion.div>
                                    <motion.div variants={linkVariants} whileHover="hover">
                                      <Link href="/services/game-development/mobile-game-development" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                        Mobile Game Development
                                      </Link>
                                    </motion.div>
                                    <motion.div variants={linkVariants} whileHover="hover">
                                      <Link href="/services/game-development/browser-game-development" className="block text-sm text-gray-300 hover:text-magenta-400 transition-colors py-1">
                                        Browser Game Development
                                      </Link>
                                    </motion.div>
                                  </div>
                                </div>
                              </motion.div>
                            </motion.div>
                            
                            {/* Bottom CTA with animation */}
                            <motion.div
                              variants={linkVariants}
                              className="mt-6 pt-4 border-t border-gray-800"
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="text-white text-sm font-semibold mb-1">Ready to get started?</h4>
                                  <p className="text-gray-400 text-xs">Let's discuss your project requirements</p>
                                </div>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                  <Link
                                    href="/contact"
                                    className="bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
                                  >
                                    Get In Touch
                                  </Link>
                                </motion.div>
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
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
            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="nav-item bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Contact
              </motion.button>
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-magenta-400 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-20 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800 max-h-[calc(100vh-5rem)] overflow-y-auto z-40"
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#9333ea #1f2937' }}
            tabIndex={-1}
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        className="flex w-full text-left py-3 px-2 text-gray-300 hover:text-magenta-400 hover:bg-gray-800/50 rounded-lg transition-all items-center justify-between"
                      >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isServicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 mt-2 space-y-4 bg-gray-900/50 rounded-lg p-4"
                        >
                          {/* Mobile App Development */}
                          <div>
                            <div className="flex items-center mb-3">
                              <Smartphone className="h-4 w-4 text-magenta-400 mr-2" />
                              <span className="text-sm font-medium text-white">Mobile App Development</span>
                            </div>
                            <div className="space-y-2">
                              <Link href="/services/ios-development" className="block py-2 pl-6 text-sm text-gray-300 hover:text-magenta-400 hover:bg-gray-800/30 rounded transition-all" onClick={() => setIsMenuOpen(false)}>
                                iOS App Development
                              </Link>
                              <Link href="/services/android-development" className="block py-2 pl-6 text-sm text-gray-300 hover:text-magenta-400 hover:bg-gray-800/30 rounded transition-all" onClick={() => setIsMenuOpen(false)}>
                                Android App Development
                              </Link>
                              <Link href="/services/react-native" className="block py-2 pl-6 text-sm text-gray-300 hover:text-magenta-400 hover:bg-gray-800/30 rounded transition-all" onClick={() => setIsMenuOpen(false)}>
                                React Native Development
                              </Link>
                              <Link href="/services/flutter" className="block py-2 pl-6 text-sm text-gray-300 hover:text-magenta-400 hover:bg-gray-800/30 rounded transition-all" onClick={() => setIsMenuOpen(false)}>
                                Flutter Development
                              </Link>
                            </div>
                          </div>

                          {/* Web Development */}
                          <div>
                            <div className="flex items-center mb-3">
                              <Globe className="h-4 w-4 text-magenta-400 mr-2" />
                              <span className="text-sm font-medium text-white">Web Development</span>
                            </div>
                            <div className="space-y-2">
                              <Link href="/services/frontend-development" className="block py-2 pl-6 text-sm text-gray-300 hover:text-magenta-400 hover:bg-gray-800/30 rounded transition-all" onClick={() => setIsMenuOpen(false)}>
                                Frontend Development
                              </Link>
                              <Link href="/services/backend-development" className="block py-2 pl-6 text-sm text-gray-300 hover:text-magenta-400 hover:bg-gray-800/30 rounded transition-all" onClick={() => setIsMenuOpen(false)}>
                                Backend Development
                              </Link>
                              <Link href="/services/fullstack-development" className="block py-2 pl-6 text-sm text-gray-300 hover:text-magenta-400 hover:bg-gray-800/30 rounded transition-all" onClick={() => setIsMenuOpen(false)}>
                                Full Stack Development
                              </Link>
                              <Link href="/services/ecommerce-development" className="block py-2 pl-6 text-sm text-gray-300 hover:text-magenta-400 hover:bg-gray-800/30 rounded transition-all" onClick={() => setIsMenuOpen(false)}>
                                E-commerce Development
                              </Link>
                            </div>
                          </div>

                          {/* Game Development */}
                          <div>
                            <div className="flex items-center mb-3">
                              <Gamepad2 className="h-4 w-4 text-magenta-400 mr-2" />
                              <span className="text-sm font-medium text-white">Game Development</span>
                            </div>
                            <div className="space-y-2">
                              <Link href="/services/poker-game-development" className="block py-2 pl-6 text-sm text-gray-300 hover:text-magenta-400 hover:bg-gray-800/30 rounded transition-all" onClick={() => setIsMenuOpen(false)}>
                                Poker Game Development
                              </Link>
                              <Link href="/services/casino-game-development" className="block py-2 pl-6 text-sm text-gray-300 hover:text-magenta-400 hover:bg-gray-800/30 rounded transition-all" onClick={() => setIsMenuOpen(false)}>
                                Casino Game Development
                              </Link>
                              <Link href="/services/mobile-game-development" className="block py-2 pl-6 text-sm text-gray-300 hover:text-magenta-400 hover:bg-gray-800/30 rounded transition-all" onClick={() => setIsMenuOpen(false)}>
                                Mobile Game Development
                              </Link>
                              <Link href="/services/browser-game-development" className="block py-2 pl-6 text-sm text-gray-300 hover:text-magenta-400 hover:bg-gray-800/30 rounded transition-all" onClick={() => setIsMenuOpen(false)}>
                                Browser Game Development
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block w-full text-left py-3 px-2 text-gray-300 hover:text-magenta-400 hover:bg-gray-800/50 rounded-lg transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Contact Button for Mobile */}
              <div className="pt-4 border-t border-gray-800 mt-6">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <motion.button 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
