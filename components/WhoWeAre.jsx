import Image from "next/image";
import { Linkedin } from "lucide-react";

import edmar from "../public/img/edmar.png";

const NUMEROS = [
  { numero: "25+", label: "anos de experiência no mercado nacional" },
  { numero: "50+", label: "soluções personalizadas entregues em 2024" },
  { numero: "500+", label: "clientes atendidos em todo o Brasil" },
  { numero: "100%", label: "foco em soluções sob medida para cada município" },
];

export default function WhoWeAre() {
  return (
    <div className="bg-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Retrato — a foto é quadrada, então é exibida quadrada, sem corte.
              No mobile ela vem primeiro; do lg para cima vai para a direita. */}
          <div className="mx-auto w-full max-w-[460px] lg:order-2 lg:ml-auto lg:mr-0">
            <div className="group relative aspect-square overflow-hidden rounded-2xl shadow-[0_18px_44px_rgba(15,23,42,0.17)] transition-shadow duration-500 ease-out hover:shadow-[0_26px_60px_rgba(15,23,42,0.26)]">
              <Image
                src={edmar}
                alt="Retrato de Edmar Diogo, cofundador e CEO da Guima"
                fill
                sizes="(max-width: 520px) 100vw, 460px"
                placeholder="blur"
                className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="lg:order-1">
            <p className="font-display flex items-center gap-3 text-xs md:text-sm uppercase tracking-[0.18em] text-blue-700">
              <span className="h-0.5 w-7 bg-blue-700" aria-hidden="true" />
              Cofundador e CEO
            </p>

            <h2 className="font-display mt-5 text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-[1.08] tracking-wide text-slate-900">
              Edmar Diogo
            </h2>

            {/* Secundário de propósito: o CTA sólido de LinkedIn é o da seção
                da empresa, logo abaixo. Dois botões azuis seguidos competiriam. */}
            <a
              href="https://www.linkedin.com/in/edmardiogo/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display mt-7 inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 font-semibold tracking-wide text-slate-900 transition-colors hover:bg-white"
            >
              <Linkedin size={20} aria-hidden="true" />
              Conecte-se
            </a>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {NUMEROS.map((item) => (
                <div
                  key={item.numero}
                  className="rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  <p className="font-display text-3xl font-bold leading-none text-slate-900">
                    {item.numero}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
