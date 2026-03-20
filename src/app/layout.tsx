import type { Metadata } from "next";
import { Inter, EB_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { TopHeader, Sidebar } from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";

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
      <body className="min-h-full flex flex-col relative">
        <ThemeProvider>
          <div className="hex-matrix-bg" />
          <TopHeader />
          <div className="flex flex-1 pt-14">
            <Sidebar />
            <main className="flex-1 lg:ml-[260px] min-h-screen">
              <div className="max-w-[48rem] mx-auto px-6 sm:px-10 pt-8 lg:pt-10 pb-16">
                {children}
              </div>
              <footer className="border-t py-6 text-center" style={{ borderColor: "rgba(168,184,122,0.12)" }}>
                <p className="mono-label text-cream-soft/40">&copy; 2026 twin3 AI Limited</p>
              </footer>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
