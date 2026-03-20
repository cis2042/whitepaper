"use client";

import { useRef, useEffect, useMemo, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ═══════════════════════════════════════════════════
   MATRIX RAIN — the hex-grid animation from twin3.ai
   Randomly flickering hex values on a grid
   ═══════════════════════════════════════════════════ */

function randomHex() {
  return Math.floor(Math.random() * 256).toString(16).toUpperCase().padStart(2, "0");
}

export function MatrixRain({
  rows = 12,
  cols = 20,
  className = "",
  speed = 2000,
  opacity = 0.12,
}: {
  rows?: number;
  cols?: number;
  className?: string;
  speed?: number;
  opacity?: number;
}) {
  const [grid, setGrid] = useState<string[][]>(() =>
    Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => randomHex())
    )
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid((prev) =>
        prev.map((row) =>
          row.map((cell) => (Math.random() < 0.08 ? randomHex() : cell))
        )
      );
    }, speed);
    return () => clearInterval(interval);
  }, [speed, rows, cols]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
      style={{ opacity }}
    >
      <div
        className="w-full h-full grid font-mono text-[0.5rem] leading-tight"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {grid.flat().map((hex, i) => (
          <span
            key={i}
            className="flex items-center justify-center matrix-cell transition-all duration-700"
            style={{
              color: `rgba(168, 184, 122, ${0.2 + Math.random() * 0.3})`,
            }}
          >
            {hex}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   MATRIX CIRCLE — 4-quadrant identity diagram
   Physical / Digital / Social / Spiritual
   ═══════════════════════════════════════════════════ */

export function MatrixCircle({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const quadrants = [
    { label: "PHYSICAL", angle: -135, color: "#a8b87a" },
    { label: "DIGITAL", angle: -45, color: "#d4c89a" },
    { label: "SOCIAL", angle: 135, color: "#a8b87a" },
    { label: "SPIRITUAL", angle: 45, color: "#d4c89a" },
  ];

  // Generate random hex values for the inner grid
  const innerCells = useMemo(
    () => Array.from({ length: 16 }, () => randomHex()),
    []
  );

  const size = 300;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = 120;
  const innerR = 60;

  return (
    <div ref={ref} className={`flex justify-center my-8 ${className}`}>
      <svg viewBox={`0 0 ${size} ${size}`} className="w-72 h-72" preserveAspectRatio="xMidYMid meet">
        {/* Outer circle */}
        <motion.circle
          cx={cx} cy={cy} r={outerR}
          fill="none"
          stroke="rgba(168,184,122,0.15)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Inner circle */}
        <motion.circle
          cx={cx} cy={cy} r={innerR}
          fill="none"
          stroke="rgba(212,200,154,0.2)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        />

        {/* Cross lines */}
        <motion.line
          x1={cx - outerR} y1={cy} x2={cx + outerR} y2={cy}
          stroke="rgba(168,184,122,0.1)"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.line
          x1={cx} y1={cy - outerR} x2={cx} y2={cy + outerR}
          stroke="rgba(168,184,122,0.1)"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Twin symbol — two interlocking halves */}
        <motion.path
          d={`M ${cx - 15} ${cy - 20} C ${cx - 15} ${cy - 30}, ${cx + 15} ${cy - 30}, ${cx + 15} ${cy - 20}
              L ${cx + 15} ${cy + 20} C ${cx + 15} ${cy + 30}, ${cx - 15} ${cy + 30}, ${cx - 15} ${cy + 20} Z`}
          fill="none"
          stroke="#d4c89a"
          strokeWidth="0.8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 0.5 } : {}}
          transition={{ duration: 1.5, delay: 0.8 }}
        />

        {/* Quadrant labels */}
        {quadrants.map((q, i) => {
          const angle = (q.angle * Math.PI) / 180;
          const labelR = outerR + 18;
          const x = cx + labelR * Math.cos(angle);
          const y = cy + labelR * Math.sin(angle);

          return (
            <motion.text
              key={q.label}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={q.color}
              fontSize="7"
              fontFamily="var(--font-mono), JetBrains Mono, monospace"
              fontWeight="500"
              letterSpacing="0.15em"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 0.7 } : {}}
              transition={{ delay: 1 + i * 0.15, duration: 0.5 }}
            >
              {q.label}
            </motion.text>
          );
        })}

        {/* Subtitle */}
        <motion.text
          x={cx} y={size - 10}
          textAnchor="middle"
          fill="#bfb89a"
          fontSize="5.5"
          fontFamily="var(--font-heading), EB Garamond, serif"
          fontStyle="italic"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.5 } : {}}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          The Womb of Digital Soul · Made Computable
        </motion.text>

        {/* Breathing center glow */}
        <motion.circle
          cx={cx} cy={cy} r="3"
          fill="#d4c89a"
          initial={{ opacity: 0 }}
          animate={
            inView
              ? {
                  opacity: [0.3, 0.8, 0.3],
                  r: [3, 5, 3] as any,
                }
              : {}
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   TWIN3 LOGO — SVG recreation of the twin3.ai icon
   Circle with split halves and inverted squares
   ═══════════════════════════════════════════════════ */

export function Twin3Logo({ size = 28, className = "" }: { size?: number; className?: string }) {
  const r = size / 2;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      {/* Left half — sage/gold */}
      <path
        d="M14 0 A14 14 0 0 0 14 28 Z"
        fill="#d4c89a"
      />
      {/* Right half — dark */}
      <path
        d="M14 0 A14 14 0 0 1 14 28 Z"
        fill="#0c1a10"
      />
      {/* Left square — dark */}
      <rect x="6" y="9" width="5" height="5" fill="#0c1a10" rx="0.5" />
      {/* Right square — sage */}
      <rect x="17" y="14" width="5" height="5" fill="#d4c89a" rx="0.5" />
      {/* Center circle */}
      <circle cx="14" cy="14" r="3" fill="none" stroke="#a8b87a" strokeWidth="0.5" />
      {/* Center left dot — dark */}
      <path d="M14 11 A3 3 0 0 0 14 17 Z" fill="#0c1a10" />
      {/* Center right dot — sage */}
      <path d="M14 11 A3 3 0 0 1 14 17 Z" fill="#d4c89a" />
    </svg>
  );
}
