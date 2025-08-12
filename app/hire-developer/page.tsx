"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { 
  ArrowRight, 
  Check, 
  Code, 
  Gamepad2, 
  Smartphone, 
  Globe, 
  Star,
  Clock,
  Shield,
  Users,
  DollarSign,
  Zap,
  MessageSquare,
  Calendar,
  Award,
  TrendingUp,
  ChevronDown,
  Brain,
  Target,
  Rocket,
  Database,
  Palette,
  BarChart3
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const developerTypes = [
  {
    title: "Game Developers",
    icon: Gamepad2,
    description: "Unity, Unreal Engine, C#, C++ specialists for mobile, PC, and console games",
    skills: ["Unity 3D", "Unreal Engine", "C#", "C++", "Game Physics", "AI Programming"],
    experience: "3-8+ years",
    // rate: "$45-80/hr",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Mobile Developers",
    icon: Smartphone,
    description: "iOS, Android, and cross-platform mobile app development experts",
    skills: ["Swift", "Kotlin", "React Native", "Flutter", "iOS/Android SDKs", "App Store Optimization"],
    experience: "2-7+ years",
    // rate: "$40-70/hr",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Web Developers",
    icon: Globe,
    description: "Full-stack web developers skilled in modern frameworks and technologies",
    skills: ["React", "Node.js", "Next.js", "Python", "PostgreSQL", "AWS"],
    experience: "2-6+ years", 
    // rate: "$35-65/hr",
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "UI/UX Designers",
    icon: Palette,
    description: "Creative designers who craft beautiful and intuitive user experiences",
    skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Design Systems"],
    experience: "2-5+ years",
    // rate: "$30-55/hr",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "DevOps Engineers",
    icon: Database,
    description: "Infrastructure and deployment specialists for scalable applications",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Monitoring"],
    experience: "3-8+ years",
    // rate: "$50-85/hr",
    gradient: "from-orange-500 to-red-500"
  },
  // {
  //   title: "Data Scientists",
  //   icon: BarChart3,
  //   description: "AI/ML experts for intelligent features and data-driven solutions",
  //   skills: ["Python", "TensorFlow", "Machine Learning", "Data Analysis", "Statistics"],
  //   experience: "3-7+ years",
  //   // rate: "$55-90/hr",
  //   gradient: "from-indigo-500 to-purple-500"
  // }
]

// Developer selection data
const developersBySkills = [
  { name: "Unity 3D", icon: "/Technologies/unity-small-svgrepo-com.svg", description: "Game engine specialists", experience: "3-8 years", rate: "$50-85/hr" },
  { name: "React.js", icon: "/Technologies/react-svgrepo-com.svg", description: "Frontend React developers", experience: "2-6 years", rate: "$40-70/hr" },
  { name: "Node.js", icon: "/Technologies/node-svgrepo-com.svg", description: "Backend JavaScript developers", experience: "2-7 years", rate: "$45-75/hr" },
  { name: "Python", icon: "/Technologies/python-svgrepo-com.svg", description: "Full-stack Python developers", experience: "2-8 years", rate: "$40-80/hr" },
  { name: "React Native", icon: "/Technologies/react-svgrepo-com.svg", description: "Cross-platform mobile developers", experience: "2-6 years", rate: "$45-70/hr" },
  { name: "Flutter", icon: "/Technologies/flutter-svgrepo-com.svg", description: "Google's UI toolkit specialists", experience: "2-5 years", rate: "$40-65/hr" },
  { name: "Swift", icon: "/Technologies/swift-svgrepo-com.svg", description: "iOS native app developers", experience: "3-7 years", rate: "$50-80/hr" },
  { name: "Kotlin", icon: "/Technologies/kotlin-svgrepo-com.svg", description: "Android native app developers", experience: "2-6 years", rate: "$45-75/hr" },
  { name: "AWS", icon: "/Technologies/aws-svgrepo-com.svg", description: "Cloud infrastructure experts", experience: "3-8 years", rate: "$55-90/hr" },
  { name: "Docker", icon: "/Technologies/docker-svgrepo-com.svg", description: "Containerization specialists", experience: "2-6 years", rate: "$50-80/hr" },
  { name: "TensorFlow", icon: "/Technologies/tensorflow-svgrepo-com.svg", description: "Machine learning engineers", experience: "3-7 years", rate: "$60-95/hr" },
  { name: "Vue.js", icon: "/Technologies/vue-svgrepo-com.svg", description: "Progressive framework developers", experience: "2-5 years", rate: "$40-65/hr" }
]

const developersByRoles = [
  { 
    name: "Frontend Developer", 
    icon: "🎨", 
    description: "User interface and experience specialists",
    skills: ["React", "Next.js", "Angular", "TypeScript", "CSS", "HTML"],
    experience: "2-6 years", 
    rate: "$35-65/hr" 
  },
  { 
    name: "Backend Developer", 
    icon: "⚙️", 
    description: "Server-side logic and database experts",
    skills: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB", "Redis"],
    experience: "2-7 years", 
    rate: "$40-70/hr" 
  },
  { 
    name: "Full Stack Developer", 
    icon: "🚀", 
    description: "End-to-end web application developers",
    skills: ["React", "Node.js", "Python", "AWS", "Docker", "PostgreSQL"],
    experience: "3-8 years", 
    rate: "$45-80/hr" 
  },
  { 
    name: "Mobile Developer", 
    icon: "📱", 
    description: "iOS and Android app specialists",
    skills: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "App Store"],
    experience: "2-7 years", 
    rate: "$40-75/hr" 
  },
  { 
    name: "Game Developer", 
    icon: "🎮", 
    description: "Interactive entertainment creators",
    skills: ["Unity", "Unreal Engine", "C#", "C++", "3D Modeling", "Game Physics"],
    experience: "3-8 years", 
    rate: "$50-85/hr" 
  },
  { 
  name: "Salesforce Developer", 
  icon: "☁️", 
  description: "Salesforce development, CRM",
  skills: ["Apex", "Visualforce", "Lightning Web Components", "Salesforce CRM", "SOQL", "REST APIs"],
  experience: "3-7 years", 
  rate: "$55-90/hr" 
},  { 
    name: "UI/UX Designer", 
    icon: "🎭", 
    description: "User experience and interface designers",
    skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research", "Wireframing"],
    experience: "2-6 years", 
    rate: "$35-65/hr" 
  }
]

const developersByCareer = [
  { 
    name: "Junior Developer", 
    icon: "🌱", 
    description: "Fresh talent with 1-2 years experience",
    // experience: "1-2 years",
    // rate: "$25-40/hr",
    benefits: ["Cost-effective", "Quick learners", "Fresh perspectives", "Latest tech knowledge"]
  },
  { 
    name: "Mid-Level Developer", 
    icon: "🚀", 
    description: "Experienced developers with proven track record",
    // experience: "3-5 years",
    // rate: "$40-65/hr",
    benefits: ["Balanced expertise", "Independent work", "Problem solving", "Team collaboration"]
  },
  { 
    name: "Senior Developer", 
    icon: "⭐", 
    description: "Expert developers with leadership capabilities",
    // experience: "6-10 years",
    // rate: "$65-90/hr",
    benefits: ["Architecture design", "Team leadership", "Complex problem solving", "Mentoring"]
  },
//   { 
//     name: "Technical Lead", 
//     icon: "👑", 
//     description: "Senior experts who can lead technical teams",
//     experience: "8+ years",
//     rate: "$80-120/hr",
//     benefits: ["Technical strategy", "Team management", "Project planning", "Technology decisions"]
//   },
//   { 
//     name: "Solution Architect", 
//     icon: "🏗️", 
//     description: "System design and architecture specialists",
//     experience: "10+ years",
//     rate: "$90-150/hr",
//     benefits: ["System design", "Scalability planning", "Technology selection", "Enterprise solutions"]
//   },
//   { 
//     name: "CTO/Tech Consultant", 
//     icon: "🎯", 
//     description: "Strategic technology advisors and executives",
//     experience: "12+ years",
//     rate: "$120-200/hr",
//     benefits: ["Strategic planning", "Technology roadmap", "Business alignment", "Innovation leadership"]
//   }
]

const hiringModels = [
  {
    title: "Dedicated Team",
    icon: Users,
    description: "Full-time dedicated developers working exclusively on your project",
    features: ["40 hours/week commitment", "Direct communication", "Your timezone", "Project ownership"],
    bestFor: "Long-term projects, Startups, Product development",
    // pricing: "Monthly packages starting $6,000"
  },
  {
    title: "Project-Based",
    icon: Target,
    description: "Fixed-scope projects with defined timelines and deliverables",
    features: ["Fixed budget", "Defined timeline", "Milestone payments", "Complete ownership"],
    bestFor: "MVP development, Feature additions, One-time projects",
    // pricing: "Fixed price from $5,000"
  },
  {
    title: "Hourly Consulting",
    icon: Clock,
    description: "Flexible hourly engagement for consultation and short-term work",
    features: ["No minimum hours", "Pay as you go", "Expert consultation", "Quick turnaround"],
    bestFor: "Code reviews, Consultations, Bug fixes, Quick features",
    // pricing: "Starting from $40/hour"
  }
]

const whyChooseUs = [
  {
    icon: Brain,
    title: "Pre-Vetted Talent",
    description: "Every developer goes through rigorous technical interviews and coding tests",
  },
  {
    icon: Rocket,
    title: "Quick Onboarding",
    description: "Start working with your developer within 48-72 hours of approval",
  },
  {
    icon: Shield,
    title: "Risk-Free Trial",
    description: "15-day trial period with money-back guarantee if not satisfied",
  },
  {
    icon: Clock,
    title: "Timezone Alignment",
    description: "Developers work in your preferred timezone for seamless collaboration",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden costs, clear pricing structure, and flexible payment terms",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Code reviews, testing, and quality checks on all deliverables",
  }
]

const clientTestimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, GameStudio Pro",
    image: "/placeholder.svg?width=80&height=80",
    content: "Hired 3 Unity developers from Coadal for our mobile racing game. They delivered exceptional work and helped us launch 2 months ahead of schedule.",
    rating: 5,
    project: "Mobile Racing Game"
  },
  {
    name: "Michael Rodriguez",
    role: "Founder, TechFlow Solutions",
    image: "/placeholder.svg?width=80&height=80", 
    content: "The React developers were amazing. They understood our requirements quickly and built a scalable SaaS platform that handles 100K+ users daily.",
    rating: 5,
    project: "SaaS Platform"
  },
  {
    name: "Emily Johnson",
    role: "Product Manager, FinanceApp",
    image: "/placeholder.svg?width=80&height=80",
    content: "Working with Coadal's mobile team was seamless. They built our fintech app with bank-level security and beautiful UX. Highly recommended!",
    rating: 5,
    project: "FinTech Mobile App"
  }
]

const faqs = [
  {
    question: "How quickly can I hire a developer?",
    answer: "You can start working with a pre-vetted developer within 48-72 hours. For specialized roles, it may take up to a week to find the perfect match."
  },
  {
    question: "What if I'm not satisfied with the developer?",
    answer: "We offer a 15-day risk-free trial. If you're not satisfied, we'll provide a replacement developer or full refund, no questions asked."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes! We provide 24/7 support, regular check-ins, backup developers, and project management assistance throughout your engagement."
  },
  {
    question: "Can I scale my team up or down?",
    answer: "Absolutely. You can scale your team size up or down based on project needs with just 2 weeks notice. Perfect for agile development."
  },
  {
    question: "What technologies do your developers specialize in?",
    answer: "Our developers specialize in 50+ technologies including Unity, React, Node.js, Python, Flutter, React Native, AWS, and emerging technologies."
  }
]

export default function HireDeveloper() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<'skills' | 'roles' | 'career'>('skills')

  useEffect(() => {
    // Hero section animations
    if (heroRef.current) {
      const tl = gsap.timeline({ delay: 0.3 })
      
      tl.fromTo(
        heroRef.current.querySelector('.hero-title'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
      .fromTo(
        heroRef.current.querySelector('.hero-subtitle'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        heroRef.current.querySelectorAll('.hero-stat'),
        { opacity: 0, y: 30, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        heroRef.current.querySelectorAll('.hero-cta'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" },
        "-=0.2"
      )
    }

    // Simple fade-in animations for sections
    const sections = gsap.utils.toArray('.fade-in-section')
    
    sections.forEach((section: any) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    // Card hover effects
    const cards = gsap.utils.toArray('.hover-card')
    cards.forEach((card: any) => {
      const tl = gsap.timeline({ paused: true })
      tl.to(card, { y: -8, duration: 0.3, ease: "power2.out" })

      card.addEventListener("mouseenter", () => tl.play())
      card.addEventListener("mouseleave", () => tl.reverse())
    })

  }, [])

  return (
    <div className="text-white min-h-screen">
       
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto text-center mt-30">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-magenta-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Hire Elite Developers
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Build your dream team with pre-vetted developers, designers, and engineers. 
            From game development to enterprise solutions, we have the talent you need.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
            <div className="hero-stat text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">20+</div>
              <div className="text-gray-400">Expert Developers</div>
            </div>
            <div className="hero-stat text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">48hrs</div>
              <div className="text-gray-400">Average Hiring Time</div>
            </div>
            <div className="hero-stat text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">99%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            {/* <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">15 Day</div>
              <div className="text-gray-400">Risk-Free Trial</div>
            </div> */}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <a 
              href="/contact"
              className="hero-cta bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Users className="h-5 w-5" />
              <span>Hire Developers Now</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            {/* <button className="border-2 border-purple-500 hover:bg-purple-500/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Schedule Consultation</span>
            </button> */}
          </div>
        </div>
      </section>

      {/* Developer Selection Tabs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8  fade-in-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Hire Coadal Developers
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Find the perfect developer for your project based on different criteria
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-black border border-gray-800 rounded-xl p-2 flex">
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'skills'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Based on Skills
              </button>
              <button
                onClick={() => setActiveTab('roles')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'roles'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Based on Roles
              </button>
              <button
                onClick={() => setActiveTab('career')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'career'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Based on Career Trajectory
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
                {developersBySkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="hover-card bg-black border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 text-center"
                  >
                    <div className="mb-4 flex justify-center">
  <img src={skill.icon} alt={skill.name + ' logo'} className="h-12 w-12 object-contain" />
</div>
                    <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
                    <div className="space-y-2 text-sm">
                      {/* <div>
                        <span className="text-gray-400">Experience: </span>
                        <span className="text-white">{skill.experience}</span>
                      </div> */}
                      {/* <div>
                        <span className="text-gray-400">Rate: </span>
                        <span className="text-green-400 font-semibold">{skill.rate}</span>
                      </div> */}
                    </div>
                    <a 
                      href="/contact"
                      className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 block text-center"
                    >
                      Hire Now
                    </a>
                  </div>
                ))}
              </div>
            )}

            {/* Roles Tab */}
            {activeTab === 'roles' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                {developersByRoles.map((role, index) => (
                  <div 
                    key={index}
                    className="hover-card bg-black border border-gray-800 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center mb-6">
                      <div className="text-4xl mr-4">{role.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{role.name}</h3>
                        <p className="text-gray-400">{role.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-purple-400 font-semibold mb-2">Key Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {role.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <div>
                          <span className="text-gray-400">Experience: </span>
                          <span className="text-white">{role.experience}</span>
                        </div>
                        {/* <div>
                          <span className="text-gray-400">Rate: </span>
                          <span className="text-green-400 font-semibold">{role.rate}</span>
                        </div> */}
                      </div>
                    </div>
                    
                      <a 
                        href="/contact"
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 block text-center"
                      >
                        Hire {role.name}
                      </a>
                  </div>
                ))}
              </div>
            )}

            {/* Career Tab */}
            {activeTab === 'career' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                {developersByCareer.map((career, index) => (
                  <div 
                    key={index}
                    className="hover-card bg-black border border-gray-800 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center mb-6">
                      <div className="text-4xl mr-4">{career.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{career.name}</h3>
                        <p className="text-gray-400">{career.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-sm">
                        {/* <div>
                          <span className="text-gray-400">Experience: </span>
                          <span className="text-white">{career.experience}</span>
                        </div> */}
                        {/* <div>
                          <span className="text-gray-400">Rate: </span>
                          <span className="text-green-400 font-semibold">{career.rate}</span>
                        </div> */}
                      </div>
                      
                      <div>
                        <h4 className="text-purple-400 font-semibold mb-2">Key Benefits:</h4>
                        <ul className="space-y-1">
                          {career.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                              <Check className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                      <a 
                        href="/contact"
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 block text-center"
                      >
                        Hire {career.name}
                      </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Developer Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Choose Your Developer Type
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hire specialized developers with expertise in your technology stack and domain
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developerTypes.map((type, index) => (
              <div 
                key={index}
                className="hover-card bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${type.gradient} mb-6`}>
                  <type.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-gray-400 mb-6">{type.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <div>
                      <span className="text-gray-400">Experience: </span>
                      <span className="text-white">{type.experience}</span>
                    </div>
                    {/* <div>
                      <span className="text-gray-400">Rate: </span>
                      <span className="text-green-400 font-semibold">{type.rate}</span>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Models Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Flexible Hiring Models
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the engagement model that best fits your project requirements and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {hiringModels.map((model, index) => (
              <div 
                key={index}
                className="hover-card bg-black border border-gray-800 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg mr-4">
                    <model.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{model.title}</h3>
                </div>
                
                <p className="text-gray-400 mb-6">{model.description}</p>
                
                <div className="space-y-4 mb-6">
                  <h4 className="text-purple-400 font-semibold">Features:</h4>
                  <ul className="space-y-2">
                    {model.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-gray-800 pt-6">
                  <div className="mb-4">
                    <span className="text-gray-400 text-sm">Best for: </span>
                    <span className="text-white">{model.bestFor}</span>
                  </div>
                  <div className="text-lg font-semibold text-purple-400">
                    Contact for pricing
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Why Choose Coadal?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We make hiring developers simple, risk-free, and highly effective for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div 
                key={index}
                className="hover-card bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 text-center"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
                <p className="text-gray-400">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8  fade-in-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400">
              Success stories from companies who hired our developers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="hover-card bg-black border border-gray-800 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                
                <div className="text-sm text-purple-400">
                  Project: {testimonial.project}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 fade-in-section">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to know about hiring our developers
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="hover-card bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <ChevronDown className="h-5 w-5 text-purple-400 mr-3" />
                  {faq.question}
                </h3>
                <p className="text-gray-400 ml-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Start your project with pre-vetted developers. No risk, no hassle, just results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/contact"
              className="bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white px-12 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Rocket className="h-5 w-5" />
              <span>Start Hiring Today</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a 
              href="/contact"
              className="border-2 border-purple-500 hover:bg-purple-500/10 text-white px-12 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Talk to Our Experts</span>
            </a>
          </div>
          
          {/* <div className="mt-8 text-gray-400">
            <p>🚀 48-hour developer matching • 💯 15-day money-back guarantee • 🔒 NDA protection</p>
          </div> */}
        </div>
      </section>
    </div>
  )
}
