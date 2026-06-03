import { cn } from "@/lib/utils";

type CornerProps = {
  className?: string;
  size?: number;
};

/** Crosshair tick marks at the four corners of a technical frame. */
export function CornerTicks({ className, size = 10 }: CornerProps) {
  const stroke = "currentColor";
  const common = "absolute opacity-50";
  return (
    <span aria-hidden className={cn("pointer-events-none", className)}>
      {/* top-left */}
      <svg className={cn(common, "left-0 top-0")} width={size} height={size}>
        <path d={`M0 0 H${size} M0 0 V${size}`} stroke={stroke} strokeWidth="1" />
      </svg>
      {/* top-right */}
      <svg className={cn(common, "right-0 top-0")} width={size} height={size}>
        <path d={`M${size} 0 H0 M${size} 0 V${size}`} stroke={stroke} strokeWidth="1" />
      </svg>
      {/* bottom-left */}
      <svg className={cn(common, "left-0 bottom-0")} width={size} height={size}>
        <path d={`M0 ${size} H${size} M0 ${size} V0`} stroke={stroke} strokeWidth="1" />
      </svg>
      {/* bottom-right */}
      <svg className={cn(common, "right-0 bottom-0")} width={size} height={size}>
        <path d={`M${size} ${size} H0 M${size} ${size} V0`} stroke={stroke} strokeWidth="1" />
      </svg>
    </span>
  );
}

/** A bordered technical panel with corner crosshairs. */
export function BlueprintFrame({
  children,
  className,
  tickClassName,
}: {
  children: React.ReactNode;
  className?: string;
  tickClassName?: string;
}) {
  return (
    <div className={cn("relative border border-steel-200", className)}>
      <CornerTicks className={cn("text-navy", tickClassName)} />
      {children}
    </div>
  );
}
