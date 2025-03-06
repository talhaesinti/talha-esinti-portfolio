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

interface Reference {
  id?: string;
  en: {
    name: string;
    position: string;
    institution: string;
    contact: string;
    quote: string;
  };
  tr: {
    name: string;
    position: string;
    institution: string;
    contact: string;
    quote: string;
  };
}

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const { language } = useLanguage();
  
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="group hover:bg-secondary/20 p-2 md:p-3 -mx-2 md:-mx-3 rounded-lg transition-colors"
    >
      <div className="flex items-baseline gap-1 text-xs md:text-sm text-text-secondary">
        <span>{experience[language].date}</span>
      </div>
      <h3 className="text-base md:text-lg font-semibold text-text-primary mt-1 md:mt-2 group-hover:text-accent transition-colors">
        {experience[language].position} · <span className="text-accent">{experience[language].company}</span>
      </h3>
      <ul className="mt-2 md:mt-3 space-y-1 md:space-y-2 text-text-secondary">
        {experience[language].bullets.map((bullet, i) => (
          <li key={i} className="flex items-start">
            <span className="text-accent mr-1 md:mr-2 text-xs md:text-sm flex-shrink-0">▹</span>
            {bullet.includes('<') ? (
              <HTMLContent 
                html={bullet} 
                className="text-xs md:text-sm leading-relaxed [&_strong]:text-text-primary [&_strong]:font-semibold [&_em]:italic" 
              />
            ) : (
              <span className="text-xs md:text-sm leading-relaxed">{bullet}</span>
            )}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1 md:gap-1.5 mt-2 md:mt-3">
        {experience.tech.map((tech, i) => (
          <span 
            key={i} 
            className="px-1.5 py-0.5 text-[10px] md:text-xs font-medium bg-tech-tag text-accent rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const { language } = useLanguage();
  
  if (!project || !project[language] || !project[language].bullets) {
    console.error("Project data is missing:", project);
    return <div>Project data is missing</div>;
  }

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="group hover:bg-secondary/20 p-2 md:p-4 -mx-2 md:-mx-4 rounded-lg transition-colors"
    >
      <h3 className="text-base md:text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
        {project[language].title}
      </h3>
      <ul className="mt-2 md:mt-3 space-y-1 md:space-y-1.5 text-text-secondary">
        {project[language].bullets.map((bullet, i) => (
          <li key={i} className="flex items-start">
            <span className="text-accent mr-1 md:mr-2">▹</span>
            {bullet.includes('<') ? (
              <HTMLContent 
                html={bullet} 
                className="text-xs md:text-sm leading-relaxed [&_strong]:text-text-primary [&_strong]:font-semibold [&_em]:italic [&_a]:text-accent [&_a]:underline [&_a]:hover:text-accent/80" 
              />
            ) : (
              <span className="text-xs md:text-sm leading-relaxed">{bullet}</span>
            )}
          </li>
        ))}
      </ul>
      
      {/* Project Links */}
      <div className="mt-2 md:mt-4 flex items-center gap-2 md:gap-4">
        {project.links?.github && (
          <a 
            href={project.links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1 text-xs md:text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1 text-xs md:text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1 text-xs md:text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Live Demo
          </a>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2 md:gap-3 mt-2 md:mt-4">
        {project.tech.map((tech, i) => (
          <span 
            key={i} 
            className="px-1.5 py-0.5 text-[10px] md:text-xs font-medium bg-tech-tag text-accent rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ category, isOpen, onToggle }: SkillCategoryProps) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="border-b border-accent/20 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-1.5 md:py-2 flex items-center justify-between text-left hover:bg-secondary/10 transition-colors"
      >
        <h3 className="text-xs md:text-sm font-medium text-text-primary">
          {category.title}
        </h3>
        <span className={`text-accent transition-transform ${isOpen ? 'rotate-180' : ''} text-xs md:text-sm`}>
          ▼
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <ul className="space-y-1 md:space-y-1.5 text-xs md:text-sm text-text-secondary pb-2 md:pb-3">
          {category.items.map((item: string, i: number) => (
            <li key={i} className="flex items-start">
              <span className="text-accent mr-1 md:mr-2">▹</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

const ReferenceCard = ({ reference }: { reference: Reference }) => {
  const { language } = useLanguage();
  
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="group hover:bg-secondary/20 p-2 md:p-4 -mx-2 md:-mx-4 rounded-lg transition-colors"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 md:mb-3">
        <div>
          <h3 className="text-base md:text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
            {reference[language].name}
          </h3>
          <p className="text-xs md:text-sm text-text-secondary">
            {reference[language].position}, {reference[language].institution}
          </p>
        </div>
        <p className="text-[10px] md:text-xs text-text-secondary mt-1 md:mt-0">
          {reference[language].contact}
        </p>
      </div>
      
      <blockquote className="border-l-2 border-accent/30 pl-2 md:pl-3 italic text-xs md:text-sm text-text-secondary">
        &quot;{reference[language].quote}&quot;
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
        <section id="about" className="md:py-24 py-10 md:scroll-mt-0 scroll-mt-32">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="md:hidden mb-12 pt-10">
              <h1 className="text-2xl md:text-3xl font-bold text-text-primary">
                Talha Esinti
              </h1>
              <h2 className="text-lg md:text-xl text-text-secondary mt-1 md:mt-2">
                {navigationData[language].header.role}
              </h2>
              <p className="text-xs md:text-sm text-text-secondary/80 mt-1 md:mt-2">
                {navigationData[language].header.subtitle}
              </p>
            </div>
            
            <div className="space-y-4 md:space-y-6 text-sm md:text-base text-text-secondary/70 leading-relaxed">
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

        <section id="skills" className="md:py-24 py-10 md:scroll-mt-0 scroll-mt-32">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
          >
            <h2 className="text-xl md:text-3xl font-bold text-accent">
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

        <section id="education" className="md:py-24 py-10 md:scroll-mt-0 scroll-mt-32">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
          >
            <h2 className="text-xl md:text-3xl font-bold text-accent">
              {educationData.title[language]}
            </h2>
            <div className="space-y-4 md:space-y-6 border-l-2 border-accent/20 pl-3 md:pl-4">
              <div className="space-y-1 md:space-y-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg md:text-xl font-semibold text-text-primary">
                    {education[language].school}
                    <span className="text-base text-text-secondary ml-2">
                      {education[language].school_rank}
                    </span>
                  </h3>
                </div>
                <div className="flex items-baseline justify-between text-text-secondary">
                  <p className="text-xs md:text-base">
                    {education[language].degree} · {education[language].gpa}
                  </p>
                  <p className="text-xs md:text-base">{education[language].date}</p>
                </div>
              </div>
              
              <div className="mt-4 md:mt-8">
                <h4 className="text-sm md:text-base font-semibold text-accent mb-2 md:mb-4">
                  {education[language].coursework.title}
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                  {education[language].coursework.courses.map((course, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-1 md:mr-2 text-xs md:text-base">▹</span>
                      <span className="text-xs md:text-base text-text-secondary">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="experience" className="md:py-24 py-10 md:scroll-mt-0 scroll-mt-32">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
          >
            <h2 className="text-xl md:text-3xl font-bold text-accent">
              {experienceData.title[language]}
            </h2>
            <div className="space-y-6 md:space-y-12">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
              ))}
            </div>
          </motion.div>
        </section>

        <section id="projects" className="md:py-24 py-10 md:scroll-mt-0 scroll-mt-32">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
          >
            <h2 className="text-xl md:text-3xl font-bold text-accent">{projectsData.title[language]}</h2>
            <div className="space-y-6 md:space-y-12">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </motion.div>
        </section>

        <section id="references" className="md:py-24 py-10 md:scroll-mt-0 scroll-mt-32">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
          >
            <h2 className="text-xl md:text-3xl font-bold text-accent">
              {referencesData.title[language]}
            </h2>
            <div className="space-y-6 md:space-y-8">
              {referencesData.data.map((reference, index) => (
                <ReferenceCard key={index} reference={reference} />
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact" className="md:py-24 py-10 md:scroll-mt-0 scroll-mt-32">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
          >
            <h2 className="text-xl md:text-3xl font-bold text-accent">
              {contact[language].title}
            </h2>
            <p className="text-text-secondary text-sm md:text-lg leading-relaxed max-w-2xl">
              {contact[language].description}
            </p>
            <div className="mt-4 md:mt-8">
              <a 
                href="mailto:talha.esinti@gmail.com" 
                className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 border border-accent text-accent hover:bg-accent/10 transition-all rounded text-xs md:text-sm font-medium tracking-wide"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>{contact[language].button}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 ml-1 md:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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