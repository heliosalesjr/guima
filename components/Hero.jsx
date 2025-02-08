import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">GUIMA</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          We provide sophisticated solutions to help your small business thrive in today's competitive market.
        </p>
        <Button className="bg-gray-900 hover:bg-gray-800 text-white">Get Started</Button>
      </div>
    </section>
  )
}

