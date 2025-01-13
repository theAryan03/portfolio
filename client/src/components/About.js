import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'C', level: 85 },
  { name: 'MySQL', level: 80 },
  { name: 'MATLAB', level: 85 },
  { name: 'MS Office', level: 90 },
  { name: 'Power BI', level: 80 },
];

export default function About() {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I'm an Electrical Engineering student at Netaji Subhas University of Technology, Delhi, with a passion for technology
            and problem-solving. I combine my technical knowledge with practical experience through internships
            at prestigious organizations like Delhi Metro Rail Corporation and Maruti Suzuki.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Experience & Education
            </h3>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Summer Trainee
                </h4>
                <p className="text-gray-600 dark:text-gray-300">Delhi Metro Rail Corporation • May-June 2024</p>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Worked in Electrical and Maintenance department, gaining hands-on experience with building management systems
                  and electrical operations at underground metro stations.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  R&D Intern
                </h4>
                <p className="text-gray-600 dark:text-gray-300">Maruti Suzuki Private Limited • May-July 2023</p>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Studied vehicle manufacturing processes and automated systems, working with electronic devices
                  like Raspberry Pi, op-amps, and various sensors.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  B.Tech in Electrical Engineering
                </h4>
                <p className="text-gray-600 dark:text-gray-300">NSUT, Delhi • 2021-2025</p>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Currently pursuing my bachelor's degree with a CGPA of 6.12
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 