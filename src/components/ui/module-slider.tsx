"use client";
import { useRef, useState, useEffect, useCallback, type ReactNode } from "react";
import { motion, AnimatePresence, MotionConfig } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

type BreakpointItems = {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

type ModuleSliderProps<T> = {
  items: T[];
  renderItem: (item: T, index: number, isActive: boolean) => ReactNode;
  /** Default items per view. Override per breakpoint with `itemsPerView`. */
  itemsPerView?: number | BreakpointItems;
  /** Gap between items in px */
  gap?: number;
  /** Show navigation arrows */
  showArrows?: boolean;
  /** Show dot indicators */
  showDots?: boolean;
  /** Auto-advance interval in ms. 0 = disabled. */
  autoplayInterval?: number;
  className?: string;
};

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "8%" : "-8%",
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease: EASE_OUT },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-8%" : "8%",
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.55, ease: EASE_OUT },
  }),
};

function getItemsPerView(
  config: number | BreakpointItems,
  width: number
): number {
  if (typeof config === "number") return Math.max(1, config);
  if (width >= 1280 && config.xl) return config.xl;
  if (width >= 1024 && config.lg) return config.lg;
  if (width >= 768 && config.md) return config.md;
  if (width >= 640 && config.sm) return config.sm;
  return config.sm ?? config.md ?? config.lg ?? config.xl ?? 3;
}

export function ModuleSlider<T>({
  items,
  renderItem,
  itemsPerView: itemsPerViewConfig = { sm: 1, md: 1, lg: 1 },
  gap = 24,
  showArrows = true,
  showDots = true,
  autoplayInterval = 3000,
  className,
}: ModuleSliderProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const itemsPerView = getItemsPerView(itemsPerViewConfig, containerWidth);
  const totalPages = Math.ceil(items.length / itemsPerView);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const goTo = useCallback(
    (newPage: number) => {
      if (newPage === page) return;
      setDirection(newPage > page ? 1 : -1);
      setPage(Math.max(0, Math.min(newPage, totalPages - 1)));
    },
    [page, totalPages]
  );

  const next = useCallback(() => {
    if (page >= totalPages - 1) {
      goTo(0);
    } else {
      goTo(page + 1);
    }
  }, [page, totalPages, goTo]);

  const prev = useCallback(() => {
    if (page <= 0) {
      goTo(totalPages - 1);
    } else {
      goTo(page - 1);
    }
  }, [page, totalPages, goTo]);

  useEffect(() => {
    if (autoplayInterval <= 0 || isHovered || totalPages <= 1) return;
    timerRef.current = setInterval(next, autoplayInterval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoplayInterval, isHovered, next, totalPages]);

  const visibleItems = items.slice(
    page * itemsPerView,
    page * itemsPerView + itemsPerView
  );

  const shouldShowArrows = showArrows && totalPages > 1;
  const shouldShowDots = showDots && totalPages > 1;

  return (
    <MotionConfig reducedMotion="user">
      <div
        ref={containerRef}
        className={cn("relative", shouldShowArrows && itemsPerView > 1 && "px-8", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid gap-x-6 gap-y-6"
              style={{
                gridTemplateColumns: `repeat(${itemsPerView}, minmax(0, 1fr))`,
                gap: `${gap}px`,
              }}
            >
              {visibleItems.map((item, i) => {
                const globalIndex = page * itemsPerView + i;
                return (
                  <motion.div
                    key={globalIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.08 * i,
                      duration: 0.65,
                      ease: EASE_OUT,
                    }}
                  >
                    {renderItem(item, globalIndex, true)}
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrows */}
        {shouldShowArrows && (
          <>
            <motion.button
              onClick={prev}
              className="absolute -left-3 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center border border-steel-200 bg-white/90 text-navy shadow-sm backdrop-blur-sm transition-colors hover:bg-navy hover:text-white hover:border-navy"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Anterior"
            >
              <ChevronLeft className="size-4" />
            </motion.button>
            <motion.button
              onClick={next}
              className="absolute -right-3 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center border border-steel-200 bg-white/90 text-navy shadow-sm backdrop-blur-sm transition-colors hover:bg-navy hover:text-white hover:border-navy"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Siguiente"
            >
              <ChevronRight className="size-4" />
            </motion.button>
          </>
        )}

        {/* Dots */}
        {shouldShowDots && (
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <motion.button
                key={i}
                onClick={() => { setDirection(i > page ? 1 : -1); setPage(i); }}
                className={cn(
                  "size-2.5 rounded-full transition-colors",
                  i === page ? "bg-navy" : "bg-steel-300 hover:bg-steel-400"
                )}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={
                  i === page
                    ? { scale: [1, 1.25, 1], transition: { duration: 0.4 } }
                    : {}
                }
                aria-label={`Ir a página ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </MotionConfig>
  );
}
