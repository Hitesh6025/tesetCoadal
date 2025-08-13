"use client"

import AnimatedBackground from "../../components/AnimatedBackground"
import { useRouter } from "next/navigation";
import { Code, Database, Globe, Zap, Shield, Users, ArrowRight, CheckCircle, Layers, Server, Monitor, Cloud } from "lucide-react"

const features = [
  "Complete Frontend & Backend Solutions",
  "Database Design & Integration",
  "API Development & Integration",
  "User Authentication & Authorization",
  "Real-time Features & WebSockets",
  "Payment Gateway Integration",
  "Cloud Deployment & DevOps",
  "Performance Optimization"
]

const technologies = [
  { name: "React", category: "Frontend", icon: "⚛️" },
  { name: "Next.js", category: "Framework", icon: "⚫" },
  { name: "Node.js", category: "Backend", icon: "🟢" },
  { name: "TypeScript", category: "Language", icon: "🔷" },
  { name: "PostgreSQL", category: "Database", icon: "🐘" },
  { name: "MongoDB", category: "Database", icon: "🍃" },
  { name: "AWS", category: "Cloud", icon: "☁️" },
  { name: "Docker", category: "DevOps", icon: "🐳" }
]

const services = [
  {
    title: "Complete Web Applications",
    description: "End-to-end web application development from database design to user interface implementation.",
    icon: Globe
  },
  {
    title: "API Development & Integration",
    description: "Build and integrate RESTful APIs and GraphQL endpoints with your frontend applications.",
    icon: Code
  },
  {
    title: "Database Architecture",
    description: "Design scalable database schemas and implement efficient data access layers.",
    icon: Database
  },
  {
    title: "Cloud Deployment",
    description: "Deploy and manage your full-stack applications on AWS, Google Cloud, or Azure platforms.",
    icon: Cloud
  }
]

const processSteps = [
  {
    step: "01",
    title: "Project Planning",
    description: "We analyze requirements and create a comprehensive architecture plan for your full-stack application.",
    icon: Layers
  },
  {
    step: "02",
    title: "Backend Development",
    description: "Build robust APIs, database schemas, and server-side logic with security best practices.",
    icon: Server
  },
  {
    step: "03",
    title: "Frontend Development",
    description: "Create responsive, interactive user interfaces that seamlessly integrate with the backend.",
    icon: Monitor
  },
  {
    step: "04",
    title: "Integration & Deployment",
    description: "Integrate all components, test thoroughly, and deploy to production with monitoring.",
    icon: Cloud
  }
]

const benefits = [
  "Single team for entire project",
  "Consistent technology stack",
  "Seamless frontend-backend integration",
  "Faster development cycles",
  "Cost-effective solution",
  "Unified project management"
]

const applicationTypes = [
  {
    title: "E-commerce Platforms",
    description: "Complete online stores with payment processing, inventory management, and admin dashboards.",
    features: ["Shopping cart functionality", "Payment gateway integration", "Order management", "Admin panel"]
  },
  {
    title: "SaaS Applications",
    description: "Software-as-a-Service platforms with user management, subscriptions, and multi-tenancy.",
    features: ["User authentication", "Subscription billing", "Multi-tenant architecture", "Dashboard analytics"]
  },
  {
    title: "Social Platforms",
    description: "Social networking applications with real-time messaging, feeds, and user interactions.",
    features: ["Real-time messaging", "News feeds", "User profiles", "Notification systems"]
  },
  {
    title: "Business Applications",
    description: "Custom business solutions including CRM, ERP, and workflow management systems.",
    features: ["Custom workflows", "Reporting dashboards", "Data analytics", "Integration APIs"]
  }
]

const techStack = {
  frontend: ["React", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "Python", "Java", "Express.js", "Django", "Spring Boot"],
  database: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"],
  cloud: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "CI/CD"]
}

export default function FullStackDevelopmentPage() {
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
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  Full Stack Development
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Complete web solutions from frontend to backend. We build scalable, 
                  high-performance applications that deliver exceptional user experiences 
                  while handling complex business logic seamlessly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105" onClick={() => router.push('/contact')}>
                    Start Your Project
                  </button>
                  {/* <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                    View Our Work
                  </button> */}
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl p-8 border border-gray-800">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Monitor className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Frontend</h3>
                    <p className="text-gray-400 text-sm">Modern UI/UX</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Server className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Backend</h3>
                    <p className="text-gray-400 text-sm">Robust APIs</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Database className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Database</h3>
                    <p className="text-gray-400 text-sm">Optimized Data</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Cloud className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Cloud</h3>
                    <p className="text-gray-400 text-sm">Scalable Deploy</p>
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
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Full Stack Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive web development services covering every aspect of your application
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Types */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Types of Applications We Build
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From simple websites to complex enterprise applications, we deliver solutions that scale
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {applicationTypes.map((app, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">{app.title}</h3>
                  <p className="text-gray-300 mb-6">{app.description}</p>
                  <div className="space-y-2">
                    {app.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use modern, proven technologies to build reliable and scalable applications
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(techStack).map(([category, techs]) => (
                <div key={category} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4 capitalize">
                    {category === 'frontend' ? 'Frontend' : category === 'backend' ? 'Backend' : category === 'database' ? 'Database' : 'Cloud & DevOps'}
                  </h3>
                  <div className="space-y-2">
                    {techs.map((tech, index) => (
                      <div key={index} className="text-gray-300 text-sm">{tech}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A structured approach to full-stack development that ensures quality and efficiency
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-purple-400 mb-2">{step.step}</div>
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
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Why Choose Full Stack Development
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Get a complete solution from one team with consistent quality and faster delivery
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-400" />
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
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Build Your Full Stack Application?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create a complete web solution that grows with your business and delivers exceptional results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105" onClick={() => router.push('/contact')}>
                Get Free Consultation
              </button>
              {/* <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                Schedule Consultation
              </button> */}
            </div>
          </div>
        </section>
      </div>
      
    </div>
  )
}
