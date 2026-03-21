"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Twin3Logo } from "@/components/MatrixAnimations";
import { useTheme } from "@/components/ThemeProvider";

/* ── Official Brand SVG Icons ── */
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[16px] h-[16px]">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[16px] h-[16px]">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12.056 0zM16.906 8.018c-.18 1.897-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);
const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[16px] h-[16px]">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
  </svg>
);

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
  { path: "/competitive", title: "Competitive Advantages" },
  { path: "/conclusion", title: "Conclusion & References" },
  { path: "/links", title: "Ecosystem Links" },
];

/* ── Top Header — pixel-perfect match to twin3.ai nav ── */
export function TopHeader() {
  const [chapterOpen, setChapterOpen] = useState(false);
  const [globalOpen, setGlobalOpen] = useState(false);
  const { theme, toggle: toggleTheme } = useTheme();
  const isDark = theme === "dark";

  // Sync body.dark so home-nav.css dark-mode selectors work
  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <>
      <nav className="nav">
        {/* Global hamburger — left side, same as homepage */}
        <button
          className="nav-hamburger"
          onClick={() => setGlobalOpen(true)}
          aria-label="Open menu"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" style={{ pointerEvents: "none" }}><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>

        {/* Logo */}
        <a href="https://twin3.ai" className="nav-logo" aria-label="twin3">
          <svg viewBox="0 0 32 32" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" strokeWidth="1"/>
            <rect x="0" y="0" width="16" height="32" fill="currentColor" clipPath="url(#wpNavClip)"/>
            <clipPath id="wpNavClip"><circle cx="16" cy="16" r="15"/></clipPath>
            <rect x="5" y="13" width="6" height="6" fill="var(--cream,#fafaf5)"/>
            <rect x="21" y="13" width="6" height="6" fill="currentColor"/>
            <circle cx="16" cy="16" r="2" fill="currentColor"/>
            <circle cx="16" cy="16" r="2" fill="var(--cream,#fafaf5)" clipPath="url(#wpNavClipL)"/>
            <clipPath id="wpNavClipL"><rect x="0" y="0" width="16" height="32"/></clipPath>
          </svg>
          <span style={{ marginLeft: "0.5rem" }}>twin3</span>
        </a>

        {/* Nav Links */}
        <ul className="nav-links">
          <li><a href="/holders/">Dashboard</a></li>
          <li><a href="/whitepaper/" style={{ color: "var(--green-forest,#a8b87a)" }}>Whitepaper</a></li>
        </ul>

        {/* Social Icons — official brand SVGs */}
        <div className="nav-social">
          <a href="https://x.com/twin3_ai" target="_blank" rel="noopener noreferrer" aria-label="X">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://t.me/twin3ai" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12.056 0zM16.906 8.018c-.18 1.897-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
          </a>
          <a href="https://discord.gg/dJspUX6SQJ" target="_blank" rel="noopener noreferrer" aria-label="Discord">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
          </a>
          <a href="https://element.market/collections/twin3-1?search[toggles][0]=ALL" target="_blank" rel="noopener noreferrer" aria-label="Element Market" className="nav-element-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://twin3.ai/assets/img/Element_logo.svg" alt="Element Market" width="20" height="20" style={{ filter: isDark ? "none" : "invert(1)", opacity: isDark ? 0.7 : 0.55, transition: "opacity 0.3s" }} />
          </a>
          <a href="https://www.rootdata.com/Projects/detail/twin3?k=MjM5OTg%3D" target="_blank" rel="noopener noreferrer" aria-label="RootData" className="nav-rootdata-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://play-lh.googleusercontent.com/rlk1k8nJeucxid8UCuS_3cvg2BSdC8Gz2RtJFQwAbsAer2Lk6VxxbROqzReNS4O0zfby=w480-h960-rw" alt="RootData" width="20" height="20" style={{ borderRadius: "4px", opacity: 0.7, transition: "opacity 0.3s" }} />
          </a>
        </div>

        {/* Theme Toggle — identical to homepage */}
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
          <svg className="icon-moon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ display: isDark ? "none" : "block" }}><path d="M13.5 8.5a5.5 5.5 0 1 1-6-6 4 4 0 0 0 6 6z"/></svg>
          <svg className="icon-sun" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ display: isDark ? "block" : "none" }}><circle cx="8" cy="8" r="3"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.5 3.5l1.4 1.4M11.1 11.1l1.4 1.4M3.5 12.5l1.4-1.4M11.1 4.9l1.4-1.4"/></svg>
        </button>
      </nav>

      {/* ── Floating Chapter Button (mobile only, in-page) ── */}
      <button
        className="lg:hidden"
        onClick={() => setChapterOpen(true)}
        aria-label="Open chapters"
        style={{
          position: "fixed", bottom: 24, right: 20, zIndex: 100,
          display: "flex", alignItems: "center", gap: "0.4rem",
          padding: "0.6rem 1rem", borderRadius: 24,
          background: isDark ? "rgba(10,22,16,0.9)" : "rgba(250,250,245,0.9)",
          backdropFilter: "blur(12px)",
          border: `1px solid ${isDark ? "rgba(168,184,122,0.2)" : "rgba(74,124,89,0.15)"}`,
          boxShadow: isDark ? "0 4px 20px rgba(0,0,0,0.4)" : "0 4px 20px rgba(0,0,0,0.1)",
          cursor: "pointer",
          color: isDark ? "#d4c89a" : "var(--green-deep)",
          fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.06em",
        }}
      >
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        Chapters
      </button>

      {/* ── Global Nav Drawer (site navigation) ── */}
      <AnimatePresence>
        {globalOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200]"
            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
            onClick={() => setGlobalOpen(false)}
          >
            <motion.div
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute left-0 top-0 bottom-0 w-[280px] overflow-y-auto p-6 pt-5"
              style={{ background: isDark ? "#0a1610" : "#fafaf5", borderRight: `1px solid ${isDark ? "rgba(168,184,122,0.12)" : "rgba(74,124,89,0.12)"}` }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", paddingBottom: "1rem", borderBottom: `1px solid ${isDark ? "rgba(168,184,122,0.12)" : "rgba(74,124,89,0.12)"}` }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: isDark ? "#d4c89a" : "var(--green-deep)", letterSpacing: "0.15em" }}>twin3</span>
                <button onClick={() => setGlobalOpen(false)} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)" }}>
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <a href="/" style={{ display: "block", padding: "0.75rem 1rem", fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: isDark ? "#8a8468" : "var(--text-muted)", textDecoration: "none", borderRadius: 8, letterSpacing: "0.04em" }}>Home</a>
                <a href="/holders/" style={{ display: "block", padding: "0.75rem 1rem", fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: isDark ? "#8a8468" : "var(--text-muted)", textDecoration: "none", borderRadius: 8, letterSpacing: "0.04em" }}>Dashboard</a>
                <a href="/whitepaper/" style={{ display: "block", padding: "0.75rem 1rem", fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: isDark ? "#d4c89a" : "var(--green-forest)", textDecoration: "none", borderRadius: 8, letterSpacing: "0.04em", fontWeight: 600, background: isDark ? "rgba(212,200,154,0.08)" : "rgba(74,124,89,0.08)" }}>Whitepaper</a>
              </div>
              <div style={{ marginTop: "2rem", paddingTop: "1rem", borderTop: `1px solid ${isDark ? "rgba(168,184,122,0.12)" : "rgba(74,124,89,0.12)"}`, display: "flex", gap: "1.2rem" }}>
                <a href="https://x.com/twin3_ai" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: isDark ? "#8a8468" : "var(--text-muted)", textDecoration: "none" }}>X</a>
                <a href="https://t.me/twin3ai" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: isDark ? "#8a8468" : "var(--text-muted)", textDecoration: "none" }}>Telegram</a>
                <a href="https://discord.gg/dJspUX6SQJ" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: isDark ? "#8a8468" : "var(--text-muted)", textDecoration: "none" }}>Discord</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Chapter Drawer (whitepaper chapters) ── */}
      <AnimatePresence>
        {chapterOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] lg:hidden"
            style={{ background: "rgba(6,14,8,0.95)", backdropFilter: "blur(8px)" }}
            onClick={() => setChapterOpen(false)}
          >
            <motion.div
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute left-0 top-0 bottom-0 w-[280px] overflow-y-auto p-6 pt-5"
              style={{ background: "#0a1610", borderRight: "1px solid rgba(168,184,122,0.12)" }}
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
                  "flex-1 block px-3 py-1.5 rounded transition-colors leading-snug",
                  isActive
                    ? "text-gold bg-gold/10"
                    : "text-cream-soft/70 hover:text-cream hover:bg-cream/5"
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
                          ? "text-gold/80"
                          : "text-cream-soft/50 hover:text-cream-soft"
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
