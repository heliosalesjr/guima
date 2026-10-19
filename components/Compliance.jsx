import { ArcPuzzle } from "./Arcs";
import Regras from "./compliance/Regras";

export default function Compliance() {
  return (
    <section id="compliance" className="relative overflow-hidden bg-zinc-900">
      {/* Quebra-cabeça de anéis duplos, citando as duas bordas do selo */}
      <ArcPuzzle
        id="arcos-compliance"
        tile={110}
        cols={8}
        rows={8}
        gap={9}
        stroke={1.4}
        opacity={0.2}
        className="pointer-events-none absolute inset-0 text-white"
      />

      {/* Brilho ao fundo: tira o chapado do quase-preto */}
      <div
        className="pointer-events-none absolute left-[-18%] bottom-[-42%] aspect-square w-[58%]"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.22), rgba(37,99,235,0) 68%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
        <Regras />
      </div>
    </section>
  );
}
