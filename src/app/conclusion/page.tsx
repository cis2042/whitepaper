"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  ChapterHeader,
  RevealSection,
  RevealItem,
  InsightCallout,
  SectionDivider,
} from "@/components/Animated";

export default function Conclusion() {
  return (
    <article className="prose-wp">
      <ChapterHeader
        chapter="Chapter 14"
        title="Conclusion & References"
        subtitle="The Infrastructure for Human Value in the Agentic Economy"
        readTime="3 min read"
      />

      <RevealSection>
        <RevealItem>
          <p className="text-xl font-heading text-cream leading-relaxed">
            twin3 is building the human layer of AI.
          </p>
        </RevealItem>

        <RevealItem>
          <p>
            In a world where machines can produce anything, the last source of economic value is
            authentic human experience — taste, judgment, values, lived knowledge. twin3 makes
            these qualities computable, verifiable, and tradable through the Twin Matrix protocol.
          </p>
        </RevealItem>

        <RevealItem>
          <p>
            Through <strong className="text-cream">Soul Injection</strong>, we give every human a
            Personal Agent — a verified digital body that operates 24/7 in the Agentic Economy.
            Through the <strong className="text-cream">HaaS marketplace</strong>, we create a fair
            economic system where humans earn from being authentically themselves. Through the{" "}
            <strong className="text-cream">$twin3 token</strong>, we align every participant in
            the ecosystem toward shared growth.
          </p>
        </RevealItem>
      </RevealSection>

      <SectionDivider label="THREE PRINCIPLES" />

      <RevealSection>
        <RevealItem>
          <div className="space-y-4 my-8">
            <div className="glass-panel rounded-lg p-5 border-l-2 border-gold/40">
              <h4 className="font-heading text-gold text-base !mt-0 !mb-1">The Computable Human</h4>
              <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
                Human experience can and should be represented in formats that AI can understand —
                without compromising privacy or dignity.
              </p>
            </div>
            <div className="glass-panel rounded-lg p-5 border-l-2 border-sage/40">
              <h4 className="font-heading text-sage text-base !mt-0 !mb-1">Data Is Labor</h4>
              <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
                Your data, your experience, your judgment are economic contributions. You deserve
                fair compensation.
              </p>
            </div>
            <div className="glass-panel rounded-lg p-5 border-l-2 border-cream/30">
              <h4 className="font-heading text-cream text-base !mt-0 !mb-1">Privacy Is a Right</h4>
              <p className="text-[0.78rem] text-cream-soft/60 !mb-0">
                Your identity belongs to you. Period. No platform, no government, no AI system
                should access it without your explicit, revocable consent.
              </p>
            </div>
          </div>
        </RevealItem>
      </RevealSection>

      <RevealSection>
        <RevealItem>
          <InsightCallout source="twin3 Manifesto">
            We are building more than a product. We are building a new category: the exchange for
            authentic human experience in the Agentic Economy. Your soul deserves to live forever.
          </InsightCallout>
        </RevealItem>
      </RevealSection>

      <SectionDivider label="REFERENCES" />

      <RevealSection>
        <RevealItem>
          <h2>Academic & Technical References</h2>
        </RevealItem>
        <RevealItem>
          <ol className="text-[0.78rem] space-y-3">
            <li>
              Wen, M. H., & Lin, J. C. W. (2024). &ldquo;twin3: pluralistic personal digital twins
              via blockchain.&rdquo; <em>IEEE Access</em>.{" "}
              <a href="https://ieeexplore.ieee.org/document/10734204" target="_blank" rel="noopener noreferrer">
                DOI Link
              </a>
            </li>
            <li>
              Buterin, V. (2022). &ldquo;Soulbound.&rdquo;{" "}
              <a href="https://vitalik.eth.limo/general/2022/01/26/soulbound.html" target="_blank" rel="noopener noreferrer">
                vitalik.eth.limo
              </a>
            </li>
            <li>
              Weyl, E. G., Ohlhaver, P., & Buterin, V. (2022). &ldquo;Decentralized Society:
              Finding Web3&apos;s Soul.&rdquo; <em>SSRN</em>.
            </li>
            <li>
              Manyika, J., & Chui, M. (2023). &ldquo;The economic potential of generative AI: The
              next productivity frontier.&rdquo; <em>McKinsey & Company</em>.
            </li>
            <li>ERC-5192: Minimal Soulbound NFTs. <em>Ethereum Improvement Proposals</em>.</li>
            <li>ERC-8004: Identity Binding Standard. <em>Ethereum Improvement Proposals</em>.</li>
            <li>
              Acemoglu, D. & Johnson, S. (2023). <em>Power and Progress: Our Thousand-Year Struggle
              Over Technology and Prosperity.</em> MIT Press.
            </li>
            <li>
              Dixon, C. (2024). <em>Read Write Own: Building the Next Era of the Internet.</em>{" "}
              Random House.
            </li>
            <li>
              Gartner (2025). &ldquo;Top 10 Strategic Technology Trends 2025: Agentic AI.&rdquo;{" "}
              <em>Gartner Research</em>.
            </li>
            <li>
              McKinsey Global Institute (2026). &ldquo;Agentic AI: The Next Frontier of Enterprise
              Autonomy.&rdquo; <em>McKinsey & Company</em>.
            </li>
            <li>
              World Economic Forum (2026). &ldquo;Web 4.0 and the Virtual Worlds Initiative: A
              Framework for the Intelligent Internet.&rdquo; <em>WEF White Paper</em>.
            </li>
            <li>
              Nvidia (2026). &ldquo;NemoClaw: Enterprise Agent Framework for Secure Autonomous
              Systems.&rdquo; <em>Nvidia Technical Report</em>.
            </li>
            <li>
              Google DeepMind (2026). &ldquo;Agentic Benchmarks: Measuring Autonomous Capability
              in Real-World Tasks.&rdquo; <em>arXiv preprint</em>.
            </li>
            <li>
              European Commission (2026). &ldquo;Web 4.0 Strategy: An Interoperable, Intelligent,
              and Inclusive Digital Single Market.&rdquo; <em>EU Digital Strategy</em>.
            </li>
          </ol>
        </RevealItem>
      </RevealSection>

      <SectionDivider />
      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
        <Link href="/competitive"><button className="btn-outline px-5 py-2.5 text-sm flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Competitive Advantages</button></Link>
        <Link href="/links"><button className="btn-gold px-5 py-2.5 text-sm flex items-center gap-2">Next: Ecosystem Links <ArrowRight className="w-4 h-4" /></button></Link>
      </div>
    </article>
  );
}
