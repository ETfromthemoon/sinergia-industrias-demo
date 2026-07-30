"use client";

import { motion, useScroll } from "motion/react";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-cyan"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
