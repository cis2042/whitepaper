"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  RevealSection,
  RevealItem,
  InsightCallout,
  SectionDivider,
  ProcessFlow,
} from "@/components/Animated";
import {
  ScrollNarrative,
  TransformSequence,
  ConnectionWeb,
  ValueFlow,
  DataStream,
  BreathingGlow,
  ParticleField,
} from "@/components/Cinematic";

export default function SoulInjection() {
  return (
    <article className="prose-wp">
      {/* ── Hero with particle ambience ── */}
      <div className="relative py-12 mb-6">
        <ParticleField count={30} />
        <div className="relative z-10">
          <p className="mono-label text-[0.55rem] text-sage/50 tracking-[0.2em] mb-2">CHAPTER 05 · 6 MIN READ</p>
          <h1 className="text-4xl md:text-5xl font-heading text-cream leading-[1.05] mb-3">Soul Injection</h1>
          <p className="text-lg text-cream-soft/50 font-heading italic">
            From On-Chain Soul to Autonomous Personal Agent
          </p>
        </div>
      </div>

      <ScrollNarrative>
        <h2>5.1 The Protocol</h2>
      </ScrollNarrative>

      <ScrollNarrative>
        <p>
          <strong className="text-cream">Soul Injection</strong> is the process by which an
          on-chain soul is cryptographically bound to an AI agent via the{" "}
          <strong className="text-cream">ERC-8004 Identity Binding</strong> standard, transforming
          it into a <strong className="text-cream">Personal Agent</strong> that knows its human,
          acts on their behalf, and evolves with them in real time.
        </p>
      </ScrollNarrative>

      {/* ── Transformation Sequence: the 3-phase process ── */}
      <ScrollNarrative>
        <TransformSequence
          stages={[
            {
              label: "Crystallize",
              description:
                "User connects wallet, defines preferences across four quadrants, signs on-chain. System computes 256D soul vector and mints as SBT — your soul made computable.",
            },
            {
              label: "Bind & Activate",
              description:
                "System generates agent wallet. User signs bindAndGrant via ERC-8004 — setting scope, authorization level, and validity period. The agent receives your soul.",
            },
            {
              label: "Continuous Injection",
              description:
                "Agent periodically reads on-chain identity. When Twin Matrix updates — new skills, new preferences — agent re-injects latest soul vector automatically. The agent evolves with you.",
            },
          ]}
        />
      </ScrollNarrative>

      <SectionDivider label="BINDING ARCHITECTURE" />

      {/* ── Soul Injection Flow — animated value flow ── */}
      <ScrollNarrative>
        <div className="glass-panel rounded-lg p-6 my-6 relative overflow-hidden">
          <ParticleField count={10} />
          <p className="mono-label text-[0.5rem] text-cream-soft/30 mb-6 relative z-10">SOUL INJECTION FLOW</p>
          
          <div className="relative z-10 flex flex-col gap-4">
            <ValueFlow from="256D Human Soul" to="AI Agent" value="ERC-8004 BIND" />
            
            <div className="flex items-center justify-center">
              <DataStream direction="up" speed={12} className="w-4 h-10" />
            </div>
            
            <BreathingGlow color="rgba(212,200,154,0.15)" intensity={1.2} className="rounded-lg">
              <div className="glass-panel rounded-lg p-5 text-center border border-gold/30">
                <span className="mono-label text-[0.45rem] text-gold block mb-1">OUTPUT</span>
                <span className="font-heading text-gold text-lg">Personal Agent</span>
                <span className="block text-[0.7rem] text-cream-soft/50 mt-1">
                  Soul-Injected · Autonomous · Verifiable
                </span>
                <span className="block text-[0.6rem] text-cream-soft/40 mt-0.5">
                  OpenClaw · NemoClaw · ERC-8004
                </span>
              </div>
            </BreathingGlow>
          </div>
        </div>
      </ScrollNarrative>

      <SectionDivider label="WHAT MAKES THIS DIFFERENT" />

      <ScrollNarrative>
        <h2>5.2 What Makes This Different</h2>
      </ScrollNarrative>

      <ScrollNarrative>
        <p>
          Without Soul Injection, AI agents act generically — they optimize for statistical
          averages, not individual humans. With Soul Injection, each Personal Agent carries the
          verified, multidimensional context of a specific human.
        </p>
      </ScrollNarrative>

      {/* ── Connection Web: how soul dimensions connect ── */}
      <ScrollNarrative>
        <div className="glass-panel rounded-lg p-4 my-6">
          <p className="mono-label text-[0.5rem] text-cream-soft/30 mb-2">SOUL DIMENSION CONNECTIONS</p>
          <ConnectionWeb
            nodes={[
              { x: 250, y: 40, label: "TASTE", color: "#d4c89a" },
              { x: 100, y: 100, label: "VALUES", color: "#a8b87a" },
              { x: 400, y: 100, label: "SKILLS", color: "#d4c89a" },
              { x: 60, y: 200, label: "CULTURE", color: "#a8b87a" },
              { x: 250, y: 230, label: "JUDGMENT", color: "#d4c89a" },
              { x: 440, y: 200, label: "IDENTITY", color: "#a8b87a" },
            ]}
          />
          <p className="text-[0.6rem] text-cream-soft/40 text-center mt-1">
            Each dimension informs the others — creating a richness no single-score system can match
          </p>
        </div>
      </ScrollNarrative>

      <ScrollNarrative>
        <div className="space-y-3 my-6">
          <div className="glass-panel rounded-lg p-4 border-l-2 border-gold/40">
            <h4 className="font-heading text-cream text-sm !mt-0 !mb-1">Taste Intelligence</h4>
            <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
              An agent that knows your <strong className="text-cream">taste</strong> can curate
              content, evaluate products, and provide feedback that reflects <em>your</em> aesthetic
              — not an algorithmic average.
            </p>
          </div>

          <div className="glass-panel rounded-lg p-4 border-l-2 border-sage/40">
            <h4 className="font-heading text-cream text-sm !mt-0 !mb-1">Value Alignment</h4>
            <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
              An agent that knows your <strong className="text-cream">values</strong> can
              participate in governance, make ethical trade-offs, and represent your stance in DAO
              votes.
            </p>
          </div>

          <div className="glass-panel rounded-lg p-4 border-l-2 border-cream/20">
            <h4 className="font-heading text-cream text-sm !mt-0 !mb-1">Career Amplification</h4>
            <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
              An agent that knows your <strong className="text-cream">professional profile</strong>{" "}
              can negotiate opportunities, match skill-based tasks, and build your reputation
              autonomously.
            </p>
          </div>
        </div>
      </ScrollNarrative>

      <SectionDivider label="MULTI-AGENT DEPLOYMENT" />

      <ScrollNarrative>
        <h2>5.3 Multi-Agent Deployment</h2>
      </ScrollNarrative>

      <ScrollNarrative>
        <p>
          One human can deploy multiple specialized agents — a DeFi Trader, a Social Assistant, a
          Health Advisor — each with scoped authorization and defined validity periods. The
          Personal Agent is built on{" "}
          <strong className="text-cream">OpenClaw</strong> and{" "}
          <strong className="text-cream">Nvidia NemoClaw</strong> frameworks, combining open-source
          flexibility with enterprise-grade security for trustworthy autonomous operation.
        </p>
      </ScrollNarrative>

      <ScrollNarrative>
        <InsightCallout source="Wen &amp; Lin, IEEE Access, 2024">
          The binding of verified human identity to autonomous AI agents represents a new class of
          digital interaction — one where trust is cryptographically enforced rather than assumed.
        </InsightCallout>
      </ScrollNarrative>

      <SectionDivider />

      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
        <Link href="/human-intelligence">
          <button className="btn-outline px-5 py-2.5 text-sm flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Engineering Human Intelligence
          </button>
        </Link>
        <Link href="/agent-economy">
          <button className="btn-gold px-5 py-2.5 text-sm flex items-center gap-2">
            Next: The Agent Economy <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </article>
  );
}
