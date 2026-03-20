"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  ChapterHeader,
  RevealSection,
  RevealItem,
  InsightCallout,
  SectionDivider,
  ProcessFlow,
} from "@/components/Animated";

export default function WorkRevolution() {
  return (
    <article className="prose-wp">
      <ChapterHeader
        chapter="Chapter 03"
        title="The Work Revolution"
        subtitle="From Productivity to Experience: How AI Redefines the Economic Value of Human Labor"
        readTime="6 min read"
      />

      <RevealSection>
        <RevealItem>
          <InsightCallout source="McKinsey Global Institute, &ldquo;The Economic Potential of Generative AI,&rdquo; 2023">
            Generative AI could automate 60–70% of employee activities, but the remaining tasks — those requiring judgment, creativity, and interpersonal skill — will become disproportionately valuable.
          </InsightCallout>
        </RevealItem>

        <RevealItem>
          <p>
            For two centuries, economic systems have defined human value through{" "}
            <strong className="text-cream">productivity</strong> — the ability to produce more
            outputs per unit of time. This metric made sense in industrial and early knowledge
            economies, where human labor was the primary bottleneck.
          </p>
        </RevealItem>

        <RevealItem>
          <p>
            Generative AI has broken this model. When a single AI system can perform the
            productive output of hundreds of knowledge workers, productivity ceases to be a
            meaningful differentiator. The economy now asks a fundamentally different question:
          </p>
        </RevealItem>

        <RevealItem>
          <p className="text-xl font-heading text-gold italic text-center my-8">
            &ldquo;What can you experience that machines cannot?&rdquo;
          </p>
        </RevealItem>
      </RevealSection>

      <SectionDivider label="TWO AXES OF COLLABORATION" />

      <RevealSection>
        <RevealItem>
          <h2 id="axes">Two Axes of Human-AI Collaboration</h2>
        </RevealItem>
        <RevealItem>
          <p>
            twin3 maps the human-AI relationship along two axes. The vertical axis represents{" "}
            <strong className="text-cream">task complexity</strong> — from routine procedural
            work to complex creative judgment. The horizontal axis represents{" "}
            <strong className="text-cream">AI autonomy</strong> — from tool-assisted to fully
            autonomous agent operations.
          </p>
        </RevealItem>

        <RevealItem>
          <div className="glass-panel rounded-lg p-6 my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Quadrant I */}
              <div className="space-y-2 border-b md:border-b-0 md:border-r pb-4 md:pb-0 md:pr-4" style={{ borderColor: "rgba(168,184,122,0.12)" }}>
                <span className="mono-label text-[0.5rem] text-sage">Quadrant I</span>
                <h4 className="font-heading text-cream text-sm !mt-0 !mb-1">Full AI Automation</h4>
                <p className="text-[0.75rem] text-cream-soft/60 !mb-0">
                  Routine tasks with clear parameters. AI operates independently. Examples: data
                  entry, scheduling, basic content generation, code completion.
                </p>
              </div>

              {/* Quadrant II */}
              <div className="space-y-2 pb-4 md:pb-0">
                <span className="mono-label text-[0.5rem] text-sage">Quadrant II</span>
                <h4 className="font-heading text-cream text-sm !mt-0 !mb-1">AI-Augmented Expertise</h4>
                <p className="text-[0.75rem] text-cream-soft/60 !mb-0">
                  Complex tasks where AI amplifies human judgment. Examples: medical diagnosis,
                  legal strategy, creative direction, product design.
                </p>
              </div>

              {/* Quadrant III */}
              <div className="space-y-2 border-t md:border-t-0 pt-4 md:pt-0 md:border-r md:pr-4" style={{ borderColor: "rgba(168,184,122,0.12)" }}>
                <span className="mono-label text-[0.5rem] text-gold">Quadrant III</span>
                <h4 className="font-heading text-cream text-sm !mt-0 !mb-1">Human-as-a-Service (HaaS)</h4>
                <p className="text-[0.75rem] text-cream-soft/60 !mb-0">
                  <strong className="text-gold">The twin3 domain.</strong> Tasks where authentic
                  human experience is the core value — taste calibration, cultural validation,
                  emotional intelligence, identity verification. AI cannot replicate these; it
                  can only consume them.
                </p>
              </div>

              {/* Quadrant IV */}
              <div className="space-y-2 border-t md:border-t-0 pt-4 md:pt-0" style={{ borderColor: "rgba(168,184,122,0.12)" }}>
                <span className="mono-label text-[0.5rem] text-sage">Quadrant IV</span>
                <h4 className="font-heading text-cream text-sm !mt-0 !mb-1">Autonomous Agent Economy</h4>
                <p className="text-[0.75rem] text-cream-soft/60 !mb-0">
                  AI agents act autonomously on complex tasks — but require human identity
                  anchoring to maintain trust and alignment. Personal Agents need verified
                  human values to operate.
                </p>
              </div>
            </div>
          </div>
        </RevealItem>
      </RevealSection>

      <SectionDivider label="THREE CORE SCENARIOS" />

      <RevealSection>
        <RevealItem>
          <h2 id="scenarios">Three Core Scenarios</h2>
        </RevealItem>
        <RevealItem>
          <p>
            The HaaS marketplace creates value in three distinct modes of human-AI interaction, each
            representing a category of tasks that AI systems fundamentally cannot perform alone:
          </p>
        </RevealItem>
        <RevealItem>
          <ProcessFlow
            steps={[
              {
                label: "Validate",
                description:
                  "AI generates → humans verify quality, accuracy, cultural fit. Enterprises pay for verified human judgment as a quality assurance layer.",
              },
              {
                label: "Train",
                description:
                  "Humans provide labeled preference data, edge-case annotations, and style calibration that AI models require for fine-tuning and alignment.",
              },
              {
                label: "Personalize",
                description:
                  "Individuals contribute experiential data — taste profiles, cultural knowledge, professional expertise — that AI uses to deliver hyper-personalized outputs.",
              },
            ]}
          />
        </RevealItem>

        <RevealItem>
          <InsightCallout source="Daron Acemoglu & Simon Johnson, &ldquo;Power and Progress,&rdquo; MIT Press 2023">
            Technology is neither inherently good nor bad. It becomes productive only when designed
            to complement human capabilities rather than simply replace them.
          </InsightCallout>
        </RevealItem>
      </RevealSection>

      <SectionDivider />

      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
        <Link href="/paradigm-shift">
          <button className="btn-outline px-5 py-2.5 text-sm flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> The Paradigm Shift
          </button>
        </Link>
        <Link href="/human-intelligence">
          <button className="btn-gold px-5 py-2.5 text-sm flex items-center gap-2">
            Next: Engineering Human Intelligence <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </article>
  );
}
