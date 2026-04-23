"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/lib/site";
import { cn, isCurrentPath } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-background/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan/25 bg-cyan-soft text-sm font-bold text-cyan transition-transform duration-300 group-hover:-translate-y-0.5">
            CN
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-sm font-semibold tracking-[0.18em] text-foreground uppercase">
              {siteConfig.name}
            </p>
            <p className="text-xs text-muted-foreground">{siteConfig.role}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navigationItems.map((item) => {
            const current = isCurrentPath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                  current
                    ? "bg-surface-strong text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button href="/contact" size="sm">
            Vamos conversar
          </Button>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-surface-strong text-sm font-semibold text-foreground transition-colors duration-300 hover:border-cyan/30 lg:hidden"
        >
          {isOpen ? "X" : "Menu"}
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-line/70 bg-background/95 transition-[max-height] duration-300 lg:hidden",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <Container className="flex flex-col gap-3 py-5">
          {navigationItems.map((item) => {
            const current = isCurrentPath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "rounded-2xl border px-4 py-3 text-sm font-medium transition-colors duration-300",
                  current
                    ? "border-cyan/30 bg-cyan-soft text-foreground"
                    : "border-line bg-surface text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="flex flex-col gap-3 pt-2">
            <ThemeToggle />
            <Button href="/contact" onClick={() => setIsOpen(false)}>
              Fale comigo
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
