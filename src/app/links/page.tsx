"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import {
  ChapterHeader,
  RevealSection,
  RevealItem,
  SectionDivider,
} from "@/components/Animated";

export default function EcosystemLinks() {
  return (
    <article className="prose-wp">
      <ChapterHeader
        chapter="Chapter 15"
        title="Ecosystem Links"
        subtitle="Official Access Points for the twin3 Ecosystem"
        readTime="1 min read"
      />

      <RevealSection>
        <RevealItem>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-8">
            {[
              { label: "Main Website", url: "https://twin3.ai", desc: "Brand & vision" },
              { label: "Proof-of-Humanity", url: "https://humanity.twin3.ai", desc: "Verification SDK" },
              { label: "SBT Dashboard", url: "https://holders.twin3.ai", desc: "On-chain analytics" },
              /* Pitch Deck removed — not publicly available */
              { label: "BNBScan Contract", url: "https://bscscan.com/token/0xe3ec133e29addfbba26a412c38ed5de37195156f", desc: "ERC-5192 SBT" },
              { label: "IEEE Publication", url: "https://ieeexplore.ieee.org/document/10734204", desc: "Academic reference" },
            ].map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="glass-panel rounded-lg p-4 !no-underline hover:border-gold/30 transition-colors group block">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-heading text-cream text-sm group-hover:text-gold transition-colors">{link.label}</span>
                  <ExternalLink className="w-3 h-3 text-cream-soft/30 group-hover:text-gold/60 transition-colors" />
                </div>
                <span className="text-[0.65rem] text-cream-soft/40">{link.desc}</span>
              </a>
            ))}
          </div>
        </RevealItem>
      </RevealSection>

      <SectionDivider label="SOCIAL" />

      <RevealSection>
        <RevealItem>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
            {[
              { label: "X (Twitter)", url: "https://x.com/twin3_ai" },
              { label: "Telegram", url: "https://t.me/twin3_ai" },
              { label: "LinkedIn", url: "https://www.linkedin.com/company/twin3-ai/" },
              { label: "Medium", url: "https://medium.com/@twin3ai" },
              { label: "GitHub", url: "https://github.com/twin3-ai" },
            ].map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="glass-panel rounded-lg p-4 text-center !no-underline hover:border-gold/30 transition-colors group block">
                <span className="font-heading text-cream text-sm group-hover:text-gold transition-colors">{s.label}</span>
              </a>
            ))}
          </div>
        </RevealItem>
      </RevealSection>

      <SectionDivider label="CONTACT" />

      <RevealSection>
        <RevealItem>
          <div className="glass-panel rounded-lg p-6 my-6 text-center">
            <p className="font-heading text-cream text-base !mb-1">Ming Wen — Founder</p>
            <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
              <a href="mailto:wen@twin3.ai">wen@twin3.ai</a> · Telegram:{" "}
              <a href="https://t.me/cis2042" target="_blank" rel="noopener noreferrer">@cis2042</a>
            </p>
          </div>
        </RevealItem>
      </RevealSection>

      <SectionDivider />
      <div className="flex justify-start pt-4">
        <Link href="/conclusion"><button className="btn-outline px-5 py-2.5 text-sm flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Conclusion</button></Link>
      </div>
    </article>
  );
}
