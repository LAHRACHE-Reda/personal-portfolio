import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaBuilding, FaCalendar } from 'react-icons/fa';
import { SiSpringboot, SiSpring, SiKubernetes, SiLaravel, SiVuedotjs, SiMysql, SiDocker } from 'react-icons/si';

const experiences = [
  {
    title: 'Development Engineer',
    company: 'HPS',
    period: '2022 - Present',
    description: 'Development and maintenance of a secure and reliable software banking system.',
    achievements: [
      'Develop a compliance software with PCI-DSS',
      'Expose RESTful APIs and GRPC services',
      'Implement a secure gateway against Fraudulent injections',
      'Add the OAuth 2.0 authentication support ...'
    ],
    tech: [
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'Spring Cloud', icon: SiSpring },
      { name: 'Spring Security', icon: SiSpring },
      { name: 'Docker', icon: SiDocker },
      { name: 'Kubernetes', icon: SiKubernetes }
    ]
  },
  {
    title: 'Final Year Internship',
    company: 'Leyton',
    period: '2021 - 2022',
    description: 'Design and implementation of time working management solution.',
    achievements: [
      'Developed a full-stack application that streamlined expense reporting process',
      'Alert and notification system',
      'Role based access'
    ],
    tech: [
      { name: 'Laravel', icon: SiLaravel },
      { name: 'Vue.js', icon: SiVuedotjs },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Docker', icon: SiDocker }
    ]
  }
];

const ExperienceCard = ({ experience }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-4">
      <FaBriefcase className="text-blue-500 text-2xl mr-3" />
      <h3 className="text-2xl font-bold text-gray-900">{experience.title}</h3>
    </div>
    <div className="flex items-center mb-2 text-gray-600">
      <FaBuilding className="mr-2" />
      <span className="font-semibold">{experience.company}</span>
    </div>
    <div className="flex items-center mb-4 text-gray-600">
      <FaCalendar className="mr-2" />
      <span>{experience.period}</span>
    </div>
    <p className="mb-4 text-gray-700">{experience.description}</p>
    <div className="mb-4">
      <h4 className="text-lg font-semibold mb-2 text-gray-800">Key Achievements:</h4>
      <ul className="list-disc list-inside text-gray-600">
        {experience.achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
    <div>
      <h4 className="text-lg font-semibold mb-2 text-gray-800">Technologies Used:</h4>
      <div className="flex flex-wrap gap-2">
        {experience.tech.map((tech, index) => (
          <div key={index} className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            <tech.icon className="w-4 h-4 mr-1" />
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const Experiences = () => (
  <div className="space-y-8">
    {experiences.map((experience, index) => (
      <ExperienceCard key={index} experience={experience} />
    ))}
  </div>
);

export default Experiences;