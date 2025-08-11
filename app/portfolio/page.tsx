import { ExternalLink, Github, Play, Smartphone, Globe, Gamepad2, Palette, BarChart3 } from "lucide-react"

const projects = [
  {
    title: "Epic Quest RPG",
    category: "Game Development",
    icon: Gamepad2,
    image: "/api/placeholder/600/400",
    description: "An immersive mobile RPG with stunning graphics and engaging gameplay mechanics. Features include character customization, multiplayer battles, and a vast open world.",
    technologies: ["Unity", "C#", "Firebase", "AWS"],
    stats: { downloads: "2M+", rating: "4.8", revenue: "$500K+" },
    links: { live: "#", github: "#", demo: "#" }
  },
  {
    title: "TechFlow Dashboard",
    category: "Web Development",
    icon: Globe,
    image: "/api/placeholder/600/400",
    description: "A comprehensive analytics dashboard for tech companies. Real-time data visualization, customizable widgets, and advanced reporting capabilities.",
    technologies: ["React", "Node.js", "MongoDB", "D3.js"],
    stats: { users: "50K+", uptime: "99.9%", performance: "95%" },
    links: { live: "#", github: "#", demo: "#" }
  },
  {
    title: "FitLife Mobile App",
    category: "Mobile Development",
    icon: Smartphone,
    image: "/api/placeholder/600/400",
    description: "A fitness tracking app with AI-powered workout recommendations, social features, and integration with wearable devices.",
    technologies: ["React Native", "Python", "TensorFlow", "Apple Health"],
    stats: { users: "100K+", workouts: "1M+", rating: "4.9" },
    links: { live: "#", github: "#", demo: "#" }
  },
  {
    title: "EcoShop E-commerce",
    category: "Web Development",
    icon: Globe,
    image: "/api/placeholder/600/400",
    description: "A sustainable e-commerce platform for eco-friendly products. Features include carbon footprint tracking, sustainable packaging options, and community features.",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    stats: { sales: "$2M+", products: "10K+", customers: "25K+" },
    links: { live: "#", github: "#", demo: "#" }
  },
  {
    title: "NeonRacer VR",
    category: "Game Development",
    icon: Gamepad2,
    image: "/api/placeholder/600/400",
    description: "A high-speed VR racing game with realistic physics and stunning visual effects. Compatible with Oculus Quest and HTC Vive.",
    technologies: ["Unreal Engine", "C++", "Oculus SDK", "SteamVR"],
    stats: { players: "10K+", rating: "4.7", awards: "3" },
    links: { live: "#", github: "#", demo: "#" }
  },
  {
    title: "DesignHub Platform",
    category: "UI/UX Design",
    icon: Palette,
    image: "/api/placeholder/600/400",
    description: "A collaborative design platform for creative teams. Features include real-time collaboration, version control, and design system management.",
    technologies: ["Figma API", "WebRTC", "React", "Socket.io"],
    stats: { designers: "5K+", projects: "50K+", collaboration: "99%" },
    links: { live: "#", github: "#", demo: "#" }
  }
]

const categories = [
  { name: "All", value: "all", count: projects.length },
  { name: "Game Development", value: "game", count: 2 },
  { name: "Web Development", value: "web", count: 2 },
  { name: "Mobile Development", value: "mobile", count: 1 },
  { name: "UI/UX Design", value: "design", count: 1 }
]

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "25+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" }
]

export default function PortfolioPage() {
  return (
    <div className="text-white min-h-screen">
       
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-magenta-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Discover our innovative projects that have transformed businesses and delighted users worldwide. 
            Each project represents our commitment to excellence and cutting-edge technology.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-magenta-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-3 rounded-full border border-gray-700 text-gray-300 hover:border-magenta-500 hover:text-magenta-400 transition-all duration-300"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-magenta-500/50 transition-all duration-300 hover:scale-105">
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-magenta-500/20 to-purple-600/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <project.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-magenta-500 transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                    <button className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-magenta-500 transition-colors">
                      <Github className="h-5 w-5" />
                    </button>
                    <button className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-magenta-500 transition-colors">
                      <Play className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-magenta-400 font-medium">{project.category}</span>
                    <div className="flex gap-2">
                      {Object.entries(project.stats).map(([key, value], statIndex) => (
                        <div key={statIndex} className="text-xs bg-gray-800 px-2 py-1 rounded">
                          {value}
                        </div>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-800 text-xs rounded-full text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300">
                      View Project
                    </button>
                    <button className="px-4 py-2 border border-gray-600 text-gray-300 hover:border-magenta-500 hover:text-magenta-400 rounded-lg font-medium transition-all duration-300">
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's bring your vision to life with our expertise and innovative approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Start Your Project
            </button>
            <button className="border border-magenta-500 text-magenta-400 hover:bg-magenta-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 