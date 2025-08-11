import { Code, Database, Globe, Zap, Shield, Users, ArrowRight, CheckCircle } from "lucide-react"

const features = [
  "React, Vue, Angular Frontend Development",
  "Node.js, Python, Java Backend Development",
  "RESTful APIs and GraphQL",
  "Database Design and Optimization",
  "Cloud Deployment and DevOps",
  "Performance Optimization",
  "Security Implementation",
  "Scalable Architecture Design"
]

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Java", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "GraphQL", category: "API" }
]

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements and create a comprehensive project plan with architecture design."
  },
  {
    step: "02",
    title: "Development",
    description: "Our team builds your application using modern technologies and best practices."
  },
  {
    step: "03",
    title: "Testing & QA",
    description: "Rigorous testing ensures your application is bug-free and performs optimally."
  },
  {
    step: "04",
    title: "Deployment",
    description: "We deploy your application to production with monitoring and support."
  }
]

export default function FullStackPage() {
  return (
    <div className="bg-black text-white min-h-screen">
       
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-magenta-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Full Stack Development
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Complete web solutions from frontend to backend. We build scalable, high-performance applications 
                that drive business growth and deliver exceptional user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                  Get Free Quote
                </button>
                <button className="border border-magenta-500 text-magenta-400 hover:bg-magenta-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-magenta-500/20 to-purple-600/20 rounded-2xl p-8 border border-gray-800">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Frontend</h3>
                  <p className="text-gray-400 text-sm">Modern UI/UX</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Database className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Backend</h3>
                  <p className="text-gray-400 text-sm">Robust APIs</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Deployment</h3>
                  <p className="text-gray-400 text-sm">Cloud Ready</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Security</h3>
                  <p className="text-gray-400 text-sm">Enterprise Grade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What We Deliver</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive full stack solutions that cover every aspect of modern web development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-magenta-500/50 transition-all duration-300">
                <CheckCircle className="h-8 w-8 text-magenta-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Technologies We Use</h2>
            <p className="text-xl text-gray-300">
              Cutting-edge technologies for building modern web applications
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-magenta-500/50 transition-all duration-300 text-center">
                <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                <span className="text-sm text-magenta-400">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Development Process</h2>
            <p className="text-xl text-gray-300">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-magenta-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-magenta-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Full Stack Application?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project requirements and create a custom solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Start Your Project
            </button>
            <button className="border border-magenta-500 text-magenta-400 hover:bg-magenta-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 