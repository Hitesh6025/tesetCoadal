"use client"

import AnimatedBackground from "../../components/AnimatedBackground"
import { useRouter } from "next/navigation";
import { SmoothCard, SmoothButton } from "../../components/SmoothAnimations"
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, AnimatedSection, AnimatedDiv, AnimatedH2, AnimatedP } from "../../hooks/useScrollAnimation"
import { Code, Palette, Smartphone, Zap, Shield, Users, ArrowRight, CheckCircle, Monitor, Layers, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { Fragment } from "react"

const features = [
  "React, Vue, Angular Development",
  "Responsive Web Design",
  "Progressive Web Apps (PWAs)",
  "Single Page Applications (SPAs)",
  "Component-Based Architecture",
  "Modern JavaScript (ES6+)",
  "CSS3 & SASS/SCSS",
  "Cross-Browser Compatibility"
]

const technologies = [
  { name: "React", category: "Framework", icon: "⚛️" },
  { name: "Vue.js", category: "Framework", icon: "🟢" },
  { name: "Angular", category: "Framework", icon: "🔴" },
  { name: "Next.js", category: "Framework", icon: "⚫" },
  { name: "TypeScript", category: "Language", icon: "🔷" },
  { name: "Tailwind CSS", category: "Styling", icon: "🎨" },
  { name: "SASS/SCSS", category: "Styling", icon: "💅" },
  { name: "Webpack", category: "Build Tool", icon: "📦" }
]

const services = [
  {
    title: "Custom Web Applications",
    description: "Build tailored web applications that perfectly match your business requirements with modern frameworks and best practices.",
    icon: Code
  },
  {
    title: "Responsive Design",
    description: "Create websites that look stunning and function flawlessly across all devices and screen sizes.",
    icon: Smartphone
  },
  {
    title: "UI/UX Implementation",
    description: "Transform designs into pixel-perfect, interactive user interfaces with smooth animations and transitions.",
    icon: Palette
  },
  {
    title: "Performance Optimization",
    description: "Optimize your frontend for lightning-fast loading times and superior user experience.",
    icon: Zap
  }
]

const processSteps = [
  {
    step: "01",
    title: "Design Analysis",
    description: "We analyze your design requirements and create a detailed frontend development plan.",
    icon: Layers
  },
  {
    step: "02",
    title: "Component Development",
    description: "Build reusable components using modern frameworks and best practices.",
    icon: Code
  },
  {
    step: "03",
    title: "Integration & Testing",
    description: "Integrate components and conduct thorough testing across different browsers and devices.",
    icon: Shield
  },
  {
    step: "04",
    title: "Optimization & Launch",
    description: "Optimize performance and deploy your frontend application to production.",
    icon: Sparkles
  }
]

const benefits = [
  "Lightning-fast page load speeds",
  "SEO-optimized code structure",
  "Mobile-first responsive design",
  "Modern browser compatibility",
  "Accessible user interfaces",
  "Scalable component architecture"
]

export default function FrontendDevelopmentPage() {
  const { ref: heroRef, controls: heroControls } = useScrollAnimation(0.1, true)
  const router = useRouter();
  const { ref: servicesRef, controls: servicesControls } = useScrollAnimation(0.1, true)
  const { ref: techRef, controls: techControls } = useScrollAnimation(0.1, true)
  const { ref: processRef, controls: processControls } = useScrollAnimation(0.1, true)
  const { ref: featuresRef, controls: featuresControls } = useScrollAnimation(0.1, true)
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
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  variants={fadeInUp}
                >
                  Frontend Development
                </motion.h1>
                <AnimatedP 
                  variants={fadeInUp}
                  className="text-xl text-gray-300 mb-8 leading-relaxed"
                >
                  Create stunning, responsive, and high-performance user interfaces that captivate your audience 
                  and drive engagement with cutting-edge frontend technologies.
                </AnimatedP>
                <AnimatedDiv variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <SmoothButton className="px-8 py-4 text-lg" onClick={() => router.push('/contact')}>
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </SmoothButton>
                  {/* <SmoothButton variant="secondary" className="px-8 py-4 text-lg">
                    View Our Work
                  </SmoothButton> */}
                </AnimatedDiv>
              </AnimatedDiv>
              <AnimatedDiv variants={fadeInRight} className="relative">
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <Monitor className="h-8 w-8 text-blue-400" />
                        <span className="text-lg font-semibold">Modern UI/UX</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Smartphone className="h-8 w-8 text-purple-400" />
                        <span className="text-lg font-semibold">Responsive Design</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Zap className="h-8 w-8 text-cyan-400" />
                        <span className="text-lg font-semibold">Lightning Fast</span>
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
                Our Frontend Services
              </AnimatedH2>
              <AnimatedP 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                We offer comprehensive frontend development services to bring your vision to life
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
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <AnimatedH2 
                variants={fadeInUp}
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                Technologies We Use
              </AnimatedH2>
              <AnimatedP 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                We leverage the latest frontend technologies to build modern, scalable applications
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
                Our Development Process
              </AnimatedH2>
              <AnimatedP 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                A structured approach to deliver exceptional frontend solutions
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
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedDiv variants={fadeInLeft}>
                <AnimatedH2 
                  variants={fadeInUp}
                  className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                  Why Choose Our Frontend Development
                </AnimatedH2>
                <AnimatedP 
                  variants={fadeInUp}
                  className="text-xl text-gray-300 mb-8"
                >
                  We deliver cutting-edge frontend solutions that drive engagement and conversions
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
              Ready to Build Your Frontend?
            </AnimatedH2>
            <AnimatedP 
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-8"
            >
              Let's create a stunning frontend that engages your users and drives your business forward
            </AnimatedP>
            <AnimatedDiv variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <SmoothButton className="px-8 py-4" onClick={() => router.push('/contact')}>
                Get Free Consultation
              </SmoothButton>
              {/* <SmoothButton variant="secondary" className="px-8 py-4">
                View Portfolio
              </SmoothButton> */}
            </AnimatedDiv>
          </div>
        </AnimatedSection>
      </div>
    </div>
    </Fragment>
  )
}
