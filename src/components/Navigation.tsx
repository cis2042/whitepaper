"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Twin3Logo } from "@/components/MatrixAnimations";
import { useTheme } from "@/components/ThemeProvider";

/* ── twin3.ai-matching top header nav items ── */
const SITE_NAV = [
  { href: "https://twin3.ai/#stage1", label: "Soul" },
  { href: "https://twin3.ai/#stage2", label: "Agent" },
  { href: "https://twin3.ai/#stage3", label: "Economy" },
  { href: "https://holders.twin3.ai", label: "Dashboard" },
  { href: "/", label: "Whitepaper", internal: true },
];

const SOCIALS = [
  { href: "https://x.com/twin3_ai", icon: "𝕏", title: "X" },
  { href: "https://t.me/twin3_ai", icon: "✈", title: "Telegram" },
  { href: "https://discord.gg/twin3", icon: "⌘", title: "Discord" },
  { href: "https://element.market/collections/twin-matrix", icon: "◉", title: "Element" },
];

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

/* ── Top Header (matches twin3.ai) ── */
export function TopHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle: toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-[60] transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-base-deep/80 shadow-lg"
          : "backdrop-blur-sm bg-base-deep/40"
      )}
      style={{ borderBottom: "1px solid rgba(168,184,122,0.12)" }}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-5 h-14">
        {/* Logo */}
        <Link href="https://twin3.ai" className="flex items-center gap-2 shrink-0">
          <Twin3Logo size={26} />
          <span className="font-mono text-sm font-medium text-cream tracking-wide">twin3</span>
        </Link>

        {/* Desktop Center Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {SITE_NAV.map((item) =>
            item.internal ? (
              <Link
                key={item.label}
                href={item.href}
                className="mono-label text-[0.6rem] px-3 py-1.5 text-gold hover:text-cream transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mono-label text-[0.6rem] px-3 py-1.5 text-cream-soft/60 hover:text-cream transition-colors"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Desktop Right: socials + theme toggle */}
        <div className="hidden md:flex items-center gap-3">
          {SOCIALS.map((s) => (
            <a
              key={s.title}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream-soft/40 hover:text-cream transition-colors text-sm"
              title={s.title}
            >
              {s.icon}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-2 p-1.5 rounded-full text-cream-soft/40 hover:text-cream transition-colors border border-cream-soft/10 hover:border-cream-soft/30"
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to cream mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1.5 text-cream-soft/60 hover:text-cream"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Full Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-base-deep/95 backdrop-blur-md md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute left-0 top-0 bottom-0 w-[280px] overflow-y-auto p-6 pt-5"
              style={{ background: "var(--sidebar-bg, #0a1610)", borderRight: "1px solid rgba(168,184,122,0.12)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <Link href="https://twin3.ai" className="font-heading text-lg text-cream">twin3</Link>
                <button onClick={() => setMobileOpen(false)} className="p-1 text-cream-soft/40 hover:text-cream">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Site Nav */}
              <div className="mb-6 pb-4 border-b" style={{ borderColor: "rgba(168,184,122,0.12)" }}>
                {SITE_NAV.map((item) =>
                  item.internal ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block mono-label text-[0.6rem] text-gold py-2"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mono-label text-[0.6rem] text-cream-soft/60 py-2"
                    >
                      {item.label} ↗
                    </a>
                  )
                )}
              </div>

              {/* Sidebar chapters */}
              <p className="mono-label text-[0.5rem] text-cream-soft/30 mb-3">CHAPTERS</p>
              <SidebarContent onNavigate={() => setMobileOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
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
