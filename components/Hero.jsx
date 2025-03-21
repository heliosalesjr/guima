import { Button } from "@/components/ui/button";
import Circles from "./Circles";

export default function Hero() {
  return (
    <section id="home" className="animated-gradient h-[70vh] pt-16 flex items-center justify-center relative overflow-hidden">
      {/* Círculos no fundo */}
      

      {/* Conteúdo do Hero */}
      <div class="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Entre em contato conosco pelo botão do Whatzapp ou <a href="#contato" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true"></span>acesse aqui <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div class="text-center">
        <h1 class="text-4xl font-semibold text-balance text-slate-800 md:text-6xl oswald tracking-wider ">Distribuindo conhecimento em soluções educacionais</h1>
        <p class="mt-8 text-lg font-medium text-pretty text-slate-600 sm:text-xl/8">Distribuímos e representamos as melhores soluções do mercado de educação básica brasileira, com milhares de usuários e resultados comprovados.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="#contato" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entre em contato</a>
          <a href="#sobre" class="text-sm/6 font-semibold text-gray-900">Saiba mais<span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
      
    </section>
  );
}