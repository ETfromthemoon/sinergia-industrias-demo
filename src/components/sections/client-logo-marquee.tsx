"use client";

import { motion, MotionConfig } from "motion/react";
import { CLIENTS, ClientLogoMark, type ClientName } from "@/components/sections/client-logo-mark";
import { cn } from "@/lib/utils";

export const ALL_CLIENTS = CLIENTS;

type ClientLogoMarqueeProps = {
  clients: readonly string[];
  className?: string;
};

export function ClientLogoMarquee({ clients, className }: ClientLogoMarqueeProps) {
  const uniqueClients = [...new Set(clients)].filter((client): client is ClientName => CLIENTS.includes(client as ClientName));
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
          {visualClients.map((client, index) => (
            <div
              className="grid shrink-0 place-items-center border-r border-steel-200 opacity-70 transition-opacity duration-300 hover:opacity-100"
              key={`${client}-${index}`}
              style={{ width: "clamp(9.1rem, 14.3vw, 13rem)", height: "7.8rem" }}
            >
              <ClientLogoMark
                client={client}
                className="w-[78%] max-w-44 grayscale contrast-125 transition-[filter,opacity] duration-300 hover:grayscale-0"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </MotionConfig>
  );
}
