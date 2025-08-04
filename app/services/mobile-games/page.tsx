import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import { Gamepad2, Smartphone, Zap, Users, Award, ArrowRight, CheckCircle, Play, Download } from "lucide-react"

const features = [
  "Unity & Unreal Engine Development",
  "iOS & Android Game Development",
  "Cross-Platform Game Solutions",
  "3D & 2D Game Development",
  "Multiplayer & Social Features",
  "Game Analytics & Monetization",
  "App Store Optimization",
  "Performance Optimization"
]

const gameTypes = [
  { name: "Action Games", icon: Zap, description: "Fast-paced action games with engaging gameplay" },
  { name: "Puzzle Games", icon: Award, description: "Brain-teasing puzzles and strategy games" },
  { name: "RPG Games", icon: Users, description: "Immersive role-playing experiences" },
  { name: "Racing Games", icon: Play, description: "High-speed racing and driving games" },
  { name: "Strategy Games", icon: Award, description: "Tactical and strategic gameplay" },
  { name: "Casual Games", icon: Download, description: "Easy-to-play casual entertainment" }
]

const technologies = [
  { name: "Unity", category: "Game Engine" },
  { name: "Unreal Engine", category: "Game Engine" },
  { name: "C#", category: "Programming" },
  { name: "C++", category: "Programming" },
  { name: "Swift", category: "iOS" },
  { name: "Kotlin", category: "Android" },
  { name: "Firebase", category: "Backend" },
  { name: "AWS", category: "Cloud" },
  { name: "PlayFab", category: "Gaming Services" },
  { name: "AdMob", category: "Monetization" },
  { name: "Unity Analytics", category: "Analytics" },
  { name: "App Store Connect", category: "Distribution" }
]

const processSteps = [
  {
    step: "01",
    title: "Concept & Design",
    description: "We work with you to develop the game concept, mechanics, and visual design."
  },
  {
    step: "02",
    title: "Prototyping",
    description: "Create interactive prototypes to validate gameplay and user experience."
  },
  {
    step: "03",
    title: "Development",
    description: "Full game development with polished graphics, sound, and mechanics."
  },
  {
    step: "04",
    title: "Testing & Launch",
    description: "Comprehensive testing and app store optimization for successful launch."
  }
]

export default function MobileGamesPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-magenta-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Mobile Game Development
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Create engaging mobile games that captivate players and drive revenue. 
                From concept to launch, we build games that stand out in the competitive mobile gaming market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                  Start Your Game
                </button>
                <button className="border border-magenta-500 text-magenta-400 hover:bg-magenta-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                  View Our Games
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-magenta-500/20 to-purple-600/20 rounded-2xl p-8 border border-gray-800">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Gamepad2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Game Design</h3>
                  <p className="text-gray-400 text-sm">Creative Concepts</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Mobile First</h3>
                  <p className="text-gray-400 text-sm">Touch Optimized</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Performance</h3>
                  <p className="text-gray-400 text-sm">60 FPS Gaming</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Multiplayer</h3>
                  <p className="text-gray-400 text-sm">Social Gaming</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Game Types We Develop</h2>
            <p className="text-xl text-gray-300">
              From casual to hardcore, we create games for every audience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gameTypes.map((gameType, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-magenta-500/50 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <gameType.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{gameType.name}</h3>
                <p className="text-gray-300">{gameType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What We Deliver</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete mobile game development services from concept to app store launch
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
              Industry-leading tools and technologies for mobile game development
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
              A proven methodology for successful mobile game development
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

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-magenta-400 mb-2">50+</div>
              <div className="text-gray-400">Games Developed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-magenta-400 mb-2">10M+</div>
              <div className="text-gray-400">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-magenta-400 mb-2">4.8</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-magenta-400 mb-2">$2M+</div>
              <div className="text-gray-400">Revenue Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Your Mobile Game?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's bring your game idea to life and launch it to millions of players worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Start Your Game Project
            </button>
            <button className="border border-magenta-500 text-magenta-400 hover:bg-magenta-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 