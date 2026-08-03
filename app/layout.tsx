import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PitchIQ — AI Football Predictions",
  description: "AI-powered match predictions for Premier League & La Liga 2026-27. xG model, scoreline probabilities, best bets.",
  metadataBase: new URL("https://pitchiq-app-pi.vercel.app"),
  openGraph: {
    title: "PitchIQ — AI Football Predictions",
    description: "AI-powered match predictions for Premier League & La Liga 2026-27. xG model, scoreline probabilities, best bets.",
    url: "https://pitchiq-app-pi.vercel.app",
    siteName: "PitchIQ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PitchIQ — AI Football Predictions" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PitchIQ — AI Football Predictions",
    description: "AI-powered match predictions for Premier League & La Liga 2026-27. xG model, scoreline probabilities, best bets.",
    images: ["https://pitchiq-app-pi.vercel.app/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
