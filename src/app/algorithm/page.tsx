"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  RevealSection,
  RevealItem,
  InsightCallout,
  SectionDivider,
} from "@/components/Animated";
import {
  CinematicHero,
  ScrollNarrative,
  RevealText,
  TransformSequence,
  OrbitalSystem,
  DepthLayers,
  DataStream,
  BreathingGlow,
  ValueFlow,
} from "@/components/Cinematic";
import { MatrixCircle, MatrixRain } from "@/components/MatrixAnimations";

export default function Algorithm() {
  return (
    <article className="prose-wp">
      {/* ── Hero with MatrixRain ── */}
      <div className="relative py-14 mb-6 overflow-hidden">
        <MatrixRain rows={10} cols={18} opacity={0.18} />
        <div className="relative z-10">
          <p className="mono-label text-[0.55rem] text-sage/50 tracking-[0.2em] mb-2">
            CHAPTER 04A · 10 MIN READ
          </p>
          <h1 className="text-4xl md:text-5xl font-heading text-cream leading-[1.05] mb-3">
            Twin Matrix Algorithm
          </h1>
          <p className="text-lg text-cream-soft/50 font-heading italic">
            How Human Traits Become a Computable, Privacy-Preserving 256D Vector
          </p>
        </div>
      </div>

      {/* ── Overview ── */}
      <ScrollNarrative>
        <RevealText
          text="TwinMatrixSBT is a Web3 identity protocol that captures a user's behavioral and preference profile as a 256-dimensional vector — where each dimension is a uint8 value in the range [0, 255] — stored immutably on-chain as a Soulbound Token. The system enables users to own their behavioral data, brands to query the pool via natural language, and personal agents to execute missions and earn rewards."
          highlightWords={["256-dimensional", "uint8", "Soulbound Token", "natural language"]}
          className="text-[0.88rem] text-cream-soft/70 leading-relaxed my-6"
        />
      </ScrollNarrative>

      <SectionDivider label="THE IDENTITY VECTOR" />

      {/* ── 256D Vector Structure ── */}
      <ScrollNarrative>
        <h2>The 256-Dimensional Identity Vector</h2>
        <p>
          At the heart of TwinMatrixSBT is a <strong className="text-cream">256-dimension
          identity vector</strong> where each dimension is a uint8 value in the range [0, 255].
          The 256 dimensions are partitioned into four <strong className="text-cream">quadrants
          </strong> of 64 dimensions each:
        </p>
      </ScrollNarrative>

      {/* ── MatrixCircle: 4-quadrant diagram ── */}
      <ScrollNarrative>
        <MatrixCircle />
        <p className="text-[0.65rem] text-cream-soft/40 text-center -mt-4 mb-6">
          Four quadrants · 64 dimensions each · uint8[256] total
        </p>
      </ScrollNarrative>

      {/* ── Four Quadrants Detail — Accurate from README ── */}
      <ScrollNarrative>
        <div className="space-y-4 my-6">
          <BreathingGlow color="rgba(168,184,122,0.1)" intensity={0.4} className="rounded-lg">
            <div className="glass-panel rounded-lg p-5 border-l-2 border-sage/40">
              <span className="mono-label text-[0.5rem] text-sage block mb-2">Q1 · DIMS [0–63]</span>
              <h4 className="font-heading text-cream text-sm !mt-0 !mb-2">
                Physical Me — Body &amp; Athletic Attributes
              </h4>
              <div className="space-y-2">
                {[
                  { dims: "0–6", attr: "Age bracket", enc: "One-hot: 18–24, 25–34, 35–44, 45–54, 55–64, 65+, Undisclosed" },
                  { dims: "7–11", attr: "Gender", enc: "One-hot: Male, Female, Non-binary, Prefer-not-to-say, Other" },
                  { dims: "12–15", attr: "Weight bracket", enc: "One-hot: <55 kg, 55–70, 70–85, 85+" },
                  { dims: "16–19", attr: "Height bracket", enc: "One-hot: <160 cm, 160–170, 170–180, 180+" },
                  { dims: "20–31", attr: "Sport metrics", enc: "Frequency (3d), Duration (4d), Daily steps (4d)" },
                  { dims: "32–63", attr: "Sport ranking", enc: "Rank-weighted value per sport (running, cycling, swimming, trail, strength, yoga...)" },
                ].map((row, i) => (
                  <div key={i} className="flex gap-3 text-[0.72rem]">
                    <span className="mono-label text-[0.55rem] text-sage/70 w-14 shrink-0 pt-0.5">[{row.dims}]</span>
                    <div>
                      <span className="text-cream font-medium">{row.attr}</span>
                      <span className="text-cream-soft/50 ml-1">— {row.enc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </BreathingGlow>

          <BreathingGlow color="rgba(212,200,154,0.1)" intensity={0.4} className="rounded-lg">
            <div className="glass-panel rounded-lg p-5 border-l-2 border-gold/40">
              <span className="mono-label text-[0.5rem] text-gold block mb-2">Q2 · DIMS [64–127]</span>
              <h4 className="font-heading text-cream text-sm !mt-0 !mb-2">
                Digital Me — Behavior &amp; Brand Affinity
              </h4>
              <div className="space-y-2">
                {[
                  { dims: "64–73", attr: "Brand affinity", enc: "L1-normalized across selected brands (Nike, Adidas, New Balance, ASICS...)" },
                  { dims: "74–85", attr: "Crypto literacy", enc: "DeFi experience, NFT activity, programming skill" },
                  { dims: "86–127", attr: "Behavioral bars", enc: "Slider pairs: Passive↔Active, Indoor↔Outdoor" },
                ].map((row, i) => (
                  <div key={i} className="flex gap-3 text-[0.72rem]">
                    <span className="mono-label text-[0.55rem] text-gold/60 w-14 shrink-0 pt-0.5">[{row.dims}]</span>
                    <div>
                      <span className="text-cream font-medium">{row.attr}</span>
                      <span className="text-cream-soft/50 ml-1">— {row.enc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </BreathingGlow>

          <BreathingGlow color="rgba(168,184,122,0.1)" intensity={0.4} className="rounded-lg">
            <div className="glass-panel rounded-lg p-5 border-l-2 border-sage/40">
              <span className="mono-label text-[0.5rem] text-sage block mb-2">Q3 · DIMS [128–191]</span>
              <h4 className="font-heading text-cream text-sm !mt-0 !mb-2">
                Social Me — Relationships &amp; Community
              </h4>
              <div className="space-y-2">
                {[
                  { dims: "128–129", attr: "Occupation", enc: "One-hot: Student, Professional, Freelancer, Retired, Other" },
                  { dims: "130–133", attr: "Education", enc: "One-hot: High school, Bachelor's, Master's, Doctorate" },
                  { dims: "134–137", attr: "Income bracket", enc: "One-hot: <$30k, $30k–$60k, $60k–$100k, $100k+" },
                  { dims: "138–141", attr: "Relationship", enc: "One-hot: Single, In a relationship, Married, Divorced" },
                  { dims: "142–149", attr: "Urban/Rural", enc: "One-hot: Urban, Suburban, Rural" },
                  { dims: "150–163", attr: "Social bars", enc: "Slider pairs: Solo↔Group, Introvert↔Extrovert, Leader↔Follower" },
                ].map((row, i) => (
                  <div key={i} className="flex gap-3 text-[0.72rem]">
                    <span className="mono-label text-[0.55rem] text-sage/70 w-14 shrink-0 pt-0.5">[{row.dims}]</span>
                    <div>
                      <span className="text-cream font-medium">{row.attr}</span>
                      <span className="text-cream-soft/50 ml-1">— {row.enc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </BreathingGlow>

          <BreathingGlow color="rgba(212,200,154,0.1)" intensity={0.4} className="rounded-lg">
            <div className="glass-panel rounded-lg p-5 border-l-2 border-gold/40">
              <span className="mono-label text-[0.5rem] text-gold block mb-2">Q4 · DIMS [192–255]</span>
              <h4 className="font-heading text-cream text-sm !mt-0 !mb-2">
                Spiritual Me — Values &amp; Life Philosophy
              </h4>
              <div className="space-y-2">
                {[
                  { dims: "192–201", attr: "Environmental concern", enc: "Recycling, carbon footprint awareness, sustainable consumption" },
                  { dims: "202–211", attr: "Risk tolerance", enc: "Financial risk appetite, adventure seeking" },
                  { dims: "212–221", attr: "Mission drive", enc: "Purpose alignment, social impact preference" },
                  { dims: "222–255", attr: "Soul bars", enc: "Slider pairs: Outcome↔Experience, Conservative↔Progressive, Tradition↔Innovation" },
                ].map((row, i) => (
                  <div key={i} className="flex gap-3 text-[0.72rem]">
                    <span className="mono-label text-[0.55rem] text-gold/60 w-14 shrink-0 pt-0.5">[{row.dims}]</span>
                    <div>
                      <span className="text-cream font-medium">{row.attr}</span>
                      <span className="text-cream-soft/50 ml-1">— {row.enc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </BreathingGlow>
        </div>
      </ScrollNarrative>

      <SectionDivider label="ENCODING ALGORITHMS" />

      {/* ── Encoding Algorithms ── */}
      <ScrollNarrative>
        <h2>Encoding Algorithms</h2>
        <p>
          The <strong className="text-cream">Twin Encoder</strong> converts raw questionnaire
          responses into the 256-dimensional vector through four distinct encoding strategies,
          each optimized for different data types.
        </p>
      </ScrollNarrative>

      <ScrollNarrative>
        <TransformSequence
          stages={[
            {
              label: "One-Hot Encoding",
              description:
                "Categorical fields (age, gender, education, income) are encoded as binary dimensions. For a category with N options, N dimensions are allocated. The selected option's dimension is set to 255; all others are 0. This preserves categorical distinctness without imposing ordinal relationships.",
            },
            {
              label: "Rank-Weighted Encoding",
              description:
                "Ordered preferences (sports, brands) use rank-weighted values. For each selected item at rank position r (0-based): weight = 255 × (1 − r / totalSelected). The top-ranked item receives 255, subsequent items receive proportionally lower values. This captures both preference inclusion and relative importance.",
            },
            {
              label: "L1-Normalized Encoding",
              description:
                "Multi-select brand choices use L1 normalization. Given K selected brands: raw[i] = 255 / K for equal weighting. The sum across brand dimensions ≈ 255 (L1 norm = 255). This ensures total brand affinity is comparable across users regardless of how many brands they select.",
            },
            {
              label: "Complementary Bar Encoding",
              description:
                "Bipolar slider inputs (Solo↔Group, Passive↔Active) use complementary pairs. For a slider at position value (0–100): leftDim = round(value × 255 / 100), rightDim = 255 − leftDim. A Solo↔Group slider at 70 yields: dim[solo] = 179, dim[group] = 76. Both dimensions always sum to 255.",
            },
          ]}
        />
      </ScrollNarrative>

      <ScrollNarrative>
        <div className="glass-panel rounded-lg p-5 my-6 border-l-2 border-cream/20">
          <span className="mono-label text-[0.5rem] text-cream-soft/30 block mb-2">VECTOR DENSITY METRIC</span>
          <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
            The system computes a <strong className="text-cream">density score</strong> to
            measure how complete a user&apos;s identity vector is:{" "}
            <code className="text-sage">density = (count of dims with value &gt; threshold) / 256</code>,
            where threshold ≈ 0 (near-zero cutoff). Density is reported per quadrant, helping
            brands assess the reliability of match results. A user who completes all physical
            and spiritual sections but skips social data will show high Q1/Q4 density but low Q3 density.
          </p>
        </div>
      </ScrollNarrative>

      <SectionDivider label="MATCHING ENGINE" />

      {/* ── Matrix Matching Engine ── */}
      <ScrollNarrative>
        <h2>Matrix Matching Engine</h2>
        <p>
          The Matrix is the privacy-preserving intelligence layer. It receives{" "}
          <strong className="text-cream">natural language queries</strong> from brands, parses
          them into structured dimension conditions, and matches against the user pool —
          without ever exposing raw vector values.
        </p>
      </ScrollNarrative>

      {/* ── Query Pipeline ── */}
      <ScrollNarrative>
        <TransformSequence
          stages={[
            {
              label: "1. Natural Language Input",
              description:
                "A brand submits a query like: \"Find active runners aged 25–34 who follow Nike and have high environmental concern.\" The query is received via POST /v1/matrix/inject.",
            },
            {
              label: "2. LLM Parser (Cascading)",
              description:
                "The query is processed through a cascading LLM chain: Claude API (primary) → OpenAI API (fallback) → Local keyword rules (zero-dependency fallback). The LLM converts the natural language into structured conditions: [{ dimension_idx, operator, threshold }].",
            },
            {
              label: "3. Security Validator",
              description:
                "Every parsed condition passes through strict validation: whitelist-only operators (>=, <=, ==, >, <), dimension index bounds [0, 255], threshold clamping [0, 255]. Prompt injection patterns are detected and blocked via regex. Input is Unicode NFKC-normalized with zero-width characters stripped.",
            },
            {
              label: "4. Matching Engine (NumPy)",
              description:
                "The engine scans the agent pool and evaluates each condition against the user's vector dimensions. Match score = satisfied_conditions / total_conditions. Users are ranked by score and returned as anonymized results: { matched_count, match_rate, sample_profiles }.",
            },
            {
              label: "5. Privacy Aggregation",
              description:
                "Raw dimension values are NEVER returned. The system converts values to qualitative labels only: ≥200 → \"Very High\", ≥150 → \"High\", <150 → \"Moderate\". Brands receive only aggregate statistics and these qualitative labels, preserving complete user privacy.",
            },
          ]}
        />
      </ScrollNarrative>

      <SectionDivider label="ALIGNMENT SCORING" />

      {/* ── Cosine Alignment Algorithm ── */}
      <ScrollNarrative>
        <h2>Cosine Alignment Algorithm</h2>
        <p>
          The alignment endpoint computes how well a user&apos;s profile matches a brand&apos;s
          ideal customer vector. The algorithm uses a{" "}
          <strong className="text-cream">weighted dual-contribution model</strong>.
        </p>
      </ScrollNarrative>

      <ScrollNarrative>
        <div className="glass-panel rounded-lg p-5 my-6">
          <span className="mono-label text-[0.5rem] text-cream-soft/30 block mb-3">ALIGNMENT FORMULA</span>
          <pre className="!bg-transparent !border-0 !p-0 !m-0 text-[0.72rem]">
            <code>{`For each authorized scope (e.g., mobility, style):
  Load user projection: { soul: {key: value}, skill: {key: value} }
  
  soulContrib   = mean(projection.soul.values)
  skillOverlap  = Σ(user.skill[k] × brand.matrix[k]) / overlap_count
  
  alignmentScore = 0.4 × soulContrib + 0.6 × skillContrib`}</code>
          </pre>
          <p className="text-[0.72rem] text-cream-soft/50 !mb-0 mt-3">
            The <strong className="text-cream">60/40 weighting</strong> favors skill-based
            (behavioral) alignment over soul-based (attitudinal) alignment — reflecting the
            principle that actions are stronger signals than preferences.
          </p>
        </div>
      </ScrollNarrative>

      <ScrollNarrative>
        <ValueFlow
          from="User Agent"
          to="Brand Agent"
          value="Alignment Score"
        />
      </ScrollNarrative>

      <SectionDivider label="PERMISSION SYSTEM" />

      {/* ── 7-Scope Permission Bitmask ── */}
      <ScrollNarrative>
        <h2>On-Chain Permission Gating</h2>
        <p>
          Data sovereignty is enforced through{" "}
          <strong className="text-cream">on-chain permission bitmasks</strong>. When a user
          grants an agent access, they specify a <code>scopeMask</code> (uint256) that defines
          which lifestyle domains the agent can read. The SBT contract&apos;s{" "}
          <code>getAuthorizedLatestValues</code> function validates that <code>msg.sender</code> is
          an authorized agent with valid <code>bindAndGrant</code> before returning any data.
        </p>
      </ScrollNarrative>

      <ScrollNarrative>
        <div className="space-y-2 my-6">
          {[
            { bit: 0, scope: "style", desc: "Fashion and clothing preferences", color: "#d4c89a" },
            { bit: 1, scope: "food", desc: "Dietary habits and food preferences", color: "#a8b87a" },
            { bit: 2, scope: "home", desc: "Living environment and home lifestyle", color: "#6a8a5a" },
            { bit: 3, scope: "mobility", desc: "Transportation, fitness and sport data", color: "#d4c89a" },
            { bit: 4, scope: "entertainment", desc: "Media, gaming, and leisure", color: "#a8b87a" },
            { bit: 5, scope: "learning", desc: "Education and skill development", color: "#6a8a5a" },
            { bit: 6, scope: "beauty", desc: "Personal care and beauty products", color: "#d4c89a" },
          ].map((s, i) => (
            <div key={i} className="glass-panel rounded-lg p-4 flex items-center gap-4">
              <span className="mono-label text-[0.55rem] text-cream-soft/30 w-10 shrink-0 text-center">
                bit {s.bit}
              </span>
              <span className="w-2 h-2 rounded-full shrink-0" style={{ background: s.color }} />
              <span className="font-heading text-cream text-sm min-w-[90px]">{s.scope}</span>
              <span className="text-[0.7rem] text-cream-soft/50">{s.desc}</span>
            </div>
          ))}
        </div>
      </ScrollNarrative>

      <ScrollNarrative>
        <InsightCallout source="Example">
          A brand querying fitness data receives <code>scopeMask = 0b1001</code>, granting
          access only to <strong>style</strong> (bit 0) and <strong>mobility</strong> (bit 3).
          All other quadrant data remains invisible — even though the user&apos;s SBT contains
          the full 256D vector on-chain.
        </InsightCallout>
      </ScrollNarrative>

      <SectionDivider label="SECURITY ARCHITECTURE" />

      {/* ── Security Layers ── */}
      <ScrollNarrative>
        <h2>Defense-in-Depth Security</h2>
        <p>
          The system implements multiple security layers from input processing to on-chain
          enforcement, ensuring data integrity and privacy at every stage.
        </p>
      </ScrollNarrative>

      <ScrollNarrative>
        <DepthLayers
          className="my-8"
          layers={[
            {
              label: "Layer 1: Input Sanitization",
              description:
                "Unicode NFKC normalization, zero-width character stripping, query length capping (500 chars). Prompt injection detection via regex patterns blocks known LLM exploits (system prompt extraction, instruction override).",
              depth: 1,
              color: "rgba(168,184,122,0.5)",
            },
            {
              label: "Layer 2: Condition Validation",
              description:
                "Whitelist-only operators (>=, <=, ==, >, <). Dimension index bounds [0, 255]. Threshold clamping [0, 255]. HMAC timing-safe API key comparison. Rate limiting: 100 req/15 min (backend), 20 req/min (Matrix).",
              depth: 2,
              color: "rgba(212,200,154,0.5)",
            },
            {
              label: "Layer 3: Privacy Aggregation",
              description:
                "Raw dimension values are NEVER exposed to brands. Only qualitative labels (Very High / High / Moderate) and aggregate statistics. Private keys redacted from all API responses via sanitizeAgent(). On-chain permission enforcement via SBT contract.",
              depth: 3,
              color: "#d4c89a",
            },
          ]}
        />
      </ScrollNarrative>

      <SectionDivider label="DATA VALUE MODEL" />

      {/* ── Data Value Model ── */}
      <ScrollNarrative>
        <h2>From Encoding to Economic Value</h2>
        <p>
          The 256D Twin Matrix creates economic value through a closed-loop system where user
          data sovereignty and brand utility reinforce each other.
        </p>
      </ScrollNarrative>

      <ScrollNarrative>
        <div className="space-y-4 my-6">
          <div className="glass-panel rounded-lg p-5 border-l-2 border-gold/40">
            <h4 className="font-heading text-cream text-sm !mt-0 !mb-2">
              Brand Campaign → User Mission → USDT Reward
            </h4>
            <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
              Brands create campaigns via natural language queries. The Matrix matches users
              and dispatches individualized missions to Personal Agents via Telegram. On
              completion, the system automatically transfers USDT to the agent&apos;s on-chain wallet.
              Access tiers (Free: 100 calls/month, Pro: 5K calls/month, Enterprise: unlimited)
              ensure sustainable revenue.
            </p>
          </div>

          <div className="glass-panel rounded-lg p-5 border-l-2 border-sage/40">
            <h4 className="font-heading text-cream text-sm !mt-0 !mb-2">
              Projection Engine → Scoped Intelligence
            </h4>
            <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
              Raw 256D vectors are converted into <strong className="text-cream">domain-specific
              projections</strong> — human-readable, scope-limited views of identity. The
              mobility projection decomposes into soul dimensions (sport preferences, active/passive)
              and skill dimensions (frequency, duration, brand affinities). Each raw uint8 value
              is normalized to [0, 1] float for the projection output.
            </p>
          </div>

          <div className="glass-panel rounded-lg p-5 border-l-2 border-cream/20">
            <h4 className="font-heading text-cream text-sm !mt-0 !mb-2">
              Density-Driven Matching Quality
            </h4>
            <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
              Higher vector density = more precise matching = higher reward potential. Users
              are incentivized to fill in more dimensions because richer data means more
              campaign matches and higher alignment scores. The system self-improves through
              this economic gravity.
            </p>
          </div>
        </div>
      </ScrollNarrative>

      <ScrollNarrative>
        <div className="relative py-6 my-4 overflow-hidden">
          <DataStream direction="right" speed={15} className="absolute inset-0 opacity-15" />
          <p className="relative z-10 text-xl font-heading text-gold italic text-center px-4 max-w-xl mx-auto">
            Brands never see your data. They see what your data means — for them.
          </p>
        </div>
      </ScrollNarrative>

      <SectionDivider />

      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
        <Link href="/human-intelligence">
          <button className="btn-outline px-5 py-2.5 text-sm flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Human Intelligence
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
