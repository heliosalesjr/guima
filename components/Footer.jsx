export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">Guima</div>
          <div className="flex space-x-4">
            <a href="#compliance" className="hover:text-gray-300">
              Compliance
            </a>
            
            <a href="#" className="hover:text-gray-300">
              Contato
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Guima. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

