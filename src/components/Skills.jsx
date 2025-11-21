import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gradient"
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-dark-light rounded-xl p-6 hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b-2 border-primary">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

