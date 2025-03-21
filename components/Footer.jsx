"use client";

import { useEffect, useState } from "react"
import Image from "next/image"
import { FaLinkedin, FaInstagram } from "react-icons/fa"

export default function Footer() {
  const [activeSection, setActiveSection] = useState("")

  // Função para fazer scroll suave
  const handleScroll = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  // Detecta qual seção está visível
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["sobre", "compliance", "contato"]
      let currentSection = ""

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
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Image src="/img/GuimaLogoFullBlack.png" alt="Logo Guima" width={150} height={40} priority />
          </div>

          {/* Links */}
          <div className="flex space-x-6 text-gray-400">
            {["sobre", "compliance", "contato"].map((item) => (
              <button
                key={item}
                onClick={() => handleScroll(item)}
                className={`hover:text-white transition-colors ${
                  activeSection === item ? "text-white font-bold underline" : ""
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          {/* Redes Sociais */}
          <div className="flex space-x-4 mt-6 md:mt-0">
            <a href="https://www.linkedin.com/company/guima-representa%C3%A7%C3%A3o-e-distribui%C3%A7%C3%A3o/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/guimarep" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-2xl">
              <FaInstagram />
            </a>
          </div>

        </div>

        {/* Direitos Autorais */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Guima. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
