"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import Script from "next/script";
import { useTheme } from "@/components/ThemeProvider";

/* ── GitBook-style sidebar nav items ── */
type NavItem = {
  path: string;
  title: string;
  children?: { path: string; title: string }[];
};

const SIDEBAR_NAV: NavItem[] = [
  { path: "/", title: "Executive Summary" },
  { path: "/paradigm-shift", title: "The Paradigm Shift" },
  {
    path: "/work-revolution",
    title: "The Work Revolution",
    children: [
      { path: "/work-revolution#productivity", title: "3.1 From Productivity to Experience" },
      { path: "/work-revolution#axes", title: "3.2 Two Axes of Collaboration" },
      { path: "/work-revolution#scenarios", title: "3.3 Three Core Scenarios" },
    ],
  },
  {
    path: "/human-intelligence",
    title: "Engineering Human Intelligence",
    children: [
      { path: "/human-intelligence#computable", title: "4.1 The Computable Human" },
      { path: "/human-intelligence#twin-matrix", title: "4.2 Twin Matrix (256D)" },
      { path: "/human-intelligence#framework", title: "4.3 Four-Dimensional Framework" },
      { path: "/human-intelligence#implementation", title: "4.4 Technical Implementation" },
      { path: "/human-intelligence#proof", title: "4.5 3D Proof of Authenticity" },
      { path: "/human-intelligence#proof-of-humanity", title: "4.6 Proof of Humanity" },
    ],
  },
  { path: "/algorithm", title: "Twin Matrix Algorithm" },
  { path: "/soul-injection", title: "Soul Injection" },
  { path: "/agent-economy", title: "The Agent Economy" },
  { path: "/product", title: "Product & User Experience" },
  { path: "/business-model", title: "Business Model" },
  {
    path: "/tokenomics",
    title: "Token Economics",
    children: [
      { path: "/tokenomics#utility", title: "9.1 Token Utility" },
      { path: "/tokenomics#allocation", title: "9.2 Allocation" },
      { path: "/tokenomics#vesting", title: "9.3 Vesting Schedule" },
      { path: "/tokenomics#flywheel", title: "9.4 Growth Flywheel" },
    ],
  },
  { path: "/investment", title: "Investment Opportunity" },
  { path: "/go-to-market", title: "Go-to-Market Strategy" },
  { path: "/roadmap", title: "Development Roadmap" },
  { path: "/team", title: "Core Team" },
  { path: "/competitive", title: "Competitive Advantages" },
  { path: "/conclusion", title: "Conclusion & References" },
  { path: "/links", title: "Ecosystem Links" },
];

/* ── Top Header — uses shared nav.js (identical to all other pages) ── */
export function TopHeader() {
  const [chapterOpen, setChapterOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Sync body.dark so home-nav.css dark-mode selectors work
  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <>
      {/* ── Shared nav injected by nav.js (same as Home/Dashboard/Matrix/Agent/Exchange) ── */}
      <div id="t3-nav-slot" />
      <Script src="/nav.js" strategy="afterInteractive" />

      {/* ── Floating Chapter Button (mobile only, in-page) ── */}
      <button
        className="lg:hidden"
        onClick={() => setChapterOpen(true)}
        aria-label="Open chapters"
        style={{
          position: "fixed", bottom: 24, right: 20, zIndex: 100,
          display: "flex", alignItems: "center", gap: "0.4rem",
          padding: "0.6rem 1rem", borderRadius: 24,
          background: isDark ? "rgba(250,250,245,0.95)" : "rgba(10,22,16,0.95)",
          backdropFilter: "blur(12px)",
          border: isDark ? "1px solid rgba(74,124,89,0.15)" : "1px solid rgba(168,184,122,0.2)",
          boxShadow: isDark ? "0 4px 20px rgba(250,250,245,0.2)" : "0 4px 20px rgba(0,0,0,0.4)",
          cursor: "pointer",
          color: isDark ? "var(--green-deep)" : "#d4c89a",
          fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.06em",
        }}
      >
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        Chapters
      </button>

      {/* ── Chapter Drawer (whitepaper chapters) ── */}
      <AnimatePresence>
        {chapterOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] lg:hidden"
            style={{ background: "var(--drawer-overlay, rgba(6,14,8,0.85))", backdropFilter: "blur(8px)" }}
            onClick={() => setChapterOpen(false)}
          >
            <motion.div
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute left-0 top-0 bottom-0 w-[280px] overflow-y-auto p-6 pt-5"
              style={{ background: "var(--sidebar-bg, #0a1610)", borderRight: "1px solid var(--sidebar-border, rgba(168,184,122,0.12))" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <a href="https://twin3.ai" className="nav-logo">twin3</a>
                <button onClick={() => setChapterOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)" }}>
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.75rem" }}>CHAPTERS</p>
              <SidebarContent onNavigate={() => setChapterOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}



/* ── Left Sidebar (GitBook-style, desktop only) ── */
function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const init: Record<string, boolean> = {};
    SIDEBAR_NAV.forEach((item) => {
      if (item.children) {
        const isActive =
          pathname === item.path ||
          item.children.some((c) => pathname === c.path.split("#")[0]);
        if (isActive) init[item.path] = true;
      }
    });
    setExpanded((prev) => ({ ...prev, ...init }));
  }, [pathname]);

  const toggle = (path: string) =>
    setExpanded((prev) => ({ ...prev, [path]: !prev[path] }));

  return (
    <nav className="space-y-0.5 text-[0.8rem]">
      {SIDEBAR_NAV.map((item) => {
        const basePath = item.path.split("#")[0];
        const isActive = pathname === basePath;
        const hasChildren = !!item.children;
        const isExpanded = expanded[item.path];

        return (
          <div key={item.path}>
            <div className="flex items-center">
              <Link
                href={item.path}
                onClick={onNavigate}
                className={clsx(
                  "flex-1 block px-3 py-1.5 rounded transition-colors leading-snug sidebar-link",
                  isActive
                    ? "sidebar-link-active"
                    : "sidebar-link-idle"
                )}
              >
                {item.title}
              </Link>
              {hasChildren && (
                <button
                  onClick={() => toggle(item.path)}
                  className="p-1 text-cream-soft/40 hover:text-cream"
                >
                  <ChevronDown
                    className={clsx(
                      "w-3.5 h-3.5 transition-transform",
                      isExpanded && "rotate-180"
                    )}
                  />
                </button>
              )}
            </div>
            {hasChildren && isExpanded && (
              <div className="ml-3 pl-3 border-l border-sage/30 space-y-0.5 mt-0.5">
                {item.children!.map((child) => {
                  const childBase = child.path.split("#")[0];
                  const childActive = pathname === childBase;
                  return (
                    <Link
                      key={child.path}
                      href={child.path}
                      onClick={onNavigate}
                      className={clsx(
                        "block px-2 py-1 rounded text-[0.72rem] transition-colors leading-snug",
                        childActive
                          ? "sidebar-link-active"
                          : "sidebar-link-idle"
                      )}
                    >
                      {child.title}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export function Sidebar() {
  return (
    <aside
      className="hidden lg:block fixed top-14 left-0 bottom-0 w-[260px] border-r overflow-y-auto p-6 pt-6 z-40"
      style={{ borderColor: "rgba(168,184,122,0.12)", background: "var(--sidebar-bg, #0a1610)" }}
    >
      <SidebarContent />
      <div className="mt-8 pt-4 border-t" style={{ borderColor: "rgba(168,184,122,0.12)" }}>
        <a
          href="https://twin3.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="mono-label text-[0.55rem] text-cream-soft/30 hover:text-gold transition-colors"
        >
          twin3.ai ↗
        </a>
      </div>
    </aside>
  );
}
