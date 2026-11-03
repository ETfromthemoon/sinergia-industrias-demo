import { METHOD } from "@/content/site";

export function MethodSection() {
  return (
    <section id="metodo" aria-labelledby="method-title" className="bg-steel-50 py-14 sm:py-20">
      <div className="editorial-shell grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div>
          <h2 id="method-title" className="max-w-md text-4xl leading-tight text-foreground sm:text-5xl">
            Menos promesas. Más oficio.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            La metodología se adapta al desafío, pero el principio no cambia:
            comprender antes de proponer y acompañar hasta que funcione.
          </p>
        </div>

        <ol className="border-t border-steel-200">
          {METHOD.map((step) => (
            <li key={step.number} className="grid grid-cols-[2rem_1fr] gap-x-4 border-b border-steel-200 py-6 sm:grid-cols-[2rem_0.55fr_1fr] sm:gap-x-6 sm:py-7">
              <span aria-hidden="true" className="pt-1 font-mono text-sm text-cyan-text">{step.number}</span>
              <h3 className="text-3xl leading-tight text-foreground">{step.title}</h3>
              <div className="col-start-2 mt-3 sm:col-start-auto sm:mt-0">
                <p className="text-base leading-relaxed text-muted-foreground">{step.description}</p>
                <p className="mt-3 text-sm font-semibold text-navy">{step.deliverable}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
