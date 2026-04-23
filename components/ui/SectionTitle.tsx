import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      <span className="inline-flex w-fit items-center rounded-full border border-accent/20 bg-accent-soft px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
  );
}
