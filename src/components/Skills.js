import React, { useEffect, useRef } from 'react';
import { FaJava, FaReact, FaAngular, FaDocker } from 'react-icons/fa';
import { SiSpringboot, SiKubernetes, SiGooglecloud } from 'react-icons/si';

const skills = [
  { name: 'Java', level: 80, icon: FaJava, color: '#007396', description: 'Expert in Java development, including Java EE and Java 17 features.' },
  { name: 'Spring Boot', level: 90, icon: SiSpringboot, color: '#6DB33F', description: 'Proficient in building microservices and RESTful APIs with Spring Boot.' },
  { name: 'Angular', level: 80, icon: FaAngular, color: '#DD0031', description: 'Experienced in developing responsive SPAs with Angular.' },
  { name: 'React', level: 75, icon: FaReact, color: '#61DAFB', description: 'Experienced in developing interactive UIs with React.' },
  { name: 'Docker', level: 75, icon: FaDocker, color: '#2496ED', description: 'Competent in containerizing applications and managing Docker environments.' },
  { name: 'Kubernetes', level: 80, icon: SiKubernetes, color: '#326CE5', description: 'Familiar with orchestrating containerized applications using Kubernetes.' },
  { name: 'GCP', level: 55, icon: SiGooglecloud, color: '#4285F4', description: 'Experience with Google Cloud Platform services and infrastructure.' },
];

const SkillBar = ({ skill }) => {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (bar) {
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.width = `${skill.level}%`;
        bar.style.transition = 'width 1s ease-in-out';
      }, 100);
    }
  }, [skill.level]);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-2 sm:mb-4">
        <skill.icon className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" style={{ color: skill.color }} />
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{skill.name}</h3>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5 mb-2 sm:mb-4">
        <div
          ref={barRef}
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
        ></div>
      </div>
      <p className="text-xs sm:text-sm text-gray-600">{skill.description}</p>
    </div>
  );
};

const Skills = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    {skills.map((skill) => (
      <SkillBar key={skill.name} skill={skill} />
    ))}
  </div>
);

export default Skills;