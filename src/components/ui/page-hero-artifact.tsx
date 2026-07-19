"use client";
import { motion } from "motion/react";

export type ArtifactVariant =
  | "rep"
  | "processes"
  | "data"
  | "odoo"
  | "cases"
  | "contact";

type PageHeroArtifactProps = {
  variant: ArtifactVariant;
  className?: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;
const cyan = "oklch(0.60 0.105 208)";
const navy = "oklch(0.24 0.12 256)";
const steel = "oklch(0.82 0.010 240)";

function ArtifactSvg({ children, stroke, className }: { children: React.ReactNode; stroke?: string; className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 320 280"
      fill="none"
      stroke={stroke ?? cyan}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.svg>
  );
}

/* ── REP: Circular economy / compliance shield ────── */
function RepArtifact() {
  return (
    <ArtifactSvg>
      {/* Outer rotating ring */}
      <motion.circle cx="160" cy="140" r="110" strokeOpacity={0.2}
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 1.2, ease: EASE } } }} />
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "160px 140px" }}
      >
        <circle cx="160" cy="30" r="3" fill={cyan} stroke="none" />
        <circle cx="260" cy="100" r="2.5" fill={cyan} stroke="none" />
        <circle cx="230" cy="235" r="2" fill={cyan} stroke="none" />
        <circle cx="80" cy="220" r="2.5" fill={cyan} stroke="none" />
        <circle cx="55" cy="100" r="2" fill={cyan} stroke="none" />
      </motion.g>

      {/* Center shield */}
      <motion.path d="M160 65l-45 22v50c0 48 45 78 45 78s45-30 45-78V87z"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.9, ease: EASE } } }} />
      <motion.path d="M142 140l12 12 24-28"
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 0.5, delay: 0.6, ease: EASE } } }}
        strokeWidth={2} />

      {/* Arrows around the ring */}
      {[0, 120, 240].map((angle, i) => (
        <motion.path key={angle} d={`M${160 + 115 * Math.cos((angle-15)*Math.PI/180)} ${140 + 115 * Math.sin((angle-15)*Math.PI/180)} l8 4 l-6 6`}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.3 + i*0.2 } } }} />
      ))}
    </ArtifactSvg>
  );
}

/* ── Processes: Flow nodes / graph ────── */
function ProcessesArtifact() {
  const nodes = [
    { x: 160, y: 50, r: 14 },
    { x: 80, y: 130, r: 12 },
    { x: 240, y: 130, r: 16 },
    { x: 120, y: 220, r: 13 },
    { x: 200, y: 220, r: 11 },
  ];
  const edges = [[0,1],[0,2],[1,3],[2,3],[2,4],[1,4]];
  return (
    <ArtifactSvg>
      {/* Edges */}
      {edges.map(([a, b], i) => (
        <motion.line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
          strokeOpacity={0.25}
          variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 0.7, delay: 0.1*i, ease: EASE } } }} />
      ))}
      {/* Nodes */}
      {nodes.map((n, i) => (
        <motion.g key={i}>
          <motion.circle cx={n.x} cy={n.y} r={n.r} strokeOpacity={0.6}
            variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.15 + i*0.12, ease: "backOut" } } }} />
          <motion.circle cx={n.x} cy={n.y} r={3} fill={cyan} stroke="none"
            variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 0.4 + i*0.12 } } }} />
        </motion.g>
      ))}
      {/* Pulsing highlight on largest node */}
      <motion.circle cx={nodes[2].x} cy={nodes[2].y} r={nodes[2].r + 4}
        stroke={cyan} strokeOpacity={0.4} fill="none" strokeWidth={1}
        animate={{ r: [nodes[2].r + 2, nodes[2].r + 8, nodes[2].r + 2], opacity: [0.6, 0.2, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
    </ArtifactSvg>
  );
}

/* ── Data: Dashboard / charts ────── */
function DataArtifact() {
  return (
    <ArtifactSvg>
      {/* Chart grid */}
      <motion.line x1="40" y1="50" x2="40" y2="240" stroke={steel} strokeOpacity={0.3}
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 0.6, ease: EASE } } }} />
      <motion.line x1="40" y1="240" x2="290" y2="240" stroke={steel} strokeOpacity={0.3}
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 0.6, delay: 0.15, ease: EASE } } }} />

      {/* Bars */}
      {[0.4, 0.7, 0.55, 0.85, 0.6, 0.75].map((h, i) => (
        <motion.rect key={i} x={55 + i*40} y={240 - h*180} width={24} height={h*180}
          fill={i === 3 ? cyan : "none"} fillOpacity={i === 3 ? 0.2 : 0}
          stroke={i === 3 ? cyan : steel} strokeOpacity={i === 3 ? 1 : 0.4} rx={2}
          variants={{ hidden: { scaleY: 0, transformOrigin: "bottom" }, visible: { scaleY: 1, transition: { duration: 0.5, delay: 0.2 + i*0.08, ease: "backOut" } } }} />
      ))}

      {/* Trend line */}
      <motion.polyline points="55,130 95,100 135,115 175,80 215,95 255,75 279,65"
        fill="none" strokeWidth={2}
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 0.9, delay: 0.7, ease: EASE } } }} />

      {/* Data dots on trend line */}
      {[55, 95, 135, 175, 255].map((cx, i) => (
        <motion.circle key={i} cx={cx} cy={[130,100,115,80,75][i]} r={3} fill={cyan} stroke="none"
          variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 1 + i*0.1 } } }} />
      ))}
    </ArtifactSvg>
  );
}

/* ── Odoo: Connected modules / integration ────── */
function OdooArtifact() {
  const modules = [
    { x: 160, y: 55, label: "ERP" },
    { x: 75, y: 140, label: "CRM" },
    { x: 245, y: 140, label: "HR" },
    { x: 110, y: 220, label: "INV" },
    { x: 210, y: 220, label: "FIN" },
  ];

  return (
    <ArtifactSvg>
      {/* Hub center */}
      <motion.circle cx="160" cy="140" r="45" strokeOpacity={0.5}
        variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.7, ease: "backOut" } } }} />
      <motion.circle cx="160" cy="140" r="6" fill={cyan} stroke="none"
        variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 0.5 } } }} />

      {/* Radiating pulse */}
      <motion.circle cx="160" cy="140" r="45" fill="none" stroke={cyan} strokeWidth={1} strokeOpacity={0.3}
        animate={{ r: [45, 65, 45], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />

      {/* Satellite modules */}
      {modules.map((m, i) => (
        <motion.g key={m.label}
          variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1, transition: { delay: 0.2 + i*0.15, duration: 0.5, ease: "backOut" } } }}>
          <motion.line x1={160} y1={140} x2={m.x} y2={m.y} strokeOpacity={0.2}
            variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { delay: 0.35 + i*0.15, duration: 0.6 } } }} />
          <rect x={m.x - 22} y={m.y - 14} width={44} height={28} rx={4} strokeOpacity={0.5} fill="oklch(0.24 0.12 256 / 0.3)" />
          <text x={m.x} y={m.y + 4} textAnchor="middle" fill={cyan} fontSize="9" fontFamily="monospace" fontWeight="bold" stroke="none">
            {m.label}
          </text>
        </motion.g>
      ))}
    </ArtifactSvg>
  );
}

/* ── Cases: Trophy / growth ────── */
function CasesArtifact() {
  return (
    <ArtifactSvg>
      {/* Growth curve */}
      <motion.path d="M40 230 Q100 200 140 170 Q180 140 210 100 Q240 60 280 30"
        fill="none" strokeWidth={2.5}
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 1.1, ease: EASE } } }} />

      {/* Milestone markers */}
      {[[140,170],[210,100],[280,30]].map(([cx, cy], i) => (
        <motion.g key={i}>
          <motion.circle cx={cx} cy={cy} r={14} strokeOpacity={0.3}
            variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 0.6 + i*0.3, duration: 0.4, ease: "backOut" } } }} />
          <motion.circle cx={cx} cy={cy} r={4} fill={cyan} stroke="none"
            variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 0.75 + i*0.3 } } }} />
        </motion.g>
      ))}

      {/* Sparkle effects */}
      {[[120,150],[190,80],[265,20]].map(([sx, sy], i) => (
        <motion.g key={`s${i}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0.5, 1], scale: [0, 1.2, 0.8, 1] }}
          transition={{ delay: 0.8 + i*0.4, duration: 0.8, repeat: Infinity, repeatDelay: 2 }}>
          <line x1={sx-4} y1={sy} x2={sx+4} y2={sy} strokeWidth={1.5} />
          <line x1={sx} y1={sy-4} x2={sx} y2={sy+4} strokeWidth={1.5} />
        </motion.g>
      ))}
    </ArtifactSvg>
  );
}

/* ── Contact: Message / communication ────── */
function ContactArtifact() {
  return (
    <ArtifactSvg stroke={navy}>
      {/* Message bubbles */}
      <motion.path d="M80 60h160a12 12 0 0112 12v80a12 12 0 01-12 12h-40l-30 24v-24H80a12 12 0 01-12-12V72a12 12 0 0112-12z"
        strokeOpacity={0.5} fill="oklch(0.24 0.12 256 / 0.04)"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.9, ease: EASE } } }} />

      {/* Animated dots (typing) */}
      {[0, 1, 2].map((i) => (
        <motion.circle key={i} cx={110 + i*14} cy={100} r={4} fill={navy} fillOpacity={0.3} stroke="none"
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.3, 1] }}
          transition={{ duration: 1.2, delay: i*0.2, repeat: Infinity, repeatDelay: 1.5 }} />
      ))}

      {/* Secondary message */}
      <motion.path d="M230 160h-100a8 8 0 01-8-8v-16h-30l20 16"
        strokeOpacity={0.25}
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 0.6, delay: 0.5 } } }} />

      {/* Send arrow */}
      <motion.path d="M200 180l30 10l-10 30" strokeWidth={2}
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.5, delay: 0.8, ease: EASE } } }} />
      {[[215,185],[225,190],[235,195]].map(([ax, ay], i) => (
        <motion.circle key={i} cx={ax} cy={ay} r={2} fill={navy} stroke="none"
          variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 1 + i*0.15 } } }} />
      ))}
    </ArtifactSvg>
  );
}

export function PageHeroArtifact({ variant, className }: PageHeroArtifactProps) {
  const component = {
    rep: RepArtifact,
    processes: ProcessesArtifact,
    data: DataArtifact,
    odoo: OdooArtifact,
    cases: CasesArtifact,
    contact: ContactArtifact,
  }[variant];

  if (!component) return null;

  const Comp = component;
  return (
    <div className={className}>
      <Comp />
    </div>
  );
}
