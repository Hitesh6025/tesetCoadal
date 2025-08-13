"use client"

import AnimatedBackground from "../../components/AnimatedBackground"
import { useRouter } from "next/navigation";
import { ShoppingCart, CreditCard, Package, BarChart3, Shield, Users, ArrowRight, CheckCircle, Smartphone, Globe, Zap, Lock } from "lucide-react"

const features = [
  "Custom E-commerce Platforms",
  "Payment Gateway Integration",
  "Inventory Management Systems",
  "Multi-vendor Marketplaces",
  "Mobile Commerce Solutions",
  "Order Management & Tracking",
  "Customer Management (CRM)",
  "Analytics & Reporting"
]

const platforms = [
  { name: "Shopify", category: "Platform", icon: "🛍️" },
  { name: "WooCommerce", category: "Platform", icon: "🔵" },
  { name: "Magento", category: "Platform", icon: "🟠" },
  { name: "Custom Build", category: "Platform", icon: "⚙️" },
  { name: "Stripe", category: "Payment", icon: "💳" },
  { name: "PayPal", category: "Payment", icon: "🟦" },
  { name: "Square", category: "Payment", icon: "⬛" },
  { name: "Razorpay", category: "Payment", icon: "💙" }
]

const services = [
  {
    title: "Custom E-commerce Development",
    description: "Build tailored online stores that perfectly match your business model and customer needs.",
    icon: ShoppingCart
  },
  {
    title: "Payment Processing",
    description: "Integrate secure payment gateways with support for multiple currencies and payment methods.",
    icon: CreditCard
  },
  {
    title: "Inventory Management",
    description: "Comprehensive inventory tracking, stock management, and automated reorder systems.",
    icon: Package
  },
  {
    title: "Analytics & Reporting",
    description: "Detailed insights into sales performance, customer behavior, and business metrics.",
    icon: BarChart3
  }
]

const processSteps = [
  {
    step: "01",
    title: "Business Analysis",
    description: "We analyze your business model, target audience, and competition to create the perfect strategy.",
    icon: BarChart3
  },
  {
    step: "02",
    title: "Design & UX",
    description: "Create user-friendly designs optimized for conversions and seamless shopping experiences.",
    icon: Smartphone
  },
  {
    step: "03",
    title: "Development & Integration",
    description: "Build your e-commerce platform with all necessary integrations and third-party services.",
    icon: Globe
  },
  {
    step: "04",
    title: "Testing & Launch",
    description: "Thorough testing of all features, payment processing, and performance optimization.",
    icon: Zap
  }
]

const benefits = [
  "Increased online sales revenue",
  "24/7 automated order processing",
  "Global market reach",
  "Reduced operational costs",
  "Better customer insights",
  "Scalable business growth"
]

const ecommerceTypes = [
  {
    title: "B2C Online Stores",
    description: "Direct-to-consumer e-commerce platforms with intuitive shopping experiences and secure checkout processes.",
    features: ["Product catalogs", "Shopping cart", "Secure checkout", "Customer accounts", "Order tracking", "Reviews & ratings"]
  },
  {
    title: "B2B E-commerce",
    description: "Business-to-business platforms with bulk ordering, custom pricing, and account management features.",
    features: ["Bulk pricing", "Custom catalogs", "Quote requests", "Account management", "Invoice generation", "Reorder functionality"]
  },
  {
    title: "Multi-vendor Marketplaces",
    description: "Comprehensive marketplace solutions allowing multiple vendors to sell through a single platform.",
    features: ["Vendor management", "Commission tracking", "Multi-store admin", "Vendor analytics", "Dispute resolution", "Payment splitting"]
  },
  {
    title: "Subscription Commerce",
    description: "Recurring billing platforms for subscription-based products and services with automated renewals.",
    features: ["Recurring billing", "Subscription management", "Trial periods", "Usage tracking", "Dunning management", "Churn analysis"]
  }
]

const securityFeatures = [
  {
    title: "SSL Encryption",
    description: "End-to-end encryption for all data transmission",
    icon: Lock
  },
  {
    title: "PCI Compliance",
    description: "Payment Card Industry compliance standards",
    icon: Shield
  },
  {
    title: "Fraud Protection",
    description: "Advanced fraud detection and prevention systems",
    icon: Shield
  },
  {
    title: "Secure Authentication",
    description: "Multi-factor authentication and secure login systems",
    icon: Users
  }
]

export default function EcommerceDevelopmentPage() {
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
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  E-commerce Development
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Transform your business with powerful e-commerce solutions. 
                  We build secure, scalable online stores that drive sales, 
                  enhance customer experience, and grow your digital presence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105" onClick={() => router.push('/contact')}>
                    Build Your Store
                  </button>
                  {/* <button className="border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                    View E-commerce Sites
                  </button> */}
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-2xl p-8 border border-gray-800">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <ShoppingCart className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Shopping</h3>
                    <p className="text-gray-400 text-sm">Cart & Checkout</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <CreditCard className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Payments</h3>
                    <p className="text-gray-400 text-sm">Secure Processing</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Package className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Inventory</h3>
                    <p className="text-gray-400 text-sm">Management</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Analytics</h3>
                    <p className="text-gray-400 text-sm">Sales Reports</p>
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
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Our E-commerce Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive e-commerce solutions to boost your online sales and customer satisfaction
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-orange-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* E-commerce Types */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Types of E-commerce Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From simple online stores to complex marketplaces, we build e-commerce solutions for every business model
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ecommerceTypes.map((type, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-orange-500/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Security & Trust Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enterprise-grade security features to protect your business and customer data
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms & Technologies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Platforms & Payment Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with leading e-commerce platforms and payment processors
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-orange-500/50 transition-all duration-300">
                  <div className="text-3xl mb-3">{platform.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{platform.name}</h3>
                  <p className="text-sm text-gray-400">{platform.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Our E-commerce Development Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology to launch successful online stores that convert visitors into customers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-orange-400 mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Why Choose Our E-commerce Development
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Drive more sales with professionally built e-commerce solutions designed for growth
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-orange-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-400" />
                      <span className="text-white">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Ready to Launch Your Online Store?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start selling online today with a professionally built e-commerce platform that drives results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105" onClick={() => router.push('/contact')}>
                Get Free Consultation
              </button>
              {/* <button className="border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                View E-commerce Portfolio
              </button> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
