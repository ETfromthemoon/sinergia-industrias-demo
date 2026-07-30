import Image from "next/image";

/** Logo oficial de Odoo — usa el PNG oficial para máxima fidelidad de marca */
export function OdooLogo({ size = 20 }: { size?: number }) {
  return (
    <Image
      src="/odoo-logo.png"
      alt="Odoo"
      width={160}
      height={52}
      style={{ height: size, width: "auto" }}
      className="inline-block"
    />
  );
}
