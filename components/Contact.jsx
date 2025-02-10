import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Fale com a gente</h2>
        <div className="max-w-lg mx-auto">
          <form className="space-y-4">
            <Input type="text" placeholder="Seu Nome" />
            <Input type="email" placeholder="Seu melhor Email" />
            <Textarea placeholder="Sua Mensagem" />
            <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

