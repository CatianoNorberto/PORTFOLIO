"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { siteConfig } from "@/lib/site";
import { Link, usePathname } from "@/i18n/navigation";
import { cn, isCurrentPath } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const tNav = useTranslations("Navigation");
  const tCommon = useTranslations("Common");
  const tSite = useTranslations("Site");

  const navigationItems = [
    { href: "/", label: tNav("home") },
    { href: "/about", label: tNav("about") },
    { href: "/projects", label: tNav("projects") },
    { href: "/experience", label: tNav("experience") },
    { href: "/contact", label: tNav("contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-background/80 backdrop-blur-xl">
      <Container className="flex h-20 max-w-[90rem] items-center justify-between gap-4 xl:gap-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan/25 bg-cyan-soft text-sm font-bold text-cyan transition-transform duration-300 group-hover:-translate-y-0.5">
            {siteConfig.initials}
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-sm font-semibold tracking-[0.18em] text-foreground uppercase">
              {siteConfig.displayName}
            </p>
            <p className="text-xs text-muted-foreground">{tSite("role")}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 xl:gap-2 lg:flex">
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
          <LocaleSwitcher />
          <ThemeToggle />
          <Button href="/contact" size="sm">
            {tCommon("talkToMe")}
          </Button>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-surface-strong text-sm font-semibold text-foreground transition-colors duration-300 hover:border-cyan/30 lg:hidden"
        >
          {isOpen ? tCommon("close") : tCommon("menu")}
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-line/70 bg-background/95 transition-[max-height] duration-300 lg:hidden",
          isOpen ? "max-h-[34rem]" : "max-h-0"
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
            <LocaleSwitcher />
            <ThemeToggle />
            <Button href="/contact" onClick={() => setIsOpen(false)}>
              {tCommon("contactMe")}
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
