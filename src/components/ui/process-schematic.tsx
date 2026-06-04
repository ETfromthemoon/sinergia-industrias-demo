"use client";
import { motion } from "motion/react";

/**
 * Hub-and-spoke engineering schematic for the hero.
 * Central SINERGIA node distributes to four service modules via
 * manhattan-routed connectors with flowing cyan data dashes.
 * viewBox 520×440, scales responsively.
 *
 * Colors are literal rgb/rgba (not var()→oklch): oklch does NOT render in SVG
 * fill/stroke under Chromium headless (Playwright), and this panel now sits on
 * the dark carbon hero, so the HUD palette is tuned for a dark glass surface.
 */

const C = {
  cyan: "rgb(86, 190, 220)",
  cyanDim: "rgba(86, 190, 220, 0.85)",
  core: "rgb(44, 64, 132)",
  line: "rgba(255, 255, 255, 0.16)",
  chip: "rgba(255, 255, 255, 0.05)",
  chipBorder: "rgba(255, 255, 255, 0.18)",
  textDim: "rgba(255, 255, 255, 0.45)",
} as const;

type NodeDef = {
  id: string;
  label: string;
  index: string;
  x: number;
  y: number;
};

const W = 92;
const H = 48;

const MODULES: readonly NodeDef[] = [
  { id: "rep", label: "REP", index: "01", x: 36, y: 58 },
  { id: "proc", label: "PROC", index: "02", x: 392, y: 58 },
  { id: "odoo", label: "ODOO", index: "03", x: 36, y: 334 },
  { id: "data", label: "DATA", index: "04", x: 392, y: 334 },
];

// Manhattan connector paths from center node edges to each module edge.
const CONNECTORS: readonly { id: string; d: string }[] = [
  { id: "rep", d: "M204 220 H166 V82 H128" },
  { id: "proc", d: "M316 220 H354 V82 H392" },
  { id: "odoo", d: "M204 220 H166 V358 H128" },
  { id: "data", d: "M316 220 H354 V358 H392" },
];

const JUNCTIONS = [
  { x: 166, y: 220 },
  { x: 354, y: 220 },
];

export function ProcessSchematic() {
  return (
    <svg
      viewBox="0 0 520 440"
      className="h-auto w-full"
      style={{ fontFamily: "var(--font-mono)" }}
      role="img"
      aria-label="Esquema: Sinergia distribuye cuatro áreas de servicio — REP, Procesos, Odoo y Datos."
    >
      {/* connectors (static base — reduced-motion safe) */}
      {CONNECTORS.map((c, i) => (
        <motion.path
          key={c.id}
          d={c.d}
          fill="none"
          stroke={C.line}
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
        />
      ))}

      {/* flowing data dashes (decorative, CSS-driven, stops on reduced-motion) */}
      {CONNECTORS.map((c) => (
        <path
          key={`flow-${c.id}`}
          d={c.d}
          fill="none"
          stroke={C.cyan}
          strokeWidth="1.5"
          strokeDasharray="3 13"
          className="animate-dash-flow"
        />
      ))}

      {/* junction nodes */}
      {JUNCTIONS.map((j, i) => (
        <motion.circle
          key={`j-${i}`}
          cx={j.x}
          cy={j.y}
          r="3"
          fill={C.cyan}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.4 }}
        />
      ))}

      {/* center hub node */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        <rect x="204" y="180" width="112" height="80" fill={C.core} />
        <rect
          x="204"
          y="180"
          width="112"
          height="80"
          fill="none"
          stroke={C.cyan}
          strokeWidth="1.25"
          opacity="0.55"
        />
        <text
          x="260"
          y="214"
          textAnchor="middle"
          fill="white"
          fontSize="15"
          fontWeight="700"
          letterSpacing="1"
        >
          SINERGIA
        </text>
        <text
          x="260"
          y="234"
          textAnchor="middle"
          fill={C.cyan}
          fontSize="9"
          letterSpacing="2"
        >
          SYS.CORE
        </text>
      </motion.g>

      {/* module nodes */}
      {MODULES.map((n, i) => {
        const cx = n.x + W / 2;
        return (
          <motion.g
            key={n.id}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <rect
              x={n.x}
              y={n.y}
              width={W}
              height={H}
              fill={C.chip}
              stroke={C.chipBorder}
              strokeWidth="1.5"
            />
            {/* top accent rule */}
            <rect x={n.x} y={n.y} width={W} height="3" fill={C.cyan} />
            <text
              x={cx}
              y={n.y + 24}
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontWeight="700"
              letterSpacing="1"
            >
              {n.label}
            </text>
            <text
              x={cx}
              y={n.y + 38}
              textAnchor="middle"
              fill={C.textDim}
              fontSize="8"
              letterSpacing="1.5"
            >
              MÓD.{n.index}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}
