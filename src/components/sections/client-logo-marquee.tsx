"use client";

import Image from "next/image";
import { motion, MotionConfig } from "motion/react";
import { ALL_CLIENTS, CLIENT_LOGOS, type ClientName } from "@/components/sections/client-logo-assets";
import { cn } from "@/lib/utils";

export { ALL_CLIENTS };

type ClientLogoMarqueeProps = {
  clients: readonly string[];
  className?: string;
};

export function ClientLogoMarquee({ clients, className }: ClientLogoMarqueeProps) {
  const uniqueClients = [...new Set(clients)].filter((client): client is ClientName => client in CLIENT_LOGOS);
  const visualClients = [...uniqueClients, ...uniqueClients];

  return (
    <MotionConfig reducedMotion="user">
      <div
        className={cn("relative overflow-hidden border-y border-steel-200 bg-steel-50", className)}
        style={{ maskImage: "linear-gradient(to right, transparent, black 7%, black 93%, transparent)" }}
      >
        <ul className="sr-only">
          {uniqueClients.map((client) => (
            <li key={client}>{client}</li>
          ))}
        </ul>

        <motion.div
          aria-hidden="true"
          className="flex w-max"
          animate={{ x: "-50%" }}
          transition={{ duration: 72, ease: "linear", repeat: Infinity }}
        >
          {visualClients.map((client, index) => {
            const logo = CLIENT_LOGOS[client];

            return (
              <div
                className="grid shrink-0 place-items-center border-r border-steel-200 bg-steel-50 p-4 opacity-85 transition-[background-color,opacity] duration-300 hover:opacity-100"
                key={`${client}-${index}`}
                style={{ width: "clamp(9.1rem, 14.3vw, 13rem)", height: "7.8rem" }}
              >
                <div className={cn("grid h-full w-full place-items-center rounded-sm", client === "Easy" && "bg-steel-900 p-3")}>
                  <Image
                    alt=""
                    aria-hidden="true"
                    className="max-h-[4.5rem] w-auto max-w-full object-contain"
                    height={96}
                    loading="eager"
                    src={logo.src}
                    width={220}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </MotionConfig>
  );
}
