"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  ChapterHeader,
  RevealSection,
  RevealItem,
  InsightCallout,
  SectionDivider,
} from "@/components/Animated";
import { MatrixGrid } from "@/components/MatrixGrid";

export default function HumanIntelligence() {
  const [globalRank, setGlobalRank] = useState(7);
  const [chainRank, setChainRank] = useState(2);
  useEffect(() => {
    fetch("https://holders.twin3.ai/api/public/all")
      .then((r) => r.json())
      .then((d) => {
        if (d?.overview?.ranking?.global_sbt_rank) setGlobalRank(d.overview.ranking.global_sbt_rank);
        if (d?.overview?.ranking?.chain_rank) setChainRank(d.overview.ranking.chain_rank);
      })
      .catch(() => {});
  }, []);
  return (
    <article className="prose-wp">
      <ChapterHeader
        chapter="Chapter 04"
        title="Engineering Human Intelligence"
        subtitle="The Twin Matrix Protocol: Making Human Experience Computable for AI Systems"
        readTime="10 min read"
      />

      {/* ── 4.1 The Computable Human ── */}
      <RevealSection>
        <RevealItem>
          <h2 id="computable">4.1 The Computable Human</h2>
        </RevealItem>
        <RevealItem>
          <p>
            Traditional digital profiling relies on superficial demographic labels — age, gender,
            location — that fail to capture real taste, skills, values, or motivation. This
            limitation underlies many persistent problems in digital systems, including poor
            personalization, algorithmic bias, and inefficient targeting.
          </p>
        </RevealItem>
        <RevealItem>
          <p>
            twin3 adapts ideas from advances in natural language processing. Techniques such as
            Word2Vec demonstrated that representing words as vectors enables machines to understand
            complex semantic relationships. twin3 extends this approach to humans.
          </p>
        </RevealItem>
        <RevealItem>
          <InsightCallout source="Mikolov et al., &ldquo;Efficient Estimation of Word Representations in Vector Space,&rdquo; 2013">
            Just as word embeddings enable machines to reason about semantic similarity between
            concepts, human embeddings enable AI systems to reason about the similarity and
            complementarity between people.
          </InsightCallout>
        </RevealItem>
        <RevealItem>
          <p>
            Through the <strong className="text-cream">Computable Human</strong> model, individuals
            are represented not as fragmented labels but as unique points in a high-dimensional
            space. The Twin Matrix encodes this representation as a{" "}
            <strong className="text-cream">256-dimensional vector</strong> — effectively a{" "}
            <strong className="text-cream">digital human DNA</strong>.
          </p>
        </RevealItem>
      </RevealSection>

      <SectionDivider label="256 DIMENSIONS OF YOU" />

      {/* ── 4.2 The Twin Matrix ── */}
      <RevealSection>
        <RevealItem>
          <h2 id="twin-matrix">4.2 The Twin Matrix: 256 Dimensions of You</h2>
        </RevealItem>
        <RevealItem>
          <p>
            The Twin Matrix is a 256-dimensional Soulbound Token — a permanent, on-chain
            crystallization of who you are. The word &ldquo;Matrix&rdquo; itself carries three layers
            of meaning:
          </p>
        </RevealItem>
        <RevealItem>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            <div className="glass-panel rounded-lg p-5 text-center">
              <span className="mono-label text-[0.5rem] text-sage block mb-2">layer 01</span>
              <h4 className="font-heading text-gold text-lg !mt-0 !mb-1">The Womb</h4>
              <p className="text-[0.72rem] text-cream-soft/60 !mb-0">
                From Latin, meaning &ldquo;place of origin.&rdquo; The container that nurtures and
                carries your digital soul — where human traits are preserved and protected.
              </p>
            </div>
            <div className="glass-panel rounded-lg p-5 text-center">
              <span className="mono-label text-[0.5rem] text-sage block mb-2">layer 02</span>
              <h4 className="font-heading text-gold text-lg !mt-0 !mb-1">The Twin</h4>
              <p className="text-[0.72rem] text-cream-soft/60 !mb-0">
                Two halves — one material, one immaterial. Human and AI as mirror images. Not
                opposites, but complements. This duality makes Soul Injection possible.
              </p>
            </div>
            <div className="glass-panel rounded-lg p-5 text-center">
              <span className="mono-label text-[0.5rem] text-sage block mb-2">layer 03</span>
              <h4 className="font-heading text-gold text-lg !mt-0 !mb-1">The Computable</h4>
              <p className="text-[0.72rem] text-cream-soft/60 !mb-0">
                In mathematics, a matrix is a structured array. Here, a 256-dimensional vector space
                that makes human traits computable, comparable, and readable by AI.
              </p>
            </div>
          </div>
        </RevealItem>

        <RevealItem>
          <InsightCallout source="Vitalik Buterin, &ldquo;Soulbound,&rdquo; 2022">
            What if NFTs could be soulbound? What if there was a large class of NFTs that represent
            much more of who you are, and not just what you can afford?
          </InsightCallout>
        </RevealItem>
      </RevealSection>

      <SectionDivider label="FOUR QUADRANTS" />

      {/* ── 4.3 The Four-Dimensional Framework ── */}
      <RevealSection>
        <RevealItem>
          <h2 id="framework">4.3 The Four-Dimensional Framework</h2>
        </RevealItem>
        <RevealItem>
          <p>
            Each cell in the Twin Matrix holds a hex value (00–FF) — one{" "}
            <strong className="text-cream">DNA</strong> (Decentralized Node of Authenticity), a
            single verifiable dimension of human identity. The 256 dimensions are organized into four
            quadrants:
          </p>
        </RevealItem>

        <RevealItem>
          <MatrixGrid className="my-8" />
        </RevealItem>

        <RevealItem>
          <div className="space-y-4 my-6">
            <div className="glass-panel rounded-lg p-5 border-l-2 border-sage/40">
              <div className="flex items-center gap-3 mb-2">
                <span className="mono-label text-[0.55rem] text-sage">64 DNAs</span>
                <span className="font-heading text-cream text-base">Physical Me</span>
              </div>
              <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
                Sensory preferences, sleep patterns, activity level, pain tolerance, climate
                comfort, physical capabilities. The embodied self that only a living human
                possesses.
              </p>
            </div>

            <div className="glass-panel rounded-lg p-5 border-l-2 border-gold/40">
              <div className="flex items-center gap-3 mb-2">
                <span className="mono-label text-[0.55rem] text-gold">64 DNAs</span>
                <span className="font-heading text-cream text-base">Digital Me</span>
              </div>
              <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
                On-chain credentials, skill badges, wallet age, device fingerprint, learning
                velocity, content creation rate. The digital footprint that validates expertise.
              </p>
            </div>

            <div className="glass-panel rounded-lg p-5 border-l-2 border-cream/20">
              <div className="flex items-center gap-3 mb-2">
                <span className="mono-label text-[0.55rem] text-cream-soft/50">64 DNAs</span>
                <span className="font-heading text-cream text-base">Social Me</span>
              </div>
              <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
                Language fluency, cultural affinity, community roles, influence radius,
                communication style, trust level. The relational intelligence that AI cannot
                simulate.
              </p>
            </div>

            <div className="glass-panel rounded-lg p-5 border-l-2 border-gold/60">
              <div className="flex items-center gap-3 mb-2">
                <span className="mono-label text-[0.55rem] text-gold/70">64 DNAs</span>
                <span className="font-heading text-cream text-base">Spiritual Me</span>
              </div>
              <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
                Moral compass, aesthetic taste, risk attitude, privacy stance, fairness index,
                creative expression, belief openness. The inner values that define authentic
                judgment.
              </p>
            </div>
          </div>
        </RevealItem>

        <RevealItem>
          <p>
            Together, 256 DNAs form a compact, verifiable representation of the authentic self —
            immutable, tamper-proof, and sealed on-chain as an{" "}
            <strong className="text-cream">ERC-5192 Soulbound Token</strong>.
          </p>
        </RevealItem>
      </RevealSection>

      <SectionDivider label="IMPLEMENTATION" />

      {/* ── 4.4 Technical Implementation ── */}
      <RevealSection>
        <RevealItem>
          <h2 id="implementation">4.4 Technical Implementation</h2>
        </RevealItem>

        <RevealItem>
          <div className="space-y-4 my-6">
            <div className="glass-panel rounded-lg p-5">
              <h4 className="font-heading text-cream text-sm !mt-0 !mb-2">
                Initialization: Cold-Starting the Digital Twin
              </h4>
              <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
                When a user first mints their Twin Matrix, the protocol initializes the
                256-dimensional vector through a structured onboarding process. Users connect
                their wallet, complete questionnaires, and authorize data sources. The system
                computes the initial vector and mints it as an SBT.
              </p>
            </div>

            <div className="glass-panel rounded-lg p-5">
              <h4 className="font-heading text-cream text-sm !mt-0 !mb-2">
                Dynamic Updates: Learning from Behavior
              </h4>
              <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
                The Twin Matrix is not static. As users interact with the platform, complete
                tasks, earn credentials, and refine preferences, their matrix evolves. Updates
                are periodically committed on-chain, ensuring the digital twin remains a living,
                accurate reflection of the human it represents.
              </p>
            </div>

            <div className="glass-panel rounded-lg p-5">
              <h4 className="font-heading text-cream text-sm !mt-0 !mb-2">
                Privacy by Design
              </h4>
              <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
                The raw data underlying each dimension is never stored on-chain. Only the
                computed vector is committed. Selective disclosure allows users to share specific
                dimensions without revealing their full identity — a critical feature for
                enterprise use cases that require targeted attributes without full
                deanonymization.
              </p>
            </div>
          </div>
        </RevealItem>
      </RevealSection>

      <SectionDivider label="3D PROOF OF AUTHENTICITY" />

      {/* ── 4.5 3D Proof of Authenticity ── */}
      <RevealSection>
        <RevealItem>
          <h2 id="proof">4.5 3D Proof of Authenticity</h2>
        </RevealItem>
        <RevealItem>
          <p>
            Existing proof-of-personhood systems (e.g., Worldcoin&apos;s iris-based verification)
            answer only a binary question: <em>&ldquo;Are you human?&rdquo;</em> In the Agentic
            Economy, that is not enough. Enterprises do not merely need to know that a judgment came
            from a human — they need to know <em>which kind</em> of human, with{" "}
            <em>what kind</em> of experience, under <em>what conditions</em> of trust.
          </p>
        </RevealItem>

        <RevealItem>
          <div className="glass-panel rounded-lg p-6 my-6">
            <p className="mono-label text-[0.5rem] text-cream-soft/30 mb-4">PROOF DEPTH COMPARISON</p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-20 shrink-0">
                  <span className="mono-label text-[0.55rem] text-cream-soft/40">1D</span>
                  <div className="h-2 w-8 rounded-full mt-1" style={{ background: "rgba(168,184,122,0.3)" }} />
                </div>
                <div>
                  <h4 className="font-heading text-cream text-sm !mt-0 !mb-0.5">Identity</h4>
                  <p className="text-[0.72rem] text-cream-soft/50 !mb-0">
                    Human vs. machine classification. Analogous to Worldcoin Proof-of-Personhood.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-20 shrink-0">
                  <span className="mono-label text-[0.55rem] text-cream-soft/40">2D</span>
                  <div className="h-2 w-14 rounded-full mt-1" style={{ background: "rgba(168,184,122,0.5)" }} />
                </div>
                <div>
                  <h4 className="font-heading text-cream text-sm !mt-0 !mb-0.5">Reputation</h4>
                  <p className="text-[0.72rem] text-cream-soft/50 !mb-0">
                    On-chain credibility and history. Analogous to Gitcoin Passport
                    Proof-of-Reputation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-20 shrink-0">
                  <span className="mono-label text-[0.55rem] text-gold">3D</span>
                  <div className="h-2 w-20 rounded-full mt-1" style={{ background: "linear-gradient(90deg, #6a8a5a, #d4c89a)" }} />
                </div>
                <div>
                  <h4 className="font-heading text-gold text-sm !mt-0 !mb-0.5">
                    Profile — twin3 Unique
                  </h4>
                  <p className="text-[0.72rem] text-cream-soft/50 !mb-0">
                    Full 256D Twin Matrix — a complete, computable human. Proof-of-Authenticity
                    that captures identity, reputation, <em>and</em> the full spectrum of human
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealItem>

        <RevealItem>
          <p>
            twin3 currently ranks <strong className="text-cream">#{globalRank} globally</strong> among all SBT
            projects by holder count, and{" "}
            <strong className="text-cream">#{chainRank} on BNB Chain</strong>, second only to Binance&apos;s
            own BAB Token — validation that the market recognizes the need for richer, more
            meaningful on-chain identity.
          </p>
        </RevealItem>
      </RevealSection>

      <SectionDivider label="PROOF OF HUMANITY" />

      {/* ── 4.6 Proof of Humanity ── */}
      <RevealSection>
        <RevealItem>
          <h2 id="proof-of-humanity">4.6 Proof of Humanity Infrastructure</h2>
        </RevealItem>
        <RevealItem>
          <p>
            Building on the Twin Matrix, twin3 provides an open, permissionless{" "}
            <strong className="text-cream">Proof-of-Humanity</strong> infrastructure (
            <a href="https://humanity.twin3.ai" target="_blank" rel="noopener noreferrer">
              humanity.twin3.ai
            </a>
            ) — a trust foundation that any application, community, or agent can integrate to
            verify that users are real humans with measurable authenticity.
          </p>
        </RevealItem>

        <RevealItem>
          <div className="glass-panel rounded-lg p-6 my-6">
            <p className="mono-label text-[0.5rem] text-cream-soft/30 mb-4">HUMANITY INDEX (0–255)</p>
            <p className="text-[0.78rem] text-cream-soft/60 !mb-4">
              A graduated scoring system across 7 verification methods. Each additional verification
              method increases the user&apos;s score, creating a spectrum of trust — not a binary
              human/bot classification.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { method: "reCAPTCHA", range: "+15" },
                { method: "Google OAuth", range: "+30" },
                { method: "Apple Passkey", range: "+40" },
                { method: "Google 2FA", range: "+50" },
                { method: "Telegram", range: "+30" },
                { method: "Discord", range: "+30" },
                { method: "LINE", range: "+30" },
              ].map((m, i) => (
                <div key={i} className="glass-panel rounded p-2 text-center">
                  <span className="text-[0.65rem] text-cream block">{m.method}</span>
                  <span className="mono-label text-[0.5rem] text-sage">{m.range}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealItem>

        <RevealItem>
          <p>
            <strong className="text-cream">Core properties:</strong>
          </p>
          <div className="space-y-2 my-4">
            {[
              { title: "Soulbound Token (SBT)", desc: "Non-transferable NFT permanently bound to the user's wallet. Can't be sold, stolen, or faked." },
              { title: "Zero-Config Integration", desc: "No API key, no registration, no approval. Add 2 lines of HTML — forever free." },
              { title: "Permissionless On-Chain", desc: "Any smart contract can read SBT scores directly. No API dependency." },
              { title: "Privacy First", desc: "OAuth-based verification. Passkeys and 2FA stay on-device. Zero-knowledge attestation on-chain." },
              { title: "Referral Tracking", desc: "Every integration source tracked. First-touch attribution built in. Communities receive 10% of member earnings." },
            ].map((p, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="mono-label text-gold text-[0.55rem] pt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <span className="text-cream text-[0.78rem] font-heading">{p.title}</span>
                  <span className="text-cream-soft/60 text-[0.72rem]"> — {p.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </RevealItem>
      </RevealSection>

      <SectionDivider />

      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
        <Link href="/work-revolution">
          <button className="btn-outline px-5 py-2.5 text-sm flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> The Work Revolution
          </button>
        </Link>
        <Link href="/soul-injection">
          <button className="btn-gold px-5 py-2.5 text-sm flex items-center gap-2">
            Next: Soul Injection <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </article>
  );
}
