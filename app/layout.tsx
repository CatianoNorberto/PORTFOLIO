import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteMetadata } from "@/lib/metadata";
import "./globals.css";

const themeScript = `
  (() => {
    try {
      const storedTheme = localStorage.getItem("portfolio-theme");
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const resolvedTheme = storedTheme ?? (systemDark ? "dark" : "light");

      document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
      document.documentElement.style.colorScheme = resolvedTheme;
    } catch (error) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    }
  })();
`;

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#07111f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className="dark h-full antialiased"
    >
      <body className="min-h-full">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <div
            aria-hidden
            className="pointer-events-none fixed inset-x-0 top-[-12rem] z-0 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(86,216,255,0.18),transparent_48%),radial-gradient(circle_at_right,rgba(255,140,66,0.12),transparent_28%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none fixed inset-x-0 bottom-[-10rem] z-0 h-[24rem] bg-[radial-gradient(circle_at_bottom_left,rgba(255,140,66,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(86,216,255,0.08),transparent_30%)]"
          />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
