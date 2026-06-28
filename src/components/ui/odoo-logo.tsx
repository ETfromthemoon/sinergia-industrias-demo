/** Inline SVG del logo oficial de Odoo — círculo púrpura */
export function OdooLogo({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Odoo"
    >
      {/* Fondo púrpura Odoo */}
      <circle cx="32" cy="32" r="32" fill="#714B67" />
      <circle cx="32" cy="32" r="30" fill="#875A7B" />
      {/* Forma estilizada — pie con slice */}
      <path
        d="M32 8C18.745 8 8 18.745 8 32c0 4.5 1.2 8.7 3.3 12.3L32 32V8z"
        fill="white"
        opacity="0.95"
      />
      <path
        d="M32 32l-8.5 14.7C27.2 55.2 29.5 56 32 56c13.255 0 24-10.745 24-24H32z"
        fill="white"
        opacity="0.7"
      />
      <circle cx="32" cy="32" r="4" fill="#875A7B" />
    </svg>
  );
}
