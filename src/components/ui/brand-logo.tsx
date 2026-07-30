import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  inverse?: boolean;
};

export function BrandLogo({ className, priority = false, inverse = false }: BrandLogoProps) {
  return (
    <Image
      src="/sinergia-logo.png"
      alt="Sinergia Consultores"
      width={307}
      height={65}
      priority={priority}
      className={cn("h-auto w-[10.75rem]", inverse && "brightness-0 invert", className)}
    />
  );
}
