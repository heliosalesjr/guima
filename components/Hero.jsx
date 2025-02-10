import { Button } from "@/components/ui/button";
import Circles from "./Circles";

export default function Hero() {
  return (
    <section id="home" className="animated-gradient h-[60vh] flex items-center justify-center relative overflow-hidden">
      {/* Círculos no fundo */}
      <div className="absolute inset-0 z-0 items-center justify-center flex">
        <Circles className="items-center"/>
      </div>

      {/* Conteúdo do Hero */}
      <div className="container mx-auto px-4 text-center relative z-10 ">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">GUIMA</h1>
        <p className="text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Distribuindo conhecimento em soluções educacionais
        </p>
        <Button className="bg-blue-700 hover:bg-blue-800 text-white">Compliance</Button>
      </div>
    </section>
  );
}