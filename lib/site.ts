import { buildEmailComposeUrl } from "@/lib/utils";

const publicEmail = "catianonorberto@gmail.com";

export const siteConfig = {
  name: "Catiano Norberto Ermelinda",
  displayName: "Catiano Norberto",
  initials: "CN",
  profileImage: "/catiano-profile.png",
  resumePath: "/catiano-norberto-cv.docx",
  url: "https://portfolio-profissional.vercel.app",
  email: publicEmail,
  emailComposeUrl: buildEmailComposeUrl({ to: publicEmail }),
  phone: "+55 11 91245-7937",
  phoneDigits: "5511912457937",
  whatsappUrl: "https://wa.me/5511912457937",
  focusAreaKeys: [
    "react",
    "reactNative",
    "node",
    "payments",
    "angular",
    "aws",
  ],
  tooling: [
    "Git",
    "GitHub",
    "Bitbucket",
    "Jira",
    "Trello",
    "Figma",
    "Storybook",
    "Jest",
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/CatianoNorberto" },
    { label: "LinkedIn", href: "https://linkedin.com/in/catiano-norberto" },
    { label: "Email", href: buildEmailComposeUrl({ to: publicEmail }) },
    { label: "WhatsApp", href: "https://wa.me/5511912457937" },
  ],
} as const;

export const defaultKeywords = [
  "desenvolvedor full stack",
  "portfólio desenvolvedor full stack",
  "typescript",
  "node.js",
  "react native",
  "angular",
  "pagamentos",
  "react",
  "performance web",
  "produtos financeiros",
];
