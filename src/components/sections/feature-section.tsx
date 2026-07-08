"use client";
import { motion, MotionConfig } from "motion/react";
import { SectionLabel } from "@/components/ui/section-label";
import { CornerTicks } from "@/components/ui/blueprint-frame";
import { cn } from "@/lib/utils";

export type FeatureItem = {
  icon?: React.ElementType;
  title: string;
  body: string;
};

export type FeatureSectionProps = {
  id?: string;
  index?: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  intro?: string;
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
  variant?: "light" | "dark";
  cornerTicks?: boolean;
  className?: string;
};

const COLUMNS_CLASS: Record<2 | 3 | 4, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

/**
 * Reusable "eyebrow + H2 + intro + card grid" pattern shared across interior pages.
 * Replicates the exact markup/styling used inline in ley-rep and
 * levantamiento-de-procesos content pages.
 */
export function FeatureSection({
  id,
  index = "02",
  eyebrow,
  title,
  titleAccent,
  intro,
  items,
  columns = 3,
  variant = "light",
  cornerTicks = true,
  className,
}: FeatureSectionProps) {
  const isDark = variant === "dark";

  return (
    <MotionConfig reducedMotion="user">
      <section
        id={id}
        className={cn(
          "relative py-24 px-4",
          isDark
            ? "overflow-hidden bg-navy-dark"
            : "bg-background",
          className,
        )}
      >
        {isDark && (
          <>
            <div className="absolute inset-0 blueprint-grid-dark pointer-events-none" />
            <div className="absolute inset-0 grain pointer-events-none" />
          </>
        )}

        <div className={cn("relative mx-auto max-w-6xl", isDark && "z-10")}>
          <MotionConfig transition={{ duration: 0.6, ease: "easeOut" }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionLabel index={index} tone={isDark ? "dark" : "light"}>
                {eyebrow}
              </SectionLabel>
            </motion.div>

            <motion.h2
              className={cn(
                "mt-4 font-display text-3xl sm:text-4xl tracking-tight",
                isDark ? "text-white" : "text-navy",
              )}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {title}
              {titleAccent && (
                <>
                  <br />
                  <span className="text-navy">{titleAccent}</span>
                </>
              )}
            </motion.h2>

            {intro && (
              <motion.p
                className={cn(
                  "mt-6 max-w-3xl text-lg leading-relaxed",
                  isDark ? "text-steel-300" : "text-muted-foreground",
                )}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {intro}
              </motion.p>
            )}

            <motion.div
              className={cn(
                "mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6",
                COLUMNS_CLASS[columns],
              )}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: intro ? 0.3 : 0.2 }}
            >
              {items.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    className={cn(
                      "relative p-6 border",
                      isDark
                        ? "border-white/15 bg-white/[0.03]"
                        : "bg-white border-steel-200",
                    )}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {cornerTicks && (
                      <CornerTicks className={isDark ? "text-white/40" : "text-steel-400"} />
                    )}

                    {Icon && (
                      <span
                        className={cn(
                          "inline-flex items-center justify-center w-11 h-11 border mb-4",
                          isDark ? "border-white/20 text-cyan" : "border-steel-200 text-navy",
                        )}
                      >
                        <Icon className="w-5 h-5" />
                      </span>
                    )}

                    <span className={cn("mono-label", isDark ? "text-steel-400" : "text-steel-400")}>
                      {String(index)}.{String(i + 1).padStart(2, "0")}
                    </span>

                    <h3
                      className={cn(
                        "mt-2 font-display font-semibold leading-snug",
                        isDark ? "text-white" : "text-navy",
                      )}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={cn(
                        "mt-2 text-sm leading-relaxed",
                        isDark ? "text-steel-400" : "text-muted-foreground",
                      )}
                    >
                      {item.body}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </MotionConfig>
        </div>
      </section>
    </MotionConfig>
  );
}
