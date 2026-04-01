"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  ChapterHeader,
  RevealSection,
  RevealItem,
  SectionDivider,
  KPICard,
} from "@/components/Animated";

export default function Investment() {
  return (
    <article className="prose-wp">
      <ChapterHeader
        chapter="Chapter 10"
        title="Investment Opportunity"
        subtitle="A Dual-Track Framework Anchoring Equity and Tokens to a Single Valuation"
        readTime="7 min read"
      />

      <RevealSection>
        <RevealItem>
          <h2>10.1 Dual-Track Framework</h2>
        </RevealItem>
        <RevealItem>
          <p>
            twin3 offers a fully transparent{" "}
            <strong className="text-cream">dual-track investment framework</strong>, designed to
            accommodate both traditional equity investors (SAFE) and crypto-native funds (SAFT). The
            core innovation is the{" "}
            <strong className="text-cream">Pricing Bridge</strong>: it permanently eliminates the
            valuation disconnect between the company and its token.
          </p>
        </RevealItem>

        <RevealItem>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <div className="glass-panel rounded-lg p-6 border-t-2 border-gold/40">
              <span className="mono-label text-[0.5rem] text-gold block mb-2">TRACK A</span>
              <h4 className="font-heading text-cream text-lg !mt-0 !mb-2">Equity (SAFE)</h4>
              <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
                For strategic investors seeking long-term exposure to company revenue dividends and
                potential M&A exit. Traditional venture structure.
              </p>
            </div>

            <div className="glass-panel rounded-lg p-6 border-t-2 border-sage/40">
              <span className="mono-label text-[0.5rem] text-sage block mb-2">TRACK B</span>
              <h4 className="font-heading text-cream text-lg !mt-0 !mb-2">Token (SAFT)</h4>
              <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
                For crypto-native funds (e.g. Gate Ventures) seeking direct access to
                token appreciation and structured post-TGE liquidity.
              </p>
            </div>
          </div>
        </RevealItem>
      </RevealSection>

      <SectionDivider label="PRICING BRIDGE" />

      <RevealSection>
        <RevealItem>
          <h2>10.2 The Pricing Bridge Logic</h2>
        </RevealItem>
        <RevealItem>
          <p>
            The holding company directly holds 100% of the{" "}
            <strong className="text-cream">Team Pool</strong>, strictly defined in the smart
            contract tokenomics as{" "}
            <strong className="text-cream">250,000,000 $twin3 tokens</strong> (25% of the 1B total
            supply).
          </p>
        </RevealItem>
        <RevealItem>
          <p>
            Because the equity valuation is anchored at a{" "}
            <strong className="text-cream">$10,000,000 Post-Money Cap</strong>, the implied value of
            the tokens held by the company determines the SAFT entry price:
          </p>
        </RevealItem>

        <RevealItem>
          <div className="glass-panel rounded-lg p-6 my-8">
            <span className="mono-label text-[0.5rem] text-gold block mb-4">CALCULATION</span>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-cream-soft/50 text-sm w-48">Equity Valuation:</span>
                <span className="font-heading text-cream text-lg">$10,000,000</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-cream-soft/50 text-sm w-48">Divided by Team Pool tokens:</span>
                <span className="font-heading text-cream text-lg">250,000,000</span>
              </div>
              <div className="h-px my-3" style={{ background: "rgba(168,184,122,0.2)" }} />
              <div className="flex items-center gap-3">
                <span className="text-cream-soft/50 text-sm w-48">Derived Token Price:</span>
                <span className="font-heading text-gold text-2xl glow-gold">$0.04 / token</span>
              </div>
            </div>
          </div>
        </RevealItem>

        <RevealItem>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 my-6">
            <KPICard label="Post-Money Cap" value={10} prefix="$" suffix="M" accentColor="cream" />
            <KPICard label="Token Price" value={0.04} prefix="$" suffix="" accentColor="gold" />
            <KPICard label="Implied FDV" value={40} prefix="$" suffix="M" accentColor="sage" note="1B × $0.04" />
          </div>
        </RevealItem>

        <RevealItem>
          <p>
            This guarantees that an investor buying equity at the $10M cap, and an investor buying
            tokens at $0.04, are entering the twin3 ecosystem at the exact same proportional cost
            basis. <strong className="text-cream">No invisible dilution, no misaligned incentives.</strong>
          </p>
        </RevealItem>
      </RevealSection>

      <SectionDivider label="SIDE-BY-SIDE COMPARISON" />

      <RevealSection>
        <RevealItem>
          <h2>10.3 Side-by-Side Comparison</h2>
        </RevealItem>
        <RevealItem>
          <div className="glass-panel rounded-lg overflow-hidden my-6">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Track A — Equity (SAFE)</th>
                  <th>Track B — Token (SAFT)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong className="text-cream">Instrument</strong></td><td>Post-Money SAFE</td><td>Token Purchase Agreement (SAFT)</td></tr>
                <tr><td><strong className="text-cream">Valuation Basis</strong></td><td>USD $10M Post-Money Cap</td><td>$0.04 / Token (Derived)</td></tr>
                <tr><td><strong className="text-cream">Upside</strong></td><td>Revenue dividend + M&A exit</td><td>Token appreciation + staking</td></tr>
                <tr><td><strong className="text-cream">Liquidity</strong></td><td>Illiquid until exit event</td><td>Post-TGE market liquidity</td></tr>
                <tr><td><strong className="text-cream">Governance</strong></td><td>Board / shareholder rights</td><td>On-chain governance via staking</td></tr>
                <tr><td><strong className="text-cream">Risk Profile</strong></td><td>Lower risk, longer horizon</td><td>Higher risk, earlier liquidity</td></tr>
              </tbody>
            </table>
          </div>
        </RevealItem>
      </RevealSection>

      {/* Chapter 10.4 — SAFT Terms — temporarily hidden */}

      <SectionDivider />

      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
        <Link href="/tokenomics"><button className="btn-outline px-5 py-2.5 text-sm flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Token Economics</button></Link>
        <Link href="/go-to-market"><button className="btn-gold px-5 py-2.5 text-sm flex items-center gap-2">Next: Go-to-Market <ArrowRight className="w-4 h-4" /></button></Link>
      </div>
    </article>
  );
}
