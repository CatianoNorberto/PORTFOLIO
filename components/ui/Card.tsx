import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export function Card({
  className,
  interactive = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "glass-panel",
        interactive &&
          "transition-transform duration-300 ease-out hover:-translate-y-1 hover:border-accent/30",
        className
      )}
      {...props}
    />
  );
}
