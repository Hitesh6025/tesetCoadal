"use client"

import AnimatedBackground from "../../components/AnimatedBackground"
import { useRouter } from "next/navigation";
import { SmoothCard, SmoothButton } from "../../components/SmoothAnimations"
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, AnimatedSection, AnimatedDiv, AnimatedH2, AnimatedP } from "../../hooks/useScrollAnimation"
import { Smartphone, Code, Zap, Shield, Users, ArrowRight, CheckCircle, Layers, Star, Globe, Award, Cpu } from "lucide-react"
import { Fragment } from "react"

const features = [
  "Cross-platform Development (iOS & Android)",
  "React Native & Expo Framework",
  "Native Module Integration",
  "Redux & Context API State Management",
  "Firebase & REST API Integration",
  "App Store & Play Store Deployment",
  "Code Sharing & Reusability",
  "Hot Reload Development"
]

const technologies = [
  { name: "React Native", category: "Framework", icon: "⚛️" },
  { name: "Expo", category: "Platform", icon: "🚀" },
  { name: "TypeScript", category: "Language", icon: "🔷" },
  { name: "JavaScript", category: "Language", icon: "💛" },
  { name: "Redux", category: "State Management", icon: "🔄" },
  { name: "Firebase", category: "Backend", icon: "🔥" },
  { name: "React Navigation", category: "Navigation", icon: "🧭" },
  { name: "Native Base", category: "UI Library", icon: "🎨" }
]

const services = [
  {
    title: "Cross-Platform Apps",
    description: "Build once, deploy everywhere. Create apps that work seamlessly on both iOS and Android platforms.",
    icon: Smartphone
  },
  {
    title: "Native Performance",
    description: "Achieve near-native performance with optimized React Native code and native modules.",
    icon: Zap
  },
  {
    title: "Rapid Development",
    description: "Faster time-to-market with code reusability and hot reload development features.",
    icon: Code
  },
  {
    title: "Cost-Effective Solution",
    description: "Reduce development costs by maintaining a single codebase for multiple platforms.",
    icon: Globe
  }
]

const processSteps = [
  {
    step: "01",
    title: "Project Setup",
    description: "Set up React Native environment and project structure with best practices.",
    icon: Layers
  },
  {
    step: "02",
    title: "UI Development",
    description: "Create responsive and beautiful user interfaces using React Native components.",
    icon: Code
  },
  {
    step: "03",
    title: "Feature Integration",
    description: "Implement features, APIs, and native modules for enhanced functionality.",
    icon: Cpu
  },
  {
    step: "04",
    title: "Cross-Platform Deployment",
    description: "Deploy to both App Store and Google Play Store simultaneously.",
    icon: Star
  }
]

const benefits = [
  "Single codebase for iOS and Android",
  "60-80% faster development time",
  "Cost-effective cross-platform solution",
  "Near-native performance",
  "Large community and ecosystem",
  "Hot reload for rapid development"
]

const stats = [
  { number: "40+", label: "React Native Apps", icon: Code },
  { number: "80%", label: "Code Reusability", icon: Cpu },
  { number: "3M+", label: "Combined Downloads", icon: Users },
  { number: "4.6/5", label: "Average App Rating", icon: Star }
]

const platforms = [
  { name: "iOS", description: "iPhone & iPad", icon: "📱" },
  { name: "Android", description: "Phones & Tablets", icon: "🤖" },
  { name: "Web", description: "React Native Web", icon: "🌐" },
  { name: "Windows", description: "Windows Apps", icon: "🪟" },
  { name: "macOS", description: "Desktop Apps", icon: "💻" },
  { name: "tvOS", description: "Apple TV", icon: "📺" }
]

export default function ReactNativePage() {
  const { ref: heroRef, controls: heroControls } = useScrollAnimation(0.1, true)
  const router = useRouter();
  const { ref: servicesRef, controls: servicesControls } = useScrollAnimation(0.1, true)
  const { ref: techRef, controls: techControls } = useScrollAnimation(0.1, true)
  const { ref: processRef, controls: processControls } = useScrollAnimation(0.1, true)
  const { ref: featuresRef, controls: featuresControls } = useScrollAnimation(0.1, true)
  const { ref: statsRef, controls: statsControls } = useScrollAnimation(0.1, true)
  const { ref: platformsRef, controls: platformsControls } = useScrollAnimation(0.1, true)
  const { ref: ctaRef, controls: ctaControls } = useScrollAnimation(0.1, true)

  return (
    <Fragment>
    <div className="text-white overflow-hidden">
      <AnimatedBackground />
       
      
      <div className="relative z-10">
        {/* Hero Section */}
        <AnimatedSection 
          ref={heroRef}
          initial="hidden"
          animate={heroControls}
          variants={staggerContainer}
          className="pt-32 pb-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedDiv variants={fadeInLeft}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-2xl">⚛️</div>
                  </div>
                  <span className="text-cyan-400 font-semibold text-lg">React Native Development</span>
                </div>
                <AnimatedH2 
                  variants={fadeInUp}
                  className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                  React Native Development
                </AnimatedH2>
                <AnimatedP 
                  variants={fadeInUp}
                  className="text-xl text-gray-300 mb-8 leading-relaxed"
                >
                  Build powerful cross-platform mobile applications with React Native. One codebase, multiple platforms - reach both iOS and Android users efficiently and cost-effectively.
                </AnimatedP>
                <AnimatedDiv variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <SmoothButton className="px-8 py-4 text-lg" onClick={() => router.push('/contact')}>
                    Start React Native Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </SmoothButton>
                  {/* <SmoothButton variant="secondary" className="px-8 py-4 text-lg">
                    View React Native Portfolio
                  </SmoothButton> */}
                </AnimatedDiv>
              </AnimatedDiv>
              <AnimatedDiv variants={fadeInRight} className="relative">
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">⚛️</div>
                        <span className="text-lg font-semibold">React Native Framework</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Smartphone className="h-8 w-8 text-blue-400" />
                        <span className="text-lg font-semibold">Cross-Platform</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Zap className="h-8 w-8 text-purple-400" />
                        <span className="text-lg font-semibold">Fast Development</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
              </AnimatedDiv>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection 
          ref={statsRef}
          initial="hidden"
          animate={statsControls}
          variants={staggerContainer}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <AnimatedDiv key={index} variants={fadeInUp} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection 
          ref={servicesRef}
          initial="hidden"
          animate={servicesControls}
          variants={staggerContainer}
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <AnimatedH2 
                variants={fadeInUp}
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              >
                Our React Native Services
              </AnimatedH2>
              <AnimatedP 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Comprehensive React Native development services for efficient cross-platform mobile app development
              </AnimatedP>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <SmoothCard key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </SmoothCard>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Technologies Section */}
        <AnimatedSection 
          ref={techRef}
          initial="hidden"
          animate={techControls}
          variants={staggerContainer}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <AnimatedH2 
                variants={fadeInUp}
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              >
                React Native Technologies
              </AnimatedH2>
              <AnimatedP 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                We use the latest React Native ecosystem tools and libraries for optimal development experience
              </AnimatedP>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <SmoothCard key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{tech.name}</h3>
                  <p className="text-sm text-gray-400">{tech.category}</p>
                </SmoothCard>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Platforms Section */}
        <AnimatedSection 
          ref={platformsRef}
          initial="hidden"
          animate={platformsControls}
          variants={staggerContainer}
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <AnimatedH2 
                variants={fadeInUp}
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              >
                Supported Platforms
              </AnimatedH2>
              <AnimatedP 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                React Native enables us to target multiple platforms with a single codebase
              </AnimatedP>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <SmoothCard key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-4xl mb-3">{platform.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{platform.name}</h3>
                  <p className="text-sm text-gray-400">{platform.description}</p>
                </SmoothCard>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Process Section */}
        <AnimatedSection 
          ref={processRef}
          initial="hidden"
          animate={processControls}
          variants={staggerContainer}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <AnimatedH2 
                variants={fadeInUp}
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              >
                Our React Native Process
              </AnimatedH2>
              <AnimatedP 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Streamlined development process for efficient cross-platform app creation
              </AnimatedP>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <AnimatedDiv key={index} variants={fadeInUp} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Features Section */}
        <AnimatedSection 
          ref={featuresRef}
          initial="hidden"
          animate={featuresControls}
          variants={staggerContainer}
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedDiv variants={fadeInLeft}>
                <AnimatedH2 
                  variants={fadeInUp}
                  className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                >
                  Why Choose React Native
                </AnimatedH2>
                <AnimatedP 
                  variants={fadeInUp}
                  className="text-xl text-gray-300 mb-8"
                >
                  React Native offers the perfect balance between development efficiency and native performance, making it ideal for cross-platform mobile app development
                </AnimatedP>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <AnimatedDiv key={index} variants={fadeInUp} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </AnimatedDiv>
                  ))}
                </div>
              </AnimatedDiv>
              <AnimatedDiv variants={fadeInRight} className="space-y-4">
                {features.map((feature, index) => (
                  <AnimatedDiv key={index} variants={fadeInUp} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400" />
                      <span className="text-white">{feature}</span>
                    </div>
                  </AnimatedDiv>
                ))}
              </AnimatedDiv>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection 
          ref={ctaRef}
          initial="hidden"
          animate={ctaControls}
          variants={staggerContainer}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30"
        >
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedH2 
              variants={fadeInUp}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            >
              Ready for Cross-Platform Development?
            </AnimatedH2>
            <AnimatedP 
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-8"
            >
              Build once, deploy everywhere. Let's create your React Native app that works seamlessly across all platforms
            </AnimatedP>
            <AnimatedDiv variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <SmoothButton className="px-8 py-4" onClick={() => router.push('/contact')}>
                Get Free React Native Consultation
              </SmoothButton>
              {/* <SmoothButton variant="secondary" className="px-8 py-4">
                View React Native Portfolio
              </SmoothButton> */}
            </AnimatedDiv>
          </div>
        </AnimatedSection>
      </div>
    </div>
    </Fragment>
  )
}
