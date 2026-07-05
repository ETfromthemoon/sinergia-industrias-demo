"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface ArticleSidebarProps {
  headings: TocItem[];
}

export default function ArticleSidebar({ headings }: ArticleSidebarProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [progress, setProgress] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (headings.length === 0) return;

    const ids = headings.map((h) => h.id);
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-10% 0px -80% 0px", threshold: 0 }
    );

    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [headings]);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress(Math.min((scrollTop / docHeight) * 100, 100));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (headings.length === 0) return null;

  return (
    <aside className="hidden lg:block w-56 shrink-0">
      <div className="sticky top-28">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="h-0.5 w-full bg-steel-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-cyan transition-all duration-150 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="block mt-2 text-[10px] tracking-widest uppercase text-steel-400">
            {Math.round(progress)}% leído
          </span>
        </div>

        {/* TOC */}
        <p className="text-[11px] tracking-[0.15em] uppercase text-steel-400 mb-4 font-semibold">
          En este artículo
        </p>
        <nav>
          <ul className="space-y-1.5 border-l border-steel-150">
            {headings
              .filter((h) => h.level === 2)
              .map((h) => (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`block pl-3 py-1 text-sm leading-snug transition-colors border-l-2 -ml-px ${
                      activeId === h.id
                        ? "border-cyan text-navy font-semibold"
                        : "border-transparent text-steel-400 hover:text-steel-600"
                    }`}
                  >
                    {h.text}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
