export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function isExternalLink(href: string) {
  return /^(https?:\/\/|mailto:|tel:)/.test(href);
}

export function isCurrentPath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname.startsWith(href);
}
