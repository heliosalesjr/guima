import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900">GUIMA</div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#compliance" className="text-gray-600 hover:text-gray-900">
            Compliance
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-900">
            Testimonials
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </div>
        <Button variant="outline" className="md:hidden">
          Menu
        </Button>
      </div>
    </nav>
  )
}

