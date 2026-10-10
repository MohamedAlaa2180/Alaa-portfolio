import { Briefcase, MapPin, Calendar, GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { experience, education, activities } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gradient"
        >
          Work Experience
        </motion.h2>
        
        <div className="space-y-8">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-dark-light rounded-xl p-6 hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {job.position}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                    <Briefcase size={18} />
                    <span>{job.company}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{job.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2">
                {job.achievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-primary mt-1">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Education & Activities */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {education && education.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-dark-light rounded-xl p-6 hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-center gap-3 mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="border-l-2 border-primary pl-4">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-primary font-semibold">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 my-1">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    {edu.details && (
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activities && activities.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 dark:bg-dark-light rounded-xl p-6 hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-center gap-3 mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">
                <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                  <Award size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Activities & Mentorship
                </h3>
              </div>
              <div className="space-y-4">
                {activities.map((act, idx) => (
                  <div key={idx} className="border-l-2 border-secondary pl-4">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {act.role}
                    </h4>
                    <p className="text-secondary font-semibold text-sm">{act.organization}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {act.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;

