import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PitchIQ — WC2026 Predictions",
  description: "WC2026 quarterfinal predictions powered by data, not opinions.",
  openGraph: {
    title: "PitchIQ — WC2026 Predictions",
    description: "WC2026 quarterfinal predictions powered by data, not opinions.",
    images: [{ url: "/og-image.png", width: 1200, height: 1200 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PitchIQ — WC2026 Predictions",
    description: "WC2026 quarterfinal predictions powered by data, not opinions.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
