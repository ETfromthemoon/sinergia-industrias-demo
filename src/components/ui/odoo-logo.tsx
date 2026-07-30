/** Logo oficial de Odoo — usa el PNG oficial para máxima fidelidad de marca */
export function OdooLogo({ size = 20 }: { size?: number }) {
  return (
    <img
      src="/odoo-logo.png"
      alt="Odoo"
      style={{ height: size, width: "auto" }}
      className="inline-block"
    />
  );
}
