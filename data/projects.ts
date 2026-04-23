import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "keeper-app-banking",
    name: "KeeperApp Banking",
    category: "Fintech / Banking App",
    description:
      "Aplicação web e mobile desenvolvida do zero para operações bancárias, com pagamentos via PIX, transferências, gestão de faturas e camadas de segurança.",
    impact:
      "A migração do fluxo de pagamento de síncrono para assíncrono reduziu o processamento de cerca de 10-12 segundos para 2-4 segundos, com ganho de resiliência e redução de custo de CPU.",
    technologies: [
      "React Native",
      "React",
      "Angular",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "TSOA",
      "AWS",
    ],
    visibilityNote: "Projeto proprietário sem links públicos.",
    featured: true,
  },
  {
    slug: "plataforma-reserva-mesas",
    name: "Plataforma de Reserva de Mesas",
    category: "Eventos / Experiência Interativa",
    description:
      "Plataforma web para reserva de mesas em eventos com mapa interativo em canvas, autenticação, perfis de acesso e integração com APIs.",
    impact:
      "Entregou uma experiência visual de reserva com operação por perfis distintos de admin, usuário e hostess em uma interface responsiva.",
    technologies: ["React", "TypeScript", "Canvas", "Autenticação", "APIs"],
    visibilityNote: "Projeto proprietário sem links públicos.",
    featured: true,
  },
  {
    slug: "produtos-web-mobile-firgun",
    name: "Produtos Web e Mobile na Firgun",
    category: "Produtos Digitais",
    description:
      "Desenvolvimento full stack de aplicações web e mobile com React, React Native e APIs REST em Node.js e Express, cobrindo regras de negócio, autenticação e integrações.",
    impact:
      "Atuação contínua em evolução de produto, correções, refinamentos técnicos e integrações com banco de dados em times ágeis.",
    technologies: ["React", "React Native", "Node.js", "Express", "REST APIs"],
    visibilityNote: "Projetos corporativos desenvolvidos em contexto privado.",
    featured: true,
  },
  {
    slug: "interfaces-web-grupo-meza",
    name: "Interfaces Web no Grupo Meza",
    category: "Frontend / UX",
    description:
      "Criação de interfaces web responsivas e componentes reutilizáveis com React, a partir de layouts no Figma e integração com APIs.",
    impact:
      "Melhorou a consistência visual e a experiência do usuário enquanto evoluía funcionalidades existentes com foco em UX e performance.",
    technologies: ["React", "TypeScript", "Figma", "APIs", "CSS3"],
    visibilityNote: "Projeto profissional sem demonstração pública.",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
