import { experienceData } from './translations/experience';
import { projectsData } from './translations/projects';
import { educationData } from './translations/education';
import { skillsData } from './translations/skills';
import { aboutData } from './translations/about';
import { contactData } from './translations/contact';

export const experiences = Object.entries(experienceData.data).map(([id, data]) => ({
  id,
  ...data
}));

export const projects = Object.entries(projectsData.data).map(([id, data]) => {
  // Burada değişiklik yapmaya gerek yok, null değerini koruyalım
  return {
    id,
    ...data
  };
});

export const skills = skillsData;
export const education = educationData;
export const about = aboutData;
export const contact = contactData; 