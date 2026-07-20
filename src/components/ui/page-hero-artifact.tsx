"use client";
import { motion } from "motion/react";

export type ArtifactVariant =
  | "rep" | "processes" | "data" | "odoo" | "cases" | "contact"
  | "team" | "knowledge";

type PageHeroArtifactProps = { variant: ArtifactVariant; className?: string; };

const EASE = [0.22, 1, 0.36, 1] as const;
const CYAN = "oklch(0.60 0.105 208)";
const NAVY = "oklch(0.24 0.12 256)";
const SIGNAL = "oklch(0.78 0.16 67)";
const WHITE_10 = "oklch(1 0 0 / 0.10)";
const WHITE_20 = "oklch(1 0 0 / 0.20)";

function ArtifactSvg({ children, stroke, className }: { children: React.ReactNode; stroke?: string; className?: string }) {
  return (
    <motion.svg viewBox="0 0 320 280" fill="none" stroke={stroke ?? CYAN} strokeWidth={1.5}
      strokeLinecap="round" strokeLinejoin="round" className={className} initial="hidden" animate="visible">
      {children}
    </motion.svg>
  );
}

/* ── Shared micro-pulse helper ── */
function MicroPulse({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.g
      animate={{ scale: [1, 1.03, 1] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay }}
      style={{ transformOrigin: "center" }}
    >
      {children}
    </motion.g>
  );
}

/* ── Shared flowing-dash connection line ── */
function FlowLine({ x1, y1, x2, y2, delay = 0 }: { x1: number; y1: number; x2: number; y2: number; delay?: number }) {
  return (
    <>
      <motion.line x1={x1} y1={y1} x2={x2} y2={y2} strokeOpacity={0.2} strokeDasharray="3 5"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay, ease: EASE }} />
      <motion.line x1={x1} y1={y1} x2={x2} y2={y2} strokeOpacity={0.5} strokeWidth={1.2}
        strokeDasharray="2 12" animate={{ strokeDashoffset: [0, -40] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay }} />
    </>
  );
}

/* ── REP: Circular economy / compliance shield ────── */
function RepArtifact() {
  return (
    <ArtifactSvg>
      <motion.circle cx="160" cy="140" r="110" strokeOpacity={0.15}
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 1.2, ease: EASE } } }} />
      <motion.g animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "160px 140px" }}>
        {[[160,30],[260,100],[230,235],[80,220],[55,100]].map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r={2.5 + (i%2)} fill={CYAN} stroke="none" />
        ))}
      </motion.g>
      <MicroPulse>
        <motion.path d="M160 65l-45 22v50c0 48 45 78 45 78s45-30 45-78V87z"
          variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.9, ease: EASE } } }} />
      </MicroPulse>
      <motion.path d="M142 140l12 12 24-28" strokeWidth={2}
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 0.5, delay: 0.6, ease: EASE } } }} />
      <motion.circle cx="160" cy="140" r="68" fill="none" strokeWidth={0.5} strokeOpacity={0.08}
        animate={{ r: [68, 76, 68], opacity: [0.1, 0.04, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
    </ArtifactSvg>
  );
}

/* ── Processes: Graph with flowing connections ────── */
function ProcessesArtifact() {
  const ns = [{x:160,y:50},{x:80,y:130},{x:240,y:130},{x:120,y:220},{x:200,y:220}];
  const edges: [number,number][] = [[0,1],[0,2],[1,3],[2,3],[2,4],[1,4]];
  return (
    <ArtifactSvg>
      {edges.map(([a,b],i) => <FlowLine key={i} x1={ns[a].x} y1={ns[a].y} x2={ns[b].x} y2={ns[b].y} delay={0.1*i} />)}
      {ns.map((n,i) => (
        <MicroPulse key={i} delay={i*0.3}>
          <motion.circle cx={n.x} cy={n.y} r={n===ns[2]?16:13} strokeOpacity={0.5} fill="oklch(0.24 0.12 256 / 0.08)"
            variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.15 + i*0.12, ease: "backOut" } } }} />
          <motion.circle cx={n.x} cy={n.y} r={3} fill={CYAN} stroke="none"
            variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 0.4 + i*0.12 } } }} />
        </MicroPulse>
      ))}
    </ArtifactSvg>
  );
}

/* ── Data: Dashboard charts with flowing dashes ────── */
function DataArtifact() {
  return (
    <ArtifactSvg>
      <FlowLine x1={40} y1={50} x2={40} y2={240} />
      <FlowLine x1={40} y1={240} x2={290} y2={240} />
      {[0.4,0.7,0.55,0.85,0.6,0.75].map((h,i) => (
        <motion.rect key={i} x={55+i*40} y={240-h*180} width={24} height={h*180}
          fill={i===3?CYAN:"none"} fillOpacity={i===3?0.2:0} stroke={i===3?CYAN:WHITE_20} strokeOpacity={i===3?1:0.4} rx={2}
          variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1, transition: { duration: 0.5, delay: 0.2+i*0.08, ease: "backOut" } } }}
          style={{ transformOrigin: "bottom" }} />
      ))}
      <MicroPulse>
        <motion.polyline points="55,130 95,100 135,115 175,80 215,95 255,75 279,65"
          fill="none" strokeWidth={2}
          variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 0.9, delay: 0.7, ease: EASE } } }} />
      </MicroPulse>
      {[55,95,135,175,255].map((cx,i) => (
        <motion.circle key={i} cx={cx} cy={[130,100,115,80,75][i]} r={3} fill={CYAN} stroke="none"
          variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 1+i*0.1 } } }} />
      ))}
    </ArtifactSvg>
  );
}

/* ── Odoo: Connected modules ────── */
function OdooArtifact() {
  const ms = [{x:160,y:55},{x:75,y:140},{x:245,y:140},{x:110,y:220},{x:210,y:220}];
  const labels = ["ERP","CRM","HR","INV","FIN"];
  return (
    <ArtifactSvg>
      <motion.circle cx="160" cy="140" r="45" strokeOpacity={0.4}
        variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.7, ease: "backOut" } } }} />
      <MicroPulse><motion.circle cx="160" cy="140" r="8" fill={CYAN} stroke="none"
        variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 0.5 } } }} /></MicroPulse>
      <motion.circle cx="160" cy="140" r="45" fill="none" strokeWidth={1} strokeOpacity={0.25}
        animate={{ r: [45, 62, 45], opacity: [0.35, 0, 0.35] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
      {ms.map((m,i) => (
        <motion.g key={i} variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1, transition: { delay: 0.2+i*0.15, duration: 0.5, ease: "backOut" } } }}>
          <FlowLine x1={160} y1={140} x2={m.x} y2={m.y} delay={0.2+i*0.15} />
          <MicroPulse delay={i*0.4}>
            <rect x={m.x-22} y={m.y-14} width={44} height={28} rx={4} strokeOpacity={0.4} fill="oklch(0.24 0.12 256 / 0.25)" />
          </MicroPulse>
          <text x={m.x} y={m.y+4} textAnchor="middle" fill={CYAN} fontSize="9" fontFamily="monospace" fontWeight="bold" stroke="none">{labels[i]}</text>
        </motion.g>
      ))}
    </ArtifactSvg>
  );
}

/* ── Cases: Growth curve with sparkles ────── */
function CasesArtifact() {
  return (
    <ArtifactSvg>
      <MicroPulse>
        <motion.path d="M40 230 Q100 200 140 170 Q180 140 210 100 Q240 60 280 30"
          fill="none" strokeWidth={2.5}
          variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 1.1, ease: EASE } } }} />
      </MicroPulse>
      {[[140,170],[210,100],[280,30]].map(([cx,cy],i) => (
        <MicroPulse key={i} delay={i*0.5}>
          <motion.circle cx={cx} cy={cy} r={14} strokeOpacity={0.25}
            variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 0.6+i*0.3, duration: 0.4, ease: "backOut" } } }} />
          <motion.circle cx={cx} cy={cy} r={4} fill={CYAN} stroke="none"
            variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 0.75+i*0.3 } } }} />
        </MicroPulse>
      ))}
      {[[120,150],[190,80],[265,20]].map(([sx,sy],i) => (
        <motion.g key={i} initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0,1,0.5,1], scale: [0,1.2,0.8,1] }}
          transition={{ delay: 0.8+i*0.4, duration: 0.8, repeat: Infinity, repeatDelay: 2 }}>
          <line x1={sx-4} y1={sy} x2={sx+4} y2={sy} strokeWidth={1.5} />
          <line x1={sx} y1={sy-4} x2={sx} y2={sy+4} strokeWidth={1.5} />
        </motion.g>
      ))}
    </ArtifactSvg>
  );
}

/* ── Contact: Chat bubbles with flowing animation ────── */
function ContactArtifact() {
  return (
    <ArtifactSvg stroke={NAVY}>
      <motion.path d="M80 60h160a12 12 0 0112 12v80a12 12 0 01-12 12h-40l-30 24v-24H80a12 12 0 01-12-12V72a12 12 0 0112-12z"
        strokeOpacity={0.4} fill="oklch(0.24 0.12 256 / 0.04)"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.9, ease: EASE } } }} />
      {[0,1,2].map((i) => (
        <motion.circle key={i} cx={110+i*14} cy={100} r={4} fill={NAVY} fillOpacity={0.3} stroke="none"
          animate={{ opacity: [0.3,1,0.3], scale: [1,1.3,1] }}
          transition={{ duration: 1.2, delay: i*0.2, repeat: Infinity, repeatDelay: 1.5 }} />
      ))}
      <motion.path d="M230 160h-100a8 8 0 01-8-8v-16h-30l20 16" strokeOpacity={0.2}
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 0.6, delay: 0.5 } } }} />
      <motion.path d="M200 180l30 10l-10 30" strokeWidth={2}
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.5, delay: 0.8, ease: EASE } } }} />
      <motion.circle cx="160" cy="140" r="58" fill="none" stroke={NAVY} strokeWidth={0.5} strokeOpacity={0.06}
        animate={{ r: [58, 66, 58], opacity: [0.08, 0.03, 0.08] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
    </ArtifactSvg>
  );
}

/* ── Team: People / culture (Nosotros) ────── */
function TeamArtifact() {
  const people = [
    { x: 120, y: 90, r: 14 }, { x: 200, y: 90, r: 12 },
    { x: 90, y: 170, r: 13 }, { x: 170, y: 170, r: 15 }, { x: 240, y: 170, r: 12 },
  ];
  return (
    <ArtifactSvg>
      {/* Core circle */}
      <MicroPulse><motion.circle cx="160" cy="130" r="72" strokeOpacity={0.3} fill="none" strokeWidth={1.2}
        variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { duration: 0.8, ease: "backOut" } } }} /></MicroPulse>
      <motion.circle cx="160" cy="130" r="72" fill="none" stroke={CYAN} strokeWidth={0.5} strokeOpacity={0.1}
        animate={{ r: [72, 80, 72], opacity: [0.15, 0.05, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
      {/* Connecting ring flows */}
      {people.map((p, i) => <FlowLine key={i} x1={160} y1={130} x2={p.x} y2={p.y} delay={0.15*i} />)}
      {/* People nodes */}
      {people.map((p, i) => (
        <MicroPulse key={i} delay={i*0.3}>
          <motion.circle cx={p.x} cy={p.y} r={p.r} fill="oklch(0.24 0.12 256 / 0.2)" strokeOpacity={0.5}
            variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 0.3+i*0.1, duration: 0.5, ease: "backOut" } } }} />
          <motion.circle cx={p.x} cy={p.y} r={3} fill={CYAN} stroke="none"
            variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 0.5+i*0.1 } } }} />
        </MicroPulse>
      ))}
      {/* Center label */}
      <motion.text x="160" y="134" textAnchor="middle" fill="white" fontSize="6.5" fontFamily="var(--font-display)" fontWeight="bold" stroke="none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }}>EQUIPO</motion.text>
    </ArtifactSvg>
  );
}

/* ── Knowledge: Articles / blog ────── */
function KnowledgeArtifact() {
  return (
    <ArtifactSvg>
      {/* Articles stacking */}
      {[0,1,2].map((i) => (
        <motion.g key={i}>
          <motion.rect x={70+i*10} y={50+i*8} width={160} height={90} rx={3} fill="oklch(0.24 0.12 256 / 0.15)" strokeOpacity={0.25}
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 50+i*8, opacity: 1, transition: { delay: i*0.2, duration: 0.6, ease: EASE } } }} />
          {/* Text lines */}
          {[0,1,2,3].map((l) => (
            <motion.rect key={l} x={82+i*10} y={62+i*8 + l*14} width={120-l*20} height={3} rx={1.5} fill={CYAN} fillOpacity={0.2 - i*0.05} stroke="none"
              variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { delay: 0.4+i*0.15+l*0.1, duration: 0.4 } } }} />
          ))}
        </motion.g>
      ))}
      {/* Flowing pen */}
      <MicroPulse>
        <motion.g>
          <motion.rect x="260" y="190" width="6" height="30" rx="2" fill={SIGNAL} fillOpacity={0.2} stroke={SIGNAL} strokeWidth={1} strokeOpacity={0.5}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }} />
          <motion.polygon points="263,190 260,180 266,180"
            fill={SIGNAL} fillOpacity={0.15} stroke={SIGNAL} strokeWidth={1}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.5 }} />
        </motion.g>
      </MicroPulse>
      {/* Orbiting knowledge dots */}
      {[0,1,2].map((i) => (
        <motion.circle key={i} cx={160} cy={100} r={2} fill={CYAN} stroke="none"
          animate={{ 
            cx: [160 + 70*Math.cos(i*2.1), 160 + 70*Math.cos(i*2.1 + Math.PI*2)],
            cy: [100 + 55*Math.sin(i*2.1), 100 + 55*Math.sin(i*2.1 + Math.PI*2)],
            opacity: [0.8, 0.3, 0.8]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: i*1.5 }} />
      ))}
    </ArtifactSvg>
  );
}

export function PageHeroArtifact({ variant, className }: PageHeroArtifactProps) {
  const comp = {
    rep: RepArtifact, processes: ProcessesArtifact, data: DataArtifact,
    odoo: OdooArtifact, cases: CasesArtifact, contact: ContactArtifact,
    team: TeamArtifact, knowledge: KnowledgeArtifact,
  }[variant] ?? null;
  if (!comp) return null;
  const C = comp;
  return <div className={className}><C /></div>;
}
