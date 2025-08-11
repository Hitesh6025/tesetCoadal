import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import { Code, Smartphone, Globe, Palette, BarChart3, Cloud, Database, Zap, Shield, Users, Target, TrendingUp } from "lucide-react"

const services = [
  {
    category: "Mobile App Development",
    icon: Smartphone,
    description: "Create stunning mobile experiences across iOS and Android platforms",
    services: [
      { name: "iOS App Development", href: "/services/ios-development", description: "Native iOS apps with Swift and SwiftUI" },
      { name: "Android App Development", href: "/services/android-development", description: "Powerful Android apps with Kotlin" },
      { name: "React Native Development", href: "/services/react-native", description: "Cross-platform apps with React Native" },
      { name: "Flutter Development", href: "/services/flutter", description: "Beautiful apps with Flutter framework" }
    ]
  },
  {
    category: "Web Development",
    icon: Globe,
    description: "Build modern, responsive websites and web applications",
    services: [
      { name: "Frontend Development", href: "/services/web-development/frontend-development", description: "React, Vue, Angular development" },
      { name: "Backend Development", href: "/services/web-development/backend-development", description: "Node.js, Python, Java backends" },
      { name: "Full Stack Development", href: "/services/web-development/fullstack-development", description: "Complete web solutions" },
      { name: "E-commerce Development", href: "/services/web-development/ecommerce-development", description: "Online stores and marketplaces" }
    ]
  },
  {
    category: "Game Development",
    icon: Code,
    description: "Create immersive gaming experiences across all platforms",
    services: [
      { name: "Mobile Games", href: "/services/mobile-games", description: "iOS and Android game development" },
      { name: "PC Games", href: "/services/pc-games", description: "Windows and Mac game development" },
      { name: "Console Games", href: "/services/console-games", description: "PlayStation, Xbox, Nintendo" },
      { name: "Browser Games", href: "/services/game-development/browser-game-development", description: "Web-based games with cutting-edge browser technology" }
    ]
  },
  {
    category: "UI/UX Design",
    icon: Palette,
    description: "Create beautiful, intuitive user experiences",
    services: [
      { name: "User Interface Design", href: "/services/ui-design", description: "Modern, responsive UI design" },
      { name: "User Experience Design", href: "/services/ux-design", description: "User-centered design thinking" },
      { name: "Prototyping", href: "/services/prototyping", description: "Interactive prototypes and wireframes" },
      { name: "Design Systems", href: "/services/design-systems", description: "Scalable design frameworks" }
    ]
  },
  {
    category: "Digital Marketing",
    icon: BarChart3,
    description: "Drive growth with data-driven marketing strategies",
    services: [
      { name: "SEO Optimization", href: "/services/seo", description: "Search engine optimization" },
      { name: "Social Media Marketing", href: "/services/social-media", description: "Engaging social media campaigns" },
      { name: "Content Marketing", href: "/services/content-marketing", description: "Strategic content creation" },
      { name: "PPC Advertising", href: "/services/ppc", description: "Pay-per-click advertising campaigns" }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    description: "Scalable cloud solutions and efficient development operations",
    services: [
      { name: "Cloud Migration", href: "/services/cloud-migration", description: "AWS, Azure, Google Cloud" },
      { name: "DevOps Implementation", href: "/services/devops", description: "CI/CD pipelines and automation" },
      { name: "Infrastructure as Code", href: "/services/iac", description: "Terraform, CloudFormation" },
      { name: "Container Orchestration", href: "/services/kubernetes", description: "Kubernetes and Docker" }
    ]
  }
]

const stats = [
  { number: "150+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" }
]

export default function ServicesPage() {
  return (
    <div className="bg-black text-white min-h-screen">
       
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-magenta-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            We deliver cutting-edge solutions across mobile, web, and gaming platforms. 
            From concept to deployment, we bring your ideas to life with precision and innovation.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-magenta-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-magenta-500/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.category}</h3>
                </div>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="space-y-4">
                  {service.services.map((subService, subIndex) => (
                    <div key={subIndex} className="group">
                      <a 
                        href={subService.href}
                        className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 group-hover:border-l-4 border-l-magenta-500"
                      >
                        <div>
                          <h4 className="font-semibold text-white group-hover:text-magenta-400 transition-colors">
                            {subService.name}
                          </h4>
                          <p className="text-sm text-gray-400">{subService.description}</p>
                        </div>
                        <div className="text-magenta-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your vision and create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Get Free Consultation
            </button>
            <button className="border border-magenta-500 text-magenta-400 hover:bg-magenta-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 