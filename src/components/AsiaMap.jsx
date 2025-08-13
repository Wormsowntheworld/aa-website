// src/components/AsiaMap.jsx
import React from "react";
import mapImg from "../assets/asia_map.png";

/**
 * PROJECTED MAP PINS THAT STAY PUT
 * - We draw the PNG inside an SVG viewBox (W x H)
 * - We project lon/lat -> (x,y) using a simple Mercator-like mapping
 * - You can tune lon/lat bounds below so Singapore lands EXACTLY where you want.
 *
 * Why this works:
 * Everything is drawn in the same SVG coordinate space (viewBox),
 * so scaling the <svg> responsively will keep pins exactly aligned.
 */

// 1) Use the native pixel size of your PNG (measure once; this is 1920x1080 from your asset)
const W = 1920;
const H = 1080;

// 2) Set the geographic bounds that your artwork visually covers
//    (These numbers are *the* knobs that make pins match the coastline).
//    Start with these for East/SE Asia and tweak until SG is perfect.
const BOUNDS = {
  lonMin: 10,   // left edge longitude
  lonMax: 60,  // right edge longitude
  latMin: 10,  // bottom edge latitude
  latMax: 80,   // top edge latitude (only used for clamping)
};

// 3) Simple mercator-ish projection (no dependency on d3)
function projectLonLat(lon, lat) {
  // clamp to avoid infinities
  const eps = 1e-6;
  const lonMin = BOUNDS.lonMin;
  const lonMax = BOUNDS.lonMax;

  // longitudinal linear scale
  const x = ((lon - lonMin) / (lonMax - lonMin)) * W;

  // mercator Y
  const rad = Math.PI / 180;
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  const phi = clamp(lat, -85, 85) * rad;
  const mercY = Math.log(Math.tan(Math.PI / 4 + phi / 2));

  // choose two reference latitudes that visually match your artwork’s vertical framing
  // tweak these two until Singapore/Yangon/HK sit right vertically.
  const refLatMin = -10;  // bottom latitude line that your PNG visually includes
  const refLatMax =  60;  // top latitude line that your PNG visually includes
  const mercMin = Math.log(Math.tan(Math.PI / 4 + (refLatMin * rad) / 2));
  const mercMax = Math.log(Math.tan(Math.PI / 4 + (refLatMax * rad) / 2));

  // invert Y because SVG origin is top-left
  const y = H - ((mercY - mercMin) / (mercMax - mercMin)) * H;

  return [x, y];
}

// 4) Cities (you can add more)
const CITIES = [
  { name: "Singapore", lon: 103.8198, lat: 1.3521, color: "#C01818", r: 6 },
  { name: "Penang", lon: 100.3288, lat: 5.4141 },
  { name: "Ho Chi Minh City", lon: 106.6297, lat: 10.8231 },
  { name: "Chengdu", lon: 104.0668, lat: 30.5728 },
  { name: "Hong Kong", lon: 114.1694, lat: 22.3193 },
  { name: "Tokyo", lon: 139.6503, lat: 35.6762 },
  { name: "Busan", lon: 129.0756, lat: 35.1796 },
];

// 5) Optional per-city nudges (few pixels) if your PNG is stylised:
const NUDGES = {
  // "Hong Kong": [5, -3],
  // "Penang": [-4, 2],
};

export default function AsiaMap({ showLabels = true, drawRoutes = true }) {
  const pins = CITIES.map((c) => {
    let [x, y] = projectLonLat(c.lon, c.lat);
    const n = NUDGES[c.name] || [0, 0];
    x += n[0];
    y += n[1];
    return { ...c, x, y };
  });

  // routes from Singapore to others
  const sg = pins.find((p) => p.name === "Singapore");
  const routes = drawRoutes && sg
    ? pins
        .filter((p) => p.name !== "Singapore")
        .map((p) => {
          // nice curve: quadratic bezier control point mid-way and slight upward arc
          const cx = (sg.x + p.x) / 2;
          const cy = Math.min(sg.y, p.y) - 60; // raise arc
          const d = `M ${sg.x},${sg.y} Q ${cx},${cy} ${p.x},${p.y}`;
          return { to: p.name, d };
        })
    : [];

  return (
    <div style={{ width: "100%", maxWidth: 1400, margin: "0 auto" }}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block" }}>
        <image href={mapImg} x="0" y="0" width={W} height={H} />
        {/* soft gradient vignette optional */}
        <defs>
          <filter id="pinShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="black" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* routes */}
        {routes && routes.map((r) => (
          <path key={r.to} d={r.d} fill="none" stroke="#C6A664" strokeWidth="2" strokeOpacity="0.6" />
        ))}

        {/* pins */}
        {pins.map((p) => (
          <g key={p.name} filter="url(#pinShadow)">
            <circle cx={p.x} cy={p.y} r={p.r || 4} fill={p.color || "#C6A664"} stroke="#1C2A39" strokeWidth="1.5" />
            {/* Singapore ring */}
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
