"use client"

import AnimatedBackground from "../../components/AnimatedBackground"
import { useRouter } from "next/navigation";
import { SmoothCard, SmoothButton } from "../../components/SmoothAnimations"
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, AnimatedSection, AnimatedDiv, AnimatedH2, AnimatedP } from "../../hooks/useScrollAnimation"
import { Smartphone, Code, Zap, Shield, Users, ArrowRight, CheckCircle, Layers, Star, Globe, Award } from "lucide-react"
import { Fragment } from "react"

const features = [
  "Native Android Development (Kotlin/Java)",
  "Material Design Implementation",
  "Google Play Services Integration",
  "Firebase Backend Integration",
  "Push Notifications & Analytics",
  "Google Play Store Optimization",
  "Android Security Best Practices",
  "Multi-device Compatibility"
]

const technologies = [
  { name: "Kotlin", category: "Language", icon: "🚀" },
  { name: "Java", category: "Language", icon: "☕" },
  { name: "Android Studio", category: "IDE", icon: "🛠️" },
  { name: "Jetpack Compose", category: "UI Framework", icon: "✨" },
  { name: "Material Design", category: "Design System", icon: "🎨" },
  { name: "Firebase", category: "Backend", icon: "🔥" },
  { name: "Google Play", category: "Distribution", icon: "📱" },
  { name: "Gradle", category: "Build Tool", icon: "⚙️" }
]

const services = [
  {
    title: "Custom Android Apps",
    description: "Build powerful native Android applications using Kotlin and the latest Android technologies.",
    icon: Code
  },
  {
    title: "Material Design",
    description: "Create beautiful, intuitive interfaces following Google's Material Design guidelines.",
    icon: Layers
  },
  {
    title: "Google Play Deployment",
    description: "Complete Google Play Store submission with optimization for maximum visibility.",
    icon: Globe
  },
  {
    title: "Performance Optimization",
    description: "Ensure optimal performance across all Android devices and versions.",
    icon: Zap
  }
]

const processSteps = [
  {
    step: "01",
    title: "Requirements Analysis",
    description: "We analyze your needs and create a comprehensive Android development strategy.",
    icon: Layers
  },
  {
    step: "02",
    title: "UI/UX Design",
    description: "Design stunning interfaces that follow Material Design principles and your brand.",
    icon: Code
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Build your app using Kotlin and test across multiple Android devices and versions.",
    icon: Shield
  },
  {
    step: "04",
    title: "Play Store Launch",
    description: "Deploy your app to Google Play Store with ASO optimization.",
    icon: Star
  }
]

const benefits = [
  "Native Android performance and features",
  "Material Design compliance",
  "Multi-device and multi-screen support",
  "Google Play Services integration",
  "Extensive Android ecosystem access",
  "Expert Kotlin and Java developers"
]

const stats = [
  { number: "25+", label: "Android Apps Built", icon: Code },
  { number: "4.8/5", label: "Average Play Store Rating", icon: Star },
  { number: "2M+", label: "Combined Downloads", icon: Users },
  { number: "99%", label: "Play Store Approval Rate", icon: Award }
]

const deviceSupport = [
  "Smartphones (All screen sizes)",
  "Tablets (7\" to 12\")",
  "Foldable devices",
  "Android TV",
  "Wear OS smartwatches",
  "Android Auto"
]

export default function AndroidDevelopmentPage() {
  const { ref: heroRef, controls: heroControls } = useScrollAnimation(0.1, true)
  const router = useRouter();
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
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-green-400 font-semibold text-lg">Android Development</span>
                </div>
                <AnimatedH2 
                  variants={fadeInUp}
                  className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                  Android App Development
                </AnimatedH2>
                <AnimatedP 
                  variants={fadeInUp}
                  className="text-xl text-gray-300 mb-8 leading-relaxed"
                >
                  Build powerful Android applications that reach billions of users worldwide. Our expert developers create native Android apps using Kotlin and cutting-edge technologies.
                </AnimatedP>
                <AnimatedDiv variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <SmoothButton className="px-8 py-4 text-lg" onClick={() => router.push('/contact')}>
                    Start Android Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </SmoothButton>
                  {/* <SmoothButton variant="secondary" className="px-8 py-4 text-lg">
                    View Android Portfolio
                  </SmoothButton> */}
                </AnimatedDiv>
              </AnimatedDiv>
              <AnimatedDiv variants={fadeInRight} className="relative">
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <Code className="h-8 w-8 text-green-400" />
                        <span className="text-lg font-semibold">Kotlin & Java</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Layers className="h-8 w-8 text-blue-400" />
                        <span className="text-lg font-semibold">Material Design</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Smartphone className="h-8 w-8 text-purple-400" />
                        <span className="text-lg font-semibold">Multi-Device Support</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-500/20 rounded-full blur-2xl"></div>
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
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
              >
                Our Android Development Services
              </AnimatedH2>
              <AnimatedP 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Complete Android development services to launch your app successfully on Google Play Store
              </AnimatedP>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <SmoothCard key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-green-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
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
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
              >
                Android Technologies We Use
              </AnimatedH2>
              <AnimatedP 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                We leverage the latest Android technologies and frameworks for exceptional app development
              </AnimatedP>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <SmoothCard key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-green-500/50 transition-all duration-300">
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
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
              >
                Our Android Development Process
              </AnimatedH2>
              <AnimatedP 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                A systematic approach to deliver high-quality Android applications
              </AnimatedP>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <AnimatedDiv key={index} variants={fadeInUp} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-green-400 mb-2">{step.step}</div>
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
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedDiv variants={fadeInLeft}>
                <AnimatedH2 
                  variants={fadeInUp}
                  className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
                >
                  Why Choose Our Android Development
                </AnimatedH2>
                <AnimatedP 
                  variants={fadeInUp}
                  className="text-xl text-gray-300 mb-8"
                >
                  We create Android applications that leverage the full potential of the Android ecosystem and provide exceptional user experiences across all devices
                </AnimatedP>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <AnimatedDiv key={index} variants={fadeInUp} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </AnimatedDiv>
                  ))}
                </div>
              </AnimatedDiv>
              <AnimatedDiv variants={fadeInRight} className="space-y-4">
                {features.map((feature, index) => (
                  <AnimatedDiv key={index} variants={fadeInUp} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-green-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-white">{feature}</span>
                    </div>
                  </AnimatedDiv>
                ))}
              </AnimatedDiv>
            </div>
          </div>
        </AnimatedSection>

        {/* Device Support Section */}
        <AnimatedSection 
          ref={featuresRef}
          initial="hidden"
          animate={featuresControls}
          variants={staggerContainer}
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <AnimatedH2 
                variants={fadeInUp}
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
              >
                Multi-Device Android Support
              </AnimatedH2>
              <AnimatedP 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Our Android apps work seamlessly across the entire Android ecosystem
              </AnimatedP>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {deviceSupport.map((device, index) => (
                <AnimatedDiv key={index} variants={fadeInUp} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-green-500/50 transition-all duration-300">
                  <Smartphone className="h-8 w-8 text-green-400 mx-auto mb-3" />
                  <span className="text-white font-medium">{device}</span>
                </AnimatedDiv>
              ))}
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
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
            >
              Ready to Build Your Android App?
            </AnimatedH2>
            <AnimatedP 
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-8"
            >
              Let's create an amazing Android app that reaches millions of users on Google Play Store
            </AnimatedP>
            <AnimatedDiv variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <SmoothButton className="px-8 py-4" onClick={() => router.push('/contact')}>
                Get Free Android Consultation
              </SmoothButton>
              {/* <SmoothButton variant="secondary" className="px-8 py-4">
                View Android Portfolio
              </SmoothButton> */}
            </AnimatedDiv>
          </div>
        </AnimatedSection>
      </div>
    </div>
    </Fragment>
  )
}
