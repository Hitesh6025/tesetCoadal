"use client"

import AnimatedBackground from "../../components/AnimatedBackground"
import { useRouter } from "next/navigation";
import { Database, Server, Shield, Zap, Cloud, Code, ArrowRight, CheckCircle, Lock, Cpu, Network, Layers } from "lucide-react"

const features = [
  "RESTful API Development",
  "GraphQL Implementation",
  "Database Design & Optimization",
  "Microservices Architecture",
  "Cloud Integration",
  "Security Implementation",
  "Performance Optimization",
  "Third-party Integrations"
]

const technologies = [
  { name: "Node.js", category: "Runtime", icon: "🟢" },
  { name: "Python", category: "Language", icon: "🐍" },
  { name: "Java", category: "Language", icon: "☕" },
  { name: "Express.js", category: "Framework", icon: "🚀" },
  { name: "Django", category: "Framework", icon: "🎯" },
  { name: "PostgreSQL", category: "Database", icon: "🐘" },
  { name: "MongoDB", category: "Database", icon: "🍃" },
  { name: "Docker", category: "DevOps", icon: "🐳" }
]

const services = [
  {
    title: "API Development",
    description: "Build robust, scalable APIs that power your applications with RESTful and GraphQL implementations.",
    icon: Network
  },
  {
    title: "Database Architecture",
    description: "Design and optimize databases for maximum performance, scalability, and data integrity.",
    icon: Database
  },
  {
    title: "Cloud Solutions",
    description: "Deploy and manage your backend infrastructure on AWS, Google Cloud, or Azure platforms.",
    icon: Cloud
  },
  {
    title: "Security & Authentication",
    description: "Implement enterprise-grade security measures, authentication, and authorization systems.",
    icon: Shield
  }
]

const processSteps = [
  {
    step: "01",
    title: "Requirements Analysis",
    description: "We analyze your business requirements and design a scalable backend architecture.",
    icon: Layers
  },
  {
    step: "02",
    title: "Database Design",
    description: "Create optimized database schemas and design efficient data models.",
    icon: Database
  },
  {
    step: "03",
    title: "API Development",
    description: "Build secure, well-documented APIs with proper error handling and validation.",
    icon: Code
  },
  {
    step: "04",
    title: "Testing & Deployment",
    description: "Comprehensive testing and deployment to production with monitoring setup.",
    icon: Server
  }
]

const benefits = [
  "High-performance server architecture",
  "Scalable database solutions",
  "Secure API endpoints",
  "Real-time data processing",
  "Automated testing & CI/CD",
  "Cloud-native deployments"
]

const architectureFeatures = [
  {
    title: "Microservices",
    description: "Scalable, maintainable service architecture",
    icon: Cpu
  },
  {
    title: "Load Balancing",
    description: "Distribute traffic for optimal performance",
    icon: Network
  },
  {
    title: "Caching Strategy",
    description: "Redis and CDN integration for speed",
    icon: Zap
  },
  {
    title: "Data Security",
    description: "Encryption and secure data handling",
    icon: Lock
  }
]

export default function BackendDevelopmentPage() {
  const router = useRouter();
  return (
    <div className="text-white overflow-hidden">
      <AnimatedBackground />
       
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Backend Development
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Power your applications with robust, scalable backend solutions. 
                  We build secure, high-performance server-side applications that handle 
                  your business logic, data management, and integrations seamlessly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105" onClick={() => router.push('/contact')}>
                    Build Your Backend
                  </button>
                  {/* <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                    See Case Studies
                  </button> */}
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-blue-600/20 rounded-2xl p-8 border border-gray-800">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Server className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Scalable</h3>
                    <p className="text-gray-400 text-sm">High Traffic</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Database className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Robust</h3>
                    <p className="text-gray-400 text-sm">Data Management</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Secure</h3>
                    <p className="text-gray-400 text-sm">Enterprise Grade</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Fast</h3>
                    <p className="text-gray-400 text-sm">Optimized APIs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Our Backend Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive backend development services to power your digital products
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-green-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Modern Architecture Patterns
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We implement industry-standard architecture patterns for maximum scalability and maintainability
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {architectureFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Backend Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use proven technologies and frameworks to build reliable, scalable backend systems
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-green-500/50 transition-all duration-300">
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{tech.name}</h3>
                  <p className="text-sm text-gray-400">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach to backend development that ensures quality and scalability
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-green-400 mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Why Choose Our Backend Development
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  We build backend systems that grow with your business and handle any scale
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-green-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-white">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Build Your Backend?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create a powerful backend infrastructure that scales with your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105" onClick={() => router.push('/contact')}>
                Get Free Consultation
              </button>
              {/* <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                Technical Consultation
              </button> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
