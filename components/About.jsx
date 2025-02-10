import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="about" className="py-16 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src="/img/Classroom.jpg" alt="About Us" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre a Guima</h2>
            <p className="text-gray-600 mb-6">
            Distribuímos conhecimento em soluções educacionais, conectando empresas renomadas a instituições e profissionais que buscam conteúdos de alta qualidade. Representamos editoras e produtores de conhecimento, oferecendo livros físicos e materiais digitais que impulsionam o aprendizado e a inovação. Nosso compromisso é facilitar o acesso a conteúdos confiáveis, contribuindo para a formação e o crescimento de estudantes, educadores e organizações.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  )
}

