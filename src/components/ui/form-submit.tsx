"use client";

import { useState, useRef, type FormEvent, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const FORM_SUBMIT_URL = "https://formsubmit.co/ajax/info@sinergiaindustrias.cl";

type FormStatus = "idle" | "loading" | "success" | "error";

export function useFormSubmit() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    formData?: Record<string, string>
  ) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const data = formData ?? Object.fromEntries(new FormData(e.currentTarget));

      const res = await fetch(FORM_SUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (json.success === "true" || json.success === true) {
        setStatus("success");
        setMessage("Mensaje enviado. Te responderemos en menos de 24h hábiles.");
        e.currentTarget.reset();
      } else {
        setStatus("error");
        setMessage(json.message || "Error al enviar. Intenta de nuevo.");
      }
    } catch {
      setStatus("error");
      setMessage("Error de conexión. Intenta de nuevo o escríbenos por WhatsApp.");
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
