import { OdooLogo } from "@/components/ui/odoo-logo";
import { cn } from "@/lib/utils";

type OdooPartnerBadgeProps = {
  className?: string;
  inverse?: boolean;
};

export function OdooPartnerBadge({
  className,
  inverse = false,
}: OdooPartnerBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border px-3 py-2",
        inverse
          ? "border-white/15 bg-white/8 text-white"
          : "border-navy/12 bg-white text-navy",
        className,
      )}
    >
      <OdooLogo size={17} />
      <span className="font-mono text-[0.58rem] font-semibold uppercase tracking-[0.13em]">
        Ready Partner Oficial
      </span>
    </span>
  );
}
