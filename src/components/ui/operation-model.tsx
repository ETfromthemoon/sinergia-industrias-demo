import "./operation-model.css";

type Point = readonly [number, number];
type Module = {
  name: string;
  className: string;
  bounds: readonly [number, number, number, number];
  surface: string;
};

const MODULES: Module[] = [
  { name: "Procesos", className: "north", bounds: [-100, -28, -70, 25], surface: "url(#operation-steel)" },
  { name: "Ley REP", className: "east", bounds: [-25, 70, -100, -28], surface: "url(#operation-pale)" },
  { name: "Odoo", className: "south", bounds: [28, 100, -25, 70], surface: "url(#operation-cyan)" },
  { name: "Datos", className: "west", bounds: [-70, 25, 28, 100], surface: "url(#operation-steel)" },
];

function point(u: number, v: number, z = 0): Point {
  return [320 + (u - v) * 1.32, 290 + (u + v) * 0.71 - z];
}

function points(vertices: readonly Point[]) {
  return vertices.map(([x, y]) => `${x},${y}`).join(" ");
}

function plane(u1: number, u2: number, v1: number, v2: number, z: number) {
  return points([point(u1, v1, z), point(u2, v1, z), point(u2, v2, z), point(u1, v2, z)]);
}

function line(from: Point, to: Point) {
  return `M${from.join(" ")}L${to.join(" ")}`;
}

export function OperationModel() {
  return (
    <div className="operation-model" aria-hidden="true">
      <svg viewBox="0 0 640 520" fill="none" focusable="false" className="operation-model__svg">
        <defs>
          <linearGradient id="operation-steel" x1="160" y1="130" x2="410" y2="340" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EFF6FA" />
            <stop offset="0.52" stopColor="#B8CEDB" />
            <stop offset="1" stopColor="#7E9DAF" />
          </linearGradient>
          <linearGradient id="operation-pale" x1="320" y1="100" x2="480" y2="260" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F4FAFD" />
            <stop offset="1" stopColor="#C2D9E4" />
          </linearGradient>
          <linearGradient id="operation-cyan" x1="350" y1="220" x2="460" y2="340" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8DE1F5" />
            <stop offset="0.48" stopColor="#3ABDE6" />
            <stop offset="1" stopColor="#2085B1" />
          </linearGradient>
          <linearGradient id="operation-edge" x1="220" y1="220" x2="430" y2="390" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6D8A9D" />
            <stop offset="1" stopColor="#26394E" />
          </linearGradient>
          <linearGradient id="operation-floor" x1="320" y1="240" x2="320" y2="476" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B0D5E8" stopOpacity="0.07" />
            <stop offset="1" stopColor="#3ABDE6" stopOpacity="0.015" />
          </linearGradient>
          <radialGradient id="operation-ground-light">
            <stop stopColor="#3ABDE6" stopOpacity="0.18" />
            <stop offset="1" stopColor="#3ABDE6" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="324" cy="350" rx="270" ry="145" fill="url(#operation-ground-light)" />

        {/* A static drafting plane anchors the assembly without a rendering loop. */}
        <g className="operation-model__drawing" stroke="#8DB9CD" strokeWidth="0.7">
          <path d="M38 295 320 143 602 295 320 447Z" opacity="0.12" />
          <path d="M20 350 320 188 620 350M20 350 320 512 620 350" opacity="0.1" />
          {[-140, -70, 0, 70, 140].map((axis) => (
            <g key={axis} opacity="0.085">
              <path d={line(point(axis, -170, -30), point(axis, 170, -30))} />
              <path d={line(point(-170, axis, -30), point(170, axis, -30))} />
            </g>
          ))}
          <path d="M60 175v-24h24M556 151h24v24M60 415v24h24M556 439h24v-24" opacity="0.4" />
        </g>

        <g className="operation-model__foundation">
          <polygon points={plane(-139, 139, -139, 139, -30)} fill="url(#operation-floor)" stroke="#79AFC6" strokeOpacity="0.25" />
          <path d={line(point(-139, 139, -30), point(139, 139, -30))} stroke="#81B4CA" strokeOpacity="0.4" />
          <path d={line(point(139, 139, -30), point(139, -139, -30))} stroke="#81B4CA" strokeOpacity="0.4" />
          <path d="M320 183v-54M320 432v42" stroke="#8DB9CD" strokeOpacity="0.25" strokeDasharray="3 7" />
        </g>

        {/* The conduits connect all four capabilities; they are not activity metrics. */}
        <g className="operation-model__conduits" stroke="#3ABDE6" strokeWidth="1.4" strokeLinejoin="round">
          <path d="M320 355 217 300 166 327 99 291" />
          <path d="M320 355 423 300 474 327 541 291" />
          <path d="M320 355 269 382 218 355 166 383" />
          <path d="M320 355 371 382 422 355 474 383" />
          <g className="operation-model__signal" stroke="#C4F4FF" strokeWidth="2" strokeDasharray="0.09 1" strokeDashoffset="1">
            <path d="M320 355 217 300 166 327 99 291" pathLength="1" />
            <path d="M320 355 423 300 474 327 541 291" pathLength="1" />
            <path d="M320 355 269 382 218 355 166 383" pathLength="1" />
            <path d="M320 355 371 382 422 355 474 383" pathLength="1" />
          </g>
          {[point(-139, 28, -30), point(28, -139, -30), point(139, 28, -30), point(28, 139, -30)].map(([x, y], index) => (
            <rect key={index} x={x - 2} y={y - 2} width="4" height="4" fill="#A5E6F7" stroke="none" transform={`rotate(30 ${x} ${y})`} />
          ))}
        </g>

        {MODULES.map(({ name, className, bounds, surface }) => {
          const [u1, u2, v1, v2] = bounds;
          const top = 79;
          const bottom = 42;
          return (
            <g key={name} className={`operation-model__module operation-model__module--${className}`}>
              <polygon points={plane(u1 + 3, u2 + 3, v1 + 3, v2 + 3, 19)} fill="#050B18" fillOpacity="0.6" />
              <polygon points={points([point(u1, v2, top), point(u2, v2, top), point(u2, v2, bottom), point(u1, v2, bottom)])} fill="url(#operation-edge)" stroke="#91B5C8" strokeOpacity="0.3" strokeWidth="0.7" />
              <polygon points={points([point(u2, v1, top), point(u2, v2, top), point(u2, v2, bottom), point(u2, v1, bottom)])} fill="#253D53" stroke="#81A5BC" strokeOpacity="0.32" strokeWidth="0.7" />
              <polygon points={plane(u1, u2, v1, v2, top)} fill={surface} stroke="#D8EEF7" strokeOpacity="0.8" strokeWidth="0.7" />
              <polygon points={plane(u1 + 5, u2 - 5, v1 + 5, v2 - 5, top + 0.5)} stroke="#375B74" strokeOpacity="0.23" strokeWidth="0.65" />
              <path d={line(point(u1 + 10, v2, 54), point(u2 - 10, v2, 54))} stroke="#3ABDE6" strokeOpacity="0.8" strokeWidth="1.6" />
              <path d={line(point(u2, v1 + 10, 54), point(u2, v2 - 10, 54))} stroke="#77D5EE" strokeOpacity="0.6" strokeWidth="1.2" />
              {[0, 1, 2, 3].map((index) => (
                <path key={index} d={line(point(u1 + 11 + index * 5, v1 + 12, top + 1), point(u1 + 11 + index * 5, v1 + 24, top + 1))} stroke="#31536A" strokeOpacity="0.24" strokeWidth="1" />
              ))}
              <path d={line(point(u1 + 10, v2 - 12, top + 1), point(u2 - 10, v2 - 12, top + 1))} stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="0.8" />
            </g>
          );
        })}

        <g className="operation-model__core">
          <polygon points={plane(-24, 24, -24, 24, 85)} fill="#3ABDE6" stroke="#8FE5F7" strokeWidth="1" />
          <polygon points={points([point(-24, 24, 131), point(24, 24, 131), point(24, 24, 91), point(-24, 24, 91)])} fill="#7899AC" />
          <polygon points={points([point(24, -24, 131), point(24, 24, 131), point(24, 24, 91), point(24, -24, 91)])} fill="#3B586E" />
          <polygon points={plane(-24, 24, -24, 24, 131)} fill="#F1F9FC" stroke="#FFFFFF" strokeWidth="1" />
          <polygon points={plane(-17, 17, -17, 17, 132)} stroke="#6B9AAF" strokeOpacity="0.5" strokeWidth="0.8" />
          <polygon points={points([point(-10, 0, 133), point(-5, -9, 133), point(5, -9, 133), point(10, 0, 133), point(5, 9, 133), point(-5, 9, 133)])} fill="none" stroke="#6596AB" strokeWidth="1.2" />
          <path d={line(point(5, -9, 133), point(10, 0, 133))} stroke="#3ABDE6" strokeWidth="2.5" />
          <path d={line(point(-24, 24, 95), point(24, 24, 95))} stroke="#8CE5FF" strokeWidth="2" />
          <path d={line(point(24, -24, 95), point(24, 24, 95))} stroke="#3ABDE6" strokeWidth="2" />
        </g>

        <g className="operation-model__labels" fill="#B7CCD8" fontFamily="var(--font-mono), monospace" fontSize="10" letterSpacing="2">
          <path d="M177 201 129 175H78M443 171 489 145h72M442 305 491 331h70M199 308 139 340H78" fill="none" stroke="#7CA9BD" strokeOpacity="0.45" strokeWidth="0.7" />
          <text x="78" y="163">PROCESOS</text>
          <text x="496" y="133">LEY REP</text>
          <text x="515" y="353" fill="#7FD9F2">ODOO</text>
          <text x="78" y="362">DATOS</text>
          <path d="M312 78h16M320 70v16" fill="none" stroke="#B7CCD8" strokeOpacity="0.5" strokeWidth="0.7" />
        </g>
      </svg>
    </div>
  );
}
