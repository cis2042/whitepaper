"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  ChapterHeader,
  RevealSection,
  RevealItem,
  SectionDivider,
} from "@/components/Animated";

export default function Product() {
  return (
    <article className="prose-wp">
      <ChapterHeader
        chapter="Chapter 07"
        title="Product & User Experience"
        subtitle="Your Soul-Injected AI Partner — Powered by OpenClaw & NemoClaw"
        readTime="5 min read"
      />

      <RevealSection>
        <RevealItem>
          <h2>7.1 Personal Agent</h2>
        </RevealItem>
        <RevealItem>
          <p>
            The Personal Agent is twin3&apos;s user-facing product. It pairs each user&apos;s Twin
            Matrix digital twin with an AI agent, creating a unified, soul-injected companion.
            Built on the{" "}
            <strong className="text-cream">OpenClaw</strong> and{" "}
            <strong className="text-cream">Nvidia NemoClaw</strong> frameworks, the Personal
            Agent combines open-source flexibility with enterprise-grade security — delivering
            autonomous capabilities that remain fully under user control.
          </p>
        </RevealItem>

        <RevealItem>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-8">
            {[
              { title: "Identity Dashboard", desc: "Visualize and manage your 256D Twin Matrix. Track DNAs across all four quadrants. Watch your digital soul evolve." },
              { title: "Agent Manager", desc: "Deploy, configure, and monitor multiple Personal Agents. Set scopes, authorization levels, and validity periods." },
              { title: "Task Engine", desc: "Receive, accept, and execute HaaS tasks matched to your profile. Track earnings, completion rates, and reputation." },
              { title: "Element Market", desc: "Browse and acquire verified experience elements. Trade authenticated human data assets within the ecosystem." },
              { title: "Wallet Integration", desc: "Connect via Phantom, Rainbow, MetaMask, or WalletConnect. Full Web3-native with fiat onramps for Web2 users." },
            ].map((f, i) => (
              <div key={i} className="glass-panel rounded-lg p-4">
                <span className="mono-label text-[0.45rem] text-sage mb-1 block">{`FEATURE 0${i + 1}`}</span>
                <h4 className="font-heading text-cream text-sm !mt-0 !mb-1">{f.title}</h4>
                <p className="text-[0.72rem] text-cream-soft/60 !mb-0">{f.desc}</p>
              </div>
            ))}
          </div>
        </RevealItem>
      </RevealSection>

      <SectionDivider label="DESIGN PHILOSOPHY" />

      <RevealSection>
        <RevealItem>
          <h2>7.2 Design Philosophy: Empowerment Over Extraction</h2>
        </RevealItem>
        <RevealItem>
          <div className="glass-panel rounded-lg p-6 my-6 space-y-4">
            <div className="flex items-start gap-3">
              <span className="mono-label text-gold text-[0.6rem] pt-0.5 shrink-0">01</span>
              <div>
                <h4 className="font-heading text-cream text-sm !mt-0 !mb-0.5">Users own their data</h4>
                <p className="text-[0.75rem] text-cream-soft/60 !mb-0">The Twin Matrix SBT belongs to the user. twin3 cannot access, sell, or share it without explicit authorization.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mono-label text-gold text-[0.6rem] pt-0.5 shrink-0">02</span>
              <div>
                <h4 className="font-heading text-cream text-sm !mt-0 !mb-0.5">Users control their agents</h4>
                <p className="text-[0.75rem] text-cream-soft/60 !mb-0">All agent actions are scoped and revocable. The user is always in charge.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mono-label text-gold text-[0.6rem] pt-0.5 shrink-0">03</span>
              <div>
                <h4 className="font-heading text-cream text-sm !mt-0 !mb-0.5">Users capture majority value</h4>
                <p className="text-[0.75rem] text-cream-soft/60 !mb-0">70% of marketplace value flows directly to contributors, not the platform.</p>
              </div>
            </div>
          </div>
        </RevealItem>
      </RevealSection>

      <SectionDivider label="SDK & SUBSCRIPTION" />

      <RevealSection>
        <RevealItem>
          <h2>7.3 Twin Matrix SDK</h2>
        </RevealItem>
        <RevealItem>
          <p>
            For developers and ecosystem partners, twin3 provides a{" "}
            <strong className="text-cream">Twin Matrix SDK</strong> that enables third-party
            applications to read specific Twin Matrix dimensions (with user consent), issue
            specialized SBTs, integrate human trust signals, and build on the twin3 identity
            infrastructure.
          </p>
        </RevealItem>
        <RevealItem>
          <p>
            The SDK transforms twin3 from a standalone product into an open platform — a human
            intelligence layer for the entire Agentic Economy.
          </p>
        </RevealItem>
      </RevealSection>

      <RevealSection>
        <RevealItem>
          <h2>7.4 Subscription Model</h2>
        </RevealItem>
        <RevealItem>
          <div className="glass-panel rounded-lg overflow-hidden my-6">
            <table>
              <thead>
                <tr>
                  <th>Tier</th>
                  <th>Price</th>
                  <th>Parallel Agents</th>
                  <th>Features</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong className="text-cream">Agentic Human</strong></td>
                  <td>Free</td>
                  <td>1</td>
                  <td>Manual / semi-auto</td>
                </tr>
                <tr>
                  <td><strong className="text-cream">Superhuman</strong></td>
                  <td>USD 20/mo</td>
                  <td>3</td>
                  <td>Full auto, +2% token boost</td>
                </tr>
                <tr>
                  <td><strong className="text-cream">Ultra</strong></td>
                  <td>USD 50/mo</td>
                  <td>10</td>
                  <td>Priority matching, API access</td>
                </tr>
              </tbody>
            </table>
          </div>
        </RevealItem>
      </RevealSection>

      <SectionDivider />

      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
        <Link href="/agent-economy"><button className="btn-outline px-5 py-2.5 text-sm flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> The Agent Economy</button></Link>
        <Link href="/business-model"><button className="btn-gold px-5 py-2.5 text-sm flex items-center gap-2">Next: Business Model <ArrowRight className="w-4 h-4" /></button></Link>
      </div>
    </article>
  );
}
