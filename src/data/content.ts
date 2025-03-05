import { experienceData, projectsData, educationData, skillsData, aboutData, contactData } from './translations';

export const experiences = Object.entries(experienceData.data).map(([id, data]) => ({
  id,
  ...data
}));

export const projects = Object.entries(projectsData.data).map(([id, data]) => ({
  id,
  ...data
}));

export const skills = skillsData;

export const education = educationData;
export const about = aboutData;
export const contact = contactData; 