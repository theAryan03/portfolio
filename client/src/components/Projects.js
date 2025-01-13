import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Car Door Lock/Unlock using Face Detection',
    description: 'Developed a biometric car door unlocking system using face detection technology with Raspberry Pi. Implemented the Haar-Cascade face detection algorithm for accurate user recognition.',
    image: 'https://via.placeholder.com/600x400',
    tags: ['Python', 'OpenCV', 'Raspberry Pi', 'IoT'],
    liveUrl: '#',
    githubUrl: '#',
  }
];

const achievements = [
  {
    title: 'Sports Achievements',
    description: 'Won multiple medals in Lawn Tennis including 3rd position in CBSE DELHI-2016 and South Delhi Zonals (2014, 2015), and 1st position in South Delhi Zonals (2016).',
    tags: ['Lawn Tennis', 'Sports'],
  },
  {
    title: 'Academic Excellence',
    description: 'Achieved prestigious position in Science Open Merit Test-2019 by Delhi State Teachers Forum. Secured 187 and 150 international ranks in ISFO in mathematics and science respectively.',
    tags: ['Academics', 'Science', 'Mathematics'],
  },
  {
    title: 'Academic Performance',
    description: 'Scored 93.4% in XII CBSE (2020-2021) and 93.8% in X CBSE (2018-2019) from Red Roses Public School, New Delhi.',
    tags: ['Academics', 'CBSE'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects & Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are my technical projects and notable achievements that showcase my skills and dedication.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {achievement.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {achievement.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 