import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    company: "PulsePay",
    role: "Senior Full Stack Developer",
    period: "2023 - Atual",
    description:
      "Liderança técnica de iniciativas voltadas a checkout, reconciliação financeira e performance de aplicações críticas.",
    outcomes: [
      "Escalei um fluxo de pagamentos com tolerância a falhas e monitoramento de ponta a ponta.",
      "Reduzi o tempo de carregamento da experiência web principal em 38% com otimizações orientadas por métricas.",
    ],
    stack: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Docker"],
  },
  {
    company: "Atlas SaaS",
    role: "Full Stack Developer",
    period: "2021 - 2023",
    description:
      "Desenvolvimento de produtos B2B com foco em dashboards, automações internas e integrações entre times de negócio.",
    outcomes: [
      "Implantei um painel operacional em tempo real que passou a orientar decisões diárias do time de suporte.",
      "Estruturei pipelines CI/CD para reduzir o tempo de release e elevar a confiabilidade das entregas.",
    ],
    stack: ["React", "Node.js", "Redis", "Azure", "Tailwind CSS"],
  },
  {
    company: "North Studio",
    role: "Front-end Developer",
    period: "2019 - 2021",
    description:
      "Construção de interfaces para produtos digitais e manutenção de design systems escaláveis em múltiplos clientes.",
    outcomes: [
      "Criei componentes reutilizáveis que aceleraram novas entregas e padronizaram UX entre squads.",
      "Conduzi migrações de interfaces legadas para uma base moderna com Angular e React.",
    ],
    stack: ["Angular", "React", "TypeScript", "Sass", "Figma"],
  },
];
