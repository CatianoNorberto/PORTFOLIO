export type ExperienceId = "delta" | "firgun" | "meza";

export type Experience = {
  id: ExperienceId;
  company: string;
  period: string;
  outcomeKeys: string[];
  stack: string[];
};
