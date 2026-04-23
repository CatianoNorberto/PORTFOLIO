import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "payments-orchestrator",
    name: "Payments Orchestrator",
    category: "Fintech Platform",
    description:
      "Plataforma full stack para checkout multiadquirente com split de pagamentos, antifraude e observabilidade operacional.",
    impact: "Redução de 32% nas falhas de pagamento e ganho de visibilidade em tempo real do funil.",
    technologies: ["Next.js", "Node.js", "Stripe", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/catianonorberto/payments-orchestrator",
    demoUrl: "https://payments-orchestrator.vercel.app",
    featured: true,
  },
  {
    slug: "ops-analytics-dashboard",
    name: "Ops Analytics Dashboard",
    category: "SaaS Analytics",
    description:
      "Dashboard de operações para times logísticos com streaming de eventos, alertas inteligentes e KPIs por squad.",
    impact: "Tempo de resposta 45% menor em incidentes operacionais e decisões mais rápidas por turno.",
    technologies: ["React", "Node.js", "WebSocket", "Redis", "Charting"],
    githubUrl: "https://github.com/catianonorberto/ops-analytics-dashboard",
    demoUrl: "https://ops-analytics-dashboard.vercel.app",
    featured: true,
  },
  {
    slug: "mobile-field-suite",
    name: "Mobile Field Suite",
    category: "Mobile Productivity",
    description:
      "Aplicativo React Native para equipes de campo com sincronização offline, assinatura digital e roteiros dinâmicos.",
    impact: "Economia média de 8 horas por semana para operações em campo com sincronização resiliente.",
    technologies: ["React Native", "Expo", "Node.js", "GraphQL", "SQLite"],
    githubUrl: "https://github.com/catianonorberto/mobile-field-suite",
    demoUrl: "https://mobile-field-suite.vercel.app",
    featured: true,
  },
  {
    slug: "enterprise-migration-hub",
    name: "Enterprise Migration Hub",
    category: "Enterprise Modernization",
    description:
      "Hub de migração para modernização de legado com filas assíncronas, rollback seguro e trilhas de auditoria.",
    impact: "Migração de 120 mil registros com zero downtime percebido e rastreabilidade ponta a ponta.",
    technologies: ["Angular", "Node.js", "RabbitMQ", "Azure", "SQL Server"],
    githubUrl: "https://github.com/catianonorberto/enterprise-migration-hub",
    demoUrl: "https://enterprise-migration-hub.vercel.app",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
