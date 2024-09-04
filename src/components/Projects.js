import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaAngular, FaDocker, FaDatabase } from 'react-icons/fa';
import { SiSpringboot, SiKubernetes, SiNextdotjs, SiSwagger, SiMysql, SiPostgresql, SiLaravel, SiVuedotjs } from 'react-icons/si';

const projects = [
  {
    title: 'SaaS Dental Practices Management',
    description: 'Innovative cloud-based solution optimizing dental practice operations. Features include appointment scheduling, patient records management, and billing integration.',
    tech: [
      { name: 'Java 17', icon: FaJava },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'Angular', icon: FaAngular },
      { name: 'NextJS', icon: SiNextdotjs },
      { name: 'Docker', icon: FaDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'PostgreSQL', icon: SiPostgresql }
    ],
    highlights: [
      'Microservices architecture for scalability',
      'Administration panel for multiple dental practices management',
      'Report and statistics management',
      "Cloud based deployment"
    ]
  },
  {
    title: 'OpenAPI Sandbox Application',
    description: 'Streamlined API integration platform with interactive documentation. Allows developers to test and validate API endpoints in a secure sandbox environment.',
    tech: [
      { name: 'Java 17', icon: FaJava },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'React', icon: FaReact },
      { name: 'SwaggerUI', icon: SiSwagger },
      { name: 'Docker', icon: FaDocker },
      { name: 'PostgreSQL', icon: SiPostgresql }
    ],
    highlights: [
      'Administration panel to manage client documentation access',
      'Yaml specification generator',
      'Support for OpenAPI specification'
    ]
  },
  {
    title: 'Time and Working Management Solution',
    description: 'Comprehensive system for managing employee time tracking and travel expenses. Integrated with popular accounting software for seamless financial reporting.',
    tech: [
      { name: 'Laravel', icon: SiLaravel },
      { name: 'Vue.js', icon: SiVuedotjs },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Docker', icon: FaDocker }
    ],
    highlights: [
      'Geolocation-based time tracking',
      'Real-time notifications',
      'Role based access'
    ]
  }
];

const ProjectCard = ({ project }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
    <p className="mb-4 text-gray-700">{project.description}</p>
    <div className="mb-4">
      <h4 className="text-lg font-semibold mb-2 text-gray-800">Key Features:</h4>
      <ul className="list-disc list-inside text-gray-600">
        {project.highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
    </div>
    <div>
      <h4 className="text-lg font-semibold mb-2 text-gray-800">Technologies Used:</h4>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, techIndex) => (
          <div key={techIndex} className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            <tech.icon className="w-4 h-4 mr-1" />
            {tech.name}
          </div>
        ))}
      </div>
    </div>
    <p className="text-sm text-gray-500 mt-4 italic">Note: Detailed project information is confidential</p>
  </motion.div>
);

const Projects = () => (
  <div className="space-y-8">
    {projects.map((project, index) => (
      <ProjectCard key={index} project={project} />
    ))}
  </div>
);

export default Projects;