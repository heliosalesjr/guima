/**
 * Arcos concêntricos — o mesmo gesto do waves.png e dos anéis do selo da logo,
 * desenhados em SVG para escalar sem serrilhar.
 *
 * dir "tl": centro no topo-esquerdo, o arco abre para baixo-direita.
 * dir "tr": centro no topo-direito, o arco abre para baixo-esquerda.
 *
 * A cor vem do `currentColor`, então quem usa define com `text-*`.
 */

export const ARC_PRESETS = {
  // marca pequena ao lado de cada atributo
  mark: { dir: "tl", count: 7, r0: 10, step: 6, sw: 1.1, cx: 2, cy: 2, w: 56, h: 56 },
  // arco grande vazando pelo canto superior direito da seção
  sweep: { dir: "tr", count: 13, r0: 44, step: 15, sw: 2.4, cx: 300, cy: 0, w: 300, h: 300 },
};

export default function Arcs({ preset = "mark", className = "" }) {
  const { dir, count, r0, step, sw, cx, cy, w, h } = ARC_PRESETS[preset] || ARC_PRESETS.mark;

  const paths = [];
  for (let i = 0; i < count; i++) {
    const r = r0 + i * step;
    const x0 = dir === "tr" ? cx - r : cx + r;
    const sweepFlag = dir === "tr" ? 0 : 1;
    paths.push(`M ${x0} ${cy} A ${r} ${r} 0 0 ${sweepFlag} ${cx} ${cy + r}`);
  }

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      aria-hidden="true"
      className={className}
    >
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}
