"use client";
import { motion } from "motion/react";

type SplitTextProps = {
  text: string;
  delay?: number;
  stagger?: number;
  startIndex?: number;
  className?: string;
};

export function SplitText({
  text,
  delay = 0,
  stagger = 0.04,
  startIndex = 0,
  className,
}: SplitTextProps) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, wIdx) => {
        const i = startIndex + wIdx;
        return (
          <span key={wIdx} className={`inline-block ${className ?? ""}`}>
            <motion.span
              className="inline-block will-change-[opacity,transform]"
              initial={{ opacity: 0.1, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: delay + i * stagger,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
            {wIdx < words.length - 1 && <span>&nbsp;</span>}
          </span>
        );
      })}
    </>
  );
}
