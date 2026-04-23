import type { SkillGroup } from "@/types/skill";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces robustas, acessíveis e performáticas para produtos web.",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Angular"],
  },
  {
    title: "Backend",
    description: "Arquitetura escalável, APIs seguras e integrações críticas para negócio.",
    items: ["Node.js", "NestJS", "Express", "PostgreSQL", "Redis"],
  },
  {
    title: "Mobile & Cloud",
    description: "Experiências mobile e pipelines de entrega com foco em confiabilidade.",
    items: ["React Native", "Expo", "Docker", "Vercel", "Azure"],
  },
  {
    title: "Impacto em produto",
    description: "Tecnologia aplicada a pagamentos, performance, analytics e operações.",
    items: ["Pagamentos", "Observabilidade", "CI/CD", "WebSockets", "GraphQL"],
  },
];
