import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashmit Kar — Full Stack Engineer",
  description: "Portfolio of Ashmit Kar — Full Stack Developer & Platform Engineer.",
  icons: {
    icon: "/avatar.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Syne:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen bg-[#070709] text-gray-200 selection:bg-[#c87a3e] selection:text-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
