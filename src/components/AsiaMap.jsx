// src/components/AsiaMap.jsx
import React from "react";
import mapImg from "../assets/asia_map.png";

// native size of your PNG
const W = 1920;
const H = 1080;

// ✅ 100% pixel placement (no projection)
// x,y are in *image pixels* inside the same SVG viewBox (0..W, 0..H)
const PIXEL_PINS = [
  { name: "Singapore",       x: 886,  y: 880,  color: "#C01818", r: 6 }, // origin (red)
  { name: "Penang",          x: 815,  y: 819 },
  { name: "Kuala Lumpur",    x: 843,  y: 853 },
  { name: "Ho Chi Minh City",x: 942,  y: 738 },
  { name: "Bangkok",         x: 819,  y: 694 },
  { name: "Hanoi",           x: 926,  y: 585 },
  { name: "Chengdu",         x: 891,  y: 441 },
  { name: "Hong Kong",       x: 1095, y: 565 },
  { name: "Taipei",          x: 1244, y: 525 },
  { name: "Manila",          x: 1233, y: 681 },
  { name: "Busan",           x: 1396, y: 372 },
  { name: "Tokyo",           x: 1610, y: 365 },
  { name: "Jakarta",         x: 947,  y: 993 },
];

export default function AsiaMap({ showLabels = true, drawRoutes = true }) {
  // optional routes radiating from Singapore
  const sg = PIXEL_PINS.find(p => p.name === "Singapore");
  const routes = drawRoutes && sg
    ? PIXEL_PINS.filter(p => p !== sg).map(p => {
        const cx = (sg.x + p.x) / 2;
        const cy = Math.min(sg.y, p.y) - 60; // small upward bow
        return { to: p.name, d: `M ${sg.x},${sg.y} Q ${cx},${cy} ${p.x},${p.y}` };
      })
    : [];

  return (
    <div style={{ width: "100%", maxWidth: 1400, margin: "0 auto" }}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block" }}>
        <image href={mapImg} x="0" y="0" width={W} height={H} />

        <defs>
          <filter id="pinShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="black" floodOpacity="0.35" />
          </filter>
        </defs>

        {routes.map(r => (
          <path key={r.to} d={r.d} fill="none" stroke="#C6A664" strokeWidth="2" strokeOpacity="0.6" />
        ))}

        {PIXEL_PINS.map(p => (
          <g key={p.name} filter="url(#pinShadow)">
            <circle cx={p.x} cy={p.y} r={p.r || 4} fill={p.color || "#C6A664"} stroke="#1C2A39" strokeWidth="1.5" />
            {p.name === "Singapore" && (
              <circle cx={p.x} cy={p.y} r={(p.r || 4) + 3} fill="none" stroke="#C01818" strokeWidth="1.5" />
            )}
            {showLabels && (
              <text
                x={p.x + 10}
                y={p.y - 8}
                fontSize="14"
                fill="#F8F6F1"
                style={{ fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" }}
              >
                {p.name}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
