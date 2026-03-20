"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  ChapterHeader,
  RevealSection,
  RevealItem,
  SectionDivider,
} from "@/components/Animated";

export default function CoreTeam() {
  return (
    <article className="prose-wp">
      <ChapterHeader
        chapter="Chapter 13"
        title="Core Team"
        subtitle="A Cross-Domain Leadership Team at the Intersection of HCI, AI, and Web3"
        readTime="3 min read"
      />

      <RevealSection>
        <RevealItem>
          <p>
            twin3&apos;s leadership combines deep expertise across Human-Computer Interaction (HCI),
            large-scale data science, frontier AI research, and Web3 ecosystem growth — a rare
            cross-domain team uniquely positioned to build at the intersection of identity, AI, and
            blockchain.
          </p>
        </RevealItem>

        <RevealItem>
          <div className="space-y-4 my-8">
            {[
              { name: "Ming Wen", role: "Founder", bg: "HCI/AI researcher with roots at PARC (Xerox); 20+ patents; IEEE Access first author; architected the Twin Matrix protocol", accent: "gold" },
              { name: "Tinny", role: "COO", bg: "Fund operations, cross-border partnerships, scalable platform growth", accent: "sage" },
              { name: "Raymond", role: "CMO", bg: "Harvard-trained; 6+ years Web3 growth leadership at Block AI, Munia Protocol, and Momentum Labs", accent: "cream" },
              { name: "Lawrence", role: "CIO", bg: "15 years at Experian; data science, AI-driven analytics across finance and enterprise", accent: "sage" },
              { name: "Kevin", role: "Chief Software Architect", bg: "Binance Labs metaverse; Web3 gaming systems architecture", accent: "gold" },
              { name: "Jerry Lin", role: "AI Advisor", bg: "ACM Distinguished Scientist; IEEE Senior Member; 100+ AI publications, 30+ patents", accent: "cream" },
            ].map((m, i) => {
              const colors: Record<string, string> = { gold: "border-gold/40", sage: "border-sage/40", cream: "border-cream/20" };
              return (
                <div key={i} className={`glass-panel rounded-lg p-5 border-l-2 ${colors[m.accent]}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-heading text-cream text-base">{m.name}</span>
                    <span className="mono-label text-[0.5rem] text-cream-soft/40">·</span>
                    <span className="mono-label text-[0.5rem] text-gold/70">{m.role}</span>
                  </div>
                  <p className="text-[0.78rem] text-cream-soft/60 !mb-0">{m.bg}</p>
                </div>
              );
            })}
          </div>
        </RevealItem>
      </RevealSection>

      <SectionDivider />

      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
        <Link href="/roadmap"><button className="btn-outline px-5 py-2.5 text-sm flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Roadmap</button></Link>
        <Link href="/competitive"><button className="btn-gold px-5 py-2.5 text-sm flex items-center gap-2">Next: Competitive Advantages <ArrowRight className="w-4 h-4" /></button></Link>
      </div>
    </article>
  );
}
