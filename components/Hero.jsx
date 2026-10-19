import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="bg-slate-50">
      {/* pt- generoso: o Navbar é fixo e precisa de folga por baixo */}
      <div className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-14 md:pb-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">

          {/* Texto — abaixo da foto no mobile, à esquerda no desktop */}
          <div className="order-2 lg:order-1">
            <p className="font-display flex items-center gap-3 text-xs md:text-sm uppercase tracking-[0.18em] text-blue-700">
              <span className="h-0.5 w-7 bg-blue-700" aria-hidden="true" />
              Representação e distribuição
            </p>

            <h1 className="font-display mt-5 max-w-[14ch] text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.05] tracking-wide text-balance text-slate-900">
              Distribuindo conhecimento em soluções educacionais
            </h1>

            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-slate-600">
              Distribuímos e representamos as melhores soluções do mercado de educação
              básica brasileira, com milhares de usuários e resultados comprovados.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contato"
                className="font-display rounded-lg bg-blue-600 px-6 py-3 font-semibold tracking-wide text-white transition-colors hover:bg-blue-700"
              >
                Entre em contato
              </a>
              <a
                href="#sobre"
                className="font-display rounded-lg border border-slate-300 px-6 py-3 font-semibold tracking-wide text-slate-900 transition-colors hover:bg-white"
              >
                Saiba mais
              </a>
            </div>
          </div>

          {/* Painel com a foto */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl shadow-[0_18px_44px_rgba(15,23,42,0.17)] lg:aspect-[4/5]">
              <Image
                src="/img/hands2.jpg"
                alt="Aperto de mãos entre dois profissionais"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-baseline gap-2.5 bg-slate-900/90 px-5 py-4">
                <b className="font-display text-2xl font-bold text-white">25+</b>
                <span className="text-sm leading-snug text-slate-300">
                  anos construindo parcerias com a educação pública
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
