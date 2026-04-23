import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { Link } from "@/i18n/navigation";
import { cn, isExternalLink } from "@/lib/utils";

const baseStyles =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full border text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60";

const variants = {
  primary:
    "border-accent bg-accent px-5 text-background shadow-[0_12px_30px_rgba(255,140,66,0.24)] hover:-translate-y-0.5 hover:bg-accent/90",
  secondary:
    "border-line bg-surface-strong px-5 text-foreground hover:-translate-y-0.5 hover:border-cyan/30 hover:bg-surface",
  ghost:
    "border-transparent bg-transparent px-4 text-muted-foreground hover:text-foreground",
} as const;

const sizes = {
  sm: "h-10 gap-2",
  md: "h-12 gap-2.5",
  lg: "h-14 gap-3 px-6 text-base",
} as const;

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

type LinkButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  if ("href" in props && typeof props.href === "string") {
    const {
      children,
      href,
      className,
      variant = "primary",
      size = "md",
      ...linkProps
    } = props as LinkButtonProps;
    const resolvedClassName = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );
    const external = isExternalLink(href);

    if (external) {
      const shouldOpenNewTab = href.startsWith("http");

      return (
        <a
          href={href}
          {...linkProps}
          className={resolvedClassName}
          rel={linkProps.rel ?? (shouldOpenNewTab ? "noreferrer noopener" : undefined)}
          target={linkProps.target ?? (shouldOpenNewTab ? "_blank" : undefined)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href as never} {...linkProps} className={resolvedClassName}>
        {children}
      </Link>
    );
  }

  const {
    children,
    className,
    variant = "primary",
    size = "md",
    ...buttonProps
  } = props as NativeButtonProps;
  const resolvedClassName = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  return (
    <button className={resolvedClassName} {...buttonProps}>
      {children}
    </button>
  );
}
