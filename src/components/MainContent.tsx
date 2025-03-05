"use client";

import React, { useState } from 'react'
import { motion } from "framer-motion";
import { useLanguage } from '@/context/LanguageContext';
import { experiences, projects, education, skills, about, contact } from '@/data/content';
import { experienceData } from '@/data/translations/experience';
import { educationData } from '@/data/translations/education';
import { skillsData } from '@/data/translations/skills';
import { projectsData } from '@/data/translations/projects';
import HTMLContent from './HTMLContent';
import { referencesData } from '@/data/translations/references';
import { navigationData } from '@/data/translations/navigation';

interface Experience {
  id: string;
  en: {
    position: string;
    company: string;
    date: string;
    location: string;
    bullets: string[];
  };
  tr: {
    position: string;
    company: string;
    date: string;
    location: string;
    bullets: string[];
  };
  tech: string[];
}

interface Project {
  id: string;
  en: {
    title: string;
    bullets: string[];
  };
  tr: {
    title: string;
    bullets: string[];
  };
  tech: string[];
  links: {
    github: string;
    live?: string | null;
    frontend?: string;
  };
}

interface SkillCategory {
  title: string;
  items: string[];
}

interface SkillCategoryProps {
  category: SkillCategory;
  isOpen: boolean;
  onToggle: () => void;
}

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const { language } = useLanguage();
  
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="group hover:bg-secondary/20 p-4 md:p-6 -mx-4 md:-mx-6 rounded-lg transition-colors"
    >
      <div className="flex items-baseline gap-2 text-base text-text-secondary">
        <span>{experience[language].date}</span>
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-text-primary mt-2 group-hover:text-accent transition-colors">
        {experience[language].position} · <span className="text-accent">{experience[language].company}</span>
      </h3>
      <ul className="mt-4 space-y-2.5 text-text-secondary">
        {experience[language].bullets.map((bullet, i) => (
          <li key={i} className="flex items-start">
            <span className="text-accent mr-2 text-base flex-shrink-0">▹</span>
            {bullet.includes('<') ? (
              <HTMLContent 
                html={bullet} 
                className="text-base leading-relaxed [&_strong]:text-text-primary [&_strong]:font-semibold [&_em]:italic" 
              />
            ) : (
              <span className="text-base leading-relaxed">{bullet}</span>
            )}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mt-4">
        {experience.tech.map((tech, i) => (
          <span 
            key={i} 
            className="px-3 py-1 text-[13px] font-medium bg-tech-tag text-accent rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  if (!project || !project.tr || !project.tr.bullets) {
    console.error("Project data is missing:", project);
    return <div>Project data is missing</div>;
  }

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="group hover:bg-secondary/20 p-6 -mx-6 rounded-lg transition-colors"
    >
      <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
        {project.tr.title}
      </h3>
      <ul className="mt-4 space-y-2 text-text-secondary">
        {project.tr.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start">
            <span className="text-accent mr-2">▹</span>
            {bullet.includes('<') ? (
              <HTMLContent 
                html={bullet} 
                className="text-base leading-relaxed [&_strong]:text-text-primary [&_strong]:font-semibold [&_em]:italic [&_a]:text-accent [&_a]:underline [&_a]:hover:text-accent/80" 
              />
            ) : (
              <span className="text-base leading-relaxed">{bullet}</span>
            )}
          </li>
        ))}
      </ul>
      
      {/* Project Links */}
      <div className="mt-4 flex items-center gap-4">
        {project.links?.github && (
          <a 
            href={project.links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            {project.links?.frontend ? 'Backend' : 'GitHub'}
          </a>
        )}
        
        {project.links?.frontend && (
          <a 
            href={project.links.frontend} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            Frontend
          </a>
        )}
        
        {project.links?.live && (
          <a 
            href={project.links.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Live Demo
          </a>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((tech, i) => (
          <span 
            key={i} 
            className="px-3 py-1 text-[13px] font-medium bg-tech-tag text-accent rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ category, isOpen, onToggle }: SkillCategoryProps) => {
  const { language } = useLanguage();
  
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="border-b border-accent/20 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-3 flex items-center justify-between text-left hover:bg-secondary/10 transition-colors"
      >
        <h3 className="text-base font-medium text-text-primary">
          {category.title}
        </h3>
        <span className={`text-accent transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <ul className="space-y-2 text-base text-text-secondary pb-4">
          {category.items.map((item: string, i: number) => (
            <li key={i} className="flex items-start">
              <span className="text-accent mr-2">▹</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

const ReferenceCard = ({ reference }: { reference: any }) => {
  const { language } = useLanguage();
  
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="group hover:bg-secondary/20 p-6 -mx-6 rounded-lg transition-colors"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
            {reference[language].name}
          </h3>
          <p className="text-text-secondary">
            {reference[language].position}, {reference[language].institution}
          </p>
        </div>
        <p className="text-sm text-text-secondary mt-2 md:mt-0">
          {reference[language].contact}
        </p>
      </div>
      
      <blockquote className="border-l-2 border-accent/30 pl-4 italic text-text-secondary">
        "{reference[language].quote}"
      </blockquote>
    </motion.div>
  );
};

const MainContent = () => {
  const { language } = useLanguage();
  const [openCategory, setOpenCategory] = useState<number | null>(0);

  return (
    <main className="flex-1 md:ml-[350px]">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <section id="about" className="md:py-24 py-12 md:scroll-mt-0 scroll-mt-32">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="md:hidden mb-16 pt-12">
              <h1 className="text-3xl font-bold text-text-primary">
                Talha Esinti
              </h1>
              <h2 className="text-xl text-text-secondary mt-2">
                {navigationData[language].header.role}
              </h2>
              <p className="text-sm text-text-secondary/80 mt-2">
                {navigationData[language].header.subtitle}
              </p>
            </div>
            
            <div className="space-y-6 text-base text-text-secondary/70 leading-relaxed">
              {about[language]?.greeting && (
                <HTMLContent 
                  html={about[language].greeting} 
                  className="[&_strong]:text-text-primary [&_strong]:font-semibold" 
                />
              )}
              {about[language]?.description && (
                <HTMLContent 
                  html={about[language].description} 
                  className="[&_strong]:text-text-primary [&_strong]:font-semibold" 
                />
              )}
              {about[language]?.paragraph1 && (
                <HTMLContent 
                  html={about[language].paragraph1} 
                  className="[&_strong]:text-text-primary [&_strong]:font-semibold" 
                />
              )}
              {about[language]?.paragraph2 && (
                <HTMLContent 
                  html={about[language].paragraph2} 
                  className="[&_strong]:text-text-primary [&_strong]:font-semibold" 
                />
              )}
              {about[language]?.paragraph3 && (
                <HTMLContent 
                  html={about[language].paragraph3} 
                  className="[&_strong]:text-text-primary [&_strong]:font-semibold" 
                />
              )}
              {about[language]?.conclusion && (
                <HTMLContent 
                  html={about[language].conclusion} 
                  className="[&_strong]:text-text-primary [&_strong]:font-semibold" 
                />
              )}
            </div>
          </motion.div>
        </section>

        <section id="skills" className="md:py-24 py-12 md:scroll-mt-0 scroll-mt-32">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-accent">
              {skillsData.title[language]}
            </h2>
            
            {/* Desktop View */}
            <div className="hidden md:grid md:grid-cols-2 gap-8">
              {skills[language].categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-text-primary">
                    {category.title}
                  </h3>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent mr-2">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Mobile View */}
            <div className="md:hidden divide-y divide-accent/20 border-y border-accent/20">
              {skills[language].categories.map((category, index) => (
                <SkillCategory
                  key={index}
                  category={category}
                  isOpen={openCategory === index}
                  onToggle={() => setOpenCategory(openCategory === index ? null : index)}
                />
              ))}
            </div>
          </motion.div>
        </section>

        <section id="education" className="md:py-24 py-12 md:scroll-mt-0 scroll-mt-32">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-accent">
              {educationData.title[language]}
            </h2>
            <div className="space-y-6 border-l-2 border-accent/20 pl-4">
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl md:text-2xl font-semibold text-text-primary">
                    {education[language].school}
                    <span className="text-base text-text-secondary ml-2">
                      {education[language].school_rank}
                    </span>
                  </h3>
                </div>
                <div className="flex items-baseline justify-between text-text-secondary">
                  <p className="text-base">
                    {education[language].degree} · {education[language].gpa}
                  </p>
                  <p className="text-base">{education[language].date}</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-base font-semibold text-accent mb-4">
                  {education[language].coursework.title}
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {education[language].coursework.courses.map((course, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-2 text-base">▹</span>
                      <span className="text-base text-text-secondary">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="experience" className="md:py-24 py-12 md:scroll-mt-0 scroll-mt-32">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-accent">
              {experienceData.title[language]}
            </h2>
            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
              ))}
            </div>
          </motion.div>
        </section>

        <section id="projects" className="md:py-24 py-12 md:scroll-mt-0 scroll-mt-32">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-accent">{projectsData.title[language]}</h2>
            <div className="space-y-12">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </motion.div>
        </section>

        <section id="references" className="md:py-24 py-12 md:scroll-mt-0 scroll-mt-32">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-accent">
              {referencesData.title[language]}
            </h2>
            <div className="space-y-8">
              {referencesData.data.map((reference, index) => (
                <ReferenceCard key={index} reference={reference} />
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact" className="md:py-24 py-12 md:scroll-mt-0 scroll-mt-32">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-accent">
              {contact[language].title}
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
              {contact[language].description}
            </p>
            <div className="mt-8">
              <a 
                href="mailto:talha.esinti@gmail.com" 
                className="inline-flex items-center px-6 py-3 border border-accent text-accent hover:bg-accent/10 transition-all rounded text-sm font-medium tracking-wide"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>{contact[language].button}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}

export default MainContent; 