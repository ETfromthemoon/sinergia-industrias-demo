"use client";
import { ProgressiveSteps } from "@/components/ui/progressive-steps";

const STEPS = [
  {
    number: "01",
    title: "Diagnóstico",
    body: "Revisamos tu operación actual, tus sistemas y tus obligaciones legales. Nada de propuestas genéricas antes de entender qué tiene tu empresa.",
    duration: "1–2 SEM",
    code: "DIAG",
  },
  {
    number: "02",
    title: "Plan técnico",
    body: "Diseñamos un plan específico: qué hacer, en qué orden y con qué recursos. Lo que va a costar y lo que vas a ganar.",
    duration: "1 SEM",
    code: "PLAN",
  },
  {
    number: "03",
    title: "Implementación",
    body: "Ejecutamos con nuestro equipo. Configuramos Odoo, hacemos el levantamiento REP o entregamos el plan de mejora de procesos.",
    duration: "4–12 SEM",
    code: "EXEC",
  },
  {
    number: "04",
    title: "Seguimiento",
    body: "No desaparecemos al cerrar el proyecto. Quedamos disponibles para ajustes, dudas y la siguiente etapa.",
    duration: "ONGOING",
    code: "SUPP",
  },
];

export function MethodSection() {
  return (
    <ProgressiveSteps
      title="Sin promesas vagas. Con un proceso claro."
      eyebrow="Metodología"
      index="03"
      steps={STEPS}
      variant="light"
    />
  );
}
