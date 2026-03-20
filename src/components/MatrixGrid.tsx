"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { motion, useInView } from "framer-motion";

/* ══════════════════════════════════════════════════════════
   MatrixGrid — 16×16 hex grid matching twin3.ai homepage
   256 cells with PHYSICAL ME / DIGITAL ME / SOCIAL ME / SPIRITUAL ME
   ══════════════════════════════════════════════════════════ */

function randomHex() {
  return Math.floor(Math.random() * 256)
    .toString(16)
    .toUpperCase()
    .padStart(2, "0");
}

export function MatrixGrid({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [cells, setCells] = useState<string[]>([]);

  // Generate initial 256 hex values
  const initialCells = useMemo(
    () => Array.from({ length: 256 }, () => randomHex()),
    []
  );

  useEffect(() => {
    setCells(initialCells);
  }, [initialCells]);

  // Animate random cells periodically
  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setCells((prev) => {
        const next = [...prev];
        // Randomly update 8-12 cells per tick
        const count = 8 + Math.floor(Math.random() * 5);
        for (let i = 0; i < count; i++) {
          const idx = Math.floor(Math.random() * 256);
          next[idx] = randomHex();
        }
        return next;
      });
    }, 1200);
    return () => clearInterval(interval);
  }, [inView]);

  // Determine which quadrant a cell belongs to (for coloring)
  const getQuadrant = (idx: number): "physical" | "digital" | "social" | "spiritual" => {
    const row = Math.floor(idx / 16);
    const col = idx % 16;
    if (row < 8 && col < 8) return "physical";
    if (row < 8 && col >= 8) return "digital";
    if (row >= 8 && col < 8) return "social";
    return "spiritual";
  };

  // Some cells are "active" (brighter)
  const isActive = (idx: number) => {
    const v = parseInt(cells[idx] || "00", 16);
    return v > 180;
  };

  return (
    <motion.div
      ref={ref}
      className={`relative mx-auto ${className}`}
      style={{ maxWidth: 520 }}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {/* Dark background wrapper */}
      <div
        className="relative rounded-lg overflow-hidden"
        style={{
          background: "#060e08",
          padding: "2px",
          boxShadow: "0 0 40px rgba(111, 219, 143, 0.08), 0 0 80px rgba(111, 219, 143, 0.04)",
        }}
      >
        {/* The 16×16 grid */}
        <div
          className="grid rounded-lg overflow-hidden"
          style={{
            gridTemplateColumns: "repeat(16, 1fr)",
            gridTemplateRows: "repeat(16, 1fr)",
            gap: "1px",
            aspectRatio: "1 / 1",
          }}
        >
          {cells.map((hex, i) => {
            const quadrant = getQuadrant(i);
            const active = isActive(i);
            const baseOpacity = active ? 0.85 : 0.45;

            return (
              <div
                key={i}
                className="flex items-center justify-center transition-all duration-300"
                style={{
                  background: active
                    ? "rgba(45, 74, 53, 0.22)"
                    : "rgba(45, 74, 53, 0.08)",
                  fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  fontSize: "clamp(5px, 0.7vw, 8px)",
                  fontWeight: active ? 700 : 400,
                  color: active
                    ? "#6fdb8f"
                    : `rgba(74, 124, 89, ${baseOpacity})`,
                  lineHeight: 1,
                  aspectRatio: "1 / 1",
                }}
              >
                {hex}
              </div>
            );
          })}
        </div>

        {/* Quadrant label overlay */}
        <div
          className="absolute inset-0 grid pointer-events-none"
          style={{
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            zIndex: 2,
          }}
        >
          <div className="flex items-center justify-center">
            <span className="matrix-quadrant-label">PHYSICAL ME</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="matrix-quadrant-label">DIGITAL ME</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="matrix-quadrant-label">SOCIAL ME</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="matrix-quadrant-label">SPIRITUAL ME</span>
          </div>
        </div>

        {/* Subtle scan line effect */}
        <motion.div
          className="absolute left-0 right-0 h-px pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(111, 219, 143, 0.15), transparent)",
            zIndex: 3,
          }}
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
