import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "keeperAppBanking",
    slug: "keeper-app-banking",
    mockupSrc: "/project-mockups/keeper-banking.svg",
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
    featured: true,
  },
  {
    id: "tableReservationPlatform",
    slug: "plataforma-reserva-mesas",
    mockupSrc: "/project-mockups/table-reservation.svg",
    technologies: ["React", "TypeScript", "Canvas", "Authentication", "APIs"],
    featured: true,
  },
  {
    id: "firgunProducts",
    slug: "produtos-web-mobile-firgun",
    mockupSrc: "/project-mockups/firgun-products.svg",
    technologies: ["React", "React Native", "Node.js", "Express", "REST APIs"],
    featured: true,
  },
  {
    id: "mezaInterfaces",
    slug: "interfaces-web-grupo-meza",
    mockupSrc: "/project-mockups/meza-interfaces.svg",
    technologies: ["React", "TypeScript", "Figma", "APIs", "CSS3"],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
