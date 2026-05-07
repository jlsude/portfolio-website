export interface WorkExperience {
  companyName: string;
  logo: string;
  duration: {
    startDate: string;
    endDate: string;
  };
  employmentType: "full-time" | "part-time" | "contract";
  position: string;
  shortDescription: string;
  longDescription: string;
  techStack: string[];
}
