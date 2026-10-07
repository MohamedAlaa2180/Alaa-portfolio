import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data';
import { btnSoundProps, projectCardSoundProps } from '../uiSounds';

const projectGroups = [
  {
    id: 'unity',
    title: 'Unity Projects',
    items: projects.filter((project) => project.category !== 'ai'),
  },
  {
    id: 'ai',
    title: 'AI Projects',
    items: projects.filter((project) => project.category === 'ai'),
  },
].filter((group) => group.items.length > 0);

let rememberedTab = projectGroups[0]?.id ?? 'unity';

const Projects = () => {
  const [activeId, setActiveId] = useState(rememberedTab);
  const activeGroup = projectGroups.find((group) => group.id === activeId) ?? projectGroups[0];

  const selectGroup = (id) => {
    rememberedTab = id;
    setActiveId(id);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-light">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gradient"
        >
          Featured Projects
        </motion.h2>

        <div className="flex justify-center mb-10">
          <div
            role="tablist"
            aria-label="Project categories"
            className="inline-flex rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark p-1"
          >
            {projectGroups.map((group) => {
              const selected = group.id === activeGroup.id;
              return (
                <button
                  key={group.id}
                  id={`projects-tab-${group.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`projects-panel-${group.id}`}
                  onClick={() => selectGroup(group.id)}
                  className={`px-5 py-2 rounded-full text-sm sm:text-base font-medium transition-colors ${
                    selected
                      ? 'bg-primary text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary'
                  }`}
                  {...btnSoundProps()}
                >
                  {group.title}
                </button>
              );
            })}
          </div>
        </div>

        <div
          role="tabpanel"
          id={`projects-panel-${activeGroup.id}`}
          aria-labelledby={`projects-tab-${activeGroup.id}`}
        >
          <motion.div
            key={activeGroup.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {activeGroup.items.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      to={`/project/${project.id}`}
                      className="bg-white dark:bg-dark rounded-xl overflow-hidden hover:shadow-xl transition-all hover:scale-105 border border-gray-200 dark:border-gray-800 flex flex-col group block h-full"
                      {...projectCardSoundProps()}
                    >
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                      {project.thumbnail ? (
                        <>
                          <img
                            src={project.thumbnail}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextElementSibling.style.display = 'flex';
                            }}
                          />
                          <div className="hidden w-full h-full items-center justify-center">
                            <div className="text-6xl">{project.category === 'ai' ? 'AI' : '🎮'}</div>
                          </div>
                        </>
                      ) : (
                        <div className="text-6xl group-hover:scale-110 transition-transform">
                          {project.category === 'ai' ? 'AI' : '🎮'}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <ArrowRight 
                          size={20} 
                          className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                        {project.shortDescription}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    </Link>
                  </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

