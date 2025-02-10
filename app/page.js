import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import FeatureHighlight from "@/components/FeatureHighlight"
import Features from "@/components/Features"
import About from "@/components/About"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Compliance from "@/components/Compliance"
import Mapa from "@/components/Mapa"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      
      <Hero />
      <About />
      
      <Compliance />
      <Features />
      
      <Testimonials />
      <Contact />
      <Mapa />
      <Footer />
    </div>
  )
}


