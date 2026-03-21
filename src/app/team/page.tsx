"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft, Linkedin, ExternalLink, GraduationCap } from "lucide-react";
import {
  ChapterHeader,
  RevealSection,
  RevealItem,
  SectionDivider,
} from "@/components/Animated";

/* ── Team member data ── */
type TeamMember = {
  name: string;
  role: string;
  accent: "gold" | "sage" | "cream";
  paragraph: string;
  bullets: string[];
  links?: { type: "linkedin" | "scholar" | "external"; url: string; label?: string }[];
};

const TEAM: TeamMember[] = [
  {
    name: "Ming Wen",
    role: "Founder",
    accent: "gold",
    paragraph:
      "Ming leads twin3\u2019s vision at the intersection of HCI, AI, and Web3 \u2014 building structured digital identities that enable humans to become computable participants in agent-driven systems.",
    bullets: [
      "HCI/AI researcher rooted at PARC, 20+ years in human-centered design",
      "Professor with extensive academic contributions to human-computer interaction",
      "20+ patents in human-computer interaction",
      "Architect of Twin Matrix 256D SBT protocol \u2014 defining multi-dimensional human identity on-chain",
    ],
    links: [
      { type: "linkedin", url: "https://www.linkedin.com/in/cis2042/" },
      { type: "scholar", url: "https://scholar.google.com/citations?user=ILHilG8AAAAJ&hl=zh-TW", label: "Google Scholar" },
    ],
  },
  {
    name: "Lawrence Chen",
    role: "CIO",
    accent: "sage",
    paragraph:
      "Lawrence brings 15 years of enterprise data science expertise from Experian, applying AI-driven analytics to power twin3\u2019s data commercialization strategy.",
    bullets: [
      "15 years as Senior Data Scientist at Experian",
      "AI-driven analytics across finance and enterprise verticals",
      "Leads twin3\u2019s data commercialization strategy and enterprise partnerships",
    ],
    links: [
      { type: "linkedin", url: "https://www.linkedin.com/in/lawrence009/" },
    ],
  },
  {
    name: "Raymond Henry",
    role: "CMO",
    accent: "cream",
    paragraph:
      "Raymond combines a Harvard marketing foundation with deep Web3 growth experience, leading twin3\u2019s global fundraising and ecosystem expansion.",
    bullets: [
      "Harvard-trained marketer with cross-industry brand expertise",
      "6+ years Web3 growth leadership at Block AI, Munia Protocol, and Momentum Labs",
      "Leads global fundraising, community growth, and ecosystem expansion",
    ],
    links: [],
  },
  {
    name: "Tinny",
    role: "COO",
    accent: "sage",
    paragraph:
      "Tinny bridges Web3 fund management and e-commerce growth, overseeing twin3\u2019s daily operations and cross-department coordination.",
    bullets: [
      "Dual experience: Web3 family office fund management & e-commerce growth",
      "Oversees daily operations, cross-department coordination, and operational excellence",
    ],
    links: [
      { type: "linkedin", url: "https://www.linkedin.com/in/tingyulau/" },
    ],
  },
  {
    name: "Kevin",
    role: "Chief Software Architect",
    accent: "gold",
    paragraph:
      "Kevin is a Binance Labs metaverse alumni who brings large-scale systems architecture expertise to twin3\u2019s backend infrastructure.",
    bullets: [
      "Binance Labs metaverse alumni; large-scale systems architecture",
      "Leads twin3 backend infrastructure, scalability & security",
    ],
    links: [
      { type: "linkedin", url: "https://www.linkedin.com/in/kai-min-chang-a36944128/" },
    ],
  },
  {
    name: "ChiaYu Hsu",
    role: "Attention Catalyst",
    accent: "cream",
    paragraph:
      "ChiaYu combines top-tier strategy consulting experience from Ogilvy and McKinsey with a focus on AI-driven digital transformation for Fortune 500 companies.",
    bullets: [
      "Former strategy consultant at Ogilvy & McKinsey",
      "AI-driven digital transformation for Fortune 500 enterprises",
      "Product strategy, UX optimization & market-need alignment",
    ],
    links: [
      { type: "linkedin", url: "https://www.linkedin.com/in/chiayuhsu/" },
    ],
  },
  {
    name: "Jerry Chun-Wei Lin",
    role: "AI Advisor",
    accent: "gold",
    paragraph:
      "Jerry is an ACM Distinguished Scientist and IEEE Senior Member who advises twin3 on data optimization, user-preference modeling, and AI alignment.",
    bullets: [
      "ACM Distinguished Scientist \u00b7 IEEE Senior Member",
      "100+ peer-reviewed AI publications \u00b7 30+ AI patents",
      "Advises on data optimization, user-preference modeling & AI alignment",
    ],
    links: [
      { type: "scholar", url: "https://scholar.google.com/citations?user=Gd0ImD8AAAAJ&hl=uk", label: "Google Scholar" },
    ],
  },
  {
    name: "Leon Wang",
    role: "Senior Blockchain Engineer",
    accent: "sage",
    paragraph:
      "Leon is an EVM smart contracts and DeFi infrastructure specialist who leads twin3\u2019s blockchain and protocol engineering.",
    bullets: [
      "EVM smart contracts & DeFi infrastructure specialist",
      "1st place winner, Turnkey Hackathon at Mod Hackathon; open-source contributor to Flyte",
      "Leads blockchain & protocol engineering \u2014 ERC-4671, ERC-8004, versioned state governance",
    ],
    links: [
      { type: "linkedin", url: "https://www.linkedin.com/in/lichengwang/" },
    ],
  },
];

/* ── Link icon renderer ── */
function LinkIcon({ link }: { link: NonNullable<TeamMember["links"]>[number] }) {
  const iconClass = "w-[14px] h-[14px]";
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-gold/70 hover:text-gold transition-colors"
      style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}
    >
      {link.type === "linkedin" && <Linkedin className={iconClass} />}
      {link.type === "scholar" && <GraduationCap className={iconClass} />}
      {link.type === "external" && <ExternalLink className={iconClass} />}
      {link.label || (link.type === "linkedin" ? "LinkedIn" : "Link")}
    </a>
  );
}

/* ── Accent color map ── */
const ACCENT_BORDER: Record<string, string> = {
  gold: "border-gold/40",
  sage: "border-sage/40",
  cream: "border-cream/20",
};

export default function CoreTeam() {
  return (
    <article className="prose-wp">
      <ChapterHeader
        chapter="Chapter 13"
        title="Core Team"
        subtitle="A Cross-Domain Leadership Team at the Intersection of HCI, AI, and Web3"
        readTime="4 min read"
      />

      <RevealSection>
        <RevealItem>
          <p>
            twin3&apos;s leadership combines deep expertise across Human-Computer Interaction (HCI),
            large-scale data science, frontier AI research, and Web3 ecosystem growth &mdash; a rare
            cross-domain team uniquely positioned to build at the intersection of identity, AI, and
            blockchain.
          </p>
        </RevealItem>

        {TEAM.map((member, i) => (
          <RevealItem key={i}>
            <div className={`glass-panel rounded-lg p-6 my-4 border-l-2 ${ACCENT_BORDER[member.accent]}`}>
              {/* Name + Role header */}
              <div className="flex items-center gap-3 mb-3">
                <span className="font-heading text-cream text-lg">{member.name}</span>
                <span className="mono-label text-[0.5rem] text-cream-soft/40">&middot;</span>
                <span className="mono-label text-[0.55rem] text-gold/70">{member.role}</span>
              </div>

              {/* Paragraph description */}
              <p className="text-[0.85rem] text-cream-soft/70 !mb-3">
                {member.paragraph}
              </p>

              {/* Bullet points */}
              <ul className="!mt-0 !mb-3 space-y-1">
                {member.bullets.map((b, j) => (
                  <li key={j} className="text-[0.78rem] text-cream-soft/60">
                    {b}
                  </li>
                ))}
              </ul>

              {/* Link icons */}
              {member.links && member.links.length > 0 && (
                <div className="flex items-center gap-4 pt-2 border-t border-sage/10">
                  {member.links.map((link, k) => (
                    <LinkIcon key={k} link={link} />
                  ))}
                </div>
              )}
            </div>
          </RevealItem>
        ))}
      </RevealSection>

      <SectionDivider />

      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
        <Link href="/roadmap"><button className="btn-outline px-5 py-2.5 text-sm flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Roadmap</button></Link>
        <Link href="/competitive"><button className="btn-gold px-5 py-2.5 text-sm flex items-center gap-2">Next: Competitive Advantages <ArrowRight className="w-4 h-4" /></button></Link>
      </div>
    </article>
  );
}
