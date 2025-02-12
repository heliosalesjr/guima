import Image from "next/image"
import { FaLinkedin, FaInstagram } from "react-icons/fa"

export default function Footer() {
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
            <a href="#compliance" className="hover:text-white transition-colors">
              Compliance
            </a>
            <a href="#contato" className="hover:text-white transition-colors">
              Contato
            </a>
          </div>

          {/* Redes Sociais */}
          <div className="flex space-x-4 mt-6 md:mt-0">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-2xl">
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

