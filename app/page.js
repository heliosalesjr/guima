import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Team from "@/components/Team"
import About from "@/components/About"

import Footer from "@/components/Footer"
import Compliance from "@/components/Compliance"
import Mapa from "@/components/Mapa"

import Contact2 from "@/components/Contact2"

import FloatingWhatsAppButton from "@/components/Whatzapp"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      
      <Hero />
      <About />
      <Team />
      <Compliance />
      
      
      <Contact2 />
      <Mapa />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}


