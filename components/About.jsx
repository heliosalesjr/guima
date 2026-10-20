import Image from "next/image";
import Arcs from "./Arcs";

const ATRIBUTOS = [
  {
    title: "Tradição",
    description:
      "Composta por profissionais com experiência de mais de 20 anos na elaboração, edição e comercialização de soluções educacionais e na área jurídica.",
  },
  {
    title: "Expertise",
    description:
      "Sempre nos unimos a especialistas em educação de diversas regiões do país, como ex-dirigentes educacionais e ex-executivos de vendas educacionais.",
  },
  {
    title: "Customização",
    description:
      "Entendemos a necessidade e a demanda de cada cliente para propor a melhor solução educacional a cada município.",
  },
];

const PARCEIROS = [
  {
    nome: "BEI Educação",
    href: "https://beieducacao.com.br/",
    src: "/img/bei_logo.png",
    width: 110,
    height: 87,
    className: "max-h-11 max-w-[70px]",
  },
  {
    nome: "Moderna",
    href: "https://solucoesmoderna.com.br/",
    src: "/img/moderna_logo_transpa.png",
    width: 160,
    height: 46,
    className: "max-h-6 max-w-[80px]",
  },
  {
    // Lockup empilhado (ícone + "proesc" + "GOV"), quase quadrado: limitado
    // pela altura para ficar com peso visual parecido com o da BEI.
    nome: "Proesc Gov",
    href: "https://proesc.com/proescgov/",
    src: "/img/proesc.png",
    width: 112,
    height: 100,
    className: "max-h-12 max-w-[56px]",
  },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Textura de arcos — o scrim agora é real: a opacidade vive nesta camada */}
      <div
        className="pointer-events-none absolute inset-0 opacity-55"
        style={{
          backgroundImage: "url('/img/waves.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "760px",
        }}
        aria-hidden="true"
      />

      {/* Arco grande vazando pelo canto superior direito */}
      <Arcs
        preset="sweep"
        className="pointer-events-none absolute right-[-16%] top-[-34%] aspect-square w-[62%] text-blue-600 opacity-[0.13]"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">

          {/* Declaração */}
          <div>
            <p className="font-display flex items-center gap-3 text-xs md:text-sm uppercase tracking-[0.18em] text-blue-700">
              <span className="h-0.5 w-7 bg-blue-700" aria-hidden="true" />
              Quem somos
            </p>

            <h2 className="font-display mt-5 max-w-[16ch] text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-[1.08] tracking-wide text-balance text-slate-900">
              Uma empresa criada por pessoas, para pessoas
            </h2>

            <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-slate-600">
              Alunos, professores, gestores educacionais e diretores são o que há de mais
              importante em cada parceria que firmamos.
            </p>
          </div>

          {/* Atributos */}
          <div className="flex flex-col gap-8">
            {ATRIBUTOS.map((item) => (
              <div key={item.title} className="flex items-start gap-5">
                <Arcs
                  preset="mark"
                  className="mt-1 w-10 shrink-0 text-blue-600 md:w-[52px]"
                />
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-[0.035em] text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Parceiros em molduras de anel duplo, citando o selo da logo */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-7 border-t border-slate-200 pt-10 md:gap-11">
          <span className="font-display text-xs uppercase tracking-[0.16em] text-slate-400">
            Parceiros
          </span>

          {PARCEIROS.map((p) => (
            <a
              key={p.nome}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex h-[104px] w-[104px] items-center justify-center rounded-full border border-slate-200 bg-white transition-colors hover:border-blue-300 md:h-32 md:w-32"
            >
              <span
                className="pointer-events-none absolute inset-[7px] rounded-full border border-slate-200"
                aria-hidden="true"
              />
              <Image
                src={p.src}
                alt={p.nome}
                width={p.width}
                height={p.height}
                className={`relative h-auto w-auto object-contain ${p.className}`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
