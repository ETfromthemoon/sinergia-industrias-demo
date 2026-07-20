"use client";
import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;
const CYAN = "oklch(0.60 0.105 208)";
const SIGNAL = "oklch(0.78 0.16 67)";
const WHITE_10 = "oklch(1 0 0 / 0.10)";
const WHITE_20 = "oklch(1 0 0 / 0.20)";

function DataParticle({ fromX, fromY, toX, toY, delay }: { fromX: number; fromY: number; toX: number; toY: number; delay: number }) {
  return (
    <motion.circle
      r={2.5}
      fill={CYAN}
      stroke="none"
      initial={{ cx: fromX, cy: fromY, opacity: 0 }}
      animate={{
        cx: [fromX, toX, fromX],
        cy: [fromY, toY, fromY],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

interface ModuleNode {
  x: number; y: number; angle: number;
  icon: "shield" | "box" | "bar-chart" | "git-branch";
  label: string; code: string;
}

const MODULES: ModuleNode[] = [
  { x: 220, y: 105, angle: -45, icon: "shield", label: "Ley REP", code: "REP" },
  { x: 220, y: 255, angle: 45,  icon: "box", label: "Odoo ERP", code: "ODOO" },
  { x: 60,  y: 255, angle: 135, icon: "bar-chart", label: "Datos", code: "DATA" },
  { x: 60,  y: 105, angle: -135, icon: "git-branch", label: "Procesos", code: "PROC" },
];

export function HeroSchematic() {
  const cx = 140, cy = 180;

  return (
    <div className="relative w-full aspect-square max-w-[420px] mx-auto">
      <motion.svg
        viewBox="0 0 280 360"
        fill="none"
        className="w-full h-full"
        initial="hidden"
        animate="visible"
      >
        {/* Background dots grid (subtle blueprint) */}
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: 5 }).map((_, col) => (
            <motion.circle
              key={`${row}-${col}`}
              cx={30 + col * 55} cy={40 + row * 60}
              r={1} fill={WHITE_20} stroke="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + row * 0.05 + col * 0.03, duration: 0.4 }}
            />
          ))
        )}

        {/* Connections between hub and modules */}
        {MODULES.map((mod, i) => (
          <motion.g key={`conn-${mod.code}`}>
            {/* Dashed connection line */}
            <motion.line
              x1={cx} y1={cy} x2={mod.x} y2={mod.y}
              stroke={CYAN} strokeOpacity={0.25} strokeWidth={1}
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: EASE }}
            />
            {/* Animated flowing dashes */}
            <motion.line
              x1={cx} y1={cy} x2={mod.x} y2={mod.y}
              stroke={CYAN} strokeOpacity={0.6} strokeWidth={1}
              strokeDasharray={`2  ${20 + i * 4}`}
              animate={{ strokeDashoffset: [0, -80] }}
              transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "linear" }}
            />
          </motion.g>
        ))}

        {/* Cross-connections between modules (ring) */}
        {MODULES.map((mod, i) => {
          const next = MODULES[(i + 1) % MODULES.length];
          return (
            <motion.line
              key={`cross-${i}`}
              x1={mod.x} y1={mod.y} x2={next.x} y2={next.y}
              stroke={WHITE_10} strokeWidth={0.8} strokeDasharray="3 6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 1 + i * 0.2, ease: EASE }}
            />
          );
        })}

        {/* Data particles flowing */}
        {MODULES.map((mod, i) => (
          <DataParticle key={`dp-${i}`} fromX={cx} fromY={cy} toX={mod.x} toY={mod.y} delay={i * 0.6} />
        ))}
        {MODULES.map((mod, i) => {
          const next = MODULES[(i + 1) % MODULES.length];
          return <DataParticle key={`cr-${i}`} fromX={mod.x} fromY={mod.y} toX={next.x} toY={next.y} delay={1.5 + i * 0.5} />;
        })}

        {/* Central hub — outer rotating ring */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        >
          <circle cx={cx} cy={cy} r={46} stroke={CYAN} strokeOpacity={0.2} strokeWidth={1} fill="none" />
          <circle cx={cx} cy={cy - 46} r={2.5} fill={CYAN} stroke="none" />
          <circle cx={cx} cy={cy + 46} r={1.5} fill={CYAN} stroke="none" />
          <circle cx={cx - 46} cy={cy} r={2} fill={CYAN} stroke="none" />
          <circle cx={cx + 46} cy={cy} r={1.5} fill={CYAN} stroke="none" />
        </motion.g>

        {/* Inner ring — counter-rotating */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        >
          <circle cx={cx} cy={cy} r={35} stroke={WHITE_10} strokeWidth={0.8} fill="none" />
        </motion.g>

        {/* Hub center */}
        <motion.circle cx={cx} cy={cy} r={22} fill="oklch(0.16 0.12 257 / 0.6)" stroke={CYAN} strokeOpacity={0.5} strokeWidth={1}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "backOut" }} />

        {/* SINERGIA text in center */}
        <motion.text x={cx} y={cy - 2} textAnchor="middle" fill="white" fontSize="6" fontFamily="var(--font-mono)" fontWeight="bold" stroke="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}>
          SINERGIA
        </motion.text>
        <motion.text x={cx} y={cy + 8} textAnchor="middle" fill={CYAN} fontSize="4.5" fontFamily="var(--font-mono)" stroke="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}>
          INDUSTRIAS
        </motion.text>

        {/* Pulsing rings from center */}
        {[0, 1].map((i) => (
          <motion.circle key={`pulse-${i}`} cx={cx} cy={cy} r={22} fill="none" stroke={CYAN} strokeWidth={0.8}
            animate={{ r: [22, 55, 70], opacity: [0.5, 0.15, 0] }}
            transition={{ duration: 3.5, delay: 1.5 + i * 1.7, repeat: Infinity, ease: "easeOut" }} />
        ))}

        {/* Module nodes */}
        {MODULES.map((mod, i) => (
          <motion.g key={`mod-${mod.code}`}>
            {/* Module circle */}
            <motion.circle cx={mod.x} cy={mod.y} r={26} fill="oklch(0.16 0.12 257 / 0.5)" stroke={CYAN} strokeOpacity={0.4} strokeWidth={1}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.12, ease: "backOut" }} />

            {/* Module icon - simplified SVG */}
            {mod.icon === "shield" && (
              <g stroke={CYAN} strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
                <motion.path d={`M${mod.x} ${mod.y - 14}s6-3 6-7v-4l-6-2-6 2v4c0 4 6 7 6 7z`}
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ delay: 0.8 + i * 0.12, duration: 0.5 }} />
                <motion.path d={`M${mod.x - 3} ${mod.y - 2}l2 3 4-5`}
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ delay: 1.1 + i * 0.12, duration: 0.4 }} />
              </g>
            )}
            {mod.icon === "box" && (
              <g stroke={CYAN} strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
                <motion.path d={`M${mod.x - 10} ${mod.y - 8}l10-5 10 5v10l-10 5-10-5z`}
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ delay: 0.8 + i * 0.12, duration: 0.5 }} />
                <motion.line x1={mod.x - 10} y1={mod.y - 1} x2={mod.x + 10} y2={mod.y - 1}
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ delay: 1.1 + i * 0.12, duration: 0.3 }} />
              </g>
            )}
            {mod.icon === "bar-chart" && (
              <g stroke={CYAN} strokeWidth={1.3} strokeLinecap="round">
                <motion.line x1={mod.x - 8} y1={mod.y + 8} x2={mod.x - 8} y2={mod.y - 6}
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ delay: 0.8 + i * 0.12, duration: 0.4 }} />
                <motion.line x1={mod.x} y1={mod.y + 8} x2={mod.x} y2={mod.y - 10}
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ delay: 0.95 + i * 0.12, duration: 0.4 }} />
                <motion.line x1={mod.x + 8} y1={mod.y + 8} x2={mod.x + 8} y2={mod.y - 2}
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ delay: 1.1 + i * 0.12, duration: 0.4 }} />
              </g>
            )}
            {mod.icon === "git-branch" && (
              <g stroke={CYAN} strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
                <motion.circle cx={mod.x - 6} cy={mod.y - 5} r={3}
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.12, duration: 0.3 }} />
                <motion.line x1={mod.x - 6} y1={mod.y - 2} x2={mod.x - 6} y2={mod.y + 6}
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ delay: 0.95 + i * 0.12, duration: 0.3 }} />
                <motion.circle cx={mod.x + 6} cy={mod.y + 5} r={3}
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  transition={{ delay: 1.1 + i * 0.12, duration: 0.3 }} />
                <motion.path d={`M${mod.x + 6} ${mod.y + 2}Q${mod.x} ${mod.y} ${mod.x - 3} ${mod.y - 2}`}
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ delay: 1.25 + i * 0.12, duration: 0.4 }} />
              </g>
            )}

            {/* Module label */}
            <motion.text x={mod.x} y={mod.y + 18} textAnchor="middle" fill="white" fontSize="5.5" fontFamily="var(--font-display)" fontWeight="bold" stroke="none"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.75 + i * 0.12, duration: 0.4 }}>
              {mod.label}
            </motion.text>
            <motion.text x={mod.x} y={mod.y + 8} textAnchor="middle" fill={SIGNAL} fontSize="4.5" fontFamily="var(--font-mono)" stroke="none"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.85 + i * 0.12, duration: 0.4 }}>
              {mod.code}
            </motion.text>
          </motion.g>
        ))}

        {/* Bottom KPI bars */}
        {[0.35, 0.7, 0.55].map((h, i) => (
          <motion.g key={`kpi-${i}`}>
            <motion.rect
              x={40 + i * 75} y={310} width={20} height={0}
              fill={i === 1 ? CYAN : "none"} fillOpacity={i === 1 ? 0.25 : 0}
              stroke={i === 1 ? CYAN : WHITE_20} strokeWidth={1} rx={1}
              initial={{ height: 0, y: 335 }}
              animate={{ height: h * 40, y: 335 - h * 40 }}
              transition={{ duration: 1, delay: 1.5 + i * 0.2, ease: "backOut" }}
            />
            <motion.text x={50 + i * 75} y={350} textAnchor="middle" fill={WHITE_20} fontSize="4" fontFamily="var(--font-mono)" stroke="none"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1.8 + i * 0.2, duration: 0.4 }}>
              {["REP", "ERP", "DATA"][i]}
            </motion.text>
          </motion.g>
        ))}
      </motion.svg>
    </div>
  );
}
