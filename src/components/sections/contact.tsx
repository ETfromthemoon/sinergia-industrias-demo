"use client";
import { motion, MotionConfig } from "motion/react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SERVICES_OPTIONS = [
  "Ley REP",
  "Levantamiento de procesos",
  "Implementación ERP Odoo",
  "Levantamiento de datos",
  "Otro",
];

export function ContactSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="contacto" className="bg-background border-t border-steel-200 py-24 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
            {/* Left: header + contact data */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan">
                Contacto
              </p>
              <h2 className="font-display mb-6 text-4xl font-bold text-foreground sm:text-5xl leading-tight">
                ¿Por dónde
                <br />
                empezamos?
              </h2>
              <p className="mb-10 text-base leading-relaxed text-muted-foreground">
                Cuéntanos qué necesita tu empresa. Una conversación de 30 minutos es suficiente
                para saber si podemos ayudarte y cómo.
              </p>

              <Magnetic>
                <Link
                  href="https://wa.me/56994584617?text=Hola,%20quiero%20conversar%20sobre%20un%20proyecto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "mb-10 rounded-full bg-navy text-white px-8 py-3 text-base font-semibold shadow-navy hover:bg-navy-dark transition-colors duration-200"
                  )}
                >
                  Conversemos tu proyecto →
                </Link>
              </Magnetic>

              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <Mail className="mt-0.5 size-5 shrink-0 text-navy" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                    <a
                      href="mailto:info@sinergiaindustrias.cl"
                      className="text-sm font-medium text-foreground hover:text-navy transition-colors"
                    >
                      info@sinergiaindustrias.cl
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="mt-0.5 size-5 shrink-0 text-navy" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Teléfono / WhatsApp</p>
                    <a
                      href="tel:+56994584617"
                      className="text-sm font-medium text-foreground hover:text-navy transition-colors"
                    >
                      +56 9 9458 4617
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-navy" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Dirección</p>
                    <p className="text-sm font-medium text-foreground">
                      Calle Limache 3421, Reitz II of. 724
                      <br />
                      Viña del Mar, Chile
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Right: form */}
            <motion.div
              className="rounded-2xl border border-steel-200 bg-steel-50 p-8"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <form
                action={`mailto:info@sinergiaindustrias.cl`}
                method="GET"
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nombre" className="mb-1.5 block text-xs font-medium text-foreground">
                      Nombre *
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="w-full rounded-xl border border-steel-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="mb-1.5 block text-xs font-medium text-foreground">
                      Empresa *
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      required
                      placeholder="Nombre de tu empresa"
                      className="w-full rounded-xl border border-steel-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-foreground">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="correo@empresa.cl"
                    className="w-full rounded-xl border border-steel-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="servicio" className="mb-1.5 block text-xs font-medium text-foreground">
                    ¿En qué podemos ayudarte?
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    className="w-full rounded-xl border border-steel-200 bg-white px-4 py-3 text-sm text-foreground focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 transition-colors appearance-none"
                  >
                    {SERVICES_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-full rounded-xl bg-navy text-white text-base font-semibold hover:bg-navy-dark transition-colors duration-200"
                  )}
                >
                  Enviar mensaje
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  También puedes escribirnos directamente a{" "}
                  <a href="mailto:info@sinergiaindustrias.cl" className="text-navy underline underline-offset-2">
                    info@sinergiaindustrias.cl
                  </a>
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
