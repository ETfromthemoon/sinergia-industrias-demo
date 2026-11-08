"use client";

import { useRef, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { trackLeadConversion } from "@/lib/analytics";

const DEMO_MODE = process.env.NEXT_PUBLIC_DEMO_MODE === "true";
const FORM_SUBMIT_URL = DEMO_MODE ? "/api/demo-newsletter" : "https://formsubmit.co/ajax/info@sinergiaindustrias.cl";

type FormStatus = "idle" | "loading" | "success" | "error";

export function useFormSubmit() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const submitting = useRef(false);

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    formData?: Record<string, string>
  ) => {
    e.preventDefault();
    if (submitting.current) return;
    const form = e.currentTarget;
    submitting.current = true;
    setStatus("loading");
    setMessage("");

    try {
      const data = formData ?? Object.fromEntries(new FormData(form));

      const res = await fetch(FORM_SUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok && (json.success === "true" || json.success === true)) {
        form.reset();
        setStatus("success");
        setMessage(DEMO_MODE
          ? (typeof json.message === "string" ? json.message : "Demo: comprobante de suscripción registrado. No se enviaron correos.")
          : "Suscripción confirmada. Te escribiremos cuando publiquemos algo relevante.");
        // Evento de conversión para Google Ads / GA4 (no-op si no hay tag instalado).
        trackLeadConversion(
          typeof data.servicio === "string" ? { servicio: data.servicio } : undefined
        );
      } else {
        setStatus("error");
        setMessage(json.message || "Error al enviar. Intenta de nuevo.");
      }
    } catch {
      setStatus("error");
      setMessage("Error de conexión. Intenta de nuevo o escríbenos por WhatsApp.");
    } finally {
      submitting.current = false;
    }
  };

  return { status, message, handleSubmit, setStatus };
}

export function FormSubmitFeedback({
  status,
  message,
}: {
  status: FormStatus;
  message: string;
}) {
  return (
    <div role="status" aria-live="polite">
      <AnimatePresence mode="wait">
        {status === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center gap-2 py-4 text-sm text-steel-400"
          >
            <Loader2 className="size-4 animate-spin" />
            Enviando...
          </motion.div>
        )}
        {status === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-start gap-2.5 border border-cyan/30 bg-cyan/5 px-4 py-3 text-sm text-cyan-deep"
          >
            <CheckCircle2 className="size-4 shrink-0 mt-0.5" />
            {message}
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-start gap-2.5 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            <AlertCircle className="size-4 shrink-0 mt-0.5" />
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
