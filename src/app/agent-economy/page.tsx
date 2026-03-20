"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  RevealSection,
  RevealItem,
  InsightCallout,
  SectionDivider,
  FlywheelDiagram,
} from "@/components/Animated";
import {
  CinematicHero,
  ScrollNarrative,
  RevealText,
  OrbitalSystem,
  ValueFlow,
  BreathingGlow,
  DataStream,
} from "@/components/Cinematic";

export default function AgentEconomy() {
  return (
    <article className="prose-wp">
      <CinematicHero
        tagline="CHAPTER 06 · 7 MIN READ"
        title="The Agent Economy"
        subtitle="Your Agent Works for You — A New Economic System Built on Authentic Human Experience"
      />

      <ScrollNarrative>
        <InsightCallout source="Gartner, &ldquo;Top Strategic Technology Trends,&rdquo; 2025">
          By 2028, 33% of enterprise applications will include agentic AI, up from less than 1%
          in 2024. This creates an unprecedented need for verified human identity within
          autonomous systems.
        </InsightCallout>
      </ScrollNarrative>

      <ScrollNarrative>
        <h2>6.1 Your Agent Works for You</h2>
      </ScrollNarrative>

      <ScrollNarrative>
        <RevealText
          text="In the age of AGI, efficiency is cheap. Computational power is abundant. Content is infinite. Authenticity is the scarce asset."
          highlightWords={["Authenticity", "scarce"]}
          className="text-lg text-cream-soft/70 leading-relaxed my-6"
        />
      </ScrollNarrative>

      <ScrollNarrative>
        <p>
          twin3 builds the financial rails for the{" "}
          <strong className="text-cream">Soul Economy</strong> — an Agent-to-Agent (A2A)
          marketplace where verified human experience creates real economic value. Your Personal
          Agent negotiates on your behalf: finding matching opportunities, executing tasks, and
          settling payments — all anchored to your authentic, on-chain identity.
        </p>
      </ScrollNarrative>

      {/* ── Value Flow: You → Agent → Economy ── */}
      <ScrollNarrative>
        <div className="space-y-2 my-8">
          <ValueFlow from="Your Soul (SBT)" to="Personal Agent" value="SOUL INJECTION" />
          <ValueFlow from="Personal Agent" to="Soul Economy" value="A2A TRADING" />
          <ValueFlow from="Soul Economy" to="You" value="70% VALUE RETURN" />
        </div>
        <p className="text-[0.7rem] text-cream-soft/40 text-center -mt-2 mb-6">
          Your Twin Matrix SBT is a Real World Asset (RWA) — your agents trade your authenticated experience on your behalf.
        </p>
      </ScrollNarrative>

      <SectionDivider label="FOUR PILLARS OF VALUE" />

      <ScrollNarrative>
        <h2>6.2 Four Pillars of Value</h2>
      </ScrollNarrative>

      <ScrollNarrative>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          {[
            {
              n: "01",
              title: "Subjective Judgment",
              desc: "Brands benchmark AI-generated content against authentic human taste. Your Personal Agent participates in blind evaluations, earning you rewards for genuine aesthetic and cultural judgment.",
              borderColor: "rgba(212,200,154,0.4)",
            },
            {
              n: "02",
              title: "Physical Actions",
              desc: "Real-world tasks that AI simply cannot perform — dining at a restaurant, testing a physical product, visiting a location. Your agent matches you to tasks based on your Twin Matrix profile.",
              borderColor: "rgba(168,184,122,0.4)",
            },
            {
              n: "03",
              title: "Intuitive Predictions",
              desc: "Human 'gut check' oracles for complex decisions where data alone is insufficient. Think Polymarket, but powered by verified personas rather than anonymous wallets.",
              borderColor: "rgba(191,184,154,0.3)",
            },
            {
              n: "04",
              title: "SBT as RWA",
              desc: "Your identity itself becomes a revenue-generating asset. Own it. Trade the experience it represents. Earn from being authentically you.",
              borderColor: "rgba(212,200,154,0.6)",
            },
          ].map((pillar) => (
            <BreathingGlow
              key={pillar.n}
              color={pillar.borderColor}
              intensity={0.4}
              className="rounded-lg"
            >
              <div
                className="glass-panel rounded-lg p-5 border-t-2 h-full"
                style={{ borderColor: pillar.borderColor }}
              >
                <span className="mono-label text-[0.5rem] block mb-2" style={{ color: pillar.borderColor }}>
                  PILLAR {pillar.n}
                </span>
                <h4 className="font-heading text-cream text-base !mt-0 !mb-2">{pillar.title}</h4>
                <p className="text-[0.75rem] text-cream-soft/60 !mb-0">{pillar.desc}</p>
              </div>
            </BreathingGlow>
          ))}
        </div>
      </ScrollNarrative>

      <SectionDivider label="WEB 4.0" />

      <ScrollNarrative>
        <h2>6.3 Web 4.0: Services Come to Find You</h2>
      </ScrollNarrative>

      <ScrollNarrative>
        <p>
          In the Agentic Network, you don&apos;t search for services — they find your Personal
          Agent. Your digital body is online 24/7. With your Twin Matrix on-chain, you have a
          persistent digital existence that acts, earns, and evolves even while you sleep.
        </p>
      </ScrollNarrative>

      {/* ── Orbital System: Agentic Network domains ── */}
      <ScrollNarrative>
        <OrbitalSystem
          center="YOUR AGENT"
          orbitals={[
            { label: "DeFi", color: "rgba(212,200,154,0.4)" },
            { label: "Social", color: "rgba(168,184,122,0.3)" },
            { label: "Health", color: "rgba(212,200,154,0.3)" },
            { label: "Governance", color: "rgba(168,184,122,0.4)" },
            { label: "Commerce", color: "rgba(212,200,154,0.3)" },
            { label: "Skills", color: "rgba(168,184,122,0.3)" },
          ]}
        />
        <p className="text-[0.65rem] text-cream-soft/40 text-center -mt-4 mb-4">
          Your Personal Agent joins agentic workflows across every domain — earning on your behalf, 24/7.
        </p>
      </ScrollNarrative>

      <ScrollNarrative>
        <div className="relative py-6 my-4">
          <DataStream direction="right" speed={18} className="absolute inset-0 opacity-20" />
          <p className="relative z-10 text-xl font-heading text-gold italic text-center max-w-xl mx-auto">
            This is Web 4.0: a world where humans participate in AI-native economies through their
            verified digital bodies. You are not replaced. You are amplified.
          </p>
        </div>
      </ScrollNarrative>

      <ScrollNarrative>
        <InsightCallout source="Tim Berners-Lee, Web Foundation, 2023">
          The next web must rebalance the relationship between platforms and individuals. People
          should own their data, control their digital identity, and capture the economic value
          they create.
        </InsightCallout>
      </ScrollNarrative>

      <SectionDivider />

      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
        <Link href="/soul-injection">
          <button className="btn-outline px-5 py-2.5 text-sm flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Soul Injection
          </button>
        </Link>
        <Link href="/product">
          <button className="btn-gold px-5 py-2.5 text-sm flex items-center gap-2">
            Next: Product &amp; UX <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </article>
  );
}
