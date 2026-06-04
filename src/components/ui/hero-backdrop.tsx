"use client";

// Palette — white/cyan glow on the dark carbon hero.
// NOTE: must stay rgba() — oklch() does NOT render in SVG fill/stroke under
// Chromium headless (Playwright), per project pitfalls.
const S  = "rgba(255, 255, 255, 0.11)";  // strokes principales
const SL = "rgba(255, 255, 255, 0.055)"; // conexiones ligeras
const SF = "rgba(255, 255, 255, 0.085)"; // fills
const ST = "rgba(196, 224, 236, 0.20)";  // texto (cyan-tinted, legible sobre oscuro)
const SC = "rgba(58, 170, 206, 0.24)";   // cyan nodos hub (glow)

// Nodos hub: servicios principales
const HUBS: [number, number, string][] = [
  [215, 295, "PROC"],
  [570, 215, "DATA"],
  [840, 375, "ERP" ],
  [1110, 265, "REP" ],
];

// Nodos medios
const MED: [number, number][] = [
  [350,455],[490,315],[670,490],[770,175],
  [950,195],[1060,455],[1250,385],[360,248],
  [730,445],[1010,325],[1170,175],
];

// Nodos pequeños
const SM: [number, number][] = [
  [125,195],[175,490],[295,165],[430,565],
  [590,355],[710,275],[890,535],[1300,515],[1410,295],
];

// Diamantes checkpoint
const DIAMONDS: [number, number][] = [
  [393,257],[703,303],[975,328],[1180,323],
];

export function HeroBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none select-none absolute inset-0 overflow-hidden"
      style={{ zIndex: 0, animation: "backdrop-reveal 1.6s ease-out 0.3s both" }}
    >
      <svg
        viewBox="0 0 1440 720"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* ── Conexiones (capa más suave) ────────────────── */}
        <g stroke={SL} strokeWidth="0.85" fill="none" strokeLinecap="round">
          {/* Backbone hub-to-hub */}
          <line x1="215" y1="295" x2="570" y2="215"/>
          <line x1="570" y1="215" x2="840" y2="375"/>
          <line x1="840" y1="375" x2="1110" y2="265"/>
          <line x1="215" y1="295" x2="840" y2="375"/>
          <line x1="570" y1="215" x2="1110" y2="265"/>
          {/* Desde PROC */}
          <line x1="215" y1="295" x2="350" y2="455"/>
          <line x1="215" y1="295" x2="360" y2="248"/>
          <line x1="215" y1="295" x2="125" y2="195"/>
          <line x1="215" y1="295" x2="175" y2="490"/>
          <line x1="215" y1="295" x2="295" y2="165"/>
          {/* Desde DATA */}
          <line x1="570" y1="215" x2="490" y2="315"/>
          <line x1="570" y1="215" x2="770" y2="175"/>
          <line x1="570" y1="215" x2="360" y2="248"/>
          <line x1="570" y1="215" x2="590" y2="355"/>
          <line x1="570" y1="215" x2="710" y2="275"/>
          {/* Desde ERP */}
          <line x1="840" y1="375" x2="670" y2="490"/>
          <line x1="840" y1="375" x2="730" y2="445"/>
          <line x1="840" y1="375" x2="950" y2="195"/>
          <line x1="840" y1="375" x2="1010" y2="325"/>
          <line x1="840" y1="375" x2="890" y2="535"/>
          {/* Desde REP */}
          <line x1="1110" y1="265" x2="950"  y2="195"/>
          <line x1="1110" y1="265" x2="1060" y2="455"/>
          <line x1="1110" y1="265" x2="1250" y2="385"/>
          <line x1="1110" y1="265" x2="1170" y2="175"/>
          <line x1="1110" y1="265" x2="1410" y2="295"/>
          {/* Medio a medio */}
          <line x1="350"  y1="455" x2="490"  y2="315"/>
          <line x1="350"  y1="455" x2="430"  y2="565"/>
          <line x1="350"  y1="455" x2="670"  y2="490"/>
          <line x1="490"  y1="315" x2="590"  y2="355"/>
          <line x1="590"  y1="355" x2="730"  y2="445"/>
          <line x1="590"  y1="355" x2="670"  y2="490"/>
          <line x1="710"  y1="275" x2="770"  y2="175"/>
          <line x1="710"  y1="275" x2="730"  y2="445"/>
          <line x1="770"  y1="175" x2="950"  y2="195"/>
          <line x1="950"  y1="195" x2="1170" y2="175"/>
          <line x1="1010" y1="325" x2="1060" y2="455"/>
          <line x1="1060" y1="455" x2="1300" y2="515"/>
          <line x1="1250" y1="385" x2="1300" y2="515"/>
          <line x1="1250" y1="385" x2="1410" y2="295"/>
          <line x1="890"  y1="535" x2="1060" y2="455"/>
          <line x1="890"  y1="535" x2="730"  y2="445"/>
          <line x1="125"  y1="195" x2="295"  y2="165"/>
          <line x1="295"  y1="165" x2="360"  y2="248"/>
          <line x1="175"  y1="490" x2="350"  y2="455"/>
          <line x1="430"  y1="565" x2="670"  y2="490"/>
          <line x1="1170" y1="175" x2="1410" y2="295"/>
          <line x1="1300" y1="515" x2="1410" y2="295"/>
        </g>

        {/* ── Nodos medios ───────────────────────────────── */}
        <g stroke={S} strokeWidth="1" fill="none">
          {MED.map(([x, y], i) => (
            <circle key={`m${i}`} cx={x} cy={y} r={10}/>
          ))}
        </g>

        {/* ── Nodos pequeños ─────────────────────────────── */}
        <g fill={SF} stroke="none">
          {SM.map(([x, y], i) => (
            <circle key={`s${i}`} cx={x} cy={y} r={3.5}/>
          ))}
        </g>

        {/* ── Bloques rectangulares alrededor de hubs ────── */}
        <g stroke={S} strokeWidth="0.85" fill="none">
          <rect x="183" y="265" width="64" height="60" rx="3"/>
          <rect x="538" y="185" width="64" height="60" rx="3"/>
          <rect x="808" y="345" width="64" height="60" rx="3"/>
          <rect x="1078" y="235" width="64" height="60" rx="3"/>
        </g>

        {/* ── Nodos hub (cyan) ───────────────────────────── */}
        <g stroke={SC} strokeWidth="1.5" fill="none">
          {HUBS.map(([x, y], i) => (
            <circle key={`h${i}`} cx={x} cy={y} r={i % 2 === 0 ? 20 : 18}/>
          ))}
        </g>
        <g fill={SC} stroke="none">
          {HUBS.map(([x, y], i) => (
            <circle key={`hf${i}`} cx={x} cy={y} r={4}/>
          ))}
        </g>

        {/* ── Labels de hubs ─────────────────────────────── */}
        <g
          fill={ST}
          stroke="none"
          fontSize="8"
          fontFamily="var(--font-mono)"
          letterSpacing="0.14em"
          textAnchor="middle"
        >
          {HUBS.map(([x, y, label]) => (
            <text key={label} x={x} y={y + 4}>{label}</text>
          ))}
        </g>

        {/* ── Diamantes en conexiones clave ──────────────── */}
        <g stroke={S} strokeWidth="0.75" fill="none">
          {DIAMONDS.map(([cx, cy], i) => (
            <polygon
              key={`d${i}`}
              points={`${cx},${cy-8} ${cx+8},${cy} ${cx},${cy+8} ${cx-8},${cy}`}
            />
          ))}
        </g>

        {/* ── Regla de medición horizontal (zona inferior) ── */}
        <g stroke={SL} strokeWidth="0.75" fill="none">
          <line x1="60" y1="645" x2="560" y2="645"/>
          {[60,125,190,255,320,385,450,515,560].map((x, i) => (
            <line key={x} x1={x} y1={i === 0 || i === 8 ? 637 : 641} x2={x} y2="649"/>
          ))}
        </g>

        {/* ── Regla vertical (borde derecho) ─────────────── */}
        <g stroke={SL} strokeWidth="0.75" fill="none">
          <line x1="1402" y1="80" x2="1402" y2="600"/>
          {[80,145,210,275,340,405,470,535,600].map((y, i) => (
            <line key={y} x1={i === 0 || i === 8 ? 1394 : 1398} y1={y} x2="1410" y2={y}/>
          ))}
        </g>

        {/* ── IDs de sistema flotantes ─────────────────────── */}
        <g
          fill={ST}
          stroke="none"
          fontSize="7"
          fontFamily="var(--font-mono)"
          letterSpacing="0.10em"
        >
          <text x="102" y="191">SYS.001</text>
          <text x="152" y="509">SYS.002</text>
          <text x="271" y="161">SYS.003</text>
          <text x="407" y="582">SYS.008</text>
          <text x="866" y="554">SYS.013</text>
          <text x="1147" y="171">SYS.017</text>
          <text x="1278" y="533">SYS.019</text>
          <text x="1387" y="313">SYS.020</text>
        </g>

        {/* ── Clusters de puntos en zonas vacías ─────────── */}
        <g fill={SF} stroke="none" opacity="0.55">
          {/* Esquina superior-izquierda */}
          {[50,80,110,140,170].flatMap(x =>
            [58,82,106].map(y => (
              <circle key={`dp${x}${y}`} cx={x} cy={y} r={1.5}/>
            ))
          )}
          {/* Esquina superior-derecha */}
          {[1260,1295,1330,1365].flatMap(x =>
            [90,118,146].map(y => (
              <circle key={`dr${x}${y}`} cx={x} cy={y} r={1.5}/>
            ))
          )}
        </g>

        {/* ── Bloque de título técnico (esquina inferior-der.) ── */}
        <g stroke={S} strokeWidth="0.75" fill="none">
          <rect x="1058" y="622" width="370" height="90" rx="2"/>
          <line x1="1058" y1="644" x2="1428" y2="644"/>
          <line x1="1058" y1="664" x2="1428" y2="664"/>
          <line x1="1058" y1="684" x2="1428" y2="684"/>
          <line x1="1240" y1="644" x2="1240" y2="712"/>
        </g>
        <g
          fill={ST}
          stroke="none"
          fontSize="7"
          fontFamily="var(--font-mono)"
          letterSpacing="0.09em"
        >
          <text x="1067" y="636">SINERGIA INDUSTRIAS · ARQUITECTURA DE SISTEMAS</text>
          <text x="1067" y="657">DWG: SI-NET-001   REV: A</text>
          <text x="1067" y="677">PROYECTO: GESTIÓN INDUSTRIAL INTEGRADA</text>
          <text x="1067" y="697">VIÑA DEL MAR · CHILE · 2025</text>
          <text x="1250" y="657">ESCALA: NTS</text>
          <text x="1250" y="677">HOJA: 1/1</text>
        </g>
      </svg>
    </div>
  );
}
