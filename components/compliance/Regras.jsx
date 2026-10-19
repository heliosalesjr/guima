"use client";

import { useState } from "react";
import Image from "next/image";

const ITENS = [
  {
    image: "/img/concorrentes.jpg",
    title: "Concorrentes",
    text: "A Guima repudia qualquer forma de restrição ao livre-comércio ou à livre concorrência, em especial a formação de cartel, fraudes a licitações e abusos de poder. Estamos comprometidos com o fiel cumprimento das leis que regem a concorrência em nosso país, adotando a qualidade técnica de nossos produtos e serviços como o único motivador para nossas vendas.",
  },
  {
    image: "/img/fornecedores.jpg",
    title: "Fornecedores",
    text: "Os fornecedores da Guima devem demonstrar plena capacidade técnica para executar o que propõem, a prática de preços totalmente adequados e conduta profissional absolutamente idônea, baseada no cumprimento de leis e de altos padrões éticos.",
  },
  {
    image: "/img/agentespublicos.jpg",
    title: "Agentes públicos",
    text: "A Guima, no ato das pessoas físicas que a representam, está proibida de prometer, oferecer ou dar, direta ou indiretamente, qualquer pagamento ou outra vantagem indevida a agente público, a terceiro a ele relacionado ou a uma pessoa física ou jurídica privada, visando à obtenção de qualquer favorecimento ou expectativa de favorecimento.",
  },
  {
    image: "/img/terceiros.jpeg",
    title: "Terceiros",
    text: "Os integrantes se comprometem a informar a seus parceiros comerciais, clientes, fornecedores e agentes públicos com quem interagem sobre as normas e os princípios éticos aqui contidos, para que sejam praticados em toda a sua cadeia de negócios.",
  },
  {
    image: "/img/legal.jpg",
    title: "Embasamento legal",
    text: "Lei nº 12.846/2013 (Lei Anticorrupção) e Decreto nº 11.129/2022 (decreto regulamentador). Ainda: Lei nº 12.813/2013 (conflito de interesses), Lei nº 14.133/2021 (Nova Lei de Licitações e Contratos Administrativos), Código Penal (Decreto-Lei nº 2.848/1940), Lei nº 8.429/1992 (Improbidade Administrativa) e Decreto nº 10.889/2021, que regulamenta as audiências de agentes públicos.",
  },
];

const DOCUMENTOS = [
  
  {
    href: "/Programa_de_Compliance_Guima_Rep_Dist_assinado.pdf",
    label: "Guima Distribuição",
  },
];

export default function Regras() {
  const [ativo, setAtivo] = useState(null);

  return (
    <div>
      {/* Cabeçalho — mesmo padrão do Hero e do "Quem somos" */}
      <p className="font-display flex items-center gap-3 text-xs md:text-sm uppercase tracking-[0.18em] text-blue-400">
        <span className="h-0.5 w-7 bg-blue-400" aria-hidden="true" />
        Compliance
      </p>

      <h2 className="font-display mt-5 max-w-[18ch] text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-[1.08] tracking-wide text-balance text-white">
        Compromisso com ética e compliance
      </h2>

      <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-zinc-300">
        Seguimos rigorosamente as diretrizes brasileiras de compliance, atuando com
        transparência, integridade e respeito às legislações vigentes. Promovemos um
        ambiente ético e seguro para clientes, colaboradores e parceiros.
      </p>

      {/* Painéis: no desktop expandem ao passar o mouse; no mobile ficam abertos */}
      <div className="mt-12 flex flex-col gap-3 md:h-[440px] md:flex-row md:gap-2.5">
        {ITENS.map((item, i) => {
          const isAtivo = ativo === i;

          return (
            <button
              key={item.title}
              type="button"
              onMouseEnter={() => setAtivo(i)}
              onMouseLeave={() => setAtivo(null)}
              onFocus={() => setAtivo(i)}
              onBlur={() => setAtivo(null)}
              onClick={() => setAtivo(isAtivo ? null : i)}
              aria-expanded={isAtivo}
              style={{ flexGrow: isAtivo ? 2.4 : 1 }}
              className="group relative flex min-w-0 flex-col overflow-hidden rounded-xl bg-white/5 text-left ring-1 ring-white/10 transition-[flex-grow] duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 md:block md:basis-0 md:bg-transparent"
            >
              {/* No mobile a foto é uma faixa no topo e o texto vai em fundo
                  sólido embaixo. Do md para cima ela passa a cobrir o painel
                  inteiro e o conteúdo se sobrepõe a ela. */}
              <div className="relative h-36 w-full shrink-0 overflow-hidden md:absolute md:inset-0 md:h-full">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover"
                />
                {/* Véu único: o mesmo em repouso e com o mouse em cima. O hover
                    não altera cor nenhuma do card, só abre o texto. */}
                <div
                  className="absolute inset-0 bg-zinc-950/25 md:bg-transparent md:bg-gradient-to-t md:from-zinc-950/90 md:via-zinc-950/40 md:to-transparent"
                  aria-hidden="true"
                />
              </div>

              <div className="relative flex flex-col p-5 md:absolute md:inset-0 md:justify-end">
                {/* O título fica sempre visível, aberto ou fechado */}
                <h3 className="font-display text-lg font-bold uppercase leading-tight tracking-[0.04em] text-white">
                  {item.title}
                </h3>

                <span
                  className={`mt-3 h-0.5 w-7 shrink-0 bg-blue-400 transition-opacity duration-300 ${
                    isAtivo ? "opacity-100" : "opacity-0 md:opacity-60"
                  }`}
                  aria-hidden="true"
                />

                <p
                  className={`mt-3 text-sm leading-relaxed text-zinc-200 transition-all duration-500 md:mt-0 md:overflow-hidden ${
                    isAtivo
                      ? "md:mt-3 md:max-h-72 md:opacity-100"
                      : "md:max-h-0 md:opacity-0"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Documentos */}
      <div className="mt-14 border-t border-white/10 pt-10">
        <p className="max-w-[56ch] text-zinc-300">
          Acesse nosso Programa de Compliance completo:
         
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {DOCUMENTOS.map((doc, i) => (
            <a
              key={doc.href}
              href={doc.href}
              download
              className={`font-display rounded-lg px-6 py-3 font-semibold tracking-wide transition-colors ${
                i === 0
                  ? "bg-blue-600 text-white hover:bg-blue-500"
                  : "border border-white/25 text-white hover:bg-white/10"
              }`}
            >
              {doc.label}
            </a>
          ))}
        </div>

        <p className="mt-8 text-sm text-zinc-400">
          Em caso de dúvida ou suspeita da prática de atos de corrupção, entre em
          contato com o canal{" "}
          <a
            href="mailto:ouvidoriaguima@gmail.com"
            className="text-blue-400 underline underline-offset-4 transition-colors hover:text-blue-300"
          >
            ouvidoriaguima@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
