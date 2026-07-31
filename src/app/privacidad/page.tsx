import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Información sobre el tratamiento de datos enviados a Sinergia Industrias.",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pb-20 pt-32 sm:pb-28 sm:pt-40">
        <article className="editorial-shell">
          <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
            <div>
              <p className="eyebrow">Información legal</p>
              <h1 className="mt-7 text-5xl leading-[0.98] sm:text-6xl">Política de privacidad</h1>
              <p className="mt-5 text-xs text-muted-foreground">Última actualización: julio de 2026</p>
            </div>
            <div className="space-y-9 border-t border-steel-200 pt-8 text-sm leading-relaxed text-muted-foreground">
              <section>
                <h2 className="font-sans text-base font-semibold tracking-normal text-foreground">Qué datos recopilamos</h2>
                <p className="mt-3">
                  Cuando utilizas el formulario recopilamos nombre, empresa, email, área
                  de interés y el mensaje que decides compartir.
                </p>
              </section>
              <section>
                <h2 className="font-sans text-base font-semibold tracking-normal text-foreground">Para qué los usamos</h2>
                <p className="mt-3">
                  Usamos estos datos exclusivamente para responder tu solicitud, evaluar
                  si podemos ayudarte y coordinar una conversación relacionada.
                </p>
              </section>
              <section>
                <h2 className="font-sans text-base font-semibold tracking-normal text-foreground">Con quién se comparten</h2>
                <p className="mt-3">
                  La información puede ser procesada por el proveedor de correo utilizado
                  para entregar el mensaje. No vendemos ni cedemos tus datos con fines
                  publicitarios.
                </p>
              </section>
              <section>
                <h2 className="font-sans text-base font-semibold tracking-normal text-foreground">Tus derechos</h2>
                <p className="mt-3">
                  Puedes solicitar acceso, corrección o eliminación escribiendo a{" "}
                  <a className="text-navy underline underline-offset-4" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                  .
                </p>
              </section>
              <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
                <ArrowLeft className="size-4" />
                Volver al inicio
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
