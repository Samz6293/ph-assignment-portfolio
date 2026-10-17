import type { Metadata } from "next";
import { Biryani, Geist_Mono, Libre_Baskerville } from "next/font/google";
import { siteData } from "@/content/site";
import "./globals.css";

/* Font roles (see AGENTS.md → Design system):
   display = Libre Baskerville · sans/body = Biryani · mono/labels = Geist Mono */
const display = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Biryani({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteData.title,
  description: siteData.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
