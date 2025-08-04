import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import Services from "./components/Services"
import Technologies from "./components/Technologies"
import Portfolio from "./components/Portfolio"
import Process from "./components/Process"
import Testimonials from "./components/Testimonials"
import Team from "./components/Team"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import About from "./components/About"
import AnimatedBackground from "./components/AnimatedBackground"

export default function Home() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <AnimatedBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Technologies />
        <Portfolio />
        <Process />
        <Testimonials />
        <Team />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
