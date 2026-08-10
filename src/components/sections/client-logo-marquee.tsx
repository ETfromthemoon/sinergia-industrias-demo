"use client";

import Image from "next/image";
import { motion, MotionConfig } from "motion/react";
import { cn } from "@/lib/utils";

const CLIENT_DOMAINS: Record<string, string> = {
  "Arriendo Legal": "arriendolegal.cl",
  Aramark: "aramark.com",
  Asalvo: "asalvo.cl",
  CIAL: "cial.cl",
  "CV Trading": "cvtrading.cl",
  Corona: "corona.cl",
  Dimerc: "dimerc.cl",
  Easy: "easy.cl",
  Ecostandard: "ecostandard.cl",
  Iansa: "iansa.cl",
  Inacap: "inacap.cl",
  Jumbo: "jumbo.cl",
  "MB Chemicals": "mbchemicals.cl",
  Moriah: "moriah.cl",
  Paris: "paris.cl",
  "Podas Chile": "podaschile.cl",
  "Red Circular": "redcircular.com",
  Ripley: "ripley.cl",
  Tottus: "tottus.cl",
  "Tresmontes Lucchetti": "tresmonteslucchetti.cl",
  Vinderchile: "vinderchile.cl",
};

export const ALL_CLIENTS = Object.keys(CLIENT_DOMAINS);

function logoSource(client: string) {
  const domain = CLIENT_DOMAINS[client];
  return domain
    ? `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
    : undefined;
}

type ClientLogoMarqueeProps = {
  clients: readonly string[];
  className?: string;
};

export function ClientLogoMarquee({ clients, className }: ClientLogoMarqueeProps) {
  const uniqueClients = [...new Set(clients)].filter((client) => logoSource(client));
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
              style={{ width: "clamp(7rem, 11vw, 10rem)", height: "6rem" }}
            >
              <Image
                src={logoSource(client)!}
                alt=""
                width={128}
                height={128}
                unoptimized
                loading="eager"
                className="size-12 object-contain grayscale contrast-125 transition-[filter,opacity] duration-300 hover:grayscale-0"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </MotionConfig>
  );
}
