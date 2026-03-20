"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  ChapterHeader,
  RevealSection,
  RevealItem,
  SectionDivider,
} from "@/components/Animated";

export default function Roadmap() {
  return (
    <article className="prose-wp">
      <ChapterHeader
        chapter="Chapter 12"
        title="Development Roadmap"
        subtitle="From Protocol Launch to Full Agent Economy"
        readTime="4 min read"
      />

      <RevealSection>
        <RevealItem>
          <p>
            The twin3 roadmap follows a deliberate three-horizon architecture: solidify the identity
            and trust layer, launch the economic rails, then enable decentralized agent–agent
            commerce at global scale.
          </p>
        </RevealItem>
      </RevealSection>

      <SectionDivider label="MILESTONES" />

      <RevealSection>
        <RevealItem>
          <div className="space-y-6 my-8">
            {[
              {
                phase: "Phase 1 — Foundation",
                period: "Q4 2025 – Q1 2026",
                status: "IN PROGRESS",
                items: [
                  "V2.0 core platform build with Web2 onboarding bridge",
                  "Twin Matrix V2 protocol upgrade",
                  "Proof-of-Humanity SDK public launch (humanity.twin3.ai)",
                  "Telegram & Discord verification bots deployment",
                  "Humanity-Led Growth: community referral program (10% revenue share)",
                  "Pre-seed fundraising close ($500K)",
                ],
              },
              {
                phase: "Phase 2 — Ignition & PMF",
                period: "Q2 2026 – Q4 2026",
                status: "PLANNED",
                items: [
                  "Public beta with Human Agent MVP (OpenClaw + NemoClaw framework)",
                  "Airdrop #1 campaign",
                  "Matrix SDK Alpha — Read & Write APIs for ecosystem partners",
                  "AI task matching engine — HaaS marketplace beta",
                  "Enterprise pilots (3+ partners)",
                  "Seed round close ($1.5M target)",
                  "$twin3 TGE and DEX listing",
                  "DAO governance beta launch",
                  "Target: 500,000+ SBT holders",
                ],
              },
              {
                phase: "Phase 3 — Network Effect & Scale",
                period: "2027",
                status: "PLANNED",
                items: [
                  "Agent-to-Agent (A2A) marketplace launch",
                  "Multi-chain expansion (Ethereum, Solana)",
                  "Third-party agent integrations via Matrix SDK",
                  "Cross-chain identity federation",
                  "Enterprise self-service dashboard",
                  "Major ecosystem partnerships, global expansion",
                  "Series A fundraising",
                  "Target: 1,500,000+ SBT holders",
                ],
              },
            ].map((p, i) => (
              <div key={i} className="glass-panel rounded-lg p-6 border-l-2" style={{
                borderColor: p.status === "IN PROGRESS" ? "#d4c89a" : "rgba(168,184,122,0.2)"
              }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-heading text-cream text-base">{p.phase}</span>
                  <span className="mono-label text-[0.5rem] px-2 py-0.5 rounded" style={{
                    background: p.status === "IN PROGRESS" ? "rgba(212,200,154,0.12)" : "rgba(168,184,122,0.06)",
                    color: p.status === "IN PROGRESS" ? "#d4c89a" : "rgba(168,184,122,0.4)"
                  }}>{p.status}</span>
                </div>
                <span className="mono-label text-[0.5rem] text-cream-soft/30 block mb-3">{p.period}</span>
                <ul className="!mt-0 !pl-4">
                  {p.items.map((item, j) => (
                    <li key={j} className="text-[0.78rem] text-cream-soft/60 !mb-1">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </RevealItem>
      </RevealSection>

      <SectionDivider />

      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
        <Link href="/go-to-market"><button className="btn-outline px-5 py-2.5 text-sm flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Go-to-Market</button></Link>
        <Link href="/competitive"><button className="btn-gold px-5 py-2.5 text-sm flex items-center gap-2">Next: Competitive Advantages <ArrowRight className="w-4 h-4" /></button></Link>
      </div>
    </article>
  );
}
