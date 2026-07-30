import { ImageResponse } from "next/og";

export const alt = "Sinergia Industrias — Ingeniería que ordena y transforma";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          background: "#071b22",
          color: "#f9f7ef",
          padding: "72px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 680,
            height: 680,
            border: "1px solid rgba(255,255,255,.10)",
            borderRadius: "50%",
            right: -140,
            top: -180,
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 54,
              height: 54,
              border: "1px solid rgba(255,255,255,.25)",
              borderRadius: "50%",
              fontSize: 16,
            }}
          >
            SI
          </div>
          <div style={{ display: "flex", fontSize: 24, fontWeight: 600 }}>
            Sinergia Industrias
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", fontSize: 76, lineHeight: 0.95 }}>
            Ingeniería que ordena
          </div>
          <div style={{ display: "flex", color: "#8bbca1", fontSize: 76, lineHeight: 0.95 }}>
            y transforma.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, color: "rgba(255,255,255,.58)" }}>
          <span>Ley REP · Procesos · Odoo · Datos</span>
          <span>Viña del Mar · Chile</span>
        </div>
      </div>
    ),
    size,
  );
}
