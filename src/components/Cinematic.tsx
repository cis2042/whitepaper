"use client";

import { useRef, useEffect, useState, useMemo, useCallback } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, animate } from "framer-motion";

/* ══════════════════════════════════════════════════════════
   CINEMATIC ANIMATIONS — "Magic" level components
   Text, imagery, and temporal dynamics that create understanding
   ══════════════════════════════════════════════════════════ */

/* ── 1. Particle Field — ambient floating particles ── */
export function ParticleField({
  count = 40,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        duration: 15 + Math.random() * 25,
        delay: Math.random() * 10,
        opacity: 0.1 + Math.random() * 0.25,
      })),
    [count]
  );

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: `radial-gradient(circle, rgba(212,200,154,${p.opacity}), transparent)`,
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 15, -10, 5, 0],
            opacity: [p.opacity, p.opacity * 1.5, p.opacity * 0.6, p.opacity * 1.2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

/* ── 2. Scroll-Driven Narrative — cinematic scroll sequence ── */
export function ScrollNarrative({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [60, 0, 0, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.96, 1, 1, 0.98]);

  return (
    <motion.div ref={ref} style={{ opacity, y, scale }} className={className}>
      {children}
    </motion.div>
  );
}

/* ── 3. Breathing Glow — elements that pulse like a heartbeat ── */
export function BreathingGlow({
  children,
  color = "rgba(212,200,154,0.15)",
  intensity = 1,
  className = "",
}: {
  children: React.ReactNode;
  color?: string;
  intensity?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        boxShadow: [
          `0 0 ${20 * intensity}px ${color}`,
          `0 0 ${40 * intensity}px ${color}`,
          `0 0 ${20 * intensity}px ${color}`,
        ],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ── 4. Morphing Number — numbers that count up with spring physics ── */
export function MorphingNumber({
  value,
  prefix = "",
  suffix = "",
  className = "",
  duration = 2,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { damping: 30, stiffness: 80 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) {
      motionVal.set(value);
    }
  }, [inView, value, motionVal]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (value >= 1000) {
        setDisplay(Math.round(v).toLocaleString());
      } else if (value < 1) {
        setDisplay(v.toFixed(3));
      } else if (value < 100) {
        setDisplay(v.toFixed(1));
      } else {
        setDisplay(Math.round(v).toLocaleString());
      }
    });
    return unsub;
  }, [spring, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/* ── 5. Connection Lines — animated SVG lines between concepts ── */
export function ConnectionWeb({
  nodes,
  className = "",
}: {
  nodes: { x: number; y: number; label: string; color?: string }[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const w = 500;
  const h = 300;

  // Generate connection lines between all pairs
  const lines = useMemo(() => {
    const result: { x1: number; y1: number; x2: number; y2: number }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        result.push({
          x1: nodes[i].x,
          y1: nodes[i].y,
          x2: nodes[j].x,
          y2: nodes[j].y,
        });
      }
    }
    return result;
  }, [nodes]);

  return (
    <div ref={ref} className={className}>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full" preserveAspectRatio="xMidYMid meet">
        {/* Connection lines */}
        {lines.map((line, i) => (
          <motion.line
            key={`line-${i}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="rgba(168,184,122,0.12)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 + i * 0.05, ease: "easeOut" }}
          />
        ))}

        {/* Animated pulse along lines */}
        {lines.slice(0, 6).map((line, i) => (
          <motion.circle
            key={`pulse-${i}`}
            r="2"
            fill="#d4c89a"
            initial={{ opacity: 0 }}
            animate={
              inView
                ? {
                    cx: [line.x1, line.x2],
                    cy: [line.y1, line.y2],
                    opacity: [0, 0.8, 0],
                  }
                : {}
            }
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: 2 + i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={`node-${i}`}>
            {/* Outer glow */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="18"
              fill="none"
              stroke={node.color || "rgba(212,200,154,0.15)"}
              strokeWidth="0.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={
                inView
                  ? {
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }
                  : {}
              }
              transition={{
                scale: { duration: 3, repeat: Infinity, delay: i * 0.3 },
                opacity: { duration: 3, repeat: Infinity, delay: i * 0.3 },
              }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            />
            {/* Core dot */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="4"
              fill={node.color || "#d4c89a"}
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.4, type: "spring" }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            />
            {/* Label */}
            <motion.text
              x={node.x}
              y={node.y + 28}
              textAnchor="middle"
              fill="#bfb89a"
              fontSize="8"
              fontFamily="var(--font-mono), monospace"
              initial={{ opacity: 0, y: node.y + 35 }}
              animate={inView ? { opacity: 0.7, y: node.y + 28 } : {}}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
            >
              {node.label}
            </motion.text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ── 6. Transformation Sequence — morph between states ── */
export function TransformSequence({
  stages,
  className = "",
}: {
  stages: { label: string; description: string; icon?: string }[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [inView, stages.length]);

  return (
    <div ref={ref} className={`glass-panel rounded-lg p-6 my-8 ${className}`}>
      {/* Progress bar */}
      <div className="flex gap-1 mb-6">
        {stages.map((_, i) => (
          <div key={i} className="flex-1 h-0.5 rounded-full overflow-hidden" style={{ background: "rgba(168,184,122,0.1)" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: i === activeStage ? "#d4c89a" : "rgba(168,184,122,0.2)" }}
              initial={{ width: "0%" }}
              animate={{ width: i === activeStage ? "100%" : i < activeStage ? "100%" : "0%" }}
              transition={{ duration: i === activeStage ? 3 : 0.3 }}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative min-h-[120px]">
        {stages.map((stage, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{
              opacity: i === activeStage ? 1 : 0,
              x: i === activeStage ? 0 : i < activeStage ? -30 : 30,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="mono-label text-[0.5rem] text-gold/60">
                STAGE {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h4 className="font-heading text-cream text-lg mb-2">{stage.label}</h4>
            <p className="text-[0.78rem] text-cream-soft/60 leading-relaxed">{stage.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Stage indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {stages.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveStage(i)}
            className="w-2 h-2 rounded-full transition-all cursor-pointer"
            style={{
              background: i === activeStage ? "#d4c89a" : "rgba(168,184,122,0.2)",
              transform: i === activeStage ? "scale(1.5)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── 7. Data Stream — flowing data particles ── */
export function DataStream({
  direction = "right",
  speed = 20,
  className = "",
}: {
  direction?: "right" | "left" | "up";
  speed?: number;
  className?: string;
}) {
  const particles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        size: 1 + Math.random() * 2,
        offset: Math.random() * 100,
        delay: Math.random() * speed,
        opacity: 0.15 + Math.random() * 0.3,
      })),
    [speed]
  );

  const getAnimation = (p: typeof particles[0]) => {
    if (direction === "right") return { x: ["-20px", "calc(100% + 20px)"] };
    if (direction === "left") return { x: ["calc(100% + 20px)", "-20px"] };
    return { y: ["calc(100% + 20px)", "-20px"] };
  };

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ minHeight: 4 }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            [direction === "up" ? "left" : "top"]: `${p.offset}%`,
            background: `rgba(212,200,154,${p.opacity})`,
          }}
          animate={getAnimation(p)}
          transition={{
            duration: speed + Math.random() * 5,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

/* ── 8. Cinematic Hero — scroll-driven parallax hero ── */
export function CinematicHero({
  title,
  subtitle,
  tagline,
  className = "",
}: {
  title: string;
  subtitle: string;
  tagline?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <motion.div
      ref={ref}
      className={`relative py-16 mb-8 overflow-hidden ${className}`}
      style={{ opacity, scale }}
    >
      <ParticleField count={25} />
      <div className="relative z-10 text-center">
        {tagline && (
          <motion.p
            className="mono-label text-[0.55rem] text-sage/60 mb-4 tracking-[0.3em]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {tagline}
          </motion.p>
        )}
        <motion.h1
          className="text-4xl md:text-6xl font-heading text-cream leading-[1.05] mb-4"
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-cream-soft/50 font-heading italic max-w-2xl mx-auto"
          style={{ y: subtitleY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {subtitle}
        </motion.p>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,200,154,0.3), transparent)" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 1.2 }}
      />
    </motion.div>
  );
}

/* ── 9. Value Flow — animated value transfer visualization ── */
export function ValueFlow({
  from,
  to,
  value,
  className = "",
}: {
  from: string;
  to: string;
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={`my-6 ${className}`}>
      {/* Desktop: horizontal */}
      <div className="hidden sm:flex items-center gap-0">
        <motion.div
          className="glass-panel rounded-lg p-4 flex-1 text-center"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="font-heading text-cream text-sm">{from}</span>
        </motion.div>

        <div className="relative w-32 h-8 mx-2 overflow-hidden shrink-0">
          <DataStream direction="right" speed={8} className="absolute inset-0" />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mono-label text-[0.45rem] text-gold/70 bg-base-deep/80 px-2 py-0.5 rounded-full whitespace-nowrap"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.3, type: "spring" }}
          >
            {value}
          </motion.div>
        </div>

        <motion.div
          className="glass-panel rounded-lg p-4 flex-1 text-center"
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="font-heading text-cream text-sm">{to}</span>
        </motion.div>
      </div>

      {/* Mobile: vertical */}
      <div className="flex sm:hidden flex-col items-center gap-2">
        <motion.div
          className="glass-panel rounded-lg p-3 w-full text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="font-heading text-cream text-sm">{from}</span>
        </motion.div>

        <div className="flex flex-col items-center gap-0.5">
          <motion.div
            className="mono-label text-[0.45rem] text-gold/70 bg-base-deep/80 px-2 py-0.5 rounded-full whitespace-nowrap"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.3, type: "spring" }}
          >
            {value}
          </motion.div>
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none" stroke="rgba(212,200,154,0.4)" strokeWidth="1.5"><path d="M6 0v16M2 13l4 4 4-4"/></svg>
        </div>

        <motion.div
          className="glass-panel rounded-lg p-3 w-full text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <span className="font-heading text-cream text-sm">{to}</span>
        </motion.div>
      </div>
    </div>
  );
}

/* ── 10. Orbital System — rotating nodes around a center ── */
export function OrbitalSystem({
  center,
  orbitals,
  className = "",
}: {
  center: string;
  orbitals: { label: string; color?: string }[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const n = orbitals.length;
  const size = 280;
  const cx = size / 2;
  const cy = size / 2;

  return (
    <div ref={ref} className={`flex justify-center my-8 ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        {/* Orbit rings */}
        {[60, 95, 125].map((r, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border"
            style={{
              width: r * 2,
              height: r * 2,
              left: cx - r,
              top: cy - r,
              borderColor: `rgba(168,184,122,${0.06 + i * 0.03})`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.6, ease: "easeOut" }}
          />
        ))}

        {/* Center node with breathing glow */}
        <motion.div
          className="absolute flex items-center justify-center"
          style={{
            width: 70,
            height: 70,
            left: cx - 35,
            top: cy - 35,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={
            inView
              ? {
                  scale: 1,
                  opacity: 1,
                  boxShadow: [
                    "0 0 20px rgba(212,200,154,0.1)",
                    "0 0 40px rgba(212,200,154,0.2)",
                    "0 0 20px rgba(212,200,154,0.1)",
                  ],
                }
              : {}
          }
          transition={{
            scale: { delay: 0.1, duration: 0.5, type: "spring" },
            boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="glass-panel rounded-full w-full h-full flex items-center justify-center border border-gold/20">
            <span className="font-heading text-gold text-[0.6rem] text-center leading-tight px-1">
              {center}
            </span>
          </div>
        </motion.div>

        {/* Orbital nodes */}
        {orbitals.map((orbital, i) => {
          const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
          const radius = 105;
          const x = cx + radius * Math.cos(angle) - 30;
          const y = cy + radius * Math.sin(angle) - 15;

          return (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: x, top: y, width: 60 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.8 + i * 0.12, duration: 0.4, type: "spring" }}
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              >
                <div className="glass-panel rounded-lg p-1.5 text-center border" style={{
                  borderColor: orbital.color || "rgba(168,184,122,0.15)",
                }}>
                  <span className="text-[0.55rem] text-cream leading-tight block">
                    {orbital.label}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ── 11. Reveal Text — words that appear one by one ── */
export function RevealText({
  text,
  className = "",
  highlightWords = [],
}: {
  text: string;
  className?: string;
  highlightWords?: string[];
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const isHighlight = highlightWords.some((hw) => word.toLowerCase().includes(hw.toLowerCase()));
        return (
          <motion.span
            key={i}
            className={isHighlight ? "text-cream font-heading" : ""}
            initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ delay: 0.02 * i, duration: 0.4, ease: "easeOut" }}
          >
            {word}{" "}
          </motion.span>
        );
      })}
    </p>
  );
}

/* ── 12. Depth Layers — parallax depth cards ── */
export function DepthLayers({
  layers,
  className = "",
}: {
  layers: { label: string; description: string; depth: number; color?: string }[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={ref} className={`relative ${className}`} style={{ perspective: "1000px" }}>
      {layers.map((layer, i) => {
        const y = useTransform(scrollYProgress, [0, 1], [30 * layer.depth, -30 * layer.depth]);
        return (
          <motion.div
            key={i}
            className="glass-panel rounded-lg p-5 mb-3"
            style={{
              y,
              borderLeft: `2px solid ${layer.color || "rgba(212,200,154,0.2)"}`,
              transform: `translateZ(${layer.depth * 20}px)`,
            }}
          >
            <h4 className="font-heading text-cream text-sm !mt-0 !mb-1">{layer.label}</h4>
            <p className="text-[0.72rem] text-cream-soft/60 !mb-0">{layer.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
