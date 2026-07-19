"use client";
import { ProgressiveSteps } from "@/components/ui/progressive-steps";

type Step = {
  number: string;
  code: string;
  title: string;
  body: string;
};

type ProcessStepsProps = {
  title: string;
  eyebrow: string;
  index?: string;
  steps: Step[];
  variant?: "light" | "dark";
};

export function ProcessSteps({
  title,
  eyebrow,
  index = "02",
  steps,
  variant = "light",
}: ProcessStepsProps) {
  return (
    <ProgressiveSteps
      title={title}
      eyebrow={eyebrow}
      index={index}
      steps={steps}
      variant={variant}
    />
  );
}
