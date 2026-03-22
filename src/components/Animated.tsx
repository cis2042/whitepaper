"use client";

import { motion, useInView, useMotionValue, useSpring, type Variants } from "framer-motion";
import { useRef, useEffect, useState, type ReactNode } from "react";

/* ── Scroll-triggered section reveal with stagger ── */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export function RevealSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

/* ── Animated number counter ── */
export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
  className = "",
}: {
  value: number | null;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: duration * 1000 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView && value !== null) motionVal.set(value);
  }, [inView, value, motionVal]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (value === null) return;
      if (value >= 1000000) setDisplay((v / 1000000).toFixed(1) + "M");
      else if (value >= 1000) setDisplay(Math.floor(v).toLocaleString());
      else if (Number.isInteger(value)) setDisplay(Math.floor(v).toString());
      else setDisplay(v.toFixed(2));
    });
  }, [spring, value]);

  if (value === null) {
    return (
      <span className={`${className} inline-flex items-center min-h-[1em]`}>
        <span className="block w-24 h-[0.7em] rounded bg-cream-soft/10 animate-pulse" />
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/* ── McKinsey-style KPI card ── */
export function KPICard({
  label,
  value,
  suffix = "",
  prefix = "",
  note,
  accentColor = "gold",
}: {
  label: string;
  value: number | null;
  suffix?: string;
  prefix?: string;
  note?: string;
  accentColor?: "gold" | "sage" | "cream";
}) {
  const colorMap = {
    gold: "text-gold",
    sage: "text-sage",
    cream: "text-cream",
  };
  return (
    <div className="glass-panel rounded-lg p-5 flex flex-col gap-1.5">
      <span className="mono-label text-[0.55rem] text-cream-soft/40">{label}</span>
      <AnimatedCounter
        value={value}
        prefix={prefix}
        suffix={suffix}
        className={`font-heading text-3xl md:text-4xl ${colorMap[accentColor]}`}
      />
      {note && <span className="text-[0.72rem] text-cream-soft/50 leading-snug">{note}</span>}
    </div>
  );
}

/* ── McKinsey-style insight callout ── */
export function InsightCallout({
  source,
  children,
  className = "",
}: {
  source: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative pl-5 border-l-2 border-gold/40 py-3 my-8 ${className}`}>
      <div className="absolute -left-[7px] top-4 w-3 h-3 rounded-full bg-gold/60" />
      <blockquote className="text-cream/90 font-heading text-lg italic leading-relaxed !border-0 !p-0 !m-0">
        {children}
      </blockquote>
      <cite className="mono-label text-[0.55rem] text-cream-soft/40 not-italic mt-2 block">
        — {source}
      </cite>
    </div>
  );
}

/* ── Animated flywheel / cycle diagram ── */
export function FlywheelDiagram({
  steps,
  centerLabel,
}: {
  steps: string[];
  centerLabel: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const n = steps.length;

  return (
    <div ref={ref} className="relative w-full max-w-[420px] mx-auto aspect-square my-10">
      {/* Center pulse */}
      <motion.div
        className="absolute inset-0 m-auto w-24 h-24 rounded-full flex items-center justify-center z-10"
        style={{ background: "rgba(212,200,154,0.08)", border: "1px solid rgba(212,200,154,0.2)" }}
        animate={inView ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="mono-label text-[0.5rem] text-gold text-center leading-tight">{centerLabel}</span>
      </motion.div>

      {/* Orbit ring */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        <motion.circle
          cx="200" cy="200" r="160"
          fill="none"
          stroke="rgba(168,184,122,0.15)"
          strokeWidth="1"
          strokeDasharray="8 6"
          animate={inView ? { rotate: 360 } : {}}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        />
        {/* Animated arrowheads */}
        <motion.circle
          cx="200" cy="40" r="3"
          fill="rgba(212,200,154,0.6)"
          animate={inView ? { rotate: 360 } : {}}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        />
      </svg>

      {/* Step nodes */}
      {steps.map((step, i) => {
        const angle = (2 * Math.PI * i) / n - Math.PI / 2;
        const x = 50 + 40 * Math.cos(angle);
        const y = 50 + 40 * Math.sin(angle);
        return (
          <motion.div
            key={i}
            className="absolute w-[100px] -ml-[50px] -mt-[20px] text-center"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
          >
            <div className="glass-panel rounded-md px-2 py-1.5 inline-block">
              <span className="mono-label text-[0.45rem] text-cream-soft/70 leading-tight block">{`0${i + 1}`}</span>
              <span className="text-[0.65rem] text-cream leading-tight block">{step}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ── Animated horizontal comparison bar ── */
export function ComparisonBar({
  label,
  value,
  maxValue = 100,
  color = "sage",
  suffix = "%",
}: {
  label: string;
  value: number;
  maxValue?: number;
  color?: "sage" | "gold" | "cream";
  suffix?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const pct = (value / maxValue) * 100;
  const colorMap = { sage: "#6a8a5a", gold: "#d4c89a", cream: "#e8e0c8" };

  return (
    <div ref={ref} className="flex items-center gap-3 py-1.5">
      <span className="mono-label text-[0.55rem] text-cream-soft/50 w-28 shrink-0 text-right">{label}</span>
      <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "rgba(168,184,122,0.08)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${colorMap[color]}88, ${colorMap[color]})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
        />
      </div>
      <span className="mono-label text-[0.6rem] text-gold w-12 shrink-0">{value}{suffix}</span>
    </div>
  );
}

/* ── Animated radar / spider chart for Twin Matrix ── */
export function RadarChart({
  dimensions,
  className = "",
}: {
  dimensions: { label: string; value: number }[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const n = dimensions.length;
  const size = 300;
  const cx = size / 2;
  const cy = size / 2;
  const maxR = 120;

  const getPoint = (i: number, r: number) => {
    const angle = (2 * Math.PI * i) / n - Math.PI / 2;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  };

  const dataPoints = dimensions.map((d, i) => getPoint(i, (d.value / 100) * maxR));
  const pathD = dataPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";

  return (
    <div ref={ref} className={`relative ${className}`}>
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-[300px] mx-auto">
        {/* Grid rings */}
        {[0.25, 0.5, 0.75, 1].map((r) => (
          <polygon
            key={r}
            points={Array.from({ length: n }, (_, i) => {
              const p = getPoint(i, maxR * r);
              return `${p.x},${p.y}`;
            }).join(" ")}
            fill="none"
            stroke="rgba(168,184,122,0.1)"
            strokeWidth="0.5"
          />
        ))}

        {/* Axis lines */}
        {dimensions.map((_, i) => {
          const p = getPoint(i, maxR);
          return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="rgba(168,184,122,0.08)" strokeWidth="0.5" />;
        })}

        {/* Data area */}
        <motion.path
          d={pathD}
          fill="rgba(106,138,90,0.15)"
          stroke="#6a8a5a"
          strokeWidth="1.5"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={inView ? { opacity: 1, pathLength: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Data dots */}
        {dataPoints.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="3"
            fill="#d4c89a"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
          />
        ))}

        {/* Labels */}
        {dimensions.map((d, i) => {
          const p = getPoint(i, maxR + 18);
          return (
            <text
              key={i}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="central"
              fill="#bfb89a"
              fontSize="8"
              fontFamily="var(--font-mono), monospace"
            >
              {d.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

/* ── Animated step process (horizontal flow) ── */
export function ProcessFlow({
  steps,
}: {
  steps: { label: string; description: string; icon?: string }[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="my-10">
      <div className="flex flex-col md:flex-row gap-0">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="flex-1 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
          >
            <div className="glass-panel rounded-lg p-4 relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="mono-label text-[0.5rem] text-gold/60">STEP {String(i + 1).padStart(2, "0")}</span>
              </div>
              <h4 className="font-heading text-cream text-sm mb-1">{step.label}</h4>
              <p className="text-[0.72rem] text-cream-soft/60 leading-relaxed">{step.description}</p>
            </div>
            {/* Connector arrow */}
            {i < steps.length - 1 && (
              <motion.div
                className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 text-sage/40"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.15 }}
              >
                →
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Section divider with label ── */
export function SectionDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-4 my-12">
      <div className="flex-1 h-px" style={{ background: "rgba(168,184,122,0.15)" }} />
      {label && <span className="mono-label text-[0.5rem] text-cream-soft/25 shrink-0">{label}</span>}
      <div className="flex-1 h-px" style={{ background: "rgba(168,184,122,0.15)" }} />
    </div>
  );
}

/* ── Chapter header with metadata ── */
export function ChapterHeader({
  chapter,
  title,
  subtitle,
  readTime,
}: {
  chapter: string;
  title: string;
  subtitle?: string;
  readTime?: string;
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-10"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="mono-label text-forest">{chapter}</span>
        {readTime && (
          <>
            <span className="text-cream-soft/20">·</span>
            <span className="mono-label text-[0.5rem] text-cream-soft/30">{readTime}</span>
          </>
        )}
      </div>
      <h1 className="text-4xl md:text-[3.2rem] font-heading text-cream leading-[1.1] mb-3">{title}</h1>
      {subtitle && (
        <p className="text-lg text-cream-soft/60 font-heading italic leading-relaxed">{subtitle}</p>
      )}
      <div className="mt-6 h-px" style={{ background: "linear-gradient(90deg, rgba(212,200,154,0.3), transparent)" }} />
    </motion.header>
  );
}

/* ── Animated Pie / Donut Chart ── */
export function PieChart({
  data,
  className = "",
}: {
  data: { label: string; value: number; color: string }[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const total = data.reduce((s, d) => s + d.value, 0);
  const size = 240;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = 100;
  const innerR = 55;

  let cumAngle = -90; // start at top
  const slices = data.map((d) => {
    const angle = (d.value / total) * 360;
    const startAngle = cumAngle;
    cumAngle += angle;
    const endAngle = cumAngle;
    const toRad = (deg: number) => (deg * Math.PI) / 180;
    const largeArc = angle > 180 ? 1 : 0;
    const x1o = cx + outerR * Math.cos(toRad(startAngle));
    const y1o = cy + outerR * Math.sin(toRad(startAngle));
    const x2o = cx + outerR * Math.cos(toRad(endAngle));
    const y2o = cy + outerR * Math.sin(toRad(endAngle));
    const x1i = cx + innerR * Math.cos(toRad(endAngle));
    const y1i = cy + innerR * Math.sin(toRad(endAngle));
    const x2i = cx + innerR * Math.cos(toRad(startAngle));
    const y2i = cy + innerR * Math.sin(toRad(startAngle));
    const path = `M${x1o},${y1o} A${outerR},${outerR} 0 ${largeArc},1 ${x2o},${y2o} L${x1i},${y1i} A${innerR},${innerR} 0 ${largeArc},0 ${x2i},${y2i} Z`;
    // label position at mid-angle
    const midAngle = startAngle + angle / 2;
    const labelR = outerR + 16;
    const lx = cx + labelR * Math.cos(toRad(midAngle));
    const ly = cy + labelR * Math.sin(toRad(midAngle));
    return { ...d, path, lx, ly, midAngle, angle };
  });

  return (
    <div ref={ref} className={`flex flex-col lg:flex-row items-center gap-8 ${className}`}>
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-[260px] shrink-0">
        {slices.map((s, i) => (
          <motion.path
            key={i}
            d={s.path}
            fill={s.color}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: "easeOut" }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
            className="hover:brightness-125 transition-all cursor-default"
          />
        ))}
        {/* Percentage labels on slices */}
        {slices.map((s, i) => {
          const pct = (s.value / total) * 100;
          if (pct < 4) return null;
          const toRad = (deg: number) => (deg * Math.PI) / 180;
          const labelR2 = (innerR + outerR) / 2;
          const labelX = cx + labelR2 * Math.cos(toRad(s.midAngle));
          const labelY = cy + labelR2 * Math.sin(toRad(s.midAngle));
          return (
            <motion.text
              key={`pct-${i}`}
              x={labelX}
              y={labelY}
              textAnchor="middle"
              dominantBaseline="central"
              fill="#fff"
              fontSize="8"
              fontWeight="600"
              fontFamily="var(--font-mono), monospace"
              style={{ pointerEvents: "none" }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
            >
              {pct.toFixed(0)}%
            </motion.text>
          );
        })}
        <text x={cx} y={cy - 6} textAnchor="middle" fill="#bfb89a" fontSize="8" fontFamily="var(--font-mono), monospace">
          TOTAL
        </text>
        <text x={cx} y={cy + 10} textAnchor="middle" fill="#d4c89a" fontSize="14" fontFamily="var(--font-heading)">
          1,000,000,000
        </text>
      </svg>
      <div className="flex flex-col gap-1.5 w-full">
        {slices.map((s, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
          >
            <span className="w-3 h-3 rounded-sm shrink-0" style={{ background: s.color }} />
            <span className="text-[0.72rem] text-cream-soft/60 flex-1">{s.label}</span>
            <span className="mono-label text-[0.6rem] text-cream">{s.value}%</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Timeline / Area Chart for vesting schedule ── */
export function TimelineChart({
  data,
  className = "",
}: {
  data: { month: number; value: number; label?: string }[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const w = 600;
  const h = 200;
  const pad = { top: 20, right: 20, bottom: 30, left: 50 };
  const plotW = w - pad.left - pad.right;
  const plotH = h - pad.top - pad.bottom;

  const maxMonth = Math.max(...data.map((d) => d.month));
  const maxVal = Math.max(...data.map((d) => d.value));

  const getX = (month: number) => pad.left + (month / maxMonth) * plotW;
  const getY = (val: number) => pad.top + plotH - (val / maxVal) * plotH;

  const linePath = data.map((d, i) => `${i === 0 ? "M" : "L"}${getX(d.month)},${getY(d.value)}`).join(" ");
  const areaPath = linePath + ` L${getX(data[data.length - 1].month)},${getY(0)} L${getX(data[0].month)},${getY(0)} Z`;

  // Y-axis ticks
  const yTicks = [0, 25, 50, 75, 100].filter((v) => v <= maxVal);
  // X-axis ticks
  const xTicks = data.filter((d) => d.label);

  return (
    <div ref={ref} className={className}>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full" preserveAspectRatio="xMidYMid meet">
        {/* Grid lines */}
        {yTicks.map((v) => (
          <g key={v}>
            <line x1={pad.left} y1={getY(v)} x2={w - pad.right} y2={getY(v)} stroke="rgba(168,184,122,0.08)" strokeWidth="0.5" />
            <text x={pad.left - 6} y={getY(v) + 3} textAnchor="end" fill="rgba(191,184,154,0.4)" fontSize="7" fontFamily="var(--font-mono), monospace">
              {v}%
            </text>
          </g>
        ))}

        {/* X-axis labels */}
        {xTicks.map((d, i) => (
          <text key={i} x={getX(d.month)} y={h - 6} textAnchor="middle" fill="rgba(191,184,154,0.4)" fontSize="6" fontFamily="var(--font-mono), monospace">
            {d.label}
          </text>
        ))}

        {/* Area fill */}
        <motion.path
          d={areaPath}
          fill="rgba(106,138,90,0.1)"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Line */}
        <motion.path
          d={linePath}
          fill="none"
          stroke="#6a8a5a"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Data points */}
        {data.filter((d) => d.label).map((d, i) => (
          <motion.circle
            key={i}
            cx={getX(d.month)}
            cy={getY(d.value)}
            r="3"
            fill="#d4c89a"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
          />
        ))}
      </svg>
    </div>
  );
}
