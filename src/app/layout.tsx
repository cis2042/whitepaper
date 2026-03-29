import type { Metadata } from "next";
import { Inter, EB_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./home-nav.css";
import { Sidebar } from "@/components/Navigation";

import HexCanvas from "@/components/HexCanvas";
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const ebGaramond = EB_Garamond({ variable: "--font-eb-garamond", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "twin3.ai | Whitepaper",
  description: "A Decentralized Marketplace for Authentic Human Experience in the Agentic Economy.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${ebGaramond.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="dark min-h-full flex flex-col relative overflow-x-hidden">
          <HexCanvas />

          <div className="flex flex-1 pt-[72px]">
            <Sidebar />
            <main className="flex-1 min-w-0 lg:ml-[260px] min-h-screen">
              <div className="max-w-[48rem] mx-auto py-8 lg:pt-10 pb-16" style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem", boxSizing: "border-box", width: "100%", overflowX: "hidden" }}>
                {children}
              </div>
              <footer style={{ borderTop: "1px solid rgba(168,184,122,0.12)", padding: "1.5rem 0", textAlign: "center", fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--text-muted)", letterSpacing: "0.04em" }}>
                © 2026 Twin Matrix · twin3.ai · Building the Identity Rail for the Agent Economy<br />
                Contact us: <a href="mailto:wen@twin3.ai" style={{ color: "inherit", textDecoration: "underline" }}>wen@twin3.ai</a>
              </footer>
            </main>
          </div>

      </body>
    </html>
  );
}
