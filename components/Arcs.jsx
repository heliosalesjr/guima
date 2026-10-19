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

/**
 * Quebra-cabeça de anéis duplos (azulejos de Truchet).
 *
 * Cada bloco carrega um quarto de círculo em anel duplo — as duas bordas
 * juntas do selo da logo — centrado em um dos quatro cantos, ou fica vazio.
 * Como o raio é sempre metade do bloco, as listras de blocos vizinhos se
 * encontram exatamente no meio da aresta: onde dois quartos se alinham
 * nasce meio círculo, onde quatro se alinham nasce um círculo inteiro, e
 * onde não se alinham a trama simplesmente segue. É daí que vem o efeito
 * de quebra-cabeça.
 *
 * `id` precisa ser único por página: o <pattern> é referenciado por ele.
 */

// Hash inteiro: mesmo desenho em todo build, sem depender de ponto flutuante.
function sorteia(c, r) {
  let h = (c * 374761393 + r * 668265263) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177) | 0;
  return Math.abs(h ^ (h >>> 16));
}

// Os quatro cantos. Cada um devolve o arco que abre para dentro do bloco.
const CANTOS = [
  // centro no topo-esquerdo
  (x, y, t, r) => [`M ${x + r} ${y} A ${r} ${r} 0 0 1 ${x} ${y + r}`],
  // topo-direito
  (x, y, t, r) => [`M ${x + t - r} ${y} A ${r} ${r} 0 0 0 ${x + t} ${y + r}`],
  // base-direita
  (x, y, t, r) => [`M ${x + t} ${y + t - r} A ${r} ${r} 0 0 0 ${x + t - r} ${y + t}`],
  // base-esquerda
  (x, y, t, r) => [`M ${x + r} ${y + t} A ${r} ${r} 0 0 0 ${x} ${y + t - r}`],
];

export function ArcPuzzle({
  id,
  tile = 110,
  cols = 6,
  rows = 6,
  gap = 9,
  stroke = 1.4,
  opacity = 0.2,
  className = "",
}) {
  const paths = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const sorte = sorteia(c, r) % 20;

      // ~15% dos blocos ficam vazios: são as peças que faltam no quebra-cabeça
      if (sorte < 3) continue;

      const x = c * tile;
      const y = r * tile;

      // ~25% com um canto só (deixam uma ponta solta, e é isso que quebra a
      // regularidade) e ~60% cruzados em cantos opostos, que sempre emendam
      // com o vizinho e formam as fitas longas.
      const cantos =
        sorte < 8 ? [(sorte - 3) % 4] : sorte % 2 ? [1, 3] : [0, 2];

      cantos.forEach((k) => {
        // anel duplo: dois raios em torno da metade do bloco
        [tile / 2 - gap / 2, tile / 2 + gap / 2].forEach((raio) => {
          paths.push(...CANTOS[k](x, y, tile, raio));
        });
      });
    }
  }

  return (
    <svg className={className} width="100%" height="100%" aria-hidden="true">
      <defs>
        <pattern
          id={id}
          width={cols * tile}
          height={rows * tile}
          patternUnits="userSpaceOnUse"
        >
          <g fill="none" stroke="currentColor" strokeWidth={stroke} opacity={opacity}>
            {paths.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
