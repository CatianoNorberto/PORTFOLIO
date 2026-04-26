export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type EmailComposeParams = {
  to: string;
  subject?: string;
  body?: string;
};

export function buildEmailComposeUrl({
  to,
  subject,
  body,
}: EmailComposeParams) {
  const searchParams = new URLSearchParams({
    view: "cm",
    fs: "1",
    to,
  });

  if (subject) {
    searchParams.set("su", subject);
  }

  if (body) {
    searchParams.set("body", body);
  }

  return `https://mail.google.com/mail/?${searchParams.toString()}`;
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
