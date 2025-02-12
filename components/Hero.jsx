import { Button } from "@/components/ui/button";
import Circles from "./Circles";

export default function Hero() {
  return (
    <section id="home" className="animated-gradient h-[70vh] flex items-center justify-center relative overflow-hidden">
      {/* Círculos no fundo */}
      <div className=" absolute inset-0 z-0 items-center justify-center flex">
        
      </div>

      {/* Conteúdo do Hero */}
      <div class="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Anunciamos nosso novo programa de compliance. <a href="#compliance" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true"></span>Acesse aqui <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div class="text-center">
        <h1 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">Distribuindo conhecimento em soluções educacionais</h1>
        <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="#contato" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entre em contato</a>
          <a href="#" class="text-sm/6 font-semibold text-gray-900">Saiba mais<span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
      
    </section>
  );
}