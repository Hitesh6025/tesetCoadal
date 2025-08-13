"use client"

import AnimatedBackground from "../../components/AnimatedBackground"
import { useRouter } from "next/navigation";
import { SmoothCard, SmoothButton } from "../../components/SmoothAnimations"
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, AnimatedSection, AnimatedDiv, AnimatedH2, AnimatedP } from "../../hooks/useScrollAnimation"
import { Smartphone, Code, Zap, Shield, Users, ArrowRight, CheckCircle, Layers, Star, Globe, Award, Cpu, Palette } from "lucide-react"
import { Fragment } from "react"

const features = [
  "Cross-platform Flutter Development",
  "Material Design & Cupertino Widgets",
  "Dart Programming Language",
  "Custom Widget Development",
  "Firebase & REST API Integration",
  "State Management (Bloc, Provider, Riverpod)",
  "Platform Channels for Native Integration",
  "Hot Reload & Hot Restart"
]

const technologies = [
  { name: "Flutter", category: "Framework", icon: "💙" },
  { name: "Dart", category: "Language", icon: "🎯" },
  { name: "Android Studio", category: "IDE", icon: "🛠️" },
  { name: "VS Code", category: "Editor", icon: "📝" },
  { name: "Firebase", category: "Backend", icon: "🔥" },
  { name: "Bloc", category: "State Management", icon: "🧱" },
  { name: "Provider", category: "State Management", icon: "🔄" },
  { name: "Material Design", category: "UI Framework", icon: "🎨" }
]

const services = [
  {
    title: "Cross-Platform Flutter Apps",
    description: "Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
    icon: Globe
  },
  {
    title: "Custom UI/UX Design",
    description: "Create stunning user interfaces with Flutter's rich widget library and custom animations.",
    icon: Palette
  },
  {
    title: "Performance Optimization",
    description: "Achieve 60fps performance with Flutter's compiled-to-native approach and optimization techniques.",
    icon: Zap
  },
  {
    title: "Platform Integration",
    description: "Seamlessly integrate with platform-specific features using platform channels and native modules.",
    icon: Cpu
  }
]

const processSteps = [
  {
    step: "01",
    title: "Project Architecture",
    description: "Set up Flutter project structure with best practices and scalable architecture patterns.",
    icon: Layers
  },
  {
    step: "02",
    title: "Widget Development",
    description: "Build responsive and beautiful UI using Flutter's widget-based architecture.",
    icon: Code
  },
  {
    step: "03",
    title: "Feature Implementation",
    description: "Implement app features with state management and platform-specific integrations.",
    icon: Cpu
  },
  {
    step: "04",
    title: "Multi-Platform Deployment",
    description: "Deploy to iOS, Android, web, and desktop platforms from a single codebase.",
    icon: Star
  }
]

const benefits = [
  "Single codebase for all platforms",
  "Near-native performance",
  "Rich widget library and animations",
  "Hot reload for rapid development",
  "Strong typing with Dart language",
  "Growing ecosystem and community"
]

const stats = [
  { number: "25+", label: "Flutter Apps Built", icon: Code },
  { number: "6", label: "Platforms Supported", icon: Globe },
  { number: "2M+", label: "Combined Downloads", icon: Users },
  { number: "4.8/5", label: "Average App Rating", icon: Star }
]

const platforms = [
  { name: "iOS", description: "iPhone & iPad Apps", icon: "📱", color: "from-blue-500 to-cyan-500" },
  { name: "Android", description: "Android Devices", icon: "🤖", color: "from-green-500 to-blue-500" },
  { name: "Web", description: "Progressive Web Apps", icon: "🌐", color: "from-purple-500 to-pink-500" },
  { name: "Windows", description: "Desktop Applications", icon: "🪟", color: "from-cyan-500 to-blue-500" },
  { name: "macOS", description: "Mac Applications", icon: "💻", color: "from-gray-500 to-blue-500" },
  { name: "Linux", description: "Linux Applications", icon: "🐧", color: "from-orange-500 to-red-500" }
]

const flutterAdvantages = [
  {
    title: "Fast Development",
    description: "Hot reload allows you to see changes instantly, making development incredibly fast.",
    icon: Zap
  },
  {
    title: "Expressive UI",
    description: "Rich widget library enables creation of beautiful and expressive user interfaces.",
    icon: Palette
  },
  {
    title: "Native Performance",
    description: "Compiled to native code for optimal performance on all platforms.",
    icon: Cpu
  },
  {
    title: "Single Codebase",
    description: "Write once, run everywhere - maintain one codebase for all platforms.",
    icon: Code
  }
]

export default function FlutterDevelopmentPage() {
  const { ref: heroRef, controls: heroControls } = useScrollAnimation(0.1, true)
    const { ref: servicesRef, controls: servicesControls } = useScrollAnimation(0.1, true)
    const router = useRouter();
  const { ref: techRef, controls: techControls } = useScrollAnimation(0.1, true)
  const { ref: processRef, controls: processControls } = useScrollAnimation(0.1, true)
  const { ref: featuresRef, controls: featuresControls } = useScrollAnimation(0.1, true)
  const { ref: statsRef, controls: statsControls } = useScrollAnimation(0.1, true)
  const { ref: platformsRef, controls: platformsControls } = useScrollAnimation(0.1, true)
  const { ref: advantagesRef, controls: advantagesControls } = useScrollAnimation(0.1, true)
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
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-2xl">💙</div>
                  </div>
                  <span className="text-blue-400 font-semibold text-lg">Flutter Development</span>
                </div>
                <AnimatedH2 
                  variants={fadeInUp}
                  className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
                >
                  Flutter Development
                </AnimatedH2>
                <AnimatedP 
                  variants={fadeInUp}
                  className="text-xl text-gray-300 mb-8 leading-relaxed"
                >
                  Create beautiful, fast, and portable applications for mobile, web, and desktop platforms with Google's Flutter framework and Dart programming language.
                </AnimatedP>
                <AnimatedDiv variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <SmoothButton className="px-8 py-4 text-lg" onClick={() => router.push('/contact')}>
                    Start Flutter Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </SmoothButton>
                  {/* <SmoothButton variant="secondary" className="px-8 py-4 text-lg">
                    View Flutter Portfolio
                  </SmoothButton> */}
                </AnimatedDiv>
              </AnimatedDiv>
              <AnimatedDiv variants={fadeInRight} className="relative">
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">💙</div>
                        <span className="text-lg font-semibold">Flutter Framework</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Globe className="h-8 w-8 text-cyan-400" />
                        <span className="text-lg font-semibold">Multi-Platform</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Zap className="h-8 w-8 text-purple-400" />
                        <span className="text-lg font-semibold">Native Performance</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl"></div>
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
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Flutter Advantages Section */}
        <AnimatedSection 
          ref={advantagesRef}
          initial="hidden"
          animate={advantagesControls}
          variants={staggerContainer}
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <AnimatedH2 
                variants={fadeInUp}
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              >
                Why Choose Flutter
              </AnimatedH2>
              <AnimatedP 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Flutter offers unique advantages for cross-platform development
              </AnimatedP>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {flutterAdvantages.map((advantage, index) => (
                <SmoothCard key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{advantage.title}</h3>
                  <p className="text-gray-300 text-sm">{advantage.description}</p>
                </SmoothCard>
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
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <AnimatedH2 
                variants={fadeInUp}
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              >
                Our Flutter Development Services
              </AnimatedH2>
              <AnimatedP 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Comprehensive Flutter development services for building exceptional cross-platform applications
              </AnimatedP>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <SmoothCard key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
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
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              >
                Supported Platforms
              </AnimatedH2>
              <AnimatedP 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Flutter enables deployment to six platforms from a single codebase
              </AnimatedP>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <SmoothCard key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-blue-500/50 transition-all duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-2xl">{platform.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{platform.name}</h3>
                  <p className="text-sm text-gray-400">{platform.description}</p>
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
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              >
                Flutter Technologies We Use
              </AnimatedH2>
              <AnimatedP 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                We leverage the complete Flutter ecosystem for optimal development experience
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
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              >
                Our Flutter Development Process
              </AnimatedH2>
              <AnimatedP 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                A structured approach to deliver high-quality Flutter applications
              </AnimatedP>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <AnimatedDiv key={index} variants={fadeInUp} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedDiv variants={fadeInLeft}>
                <AnimatedH2 
                  variants={fadeInUp}
                  className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                >
                  Flutter Development Features
                </AnimatedH2>
                <AnimatedP 
                  variants={fadeInUp}
                  className="text-xl text-gray-300 mb-8"
                >
                  Our Flutter development includes all the features you need for successful cross-platform applications
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
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Ready to Build with Flutter?
            </AnimatedH2>
            <AnimatedP 
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-8"
            >
              Create beautiful, fast applications for all platforms with Flutter. Let's bring your ideas to life
            </AnimatedP>
            <AnimatedDiv variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <SmoothButton className="px-8 py-4" onClick={() => router.push('/contact')}>
                  Get Free Flutter Consultation
                </SmoothButton>
              {/* <SmoothButton variant="secondary" className="px-8 py-4">
                View Flutter Portfolio
              </SmoothButton> */}
            </AnimatedDiv>
          </div>
        </AnimatedSection>
      </div>
    </div>
    </Fragment>
  )
}
