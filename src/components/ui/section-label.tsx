"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type SectionLabelProps = {
  index: string;
  children: React.ReactNode;
  tone?: "light" | "dark" | "accent";
  className?: string;
};

/** Swiss/blueprint mono label:  [ 02 ] ─── SERVICIOS */
export function SectionLabel({ children, tone = "light", className }: SectionLabelProps) {
  const color =
    tone === "dark"
      ? "text-white/75"
      : tone === "accent"
        ? "text-cyan"
        : "text-navy";
  return (
    <motion.div
      className={cn("flex items-center gap-3", className)}
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className={cn("mono-label", color)}>{children}</span>
    </motion.div>
  );
}
