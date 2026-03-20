"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  RevealSection,
  RevealItem,
  InsightCallout,
  SectionDivider,
  ComparisonBar,
} from "@/components/Animated";
import {
  CinematicHero,
  ScrollNarrative,
  RevealText,
  DepthLayers,
  DataStream,
} from "@/components/Cinematic";

export default function ParadigmShift() {
  return (
    <article className="prose-wp">
      <CinematicHero
        tagline="CHAPTER 02 · 5 MIN READ"
        title="The Paradigm Shift"
        subtitle="From Information Scarcity to Authenticity Scarcity"
      />

      <ScrollNarrative>
        <InsightCallout source="Vitalik Buterin, &ldquo;Soulbound,&rdquo; 2022">
          The most valuable human attributes — taste, character, moral judgment — cannot be
          tokenized through transfer markets. They must be bound to the soul.
        </InsightCallout>
      </ScrollNarrative>

      <ScrollNarrative>
        <RevealText
          text="The internet's first revolution made information abundant. Search engines, social platforms, and mobile computing created a world in which anyone could access knowledge from anywhere, at any time. The economic logic of that era rewarded aggregation — the ability to organize, index, and distribute information at scale."
          highlightWords={["abundant", "aggregation"]}
          className="text-[0.88rem] text-cream-soft/70 leading-relaxed my-6"
        />
      </ScrollNarrative>

      <ScrollNarrative>
        <p>
          Generative AI has rendered that model obsolete. When machines can produce
          studio-quality images, code, copy, and analysis in seconds, the marginal cost of
          information production approaches zero. What was scarce becomes commoditized. What
          remains scarce is what AI cannot generate:{" "}
          <strong className="text-cream">authentic human experience</strong>.
        </p>
      </ScrollNarrative>

      <SectionDivider label="FOUR ERAS OF THE WEB" />

      <ScrollNarrative>
        <h2>The Evolution of Human Value on the Internet</h2>
      </ScrollNarrative>

      {/* ── Four Web Era Blocks ── */}
      <RevealSection className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        <RevealItem>
          <div className="glass-panel rounded-lg p-5 h-full border-l-2" style={{ borderColor: "rgba(168,184,122,0.25)" }}>
            <span className="mono-label text-[0.5rem] text-cream-soft/30 block mb-2">ERA 01</span>
            <h3 className="font-heading text-cream text-base mb-2 !mt-0">Web 1.0 — Read Only</h3>
            <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
              People received information one-way. Static pages, directories, and portals.
              The user was a passive consumer — no voice, no identity, no value capture.
              Value accrued entirely to publishers and ISPs.
            </p>
          </div>
        </RevealItem>
        <RevealItem>
          <div className="glass-panel rounded-lg p-5 h-full border-l-2" style={{ borderColor: "rgba(212,200,154,0.35)" }}>
            <span className="mono-label text-[0.5rem] text-cream-soft/30 block mb-2">ERA 02</span>
            <h3 className="font-heading text-cream text-base mb-2 !mt-0">Web 2.0 — Create & Connect</h3>
            <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
              People began creating content and connecting with each other.
              Social platforms, UGC, and mobile apps gave users a voice —
              but platforms captured the value. Humans became the product.
              Facebook, TikTok, and Instagram generated trillions from human attention.
            </p>
          </div>
        </RevealItem>
        <RevealItem>
          <div className="glass-panel rounded-lg p-5 h-full border-l-2" style={{ borderColor: "rgba(168,184,122,0.5)" }}>
            <span className="mono-label text-[0.5rem] text-cream-soft/30 block mb-2">ERA 03</span>
            <h3 className="font-heading text-cream text-base mb-2 !mt-0">Web 3.0 — User-Owned</h3>
            <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
              Infrastructure built by users, for users. Blockchain, DeFi, and DAOs enabled
              self-custody of assets and decentralized governance. Users own tokens,
              NFTs, and protocol stakes — but identity remained fragmented and
              financialized.
            </p>
          </div>
        </RevealItem>
        <RevealItem>
          <div className="glass-panel rounded-lg p-5 h-full border-l-2 border-gold/60">
            <span className="mono-label text-[0.5rem] text-gold/50 block mb-2">ERA 04 · NOW</span>
            <h3 className="font-heading text-gold text-base mb-2 !mt-0">Web 4.0 — Human as RWA Node</h3>
            <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
              Humans become Real World Asset nodes in the Agentic Economy.
              Your 256D Soulbound Token is a persistent digital body — a verifiable,
              on-chain representation of you. AI agents autonomously interface with humans through
              these nodes: negotiating, transacting, and earning on your behalf.
              <strong className="text-cream block mt-2">
                You don{"\u2019"}t search for services — services find your agent.
              </strong>
            </p>
          </div>
        </RevealItem>
      </RevealSection>

      <SectionDivider label="THE STRUCTURAL SHIFT" />

      <ScrollNarrative>
        <h2>Why This Shift Is Irreversible</h2>
        <p>Three converging forces make this paradigm shift inevitable and permanent:</p>
      </ScrollNarrative>

      {/* ── Depth Layers: 3 forces ── */}
      <ScrollNarrative>
        <DepthLayers
          className="my-8"
          layers={[
            {
              label: "AI Content Saturation",
              description:
                "By 2025 estimates, over 90% of internet content will be AI-generated or AI-assisted. Enterprises face a 'synthetic content crisis' — they cannot distinguish genuine user feedback from AI-manufactured noise. The World Economic Forum identifies this as a top-5 global risk.",
              depth: 1,
              color: "rgba(168,184,122,0.4)",
            },
            {
              label: "Regulatory Momentum",
              description:
                "GDPR, the EU AI Act, and emerging frameworks in Asia are codifying the principle that individuals own their data and must consent to its use. twin3's architecture is natively compliant by design — no raw personal data ever leaves the user's control.",
              depth: 2,
              color: "rgba(212,200,154,0.4)",
            },
            {
              label: "The Agentic Economy",
              description:
                "AI agents are becoming autonomous economic actors — booking, buying, negotiating, and transacting on behalf of humans. These agents need a verified, computable representation of their principal's preferences and values. Without this, they cannot act authentically.",
              depth: 3,
              color: "#d4c89a",
            },
          ]}
        />
      </ScrollNarrative>

      <ScrollNarrative>
        <h2>The Scarcity Inversion</h2>
        <p>
          We can visualize this shift as a direct inversion of the scarcity curve. What was
          scarce (information, content, production capacity) is now abundant. What was abundant
          (authentic human signal) is now the scarcest economic resource:
        </p>
      </ScrollNarrative>

      <ScrollNarrative>
        <div className="glass-panel rounded-lg p-6 my-6 relative overflow-hidden">
          <DataStream direction="right" speed={25} className="absolute inset-0 opacity-30" />
          <div className="relative z-10">
            <p className="mono-label text-[0.5rem] text-cream-soft/30 mb-4">SCARCITY INDEX — 2015 → 2026</p>
            <ComparisonBar label="AI-Generated Content" value={95} suffix="%" color="sage" />
            <ComparisonBar label="Human-Generated Content" value={38} suffix="%" color="cream" />
            <ComparisonBar label="Verified Authentic Experience" value={4} suffix="%" color="gold" />
          </div>
        </div>
      </ScrollNarrative>

      <ScrollNarrative>
        <InsightCallout source="Weyl, Ohlhaver & Buterin, &ldquo;Decentralized Society,&rdquo; 2022">
          Web3&apos;s missing primitive is not fungible tokens or financialized NFTs — it is a way
          to represent and compute over the human qualities that make trust, cooperation, and
          authentic coordination possible.
        </InsightCallout>
      </ScrollNarrative>

      <SectionDivider />

      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
        <Link href="/">
          <button className="btn-outline px-5 py-2.5 text-sm flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Executive Summary
          </button>
        </Link>
        <Link href="/work-revolution">
          <button className="btn-gold px-5 py-2.5 text-sm flex items-center gap-2">
            Next: The Work Revolution <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </article>
  );
}
