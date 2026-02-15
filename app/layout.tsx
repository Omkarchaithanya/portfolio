import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { PersonaProvider } from "@/components/providers/PersonaProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Omkar Chaithanya - AI/ML Engineer & Full-Stack Developer",
  description: "Portfolio of Omkar Chaithanya - AI/ML Engineer, Full-Stack Developer, and Research Scientist. Explore projects, publications, and more.",
  keywords: "AI, Machine Learning, Full-Stack, Developer, Portfolio, Research",
  authors: [{ name: "Omkar Chaithanya" }],
  openGraph: {
    title: "Omkar Chaithanya - AI/ML Engineer & Full-Stack Developer",
    description: "Portfolio showcasing AI/ML projects, full-stack applications, and research work",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider>
          <PersonaProvider>
            {children}
          </PersonaProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

