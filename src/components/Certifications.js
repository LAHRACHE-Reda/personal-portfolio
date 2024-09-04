import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCalendar, FaSpinner } from 'react-icons/fa';

const certifications = [
  {
    name: 'Kubernetes CKAD',
    issuer: 'Cloud Native Computing Foundation',
    startDate: 'September 2023',
  },
  {
    name: 'Oracle Certified Professional: Java SE 17 Developer',
    issuer: 'Oracle',
    startDate: 'July 2023',
  },
];

const CertificationCard = ({ certification }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-4">
      <FaAward className="text-blue-500 text-2xl mr-3" />
      <h3 className="text-xl font-bold text-gray-900">{certification.name}</h3>
    </div>
    <p className="text-gray-600 mb-2">{certification.issuer}</p>
    <div className="flex items-center mb-4 text-gray-600">
      <FaCalendar className="mr-2" />
      <span>Started: {certification.startDate}</span>
    </div>
    <div className="flex items-center text-yellow-500">
      <FaSpinner className="animate-spin mr-2" />
      <span className="font-semibold">In Progress</span>
    </div>
  </motion.div>
);

const Certifications = () => (
  <div>
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Certifications In Progress</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {certifications.map((certification, index) => (
        <CertificationCard key={index} certification={certification} />
      ))}
    </div>
    <p className="mt-6 text-gray-600 italic">
      These certifications are currently in progress. I'm actively studying and preparing for these exams to further enhance my skills and knowledge in these areas.
    </p>
  </div>
);

export default Certifications;