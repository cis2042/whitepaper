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
  DepthLayers,
} from "@/components/Cinematic";

export default function AgentEconomy() {
  return (
    <article className="prose-wp">
      <CinematicHero
        tagline="CHAPTER 06 · 12 MIN READ"
        title="The Agent Economy"
        subtitle="Human as Real World Asset — Your Digital Twin is an Autonomous Economic Node"
      />

      <ScrollNarrative>
        <InsightCallout source="Gartner, &ldquo;Top Strategic Technology Trends,&rdquo; 2025">
          By 2028, 33% of enterprise applications will include agentic AI, up from less than 1%
          in 2024. This creates an unprecedented need for verified human identity within
          autonomous systems.
        </InsightCallout>
      </ScrollNarrative>

      {/* ═══════════════════════════════════════════════════
          6.1 — CORE THESIS: HUMAN AS RWA
          ═══════════════════════════════════════════════════ */}
      <ScrollNarrative>
        <h2>6.1 Human as Real World Asset</h2>
      </ScrollNarrative>

      <ScrollNarrative>
        <RevealText
          text="In Web2, you are the product — platforms harvest your data for free and sell it to advertisers. Billions in market value created from your attention, taste, and behavior. Your share? Zero."
          highlightWords={["product", "Zero"]}
          className="text-lg text-cream-soft/70 leading-relaxed my-6"
        />
      </ScrollNarrative>

      <ScrollNarrative>
        <p>
          twin3 proposes a <strong className="text-cream">fundamental reversal</strong>:
        </p>
      </ScrollNarrative>

      <ScrollNarrative>
        <div className="relative py-8 my-4">
          <DataStream direction="right" speed={18} className="absolute inset-0 opacity-20" />
          <p className="relative z-10 text-2xl font-heading text-gold italic text-center max-w-xl mx-auto">
            Every person is a Real World Asset.
          </p>
        </div>
      </ScrollNarrative>

      <ScrollNarrative>
        <p>
          When your behavior, preferences, and values are encoded into a{" "}
          <strong className="text-cream">256-dimensional identity vector</strong> and minted as a
          Soulbound Token (SBT), your digital twin becomes a priceable, queryable, delegatable
          on-chain asset. Unlike financial RWA (real estate, receivables), the underlying asset of
          Human as RWA is <em>attention, taste, and agency</em> — the scarcest resources in the
          Agent Economy.
        </p>
      </ScrollNarrative>

      {/* ── Old vs New Value Flow ── */}
      <ScrollNarrative>
        <div className="space-y-2 my-8">
          <p className="mono-label text-[0.5rem] text-cream-soft/30 text-center mb-3">
            THE PARADIGM SHIFT IN VALUE FLOW
          </p>
          <ValueFlow from="User Data" to="Web2 Platforms" value="$0 TO USER" />
          <ValueFlow from="256D SBT" to="Agent Economy" value="80% TO USER" />
        </div>
      </ScrollNarrative>

      <SectionDivider label="WHY AGENTS NEED HUMANS" />

      {/* ═══════════════════════════════════════════════════
          6.2 — WHY THE AGENT ECONOMY NEEDS HUMANS
          ═══════════════════════════════════════════════════ */}
      <ScrollNarrative>
        <h2>6.2 Why the Agent Economy Needs Humans</h2>
      </ScrollNarrative>

      <ScrollNarrative>
        <p>
          AI Agents can execute tasks, process payments, and collaborate autonomously.
          But they lack two critical capabilities that only real humans can provide:
        </p>
      </ScrollNarrative>

      <ScrollNarrative>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <BreathingGlow color="rgba(212,200,154,0.3)" intensity={0.4} className="rounded-lg">
            <div className="glass-panel rounded-lg p-5 border-t-2 h-full" style={{ borderColor: "rgba(212,200,154,0.4)" }}>
              <span className="mono-label text-[0.5rem] block mb-3" style={{ color: "rgba(212,200,154,0.6)" }}>
                AI AGENTS LACK
              </span>
              <h4 className="font-heading text-cream text-base !mt-0 !mb-2">Authentic Preferences</h4>
              <p className="text-[0.75rem] text-cream-soft/60 !mb-0">
                Consumer decisions, taste judgments, cultural context — without real human preference data,
                brand agent recommendations are mere guesses.
              </p>
            </div>
          </BreathingGlow>
          <BreathingGlow color="rgba(168,184,122,0.3)" intensity={0.4} className="rounded-lg">
            <div className="glass-panel rounded-lg p-5 border-t-2 h-full" style={{ borderColor: "rgba(168,184,122,0.4)" }}>
              <span className="mono-label text-[0.5rem] block mb-3" style={{ color: "rgba(168,184,122,0.6)" }}>
                HUMANS PROVIDE
              </span>
              <h4 className="font-heading text-cream text-base !mt-0 !mb-2">Real-World Actions</h4>
              <p className="text-[0.75rem] text-cream-soft/60 !mb-0">
                Physical purchases, experience feedback, social amplification — without real human action,
                the Agent Economy is just bots spinning in a void.
              </p>
            </div>
          </BreathingGlow>
        </div>
      </ScrollNarrative>

      <ScrollNarrative>
        <RevealText
          text="Human as RWA makes humans the value anchor of the Agent Economy."
          highlightWords={["value", "anchor"]}
          className="text-lg text-cream-soft/70 leading-relaxed my-6 text-center"
        />
      </ScrollNarrative>

      <SectionDivider label="SBT AS ASSET" />

      {/* ═══════════════════════════════════════════════════
          6.3 — SBT AS ASSET CERTIFICATE
          ═══════════════════════════════════════════════════ */}
      <ScrollNarrative>
        <h2>6.3 SBT: Your Asset Certificate</h2>
      </ScrollNarrative>

      <ScrollNarrative>
        <p>
          The 256-dimensional Soulbound Token is the <strong className="text-cream">asset certificate</strong> of
          Human as RWA. It encodes the full spectrum of who you are:
        </p>
      </ScrollNarrative>

      {/* ── Four Quadrants of the 256D SBT ── */}
      <ScrollNarrative>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
          {[
            { label: "Physical Me", range: "[0–63]", color: "rgba(212,200,154,0.4)", desc: "Body, health, fitness, physical taste" },
            { label: "Digital Me", range: "[64–127]", color: "rgba(168,184,122,0.4)", desc: "Online behavior, consumption, content" },
            { label: "Social Me", range: "[128–191]", color: "rgba(191,184,154,0.3)", desc: "Relationships, influence, community" },
            { label: "Spiritual Me", range: "[192–255]", color: "rgba(212,200,154,0.6)", desc: "Values, beliefs, aesthetic judgment" },
          ].map((q) => (
            <BreathingGlow key={q.label} color={q.color} intensity={0.3} className="rounded-lg">
              <div className="glass-panel rounded-lg p-4 border-t-2 h-full text-center" style={{ borderColor: q.color }}>
                <span className="mono-label text-[0.45rem] block mb-1" style={{ color: q.color }}>
                  {q.range}
                </span>
                <h4 className="font-heading text-cream text-sm !mt-0 !mb-1">{q.label}</h4>
                <p className="text-[0.65rem] text-cream-soft/50 !mb-0">{q.desc}</p>
              </div>
            </BreathingGlow>
          ))}
        </div>
        <p className="text-[0.7rem] text-cream-soft/40 text-center -mt-2 mb-6">
          Density Score = Asset Completeness — the richer your dimensions, the higher your asset value, the greater your income.
        </p>
      </ScrollNarrative>

      {/* ── SBT Properties ── */}
      <ScrollNarrative>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-6">
          {[
            { title: "Non-Transferable", desc: "SBT is bound to your wallet. Identity cannot be traded." },
            { title: "Upgradeable", desc: "Update your vector anytime to reflect evolving preferences." },
            { title: "Privacy-First", desc: "Raw dimension values are never exposed. Only aggregated results via the matching engine." },
          ].map((prop) => (
            <div key={prop.title} className="glass-panel rounded-lg p-4">
              <h4 className="font-heading text-cream text-sm !mt-0 !mb-1">{prop.title}</h4>
              <p className="text-[0.72rem] text-cream-soft/55 !mb-0">{prop.desc}</p>
            </div>
          ))}
        </div>
      </ScrollNarrative>

      <SectionDivider label="PERSONAL AGENT" />

      {/* ═══════════════════════════════════════════════════
          6.4 — PERSONAL AGENT: YOUR ECONOMIC ENTITY
          ═══════════════════════════════════════════════════ */}
      <ScrollNarrative>
        <h2>6.4 Personal Agent: Your Full-Time Economic Representative</h2>
      </ScrollNarrative>

      <ScrollNarrative>
        <p>
          Every twin3 user owns a <strong className="text-cream">Personal Agent</strong> — an
          AI proxy bound to your SBT identity, equipped with an independent wallet, capable of
          autonomous operation across multiple Agentic ecosystems.
        </p>
      </ScrollNarrative>

      <ScrollNarrative>
        <div className="glass-panel rounded-lg p-6 my-8 border" style={{ borderColor: "rgba(212,200,154,0.15)" }}>
          <p className="mono-label text-[0.5rem] text-gold/60 mb-4">PERSONAL AGENT CAPABILITIES</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: "🔑", label: "Independent EVM Wallet", desc: "Receive, spend, and accumulate assets autonomously" },
              { icon: "🧬", label: "256D SBT Authorization", desc: "Acts as proxy for your preferences with granular scope control" },
              { icon: "🤖", label: "ERC-8004 On-Chain Identity", desc: "Discoverable by other agents across protocols" },
              { icon: "📱", label: "Telegram Integration", desc: "Real-time interaction and approval from your messenger" },
              { icon: "📊", label: "Reputation Accumulation", desc: "More completed tasks = higher reputation = better opportunities" },
            ].map((cap) => (
              <div key={cap.label} className="flex items-start gap-3 p-3 rounded-md" style={{ background: "rgba(168,184,122,0.04)" }}>
                <span className="text-lg shrink-0">{cap.icon}</span>
                <div>
                  <span className="font-heading text-cream text-[0.78rem] block">{cap.label}</span>
                  <span className="text-[0.65rem] text-cream-soft/50">{cap.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollNarrative>

      <ScrollNarrative>
        <RevealText
          text="Your Personal Agent is not a chatbot. It is your full-time economic representative — owning its own wallet, identity, and reputation — earning income on your behalf across multiple platforms, 24/7."
          highlightWords={["not", "chatbot", "full-time", "economic", "representative"]}
          className="text-base text-cream-soft/70 leading-relaxed my-6"
        />
      </ScrollNarrative>

      <SectionDivider label="FIVE-LAYER REVENUE" />

      {/* ═══════════════════════════════════════════════════
          6.5 — FIVE-LAYER REVENUE MODEL
          ═══════════════════════════════════════════════════ */}
      <ScrollNarrative>
        <h2>6.5 Five-Layer Revenue Model</h2>
      </ScrollNarrative>

      <ScrollNarrative>
        <p>
          Personal Agent opens <strong className="text-cream">five revenue pathways</strong> for
          users in the Agent Economy — from passive to active, from single-ecosystem to cross-chain.
        </p>
      </ScrollNarrative>

      <ScrollNarrative>
        <DepthLayers
          className="my-8"
          layers={[
            {
              label: "L1 · Data Licensing — Passive Income",
              description:
                "Your 256D vector is an asset. When brands query the Matrix engine, every profile hit triggers a micropayment. 80% flows to your Agent wallet. The more complete your profile (higher Density Score), the more you earn — completely passively. Think of it as 'data rent' on your digital identity.",
              depth: 1,
              color: "rgba(212,200,154,0.5)",
            },
            {
              label: "L2 · Mission Execution — Active Tasks",
              description:
                "Brands launch campaigns. Your Agent receives matching tasks via Telegram: product trials, feedback surveys, social sharing, in-store visits. Complete them, earn stablecoin rewards. Your Agent even cross-registers on other Agentic platforms via ERC-8004, bringing your 256D profile to 'job hunt' beyond twin3.",
              depth: 1.5,
              color: "rgba(168,184,122,0.5)",
            },
            {
              label: "L3 · A2A Economy — Agent-to-Agent Services",
              description:
                "Your Personal Agent exposes a paywall API endpoint via x402 protocol. Other agents (brand research, ad optimization, market analysis) pay to query your digital twin. Every query auto-settles in crypto. Each Personal Agent is a micro data API — other agents pay to read your digital body.",
              depth: 2,
              color: "rgba(191,184,154,0.4)",
            },
            {
              label: "L4 · Affiliate Revenue — Smart Recommendations",
              description:
                "Your Agent understands your 256D preferences and proactively searches affiliate networks for the best-matching products. You buy, your Agent earns commission. Unlike Web2 ads that interrupt — your Agent is a personal shopping advisor that earns commissions back for you.",
              depth: 2.5,
              color: "rgba(212,200,154,0.4)",
            },
            {
              label: "L5 · Agent Delegation — Digital Twin Staking",
              description:
                "Delegate your Agent's work rights to an 'Agent Farm' protocol. The Farm dispatches matched Agent clusters for large-scale brand campaigns (e.g., 10,000-user consumer research). Revenue is split by reputation × density. Like PoS staking — but you stake your digital twin's labor power.",
              depth: 3,
              color: "rgba(168,184,122,0.4)",
            },
          ]}
        />
      </ScrollNarrative>

      {/* ── L1 Detail: Data Licensing Flow ── */}
      <ScrollNarrative>
        <div className="glass-panel rounded-lg p-5 my-4">
          <p className="mono-label text-[0.5rem] text-gold/60 mb-3">LAYER 1 · VALUE FLOW</p>
          <div className="space-y-1">
            <ValueFlow from="Brand Query" to="Matrix Match" value="PROFILE HIT" />
            <div className="flex justify-center gap-8 text-[0.65rem] text-cream-soft/50">
              <span>Platform <strong className="text-cream">20%</strong></span>
              <span>User Agent Wallet <strong className="text-gold">80%</strong></span>
            </div>
          </div>
        </div>
      </ScrollNarrative>

      {/* ── Mission Types Table ── */}
      <ScrollNarrative>
        <div className="glass-panel rounded-lg p-5 my-4 overflow-x-auto">
          <p className="mono-label text-[0.5rem] text-gold/60 mb-3">LAYER 2 · MISSION TYPES</p>
          <table className="w-full text-[0.72rem]">
            <thead>
              <tr className="border-b" style={{ borderColor: "rgba(168,184,122,0.15)" }}>
                <th className="text-left py-2 text-cream-soft/40 font-normal mono-label text-[0.5rem]">TYPE</th>
                <th className="text-left py-2 text-cream-soft/40 font-normal mono-label text-[0.5rem]">EXAMPLE</th>
                <th className="text-left py-2 text-cream-soft/40 font-normal mono-label text-[0.5rem]">REWARD</th>
              </tr>
            </thead>
            <tbody className="text-cream-soft/60">
              <tr className="border-b" style={{ borderColor: "rgba(168,184,122,0.06)" }}>
                <td className="py-2 text-cream">Experience Feedback</td>
                <td className="py-2">Try new product, report preference changes</td>
                <td className="py-2 text-gold">Fixed USDT</td>
              </tr>
              <tr className="border-b" style={{ borderColor: "rgba(168,184,122,0.06)" }}>
                <td className="py-2 text-cream">Data Supplement</td>
                <td className="py-2">Answer dimension-specific surveys</td>
                <td className="py-2 text-gold">Per-question micro</td>
              </tr>
              <tr className="border-b" style={{ borderColor: "rgba(168,184,122,0.06)" }}>
                <td className="py-2 text-cream">Social Amplification</td>
                <td className="py-2">Share brand content to social platforms</td>
                <td className="py-2 text-gold">Engagement-based</td>
              </tr>
              <tr>
                <td className="py-2 text-cream">Offline Action</td>
                <td className="py-2">In-store visit with geo-verification</td>
                <td className="py-2 text-gold">Fixed + bonus</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ScrollNarrative>

      <SectionDivider label="GROWTH FLYWHEEL" />

      {/* ═══════════════════════════════════════════════════
          6.6 — REVENUE GROWTH FLYWHEEL
          ═══════════════════════════════════════════════════ */}
      <ScrollNarrative>
        <h2>6.6 Revenue Growth Flywheel</h2>
      </ScrollNarrative>

      <ScrollNarrative>
        <p>
          The five revenue layers form a <strong className="text-cream">self-reinforcing flywheel</strong>:
        </p>
      </ScrollNarrative>

      <ScrollNarrative>
        <FlywheelDiagram
          centerLabel="REVENUE FLYWHEEL"
          steps={[
            "Complete Profile (↑ Density)",
            "More Match Hits (↑ L1)",
            "More Missions (↑ L2)",
            "Higher Reputation (↑ L3/L5)",
            "Smarter Affiliate (↑ L4)",
            "Motivation to Enrich Profile",
          ]}
        />
      </ScrollNarrative>

      {/* ── Key Metrics ── */}
      <ScrollNarrative>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-6">
          {[
            { metric: "Density Score", desc: "Measures 256D fill rate. Determines match probability." },
            { metric: "Reputation Score", desc: "Accumulates task completion rate & quality. Unlocks premium missions." },
            { metric: "Scope Breadth", desc: "Wider authorization = more revenue channels." },
          ].map((m) => (
            <div key={m.metric} className="glass-panel rounded-lg p-4 border-l-2" style={{ borderColor: "rgba(212,200,154,0.3)" }}>
              <h4 className="font-heading text-gold text-sm !mt-0 !mb-1">{m.metric}</h4>
              <p className="text-[0.72rem] text-cream-soft/55 !mb-0">{m.desc}</p>
            </div>
          ))}
        </div>
      </ScrollNarrative>

      <SectionDivider label="PARADIGM COMPARISON" />

      {/* ═══════════════════════════════════════════════════
          6.7 — COMPARISON WITH TRADITIONAL MODELS
          ═══════════════════════════════════════════════════ */}
      <ScrollNarrative>
        <h2>6.7 The Fundamental Difference</h2>
      </ScrollNarrative>

      <ScrollNarrative>
        <div className="glass-panel rounded-lg p-5 my-8 overflow-x-auto">
          <table className="w-full text-[0.72rem]">
            <thead>
              <tr className="border-b" style={{ borderColor: "rgba(168,184,122,0.2)" }}>
                <th className="text-left py-2 text-cream-soft/40 font-normal mono-label text-[0.5rem]"></th>
                <th className="text-left py-2 text-cream-soft/40 font-normal mono-label text-[0.5rem]">WEB2 PLATFORMS</th>
                <th className="text-left py-2 text-cream-soft/40 font-normal mono-label text-[0.5rem]">WEB3 TOKENS</th>
                <th className="text-left py-2 font-normal mono-label text-[0.5rem] text-gold">TWIN3 RWA</th>
              </tr>
            </thead>
            <tbody className="text-cream-soft/60">
              <tr className="border-b" style={{ borderColor: "rgba(168,184,122,0.06)" }}>
                <td className="py-2.5 text-cream-soft/40 mono-label text-[0.5rem]">USER ROLE</td>
                <td className="py-2.5">Product (consumed)</td>
                <td className="py-2.5">Speculator (buy & hold)</td>
                <td className="py-2.5 text-cream">Economic Node (produces)</td>
              </tr>
              <tr className="border-b" style={{ borderColor: "rgba(168,184,122,0.06)" }}>
                <td className="py-2.5 text-cream-soft/40 mono-label text-[0.5rem]">INCOME</td>
                <td className="py-2.5">None</td>
                <td className="py-2.5">Token price volatility</td>
                <td className="py-2.5 text-cream">5-layer real revenue</td>
              </tr>
              <tr className="border-b" style={{ borderColor: "rgba(168,184,122,0.06)" }}>
                <td className="py-2.5 text-cream-soft/40 mono-label text-[0.5rem]">DATA</td>
                <td className="py-2.5">Platform-owned</td>
                <td className="py-2.5">No data layer</td>
                <td className="py-2.5 text-cream">User SBT — self-sovereign</td>
              </tr>
              <tr className="border-b" style={{ borderColor: "rgba(168,184,122,0.06)" }}>
                <td className="py-2.5 text-cream-soft/40 mono-label text-[0.5rem]">PRIVACY</td>
                <td className="py-2.5">Fully exposed</td>
                <td className="py-2.5">N/A</td>
                <td className="py-2.5 text-cream">Vector never exposes raw values</td>
              </tr>
              <tr className="border-b" style={{ borderColor: "rgba(168,184,122,0.06)" }}>
                <td className="py-2.5 text-cream-soft/40 mono-label text-[0.5rem]">AGENT</td>
                <td className="py-2.5">Does not exist</td>
                <td className="py-2.5">Does not exist</td>
                <td className="py-2.5 text-cream">Full-time economic proxy</td>
              </tr>
              <tr>
                <td className="py-2.5 text-cream-soft/40 mono-label text-[0.5rem]">SUSTAINABILITY</td>
                <td className="py-2.5">Platform profit-driven</td>
                <td className="py-2.5">Token inflation dependent</td>
                <td className="py-2.5 text-cream">Real commercial value flow</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ScrollNarrative>

      <SectionDivider label="WEB 4.0" />

      {/* ═══════════════════════════════════════════════════
          6.8 — WEB 4.0: SERVICES COME TO FIND YOU
          ═══════════════════════════════════════════════════ */}
      <ScrollNarrative>
        <h2>6.8 Web 4.0: Services Come to Find You</h2>
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
        <InsightCallout source="twin3 Protocol">
          In the Agent Economy, AI Agents need authentic human preferences to make meaningful decisions.
          twin3 transforms every person&apos;s 256D digital twin into an autonomous economic entity —
          passively collecting data rent, actively executing brand missions, serving as a paid API for
          other agents, earning affiliate commissions, and even delegating to Agent Farms for collective dispatch.
          Human as RWA means you are no longer a product to be consumed — you are the true value creator
          and beneficiary of the Agent Economy.
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
