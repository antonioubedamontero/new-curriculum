export interface WorkExperiencesResponse {
  workExperiences: WorkExperienceItemResponse[];
}

export interface WorkExperienceItemResponse {
  company: string;
	rangeDates: string;
	projects: ProjectItemResponse[];
}

export interface ProjectItemResponse {
  company?: string;
	rangeDates?: string;
	description: string;
}
