"use client"

import AnimatedBackground from "../../components/AnimatedBackground"
import { SmoothCard, SmoothButton } from "../../components/SmoothAnimations"
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, AnimatedSection, AnimatedDiv, AnimatedH2, AnimatedP } from "../../hooks/useScrollAnimation"
import { Smartphone, Apple, Zap, Shield, Users, ArrowRight, CheckCircle, Code, Layers, Star, Globe, Award } from "lucide-react"
import { Fragment } from "react"

const features = [
  "Native iOS Development (Swift/Objective-C)",
  "iOS UI/UX Design",
  "Core Data & CloudKit Integration",
  "Push Notifications",
  "In-App Purchases",
  "App Store Optimization",
  "iOS Security Best Practices",
  "Performance Optimization"
]

const technologies = [
  { name: "Swift", category: "Language", icon: "🚀" },
  { name: "Objective-C", category: "Language", icon: "⚡" },
  { name: "Xcode", category: "IDE", icon: "🛠️" },
  { name: "UIKit", category: "Framework", icon: "📱" },
  { name: "SwiftUI", category: "Framework", icon: "✨" },
  { name: "Core Data", category: "Database", icon: "💾" },
  { name: "CloudKit", category: "Cloud", icon: "☁️" },
  { name: "TestFlight", category: "Testing", icon: "🧪" }
]

const services = [
  {
    title: "Custom iOS Apps",
    description: "Build native iOS applications tailored to your business needs with cutting-edge Swift and SwiftUI.",
    icon: Apple
  },
  {
    title: "iOS UI/UX Design",
    description: "Create stunning, intuitive interfaces that follow Apple's Human Interface Guidelines.",
    icon: Layers
  },
  {
    title: "App Store Deployment",
    description: "Complete App Store submission process with optimization for maximum visibility and downloads.",
    icon: Globe
  },
  {
    title: "Performance Optimization",
    description: "Ensure your app runs smoothly with advanced optimization techniques and memory management.",
    icon: Zap
  }
]

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements and create a comprehensive iOS development strategy.",
    icon: Layers
  },
  {
    step: "02",
    title: "UI/UX Design",
    description: "Design beautiful interfaces that align with Apple's design principles and your brand.",
    icon: Code
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Build your app using Swift and conduct thorough testing on various iOS devices.",
    icon: Shield
  },
  {
    step: "04",
    title: "App Store Launch",
    description: "Deploy your app to the App Store with optimization for maximum discoverability.",
    icon: Star
  }
]

const benefits = [
  "Native iOS performance and user experience",
  "Seamless integration with iOS ecosystem",
  "Access to latest iOS features and APIs",
  "App Store optimization included",
  "Ongoing maintenance and support",
  "Expert Swift and Objective-C developers"
]

const stats = [
  { number: "10+", label: "iOS Apps Launched", icon: Apple },
  { number: "4.8/5", label: "Average App Rating", icon: Star },
  { number: "1M+", label: "Combined Downloads", icon: Users },
  { number: "99%", label: "App Store Approval", icon: Award }
]

export default function iOSDevelopmentPage() {
  const { ref: heroRef, controls: heroControls } = useScrollAnimation(0.1, true)
  const { ref: servicesRef, controls: servicesControls } = useScrollAnimation(0.1, true)
  const { ref: techRef, controls: techControls } = useScrollAnimation(0.1, true)
  const { ref: processRef, controls: processControls } = useScrollAnimation(0.1, true)
  const { ref: featuresRef, controls: featuresControls } = useScrollAnimation(0.1, true)
  const { ref: statsRef, controls: statsControls } = useScrollAnimation(0.1, true)
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
                  <Apple className="h-12 w-12 text-blue-400 mr-4" />
                  <span className="text-blue-400 font-semibold text-lg">iOS Development</span>
                </div>
                <AnimatedH2 
                  variants={fadeInUp}
                  className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                >
                  iOS App Development
                </AnimatedH2>
                <AnimatedP 
                  variants={fadeInUp}
                  className="text-xl text-gray-300 mb-8 leading-relaxed"
                >
                  Create exceptional iOS applications that delight users and drive business growth. Our expert team builds native iOS apps using Swift and the latest Apple technologies.
                </AnimatedP>
                <AnimatedDiv variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <a href="/contact" className="block">
                    <SmoothButton className="px-8 py-4 text-lg flex items-center">
                      <span>Start iOS Project</span>
                      <ArrowRight className="ml-2 h-5 w-5 inline-block align-middle" />
                    </SmoothButton>
                  </a>
                  {/* <SmoothButton variant="secondary" className="px-8 py-4 text-lg">
                    View iOS Portfolio
                  </SmoothButton> */}
                </AnimatedDiv>
              </AnimatedDiv>
              <AnimatedDiv variants={fadeInRight} className="relative">
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <Apple className="h-8 w-8 text-blue-400" />
                        <span className="text-lg font-semibold">Native iOS Performance</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Smartphone className="h-8 w-8 text-purple-400" />
                        <span className="text-lg font-semibold">Swift & SwiftUI</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Zap className="h-8 w-8 text-cyan-400" />
                        <span className="text-lg font-semibold">App Store Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
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
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <AnimatedDiv key={index} variants={fadeInUp} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                Our iOS Development Services
              </AnimatedH2>
              <AnimatedP 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Comprehensive iOS development services to bring your app idea to life on the App Store
              </AnimatedP>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <SmoothCard key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
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
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <AnimatedH2 
                variants={fadeInUp}
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                iOS Technologies We Use
              </AnimatedH2>
              <AnimatedP 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                We leverage the latest iOS technologies and frameworks to build exceptional apps
              </AnimatedP>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <SmoothCard key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{tech.name}</h3>
                  <p className="text-sm text-gray-400">{tech.category}</p>
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
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <AnimatedH2 
                variants={fadeInUp}
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                Our iOS Development Process
              </AnimatedH2>
              <AnimatedP 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                A proven methodology to deliver successful iOS applications
              </AnimatedP>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <AnimatedDiv key={index} variants={fadeInUp} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-blue-400 mb-2">{step.step}</div>
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
                  className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                  Why Choose Our iOS Development
                </AnimatedH2>
                <AnimatedP 
                  variants={fadeInUp}
                  className="text-xl text-gray-300 mb-8"
                >
                  We deliver premium iOS applications that stand out in the App Store and provide exceptional user experiences
                </AnimatedP>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <AnimatedDiv key={index} variants={fadeInUp} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </AnimatedDiv>
                  ))}
                </div>
              </AnimatedDiv>
              <AnimatedDiv variants={fadeInRight} className="space-y-4">
                {features.map((feature, index) => (
                  <AnimatedDiv key={index} variants={fadeInUp} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-400" />
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
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedH2 
              variants={fadeInUp}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Ready to Build Your iOS App?
            </AnimatedH2>
            <AnimatedP 
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-8"
            >
              Let's bring your iOS app idea to life and launch it successfully on the App Store
            </AnimatedP>
            <AnimatedDiv variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <SmoothButton className="px-8 py-4">
                <a href="/contact" className="block w-full h-full">Get Free iOS Consultation</a>
              </SmoothButton>
              {/* <SmoothButton variant="secondary" className="px-8 py-4">
                View iOS Portfolio
              </SmoothButton> */}
            </AnimatedDiv>
          </div>
        </AnimatedSection>
      </div>
    </div>
    </Fragment>
  )
}
