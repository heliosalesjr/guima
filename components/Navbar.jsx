"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Alterna o menu no mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Detecta qual seção está visível
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "sobre", "compliance", "contato", "mapa"]
      let currentSection = "home"

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section
            break
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="relative flex items-center">
        <Link href="/">
          <img
            src="/img/logonav.png"
            alt="Logo GUIMA"
            className="h-16 md:h-20 -my-4"
          />
        </Link>
      </div>




        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-6">
          {["home", "sobre", "compliance", "contato", "mapa"].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className={`text-gray-600 hover:text-gray-900 transition-all ${
                activeSection === item ? "font-black underline" : ""
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>

        {/* Botão do Menu Mobile */}
        <Button variant="outline" className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 right-0">
          <div className="flex flex-col items-center space-y-4 py-4">
            {["home", "sobre", "compliance", "contato", "mapa"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className={`text-gray-600 hover:text-gray-900 transition-all ${
                  activeSection === item ? "font-black underline" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
