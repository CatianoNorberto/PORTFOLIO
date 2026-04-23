export type ProjectId =
  | "keeperAppBanking"
  | "tableReservationPlatform"
  | "firgunProducts"
  | "mezaInterfaces";

export type Project = {
  id: ProjectId;
  slug: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
};
