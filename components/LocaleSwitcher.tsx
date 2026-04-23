"use client";

import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Common");

  return (
    <div
      aria-label={t("languageSwitcher")}
      className="inline-flex items-center gap-1 rounded-full border border-line bg-surface-strong p-1"
      role="group"
    >
      {routing.locales.map((nextLocale) => {
        const active = locale === nextLocale;

        return (
          <button
            key={nextLocale}
            type="button"
            onClick={() => router.replace(pathname, { locale: nextLocale })}
            title={t(`localeNames.${nextLocale}`)}
            className={cn(
              "rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-300",
              active
                ? "bg-accent text-background"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {nextLocale}
          </button>
        );
      })}
    </div>
  );
}
