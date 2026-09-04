// Rede "plexus" (nós + linhas) desenhada em SVG, 100% determinística (sem
// Math.random) para não variar entre renders. Os pontos ficam fixos num
// grid levemente irregular e as arestas são calculadas conectando cada nó
// aos seus vizinhos mais próximos, dentro de uma distância máxima.
const POINTS = [
  [40, 60], [160, 30], [300, 90], [430, 40], [560, 110], [700, 50], [840, 90], [960, 40],
  [90, 180], [230, 220], [380, 170], [520, 230], [660, 190], [800, 230], [930, 180],
  [60, 340], [200, 380], [340, 330], [480, 390], [620, 340], [760, 380], [900, 330],
  [120, 500], [280, 540], [430, 490], [580, 550], [720, 500], [880, 540],
];

function buildEdges(points, neighbors = 2, maxDist = 220) {
  const seen = new Set();
  const edges = [];
  points.forEach((p, i) => {
    const closest = points
      .map((q, j) => ({ j, d: i === j ? Infinity : Math.hypot(p[0] - q[0], p[1] - q[1]) }))
      .sort((a, b) => a.d - b.d)
      .slice(0, neighbors);
    closest.forEach(({ j, d }) => {
      if (d > maxDist) return;
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (!seen.has(key)) {
        seen.add(key);
        edges.push([i, j]);
      }
    });
  });
  return edges;
}

const EDGES = buildEdges(POINTS);

export default function PlexusBackground() {
  return (
    <svg
      className="hero-plexus"
      viewBox="0 0 1000 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <g className="plexus-lines">
        {EDGES.map(([i, j], idx) => {
          const [x1, y1] = POINTS[i];
          const [x2, y2] = POINTS[j];
          return <line key={idx} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
      <g className="plexus-nodes">
        {POINTS.map(([x, y], idx) => (
          <circle key={idx} cx={x} cy={y} r={idx % 4 === 0 ? 3.2 : 2} />
        ))}
      </g>
    </svg>
  );
}
