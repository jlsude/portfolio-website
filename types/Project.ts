export interface Project {
  thumbnail: string;
  projectName: string;
  description: string;
  platform: string[];
  github: string;
  demoLink: string;
  isPrivate: boolean;
  online: boolean;
  status:
    | "Completed"
    | "Available"
    | "Under development"
    | "Offline"
    | "Completed, offline";
  techStack: string[];
}
