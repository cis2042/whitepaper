"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  ChapterHeader,
  RevealSection,
  RevealItem,
  InsightCallout,
  SectionDivider,
  ComparisonBar,
} from "@/components/Animated";

export default function BusinessModel() {
  return (
    <article className="prose-wp">
      <ChapterHeader
        chapter="Chapter 08"
        title="Business Model"
        subtitle="Dual Revenue Engines with a 70% Value Redistribution Moat"
        readTime="6 min read"
      />

      <RevealSection>
        <RevealItem>
          <h2>8.1 Dual Revenue Engine</h2>
        </RevealItem>
        <RevealItem>
          <p>
            twin3 generates revenue through two complementary engines that create a self-reinforcing
            growth cycle:
          </p>
        </RevealItem>

        <RevealItem>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <div className="glass-panel rounded-lg p-6 border-t-2 border-gold/40">
              <span className="mono-label text-[0.5rem] text-gold block mb-2">ENGINE A</span>
              <h4 className="font-heading text-cream text-lg !mt-0 !mb-2">B2B — HaaS Marketplace</h4>
              <p className="text-[0.78rem] text-cream-soft/60 !mb-2">
                Enterprises pay for verified human intelligence: taste validation, cultural
                calibration, edge-case annotation, real-world verification. Platform takes a{" "}
                <strong className="text-cream">15% facilitation fee</strong> on all HaaS GMV.
              </p>
              <div className="glass-panel rounded p-3 mt-3">
                <span className="mono-label text-[0.45rem] text-cream-soft/30 block mb-1">REVENUE FORMULA</span>
                <code className="text-[0.7rem] text-forest">GMV × 15% commission = B2B revenue</code>
              </div>
            </div>

            <div className="glass-panel rounded-lg p-6 border-t-2 border-sage/40">
              <span className="mono-label text-[0.5rem] text-sage block mb-2">ENGINE B</span>
              <h4 className="font-heading text-cream text-lg !mt-0 !mb-2">B2C — Subscriptions</h4>
              <p className="text-[0.78rem] text-cream-soft/60 !mb-2">
                Individuals upgrade to premium tiers for multi-agent deployment, priority matching,
                enhanced analytics, and API access.
              </p>
              <div className="glass-panel rounded p-3 mt-3">
                <span className="mono-label text-[0.45rem] text-cream-soft/30 block mb-1">TIER RANGE</span>
                <code className="text-[0.7rem] text-forest">Free → $20/mo → $50/mo</code>
              </div>
            </div>
          </div>
        </RevealItem>
      </RevealSection>

      <SectionDivider label="COMMERCIAL SCENARIOS" />

      <RevealSection>
        <RevealItem>
          <h2>8.2 Three Commercial Scenarios</h2>
        </RevealItem>
        <RevealItem>
          <div className="space-y-4 my-6">
            <div className="glass-panel rounded-lg p-5 border-l-2 border-gold/40">
              <div className="flex items-center gap-3 mb-2">
                <span className="mono-label text-[0.55rem] text-gold">SCENARIO A</span>
              </div>
              <h4 className="font-heading text-cream text-sm !mt-0 !mb-1">AI Alignment as a Service</h4>
              <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
                LLM developers and AI companies pay twin3 to source human preference data for
                fine-tuning and RLHF. twin3 recruits verified users matched to specific
                demographic and experiential profiles, ensuring data quality and diversity that
                synthetic data cannot replicate.
              </p>
            </div>

            <div className="glass-panel rounded-lg p-5 border-l-2 border-sage/40">
              <div className="flex items-center gap-3 mb-2">
                <span className="mono-label text-[0.55rem] text-sage">SCENARIO B</span>
              </div>
              <h4 className="font-heading text-cream text-sm !mt-0 !mb-1">Brand Trust Verification</h4>
              <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
                Consumer brands deploy twin3 to validate product concepts, advertising campaigns,
                and user experiences through verified human evaluators. In a market saturated with
                AI-generated reviews, verified human feedback commands a premium.
              </p>
            </div>

            <div className="glass-panel rounded-lg p-5 border-l-2 border-cream/20">
              <div className="flex items-center gap-3 mb-2">
                <span className="mono-label text-[0.55rem] text-cream-soft/40">SCENARIO C</span>
              </div>
              <h4 className="font-heading text-cream text-sm !mt-0 !mb-1">Decentralized Oracle Network</h4>
              <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
                twin3&apos;s verified human network serves as a decentralized oracle for subjective
                data — taste, preference, cultural context — that cannot be sourced from APIs or
                on-chain feeds. This positions twin3 as the &ldquo;Chainlink of human data.&rdquo;
              </p>
            </div>
          </div>
        </RevealItem>
      </RevealSection>

      <SectionDivider label="THE 70% MOAT" />

      <RevealSection>
        <RevealItem>
          <h2>8.3 The 70% Value Return: A Structural Moat</h2>
        </RevealItem>
        <RevealItem>
          <InsightCallout source="Chris Dixon, &ldquo;Read Write Own,&rdquo; 2024">
            Networks that return majority value to participants create self-reinforcing growth loops
            that extractive platforms cannot compete with — because matching the economics would
            destroy their own profit margins.
          </InsightCallout>
        </RevealItem>
        <RevealItem>
          <p>
            twin3 returns <strong className="text-cream">70% of platform value</strong> to contributors
            through direct token rewards, staking yields, and governance participation. This is not
            generosity — it is a structural competitive advantage:
          </p>
        </RevealItem>

        <RevealItem>
          <div className="glass-panel rounded-lg p-6 my-6">
            <p className="mono-label text-[0.5rem] text-cream-soft/30 mb-4">VALUE DISTRIBUTION COMPARISON</p>
            <ComparisonBar label="Meta / Google" value={5} suffix="%" color="sage" />
            <ComparisonBar label="Worldcoin" value={10} suffix="%" color="cream" />
            <ComparisonBar label="twin3" value={70} suffix="%" color="gold" />
          </div>
        </RevealItem>

        <RevealItem>
          <p>
            Web2 incumbents recognize the threat but cannot respond without destroying their own
            economics. A platform that currently returns 5% of value to users cannot suddenly
            shift to 70% without collapsing its revenue model. This is twin3&apos;s endgame moat.
          </p>
        </RevealItem>
      </RevealSection>

      <SectionDivider />

      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
        <Link href="/product"><button className="btn-outline px-5 py-2.5 text-sm flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Product &amp; UX</button></Link>
        <Link href="/tokenomics"><button className="btn-gold px-5 py-2.5 text-sm flex items-center gap-2">Next: Token Economics <ArrowRight className="w-4 h-4" /></button></Link>
      </div>
    </article>
  );
}
