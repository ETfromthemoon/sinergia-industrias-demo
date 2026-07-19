"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export type IconName =
  | "box"
  | "calculator"
  | "cart"
  | "globe"
  | "users"
  | "megaphone"
  | "settings"
  | "zap"
  | "shield"
  | "git-branch"
  | "bar-chart"
  | "trending-up"
  | "clock"
  | "dollar"
  | "award"
  | "file-text"
  | "droplets"
  | "battery"
  | "disc"
  | "circle-dot"
  | "monitor";

type AnimatedIconProps = {
  name: IconName;
  size?: number;
  className?: string;
  tone?: "navy" | "cyan" | "signal" | "white";
};

const TONE_COLORS: Record<string, string> = {
  navy: "var(--navy)",
  cyan: "var(--cyan)",
  signal: "var(--signal)",
  white: "#ffffff",
};

const drawTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as const,
};

function IconWrapper({
  children,
  size,
  className,
  tone = "navy",
}: {
  children: React.ReactNode;
  size: number;
  className?: string;
  tone?: AnimatedIconProps["tone"];
}) {
  const color = TONE_COLORS[tone] || TONE_COLORS.navy;
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("shrink-0", className)}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true, margin: "-40px" }}
    >
      {children}
    </motion.svg>
  );
}

export function AnimatedIcon({ name, size = 24, className, tone = "navy" }: AnimatedIconProps) {
  const color = TONE_COLORS[tone] || TONE_COLORS.navy;

  switch (name) {
    case "box":
      return (
        <IconWrapper size={size} className={className} tone={tone}>
          <motion.path
            d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
            variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: drawTransition } }}
          />
          <motion.polyline
            points="3.27 6.96 12 12.01 20.73 6.96"
            variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.3 } } }}
          />
          <motion.line
            x1="12" y1="22.08" x2="12" y2="12"
            variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.5 } } }}
          />
        </IconWrapper>
      );

    case "calculator":
      return (
        <IconWrapper size={size} className={className} tone={tone}>
          <motion.rect
            x="4" y="2" width="16" height="20" rx="2"
            variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: drawTransition } }}
          />
          <motion.line x1="8" y1="6" x2="16" y2="6" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.2 } } }} />
          <motion.line x1="16" y1="14" x2="16" y2="18" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.35 } } }} />
          <motion.line x1="12" y1="14" x2="12" y2="18" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.45 } } }} />
          <motion.line x1="8" y1="14" x2="8" y2="18" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.55 } } }} />
        </IconWrapper>
      );

    case "cart":
      return (
        <IconWrapper size={size} className={className} tone={tone}>
          <motion.circle cx="9" cy="21" r="1" variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { ...drawTransition, delay: 0.5 } } }} />
          <motion.circle cx="20" cy="21" r="1" variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { ...drawTransition, delay: 0.6 } } }} />
          <motion.path
            d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
            variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: drawTransition } }}
          />
        </IconWrapper>
      );

    case "globe":
      return (
        <IconWrapper size={size} className={className} tone={tone}>
          <motion.circle
            cx="12" cy="12" r="10"
            variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: drawTransition } }}
          />
          <motion.line x1="2" y1="12" x2="22" y2="12" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.2 } } }} />
          <motion.path
            d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
            variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.35 } } }}
          />
        </IconWrapper>
      );

    case "users":
      return (
        <IconWrapper size={size} className={className} tone={tone}>
          <motion.path
            d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
            variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: drawTransition } }}
          />
          <motion.circle cx="9" cy="7" r="4" variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { ...drawTransition, delay: 0.2 } } }} />
          <motion.path
            d="M23 21v-2a4 4 0 0 0-3-3.87"
            variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.4 } } }}
          />
          <motion.path
            d="M16 3.13a4 4 0 0 1 0 7.75"
            variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.55 } } }}
          />
        </IconWrapper>
      );

    case "megaphone":
      return (
        <IconWrapper size={size} className={className} tone={tone}>
          <motion.path
            d="m3 11 16-5v12L3 14.5"
            variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: drawTransition } }}
          />
          <motion.path
            d="M11.6 16.5a3 3 0 0 1-5.8-1.6"
            variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.3 } } }}
          />
          <motion.path
            d="M19 9v6M22 7v10"
            variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: [0, 1, 0.5, 1, 0.4, 1], transition: { duration: 1.5, delay: 0.5, repeat: Infinity, repeatType: "loop" } } }}
          />
        </IconWrapper>
      );

    case "settings":
      return (
        <IconWrapper size={size} className={className} tone={tone}>
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "12px 12px" }}
          >
            <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.8" fill="none" />
            <path
              d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
              fill="none"
              stroke={color}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.g>
        </IconWrapper>
      );

    case "zap":
      return (
        <IconWrapper size={size} className={className} tone={tone}>
          <motion.polygon
            points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
            fill={color}
            fillOpacity={0.12}
            stroke={color}
            variants={{ hidden: { scale: 0.5, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "backOut" } } }}
          />
        </IconWrapper>
      );

    case "shield":
      return (
        <IconWrapper size={size} className={className} tone={tone}>
          <motion.path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: drawTransition } }}
          />
          <motion.polyline
            points="9 12 11 14 15 10"
            variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.4 } } }}
          />
        </IconWrapper>
      );

    case "git-branch":
      return (
        <IconWrapper size={size} className={className} tone={tone}>
          <motion.circle cx="6" cy="6" r="3" variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { ...drawTransition, delay: 0.1 } } }} />
          <motion.path
            d="M6 9v12"
            variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.25 } } }}
          />
          <motion.circle cx="18" cy="18" r="3" variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { ...drawTransition, delay: 0.4 } } }} />
          <motion.path
            d="M18 15a9 9 0 0 0-9-9"
            variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.55 } } }}
          />
        </IconWrapper>
      );

    case "bar-chart":
      return (
        <IconWrapper size={size} className={className} tone={tone}>
          <motion.line x1="18" y1="20" x2="18" y2="10" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.1 } } }} />
          <motion.line x1="12" y1="20" x2="12" y2="4" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.25 } } }} />
          <motion.line x1="6" y1="20" x2="6" y2="14" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.4 } } }} />
        </IconWrapper>
      );

    case "trending-up":
      return (
        <IconWrapper size={size} className={className} tone={tone}>
          <motion.polyline
            points="23 6 13.5 15.5 8.5 10.5 1 18"
            variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: drawTransition } }}
          />
          <motion.polyline
            points="17 6 23 6 23 12"
            variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.35 } } }}
          />
        </IconWrapper>
      );

    case "clock":
      return (
        <IconWrapper size={size} className={className} tone={tone}>
          <motion.circle cx="12" cy="12" r="10" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: drawTransition } }} />
          <motion.polyline
            points="12 6 12 12 16 14"
            variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.3 } } }}
          />
        </IconWrapper>
      );

    case "dollar":
      return (
        <IconWrapper size={size} className={className} tone={tone}>
          <motion.line x1="12" y1="1" x2="12" y2="23" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.3 } } }} />
          <motion.path
            d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
            variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: drawTransition } }}
          />
        </IconWrapper>
      );

    case "award":
      return (
        <IconWrapper size={size} className={className} tone={tone}>
          <motion.circle cx="12" cy="8" r="7" variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { ...drawTransition, delay: 0.1 } } }} />
          <motion.polyline
            points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"
            variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.4 } } }}
          />
        </IconWrapper>
      );

    case "file-text":
      return (
        <IconWrapper size={size} className={className} tone={tone}>
          <motion.path
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
            variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: drawTransition } }}
          />
          <motion.polyline points="14 2 14 8 20 8" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.2 } } }} />
          <motion.line x1="16" y1="13" x2="8" y2="13" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.4 } } }} />
          <motion.line x1="16" y1="17" x2="8" y2="17" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.5 } } }} />
        </IconWrapper>
      );

    case "droplets":
      return (
        <IconWrapper size={size} className={className} tone={tone}>
          <motion.path
            d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
            variants={{ hidden: { pathLength: 0, opacity: 0, scale: 0.8 }, visible: { pathLength: 1, opacity: 1, scale: 1, transition: drawTransition } }}
            fill={color}
            fillOpacity={0.1}
          />
        </IconWrapper>
      );

    case "battery":
      return (
        <IconWrapper size={size} className={className} tone={tone}>
          <motion.rect x="1" y="6" width="18" height="12" rx="2" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: drawTransition } }} />
          <motion.line x1="23" y1="10" x2="23" y2="14" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.2 } } }} />
          <motion.line x1="7" y1="10" x2="7" y2="14" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.35 } } }} />
          <motion.line x1="11" y1="10" x2="11" y2="14" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.45 } } }} />
        </IconWrapper>
      );

    case "disc":
      return (
        <IconWrapper size={size} className={className} tone={tone}>
          <motion.circle
            cx="12" cy="12" r="10"
            variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: drawTransition } }}
          />
          <motion.circle
            cx="12" cy="12" r="3"
            variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { ...drawTransition, delay: 0.35 } } }}
          />
        </IconWrapper>
      );

    case "circle-dot":
      return (
        <IconWrapper size={size} className={className} tone={tone}>
          <motion.circle
            cx="12" cy="12" r="10"
            variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: drawTransition } }}
          />
          <motion.circle
            cx="12" cy="12" r="4"
            fill={color}
            fillOpacity={0.2}
            variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { ...drawTransition, delay: 0.3 } } }}
          />
        </IconWrapper>
      );

    case "monitor":
      return (
        <IconWrapper size={size} className={className} tone={tone}>
          <motion.rect x="2" y="3" width="20" height="14" rx="2" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: drawTransition } }} />
          <motion.line x1="8" y1="21" x2="16" y2="21" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.3 } } }} />
          <motion.line x1="12" y1="17" x2="12" y2="21" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { ...drawTransition, delay: 0.45 } } }} />
        </IconWrapper>
      );

    default:
      return (
        <IconWrapper size={size} className={className} tone={tone}>
          <motion.circle cx="12" cy="12" r="10" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} />
        </IconWrapper>
      );
  }
}

/**
 * Map lucide icon component names to AnimatedIcon names.
 * Use this to convert existing lucide-react icon references.
 */
export function lucideToAnimatedIcon(iconName: string): IconName {
  const map: Record<string, IconName> = {
    Box: "box",
    Calculator: "calculator",
    ShoppingCart: "cart",
    Globe: "globe",
    Users: "users",
    Megaphone: "megaphone",
    Settings: "settings",
    Zap: "zap",
    ShieldCheck: "shield",
    Shield: "shield",
    GitBranch: "git-branch",
    BarChart3: "bar-chart",
    BarChart: "bar-chart",
    TrendingUp: "trending-up",
    Clock: "clock",
    DollarSign: "dollar",
    Award: "award",
    FileText: "file-text",
    Droplets: "droplets",
    Battery: "battery",
    Disc: "disc",
    CircleDot: "circle-dot",
    Monitor: "monitor",
  };
  return map[iconName] || "box";
}
