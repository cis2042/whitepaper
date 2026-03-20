"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  ChapterHeader,
  RevealSection,
  RevealItem,
  SectionDivider,
  KPICard,
  FlywheelDiagram,
  PieChart,
  TimelineChart,
} from "@/components/Animated";

export default function Tokenomics() {
  return (
    <article className="prose-wp">
      <ChapterHeader
        chapter="Chapter 09"
        title="$twin3 Token Economics"
        subtitle="Designing a Self-Sustaining Value Cycle for the Agentic Economy"
        readTime="8 min read"
      />

      {/* ── 9.1 Token Utility ── */}
      <RevealSection>
        <RevealItem>
          <h2 id="utility">9.1 Token Utility</h2>
        </RevealItem>
        <RevealItem>
          <p>
            The <strong className="text-cream">$twin3</strong> token is the core fuel of the twin3
            ecosystem, designed to sustain long-term network health through incentives, governance,
            and value capture. It serves four primary functions:
          </p>
        </RevealItem>
        <RevealItem>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
            <div className="glass-panel rounded-lg p-4">
              <span className="mono-label text-[0.5rem] text-gold mb-1 block">FUNCTION 01</span>
              <h4 className="font-heading text-cream text-sm !mt-0 !mb-1">Payments &amp; Buyback</h4>
              <p className="text-[0.72rem] text-cream-soft/60 !mb-0">Enterprise fees in fiat or stablecoins buy back $twin3 from the open market. Tokens redistributed to HaaS contributors. A portion of the 15% platform fee is continuously burned — deflationary pressure.</p>
            </div>
            <div className="glass-panel rounded-lg p-4">
              <span className="mono-label text-[0.5rem] text-sage mb-1 block">FUNCTION 02</span>
              <h4 className="font-heading text-cream text-sm !mt-0 !mb-1">Stake-to-Govern</h4>
              <p className="text-[0.72rem] text-cream-soft/60 !mb-0">Staked token holders vote on protocol upgrades, fee structures, and treasury allocation. Decentralized governance ensures shared ownership and aligned incentives.</p>
            </div>
            <div className="glass-panel rounded-lg p-4">
              <span className="mono-label text-[0.5rem] text-cream-soft/40 mb-1 block">FUNCTION 03</span>
              <h4 className="font-heading text-cream text-sm !mt-0 !mb-1">Stake-to-Verify</h4>
              <p className="text-[0.72rem] text-cream-soft/60 !mb-0">Validators stake tokens to verify HaaS task quality and 3D PoA authenticity. Malicious behavior results in slashing, preserving network integrity.</p>
            </div>
            <div className="glass-panel rounded-lg p-4">
              <span className="mono-label text-[0.5rem] text-gold/70 mb-1 block">FUNCTION 04</span>
              <h4 className="font-heading text-cream text-sm !mt-0 !mb-1">Ecosystem Access</h4>
              <p className="text-[0.72rem] text-cream-soft/60 !mb-0">Developers and partners stake tokens to access advanced SDK features or issue SBTs. Sustained token demand tied directly to ecosystem growth.</p>
            </div>
          </div>
        </RevealItem>
      </RevealSection>

      <SectionDivider label="TOKEN ALLOCATION" />

      {/* ── 9.2 Token Allocation — PieChart ── */}
      <RevealSection>
        <RevealItem>
          <h2 id="allocation">9.2 Token Allocation</h2>
        </RevealItem>
        <RevealItem>
          <div className="glass-panel rounded-lg p-6 my-6">
            <div className="flex items-center justify-between mb-6">
              <span className="mono-label text-[0.5rem] text-cream-soft/30">TOTAL SUPPLY</span>
              <span className="font-heading text-gold text-lg">1,000,000,000 $twin3</span>
            </div>

            <PieChart
              data={[
                { label: "Community Incentives", value: 30, color: "#d4c89a" },
                { label: "Core Team", value: 25, color: "#6a8a5a" },
                { label: "Ecosystem Growth", value: 15, color: "#8aaa6a" },
                { label: "Liquidity", value: 8, color: "#a8b87a" },
                { label: "Airdrops", value: 6, color: "#bfb89a" },
                { label: "Investors (SAFT)", value: 6, color: "#5a7a4a" },
                { label: "Public Sale", value: 5, color: "#c4b070" },
                { label: "Advisors", value: 5, color: "#4a6a3a" },
              ]}
            />
          </div>
        </RevealItem>

        <RevealItem>
          <div className="space-y-2 my-6">
            {[
              { cat: "Community Incentives", pct: 30, tokens: "300M", purpose: "HaaS rewards, airdrops, liquidity mining", color: "#d4c89a" },
              { cat: "Core Team", pct: 25, tokens: "250M", purpose: "Long-term protocol development (company-owned)", color: "#6a8a5a" },
              { cat: "Ecosystem Growth", pct: 15, tokens: "150M", purpose: "Partnerships, developer grants, SDK ecosystem", color: "#8aaa6a" },
              { cat: "Liquidity", pct: 8, tokens: "80M", purpose: "DEX/CEX liquidity provision", color: "#a8b87a" },
              { cat: "Airdrops", pct: 6, tokens: "60M", purpose: "Web2 & Web3 user onboarding", color: "#bfb89a" },
              { cat: "Investors (SAFT)", pct: 6, tokens: "60M", purpose: "Pre-Seed and private rounds", color: "#5a7a4a" },
              { cat: "Public Sale", pct: 5, tokens: "50M", purpose: "Fair distribution at TGE", color: "#c4b070" },
              { cat: "Advisors", pct: 5, tokens: "50M", purpose: "Strategic alignment", color: "#4a6a3a" },
            ].map((row, i) => (
              <div key={i} className="glass-panel rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: row.color }} />
                    <span className="font-heading text-cream text-sm">{row.cat}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="mono-label text-[0.55rem] text-cream-soft/40">{row.tokens}</span>
                    <span className="font-heading text-gold text-sm">{row.pct}%</span>
                  </div>
                </div>
                <div className="w-full h-1 rounded-full bg-cream-soft/5 mb-2">
                  <div className="h-full rounded-full transition-all" style={{ width: `${row.pct}%`, background: row.color, opacity: 0.7 }} />
                </div>
                <p className="text-[0.7rem] text-cream-soft/50 !mb-0">{row.purpose}</p>
              </div>
            ))}
          </div>
        </RevealItem>
      </RevealSection>

      <SectionDivider label="VESTING SCHEDULE" />

      {/* ── 9.3 Vesting Schedule — TimelineChart ── */}
      <RevealSection>
        <RevealItem>
          <h2 id="vesting">9.3 Vesting Schedule</h2>
        </RevealItem>
        <RevealItem>
          <p>
            All insider allocations are subject to a{" "}
            <strong className="text-cream">12-month cliff</strong> followed by linear vesting. The
            chart below illustrates the projected circulating supply growth over 60 months.
          </p>
        </RevealItem>

        <RevealItem>
          <div className="glass-panel rounded-lg p-6 my-6">
            <p className="mono-label text-[0.5rem] text-cream-soft/30 mb-4">CIRCULATING SUPPLY UNLOCK CURVE</p>
            <TimelineChart
              data={[
                { month: 0, value: 1.655, label: "TGE" },
                { month: 3, value: 3.5 },
                { month: 6, value: 6.2, label: "M6" },
                { month: 12, value: 10.5, label: "M12 (Cliff)" },
                { month: 18, value: 22, label: "M18" },
                { month: 24, value: 38, label: "M24" },
                { month: 30, value: 52 },
                { month: 36, value: 65, label: "M36" },
                { month: 42, value: 75 },
                { month: 48, value: 88, label: "M48" },
                { month: 54, value: 94 },
                { month: 60, value: 100, label: "M60" },
              ]}
              className="my-4"
            />
          </div>
        </RevealItem>

        <RevealItem>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-6">
            <KPICard label="TGE Circulating" value={1.655} suffix="%" accentColor="gold" note="16.55M tokens" />
            <KPICard label="Insider Cliff" value={12} suffix=" months" accentColor="sage" note="All insiders" />
            <KPICard label="Team Vesting" value={48} suffix=" months" accentColor="cream" note="4-year linear" />
            <KPICard label="SAFT Vesting" value={36} suffix=" months" accentColor="gold" note="3-year linear" />
          </div>
        </RevealItem>

        <RevealItem>
          <div className="space-y-2 my-6">
            {[
              { cat: "Core Team", tge: "0%", cliff: "12 months", vesting: "48 months linear" },
              { cat: "Advisors", tge: "0%", cliff: "12 months", vesting: "36 months linear" },
              { cat: "Investors (SAFT)", tge: "0%", cliff: "12 months", vesting: "36 months linear" },
              { cat: "Community", tge: "5%", cliff: "—", vesting: "Performance-based" },
              { cat: "Ecosystem", tge: "2%", cliff: "—", vesting: "Milestone-based" },
              { cat: "Public Sale", tge: "10%", cliff: "—", vesting: "6 months linear" },
              { cat: "Liquidity", tge: "5%", cliff: "—", vesting: "Market-making" },
              { cat: "Airdrops", tge: "5%", cliff: "—", vesting: "Campaign-based" },
            ].map((row, i) => (
              <div key={i} className="glass-panel rounded-lg p-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="font-heading text-cream text-sm min-w-[120px]">{row.cat}</span>
                <span className="px-2 py-0.5 rounded text-[0.6rem] font-mono bg-gold/10 text-gold">
                  TGE {row.tge}
                </span>
                {row.cliff !== "—" && (
                  <span className="px-2 py-0.5 rounded text-[0.6rem] font-mono bg-sage/10 text-sage">
                    Cliff {row.cliff}
                  </span>
                )}
                <span className="text-[0.7rem] text-cream-soft/50">{row.vesting}</span>
              </div>
            ))}
          </div>
        </RevealItem>
      </RevealSection>

      <SectionDivider label="GROWTH FLYWHEEL" />

      <RevealSection>
        <RevealItem>
          <h2 id="flywheel">9.4 Growth Flywheel</h2>
        </RevealItem>
        <RevealItem>
          <FlywheelDiagram
            centerLabel={"TOKEN\nFLYWHEEL"}
            steps={[
              "Enterprise pays fiat",
              "Platform buys $twin3",
              "Rewards to contributors",
              "Contributors stake",
              "Scarcity increases",
              "Value appreciates",
            ]}
          />
        </RevealItem>
        <RevealItem>
          <p>
            The token flywheel is self-reinforcing: enterprise demand creates buy pressure, rewards
            incentivize participation, staking reduces circulating supply, and appreciation attracts
            new users and enterprises. Combined with the continuous burn mechanism, the tokenomic
            design creates sustainable, long-term value alignment.
          </p>
        </RevealItem>
      </RevealSection>

      <SectionDivider />

      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
        <Link href="/business-model"><button className="btn-outline px-5 py-2.5 text-sm flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Business Model</button></Link>
        <Link href="/investment"><button className="btn-gold px-5 py-2.5 text-sm flex items-center gap-2">Next: Investment Opportunity <ArrowRight className="w-4 h-4" /></button></Link>
      </div>
    </article>
  );
}
