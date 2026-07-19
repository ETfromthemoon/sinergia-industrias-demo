"use client";
import { MotionConfig } from "motion/react";
import { SectionLabel } from "@/components/ui/section-label";
import { CornerTicks } from "@/components/ui/blueprint-frame";
import { ModuleSlider } from "@/components/ui/module-slider";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import type { IconName } from "@/components/ui/animated-icon";
import { cn } from "@/lib/utils";

export type FeatureItem = {
  icon?: React.ElementType;
  iconName?: IconName;
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

const COLUMNS_MAP: Record<number, { sm: number; md: number; lg: number }> = {
  2: { sm: 1, md: 2, lg: 2 },
  3: { sm: 1, md: 2, lg: 3 },
  4: { sm: 1, md: 2, lg: 3 },
};

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
            <div className="pointer-events-none absolute inset-0 blueprint-grid-dark" />
            <div className="pointer-events-none absolute inset-0 grain" />
          </>
        )}

        <div className={cn("relative mx-auto max-w-6xl", isDark && "z-10")}>
          <div>
            <SectionLabel index={index} tone={isDark ? "dark" : "light"}>
              {eyebrow}
            </SectionLabel>
          </div>

          <h2
            className={cn(
              "mt-4 font-display text-3xl sm:text-4xl tracking-tight",
              isDark ? "text-white" : "text-navy",
            )}
          >
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="text-navy">{titleAccent}</span>
              </>
            )}
          </h2>

          {intro && (
            <p
              className={cn(
                "mt-6 max-w-3xl text-lg leading-relaxed",
                isDark ? "text-steel-300" : "text-muted-foreground",
              )}
            >
              {intro}
            </p>
          )}

          <div className="mt-12">
            <ModuleSlider
              items={items}
              itemsPerView={COLUMNS_MAP[columns] ?? { sm: 1, md: 2, lg: 3 }}
              renderItem={(item, i) => (
                  <div
                    className={cn(
                      "relative p-6 border h-full",
                      isDark
                        ? "border-white/15 bg-white/[0.03]"
                        : "bg-white border-steel-200",
                    )}
                  >
                    {cornerTicks && (
                      <CornerTicks className={isDark ? "text-white/40" : "text-steel-400"} />
                    )}

                    {item.iconName ? (
                      <span
                        className={cn(
                          "inline-flex items-center justify-center w-11 h-11 border mb-4",
                          isDark ? "border-white/20" : "border-steel-200",
                        )}
                      >
                        <AnimatedIcon
                          name={item.iconName}
                          size={20}
                          tone={isDark ? "cyan" : "navy"}
                        />
                      </span>
                    ) : item.icon ? (
                      <span
                        className={cn(
                          "inline-flex items-center justify-center w-11 h-11 border mb-4",
                          isDark ? "border-white/20 text-cyan" : "border-steel-200 text-navy",
                        )}
                      >
                        <item.icon className="w-5 h-5" />
                      </span>
                    ) : null}

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
                  </div>
                )}
            />
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
