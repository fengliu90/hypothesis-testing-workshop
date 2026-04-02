import type { Metadata } from "next";
import { workshop } from "@/data/workshop";
import "./globals.css";

const { site } = workshop;

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  applicationName: site.title,
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white font-sans text-slate antialiased">{children}</body>
    </html>
  );
}
