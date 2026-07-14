"use client";

import { useEffect, useRef } from "react";
import { useMediaQuery } from "@/lib/use-media-query";

const GLOW_SIZE = 600;
const GLOW_OFFSET = GLOW_SIZE / 2; // 300 — centers the glow on the cursor
const LERP_FACTOR = 0.12;
const OFFSCREEN_START = -GLOW_SIZE;

export function CursorGlow() {
  const hasFinePointer = useMediaQuery("(pointer: fine)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isEnabled = hasFinePointer && !prefersReducedMotion;
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isEnabled) return;

    const el = glowRef.current;
    if (!el) return;

    // Target and current positions live outside React state so the rAF
    // loop can write transforms straight to the DOM — no re-renders.
    const target = { x: OFFSCREEN_START, y: OFFSCREEN_START };
    const current = { x: OFFSCREEN_START, y: OFFSCREEN_START };
    let rafId = 0;

    const handleMouseMove = (event: MouseEvent) => {
      target.x = event.clientX - GLOW_OFFSET;
      target.y = event.clientY - GLOW_OFFSET;
    };

    const tick = () => {
      current.x += (target.x - current.x) * LERP_FACTOR;
      current.y += (target.y - current.y) * LERP_FACTOR;
      el.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1] rounded-full"
      style={{
        width: GLOW_SIZE,
        height: GLOW_SIZE,
        transform: `translate3d(${OFFSCREEN_START}px, ${OFFSCREEN_START}px, 0)`,
        background:
          "radial-gradient(circle, oklch(0.68 0.14 205 / 0.06), transparent 70%)",
      }}
    />
  );
}
