"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  RevealSection,
  RevealItem,
  KPICard,
  InsightCallout,
  FlywheelDiagram,
  SectionDivider,
} from "@/components/Animated";
import {
  CinematicHero,
  ScrollNarrative,
  RevealText,
  MorphingNumber,
  TransformSequence,
  OrbitalSystem,
  ParticleField,
  BreathingGlow,
  DataStream,
} from "@/components/Cinematic";

export default function ExecutiveSummary() {
  /* ── Live stats from holders.twin3.ai ── */
  const [holders, setHolders] = useState(141547);
  useEffect(() => {
    fetch("https://holders.twin3.ai/api/stats/summary")
      .then((r) => r.json())
      .then((d) => {
        if (d?.latest?.cumulative_holders) setHolders(d.latest.cumulative_holders);
      })
      .catch(() => {});
  }, []);
  return (
    <article className="prose-wp">
      {/* ── Cinematic Hero ── */}
      <CinematicHero
        tagline="WHITEPAPER  ·  2025"
        title="The Infrastructure for Human Value in the Agentic Economy"
        subtitle="A Decentralized Marketplace for Authentic Human Experience in the Agentic Economy"
      />

      {/* ── The Thesis — word-by-word reveal ── */}
      <ScrollNarrative>
        <InsightCallout source="McKinsey Global Institute, 2023">
          Generative AI could unlock up to USD 4.4 trillion in annual economic value — but only
          with effective human guidance, alignment, and culturally informed judgment.
        </InsightCallout>
      </ScrollNarrative>

      <ScrollNarrative>
        <RevealText
          text="Generative AI is driving the fastest economic transformation in modern history. As AI systems increasingly automate repetitive production tasks, the source of human economic value is shifting irreversibly toward what machines cannot replicate: lived experience, taste, judgment, and cultural insight."
          highlightWords={["experience", "taste", "judgment", "cultural", "irreversibly"]}
          className="text-[0.88rem] text-cream-soft/70 leading-relaxed my-6"
        />
      </ScrollNarrative>

      <ScrollNarrative>
        <p>
          Yet these qualities remain largely invisible in digital systems. They are difficult to
          quantify, difficult for AI to reason over, and impossible to trade fairly. This creates a
          major structural gap: enterprises need authentic human insight to guide AI, while
          individuals lack a scalable way to monetize their experience.
        </p>
      </ScrollNarrative>

      <ScrollNarrative>
        <div className="relative py-8 my-6">
          <ParticleField count={15} />
          <p className="relative z-10 text-2xl md:text-3xl font-heading text-cream leading-relaxed text-center max-w-xl mx-auto">
            twin3 is building foundational infrastructure to close this gap.
          </p>
        </div>
      </ScrollNarrative>

      <SectionDivider label="THE PROTOCOL" />

      {/* ── What twin3 Is — Transformation Sequence ── */}
      <ScrollNarrative>
        <p>
          twin3 is a decentralized marketplace for authentic human experience in the Agentic
          Economy. Through its proprietary{" "}
          <strong className="text-cream">Twin Matrix protocol</strong>, twin3 encodes human
          experience across physical, digital, social, and spiritual dimensions into a{" "}
          <strong className="text-cream">256-dimensional Soulbound Token (SBT)</strong> — creating
          a <strong className="text-cream">Computable Human</strong> that AI systems can
          understand, reason over, and align with.
        </p>
      </ScrollNarrative>

      {/* ── Orbital System: What twin3 connects ── */}
      <ScrollNarrative>
        <OrbitalSystem
          center="TWIN MATRIX"
          orbitals={[
            { label: "Taste", color: "rgba(212,200,154,0.3)" },
            { label: "Judgment", color: "rgba(168,184,122,0.3)" },
            { label: "Values", color: "rgba(212,200,154,0.3)" },
            { label: "Skills", color: "rgba(168,184,122,0.3)" },
            { label: "Culture", color: "rgba(212,200,154,0.3)" },
            { label: "Identity", color: "rgba(168,184,122,0.3)" },
          ]}
        />
        <p className="text-[0.7rem] text-cream-soft/40 text-center -mt-4 mb-6">
          256 dimensions across four quadrants — the full spectrum of what makes you, you.
        </p>
      </ScrollNarrative>

      {/* ── The Two Sides ── */}
      <ScrollNarrative>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <BreathingGlow color="rgba(212,200,154,0.1)" intensity={0.6} className="rounded-lg">
            <div className="glass-panel rounded-lg p-5 border-l-2 border-gold/40 h-full">
              <h3 className="font-heading text-cream text-base mb-2 !mt-0">For Enterprises</h3>
              <p className="text-[0.8rem] text-cream-soft/70 !mb-0">
                Seeking real human insight to align AI systems, improve products, and build trust in
                an environment saturated with synthetic content.
              </p>
            </div>
          </BreathingGlow>
          <BreathingGlow color="rgba(168,184,122,0.1)" intensity={0.6} className="rounded-lg">
            <div className="glass-panel rounded-lg p-5 border-l-2 border-sage/40 h-full">
              <h3 className="font-heading text-cream text-base mb-2 !mt-0">For Individuals</h3>
              <p className="text-[0.8rem] text-cream-soft/70 !mb-0">
                Seeking fair compensation for their experience, judgment, and authenticity — the most
                scarce resource in the AI era.
              </p>
            </div>
          </BreathingGlow>
        </div>
      </ScrollNarrative>

      {/* ── 70% Value Return — Dynamic Visualization ── */}
      <ScrollNarrative>
        <div className="relative my-10 py-12 overflow-hidden">
          {/* Background particle streams: Enterprise → Center → Contributors */}
          <DataStream direction="right" speed={12} className="absolute top-1/3 left-0 w-full h-8 opacity-20" />
          <DataStream direction="right" speed={18} className="absolute top-1/2 left-0 w-full h-6 opacity-15" />
          <DataStream direction="right" speed={10} className="absolute top-2/3 left-0 w-full h-8 opacity-20" />

          <div className="relative z-10 flex items-center gap-4 md:gap-6">
            {/* Left: Enterprise Demand */}
            <div className="flex-1 glass-panel rounded-lg p-4 text-center">
              <span className="mono-label text-[0.5rem] text-cream-soft/30 block mb-1">DEMAND</span>
              <span className="font-heading text-cream text-sm md:text-base">Enterprise</span>
              <p className="text-[0.65rem] text-cream-soft/40 !mb-0 mt-1">AI alignment · Product insight · Trust building</p>
            </div>

            {/* Center: 70% Ring */}
            <div className="relative flex-shrink-0" style={{ width: 160, height: 160 }}>
              <svg viewBox="0 0 160 160" className="w-full h-full">
                {/* Track ring */}
                <circle cx="80" cy="80" r="68" fill="none" stroke="rgba(168,184,122,0.08)" strokeWidth="8" />
                {/* Animated 70% arc */}
                <circle
                  cx="80" cy="80" r="68"
                  fill="none"
                  stroke="url(#goldGrad)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${0.7 * 2 * Math.PI * 68} ${0.3 * 2 * Math.PI * 68}`}
                  strokeDashoffset={2 * Math.PI * 68 * 0.25}
                  className="animate-ring-draw"
                />
                {/* Rotating glow dot at the arc end */}
                <circle cx="80" cy="12" r="4" fill="#d4c89a" className="animate-glow-pulse">
                  <animateTransform attributeName="transform" type="rotate" from="0 80 80" to="360 80 80" dur="8s" repeatCount="indefinite" />
                </circle>
                <defs>
                  <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d4c89a" />
                    <stop offset="50%" stopColor="#a8b87a" />
                    <stop offset="100%" stopColor="#d4c89a" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Big 70% number */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl md:text-5xl font-heading text-gold leading-none">70%</span>
                <span className="mono-label text-[0.45rem] text-cream-soft/40 mt-1">VALUE RETURN</span>
              </div>
            </div>

            {/* Right: Human Contributors */}
            <div className="flex-1 glass-panel rounded-lg p-4 text-center">
              <span className="mono-label text-[0.5rem] text-cream-soft/30 block mb-1">RETURN</span>
              <span className="font-heading text-cream text-sm md:text-base">Contributors</span>
              <p className="text-[0.65rem] text-cream-soft/40 !mb-0 mt-1">Experience · Judgment · Cultural insight</p>
            </div>
          </div>

          <p className="text-[0.75rem] text-cream-soft/50 text-center mt-6 relative z-10">
            By using blockchain to enforce user sovereignty, twin3 returns
            <strong className="text-gold"> 70% </strong> of platform value to human contributors.
          </p>
        </div>
      </ScrollNarrative>

      <SectionDivider label="TRACTION" />

      {/* ── KPI Dashboard — Live from holders.twin3.ai ── */}
      <RevealSection className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-8">
        <RevealItem>
          <KPICard label="SBT Holders" value={holders} prefix="" note="On BNB Chain · Live" accentColor="gold" />
        </RevealItem>
        <RevealItem>
          <KPICard label="Global Ranking" value={7} prefix="#" note="All SBT projects" accentColor="cream" />
        </RevealItem>
        <RevealItem>
          <KPICard label="BNB Chain" value={2} prefix="#" note="Second to Binance BAB" accentColor="sage" />
        </RevealItem>
      </RevealSection>

      <SectionDivider label="INVESTMENT HIGHLIGHTS" />

      {/* ── Transformation Sequence: Why Now ── */}
      <ScrollNarrative>
        <TransformSequence
          stages={[
            {
              label: "The Agentic Era Has Arrived",
              description:
                "Gartner projects 33% of enterprise software will include agentic AI by 2028. Autonomous agents will handle tasks from customer support to investment management — but every one of them needs a trust layer.",
            },
            {
              label: "Human Intelligence is the Bottleneck",
              description:
                "As AI handles routine cognition, the premium on uniquely human capabilities — creativity, empathy, ethical judgment, cross-cultural fluency — increases exponentially. Yet there is no marketplace for these capabilities.",
            },
            {
              label: "twin3 is the Infrastructure Layer",
              description:
                "We are building the exchange for authentic human experience: the protocol that makes human intelligence computable, verifiable, and tradable at scale. First mover in a trillion-dollar category.",
            },
          ]}
        />
      </ScrollNarrative>

      <ScrollNarrative>
        <InsightCallout source="Harvard Business Review, 2024">
          As AI handles more routine cognitive tasks, the premium on uniquely human capabilities —
          creativity, empathy, ethical judgment, and cross-cultural fluency — increases
          exponentially.
        </InsightCallout>
      </ScrollNarrative>

      {/* ── Moat: User-Centric ── */}
      <ScrollNarrative>
        <h2>The Moat Belongs to Users</h2>
        <p className="text-[0.82rem] text-cream-soft/60 -mt-2 mb-6">
          twin3's moat is not built around the company — it is built{" "}
          <strong className="text-cream">around the user</strong>. Every layer of defensibility is designed
          to make each individual's digital body more valuable, more sovereign, and more
          irreplaceable.
        </p>
        <div className="glass-panel rounded-lg p-6 my-4 space-y-4">
          <div className="flex items-start gap-3">
            <span className="mono-label text-gold text-[0.6rem] pt-0.5 shrink-0">01</span>
            <p className="!mb-0">
              <strong className="text-cream">Users ARE the Real World Asset.</strong>{" "}
              Your on-chain identity is not metadata about you — it is you. Each SBT is a verifiable,
              non-transferable RWA in the user's own wallet. The asset cannot be copied, extracted, or
              rehypothecated.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="mono-label text-gold text-[0.6rem] pt-0.5 shrink-0">02</span>
            <p className="!mb-0">
              <strong className="text-cream">User-Aggregated Data.</strong>{" "}
              twin3 does not harvest data — users compose their own 256-dimensional identity vector.
              The data provenance chain starts and ends with the individual.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="mono-label text-gold text-[0.6rem] pt-0.5 shrink-0">03</span>
            <p className="!mb-0">
              <strong className="text-cream">AI-Native Vector Format.</strong>{" "}
              The Twin Matrix is a compact numerical tensor — directly consumable by LLMs, embedding
              models, and agent frameworks without transformation or middleware.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="mono-label text-gold text-[0.6rem] pt-0.5 shrink-0">04</span>
            <p className="!mb-0">
              <strong className="text-cream">256D Multi-Dimensional Innovation.</strong>{" "}
              Four quadrants — Physical, Digital, Social, Spiritual — capture the full spectrum of
              human traits that no single-axis identity system can represent.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="mono-label text-gold text-[0.6rem] pt-0.5 shrink-0">05</span>
            <p className="!mb-0">
              <strong className="text-cream">70% Revenue Returned to Contributors.</strong>{" "}
              Blockchain-enforced value distribution guarantees that the majority of platform
              revenue flows back to users — not shareholders.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="mono-label text-gold text-[0.6rem] pt-0.5 shrink-0">06</span>
            <p className="!mb-0">
              <strong className="text-cream">Digital Body in the Agent Economy.</strong>{" "}
              Each user's SBT becomes a digital body — a persistent, autonomous presence in
              agent-to-agent networks. Your Personal Agent operates 24/7, negotiating and earning on
              your behalf.
            </p>
          </div>
        </div>
      </ScrollNarrative>

      <SectionDivider label="VALUE CREATION FLYWHEEL" />

      {/* ── Flywheel ── */}
      <ScrollNarrative className="text-center">
        <FlywheelDiagram
          centerLabel={"TWIN3\nFLYWHEEL"}
          steps={[
            "More humans join",
            "Richer Twin Matrix",
            "Stronger enterprise demand",
            "More GMV & revenue",
            "More rewards distributed",
          ]}
        />
        <p className="text-[0.78rem] text-cream-soft/50 max-w-md mx-auto">
          This is a textbook <em>Innovator&apos;s Dilemma</em>: Web2 incumbents see the threat but
          cannot respond without destroying their own profit engines.
        </p>
      </ScrollNarrative>

      <SectionDivider />

      {/* ── Navigation ── */}
      <div className="flex justify-end pt-4">
        <Link href="/paradigm-shift">
          <button className="btn-gold px-5 py-2.5 text-sm flex items-center gap-2">
            Next: The Paradigm Shift <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </article>
  );
}
