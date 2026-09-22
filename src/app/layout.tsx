import type { Metadata } from "next";
import { Bangers, Space_Mono } from "next/font/google";
import "./globals.css";

const bangers = Bangers({
  weight: "400",
  variable: "--font-bangers",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashmit Kar | Full Stack Developer",
  description: "Portfolio of Ashmit Kar, Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bangers.variable} ${spaceMono.variable} antialiased min-h-screen bg-halftone`}
      >
        <div className="max-w-6xl mx-auto p-4 md:p-8">
          {children}
        </div>
      </body>
    </html>
  );
}
