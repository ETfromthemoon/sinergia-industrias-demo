"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type MagneticProps = {
  children: React.ReactNode;
  strength?: number;
};

export function Magnetic({ children, strength = 0.22 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const ySpring = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  return (
    <motion.div
      ref={ref}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
        y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
