import type { Variants } from "motion/react";

// Shared easing curves. Cast to the tuple type motion expects at the call
// site (`as const` keeps these readonly, which is what the typed easing
// arrays in motion/react's Transition type require).
export const EASE_OUT = [0.22, 1, 0.36, 1] as const; // secciones/micro (curva ya usada en el sitio)
export const EASE_CINEMATIC = [0.16, 1, 0.3, 1] as const; // hero/set-pieces

// Nivel 1 — HERO (una vez por página): blur-in
export const heroTitle: Variants = {
  hidden: { opacity: 0, y: 50, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE_CINEMATIC },
  },
};

// Nivel 2 — SET-PIECE: clip-path reveal para imágenes
export const clipReveal: Variants = {
  hidden: { clipPath: "inset(12% 0% 12% 0%)", opacity: 0.6 },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: { duration: 1.1, ease: EASE_CINEMATIC },
  },
};

// Nivel 3 — SECCIÓN: fade-up estándar
export function fadeUp(delay = 0): Variants {
  return {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: EASE_OUT, delay },
    },
  };
}

// Nivel 4 — MICRO
export const hairline: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease: EASE_OUT } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
