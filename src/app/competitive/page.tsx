"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  ChapterHeader,
  RevealSection,
  RevealItem,
  SectionDivider,
  ComparisonBar,
  InsightCallout,
} from "@/components/Animated";

export default function Competitive() {
  return (
    <article className="prose-wp">
      <ChapterHeader
        chapter="Chapter 13"
        title="Competitive Advantages & Risk Mitigation"
        subtitle="A Multi-Layered Moat Built on User Centricity and Plurality"
        readTime="5 min read"
      />

      {/* ── 13.1 BNB Identity Layer Stack ── */}
      <RevealSection>
        <RevealItem>
          <h2>13.1 Competitive Landscape: BNB Identity Layer</h2>
        </RevealItem>
        <RevealItem>
          <p>
            BNB Chain&apos;s identity layer is fragmented. twin3&apos;s goal by 2027: unify it with
            the Soul Layer and become the{" "}
            <strong className="text-cream">#1 identity protocol on BNB Chain</strong>, second only
            to World ID globally.
          </p>
        </RevealItem>
        <RevealItem>
          <div className="space-y-0 my-8">
            {[
              { layer: "FOUNDATIONAL LAYER", name: "BAB (Binance)", desc: "Proves you are a real, compliant human.", position: "bottom", color: "rgba(168,184,122,0.15)", borderColor: "rgba(168,184,122,0.2)" },
              { layer: "TRUST LAYER — twin3", name: "Twin Matrix", desc: "Proves you are Authentic Human Value. 256D computable identity with 3D Proof of Authenticity.", position: "center", color: "rgba(212,200,154,0.08)", borderColor: "#d4c89a" },
              { layer: "DATA LAYER", name: "Galxe", desc: "Proves what tasks you have done. Credential aggregation.", position: "top-data", color: "rgba(168,184,122,0.08)", borderColor: "rgba(168,184,122,0.15)" },
              { layer: "APPLICATION LAYER", name: "Lifeform · Hooked · SecondLive", desc: "Use SBTs for management in specific scenarios.", position: "top-app", color: "rgba(168,184,122,0.05)", borderColor: "rgba(168,184,122,0.1)" },
            ].map((l, i) => (
              <div key={i} className="rounded-lg p-5 border" style={{
                background: l.color,
                borderColor: l.borderColor,
              }}>
                <div className="flex items-center gap-3 mb-1">
                  <span className="mono-label text-[0.5rem]" style={{ color: l.borderColor }}>{l.layer}</span>
                </div>
                <h4 className="font-heading text-cream text-sm !mt-0 !mb-0.5">{l.name}</h4>
                <p className="text-[0.72rem] text-cream-soft/60 !mb-0">{l.desc}</p>
              </div>
            ))}
          </div>
        </RevealItem>

        <RevealItem>
          <div className="glass-panel rounded-lg overflow-hidden my-6">
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Comparisons</th>
                  <th>twin3 Differentiation</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong className="text-cream">Proof of Personhood</strong></td><td>Worldcoin, Humanity Protocol</td><td>3D Proof of Authenticity — beyond binary &ldquo;human/not&rdquo; to full 256D profiling</td></tr>
                <tr><td><strong className="text-cream">On-chain Identity</strong></td><td>Galxe, Gitcoin Passport</td><td>Computable identity with Read/Write SDK — not just credential aggregation</td></tr>
                <tr><td><strong className="text-cream">Data Marketplaces</strong></td><td>Ocean Protocol, Streamr</td><td>Human experience data focus — taste, judgment, cultural context</td></tr>
                <tr><td><strong className="text-cream">AI Agent Platforms</strong></td><td>Virtuals Protocol, ai16z</td><td>Identity and alignment layer — the soul that makes agents trustworthy</td></tr>
              </tbody>
            </table>
          </div>
        </RevealItem>
      </RevealSection>

      <SectionDivider label="STRUCTURAL MOAT" />

      {/* ── 13.2 Moat — User Centric / Plurality ── */}
      <RevealSection>
        <RevealItem>
          <h2>13.2 Structural Moat</h2>
        </RevealItem>

        <RevealItem>
          <InsightCallout source="Weyl, Ohlhaver &amp; Buterin, &ldquo;Decentralized Society,&rdquo; 2022">
            A truly decentralized society must encode the richness of human social relationships —
            not just financial transactions. Plurality is the design principle that makes this
            possible.
          </InsightCallout>
        </RevealItem>

        <RevealItem>
          <div className="glass-panel rounded-lg p-6 my-6">
            <p className="mono-label text-[0.5rem] text-cream-soft/30 mb-4">MOAT STRENGTH</p>
            <ComparisonBar label="User Centricity" value={95} suffix="" color="gold" />
            <ComparisonBar label="User Freedom" value={92} suffix="" color="sage" />
            <ComparisonBar label="Plurality" value={90} suffix="" color="gold" />
            <ComparisonBar label="Network Effects" value={85} suffix="" color="cream" />
            <ComparisonBar label="Regulatory Fit" value={82} suffix="" color="sage" />
          </div>
        </RevealItem>

        <RevealItem>
          <div className="space-y-3 my-6">
            {[
              { n: "01", title: "User Centricity — 70% Value Return", desc: "twin3 returns 70% of platform value to contributors. Web2 incumbents returning ~5% cannot replicate this without destroying their own economics. The user is not the product — the user is the owner." },
              { n: "02", title: "User Freedom — Data Sovereignty", desc: "Users own their Twin Matrix SBT. They control which dimensions to share, with whom, and for how long. Selective disclosure ensures privacy without sacrificing utility. No lock-in, no platform dependency." },
              { n: "03", title: "Plurality — 256D Multi-Dimensional Identity", desc: "Unlike binary proof-of-personhood or single-score reputation, twin3 represents humans across 256 dimensions in four quadrants. This is the pluralistic vision: identity is not a checkbox — it is a spectrum." },
              { n: "04", title: "Compounding Network Effects", desc: "More users → richer profiles → stronger enterprise demand → more value returned → more users. The Twin Matrix is a proprietary data asset that compounds with every new participant." },
              { n: "05", title: "Regulatory Alignment", desc: "Privacy-by-design architecture (no raw data on-chain) aligns with GDPR, EU AI Act, and emerging global data regulations. Users control consent at the dimension level." },
            ].map((m) => (
              <div key={m.n} className="flex items-start gap-3">
                <span className="mono-label text-gold text-[0.6rem] pt-0.5 shrink-0">{m.n}</span>
                <div>
                  <h4 className="font-heading text-cream text-sm !mt-0 !mb-0.5">{m.title}</h4>
                  <p className="text-[0.75rem] text-cream-soft/60 !mb-0">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </RevealItem>
      </RevealSection>

      <SectionDivider label="RISK MITIGATION" />

      <RevealSection>
        <RevealItem>
          <h2>13.3 Risk Mitigation</h2>
        </RevealItem>
        <RevealItem>
          <div className="glass-panel rounded-lg overflow-hidden my-6">
            <table>
              <thead><tr><th>Risk</th><th>Mitigation</th></tr></thead>
              <tbody>
                <tr><td><strong className="text-cream">Regulatory uncertainty</strong></td><td>Dual-entity structure; privacy-preserving architecture; legal counsel per market</td></tr>
                <tr><td><strong className="text-cream">Low initial liquidity</strong></td><td>300K+ warm-start; Humanity-Led Growth eliminates cold-start risk</td></tr>
                <tr><td><strong className="text-cream">Smart contract risk</strong></td><td>Multi-auditor security; modular upgradability; bug bounty program</td></tr>
                <tr><td><strong className="text-cream">Token volatility</strong></td><td>Burn mechanism; vesting schedules; real utility drives demand</td></tr>
                <tr><td><strong className="text-cream">Competition</strong></td><td>First-mover in 3D PoA; 256D data moat; Humanity-Led Growth flywheel</td></tr>
              </tbody>
            </table>
          </div>
        </RevealItem>
      </RevealSection>

      <SectionDivider />
      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
        <Link href="/roadmap"><button className="btn-outline px-5 py-2.5 text-sm flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Roadmap</button></Link>
        <Link href="/conclusion"><button className="btn-gold px-5 py-2.5 text-sm flex items-center gap-2">Next: Conclusion <ArrowRight className="w-4 h-4" /></button></Link>
      </div>
    </article>
  );
}
