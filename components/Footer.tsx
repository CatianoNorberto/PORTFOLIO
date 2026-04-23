import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-line/70 bg-background/70 py-10">
      <Container className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl space-y-3">
          <p className="font-display text-xl font-semibold text-foreground">
            {siteConfig.name}
          </p>
          <p className="text-sm leading-7 text-muted-foreground">
            {siteConfig.availability}
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {new Date().getFullYear()} • Portfólio pronto para deploy na Vercel
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {siteConfig.socialLinks.map((link) => (
            <Button key={link.href} href={link.href} size="sm" variant="secondary">
              {link.label}
            </Button>
          ))}
        </div>
      </Container>
    </footer>
  );
}
