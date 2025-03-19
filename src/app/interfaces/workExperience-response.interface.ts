export interface WorkExperiencesResponse {
  workExperiences: WorkExperienceItemResponse[];
}

export interface WorkExperienceItemResponse {
  company: string;
	rangeDates: string;
	hasManyProjects: boolean;
	projects: ProjectItemResponse[];
}

export interface ProjectItemResponse {
  company?: string;
	rangeDates?: string;
	description: string;
}
