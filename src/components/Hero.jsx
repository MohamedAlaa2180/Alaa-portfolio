import { Github, Linkedin, Mail, Phone, MapPin, Download, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-dark dark:to-dark-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl font-mono text-primary">{`</>`}</div>
        <div className="absolute top-40 right-20 text-4xl font-mono text-secondary">{`{}`}</div>
        <div className="absolute bottom-40 left-20 text-5xl font-mono text-primary">{`();`}</div>
        <div className="absolute bottom-20 right-10 text-6xl font-mono text-secondary">{`=>`}</div>
        <div className="absolute top-1/2 left-1/4 text-3xl font-mono text-primary">{`[]`}</div>
        <div className="absolute top-1/3 right-1/4 text-4xl font-mono text-secondary">{`===`}</div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary p-1 shadow-xl"
          >
            <img 
              src="/Alaa-portfolio/profile.jpeg" 
              alt="Mohamed Alaa" 
              className="w-full h-full rounded-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full h-full rounded-full bg-white dark:bg-dark flex items-center justify-center text-4xl font-bold text-gradient">MA</div>';
              }}
            />
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl sm:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            {personalInfo.name}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl sm:text-3xl font-semibold mb-6"
          >
            <motion.span
              style={{
                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #8b5cf6, #3b82f6)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              animate={{
                backgroundPosition: ['0% center', '200% center'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {personalInfo.title}
            </motion.span>
          </motion.p>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
          >
            {personalInfo.summary}
          </motion.p>
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-6"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-md hover:shadow-lg"
          >
            <Mail size={20} />
            {personalInfo.email}
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-dark-light text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-dark transition-colors font-medium shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <Phone size={20} />
            {personalInfo.phone}
          </a>
          <div className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-dark-light text-gray-900 dark:text-white rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <MapPin size={20} />
            {personalInfo.location}
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-6"
        >
          <motion.a
            href="/Alaa-portfolio/resume.pdf"
            download="Mohamed_Alaa_Resume.pdf"
            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-xl transition-all font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex justify-center gap-6"
        >
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-dark-light hover:bg-primary hover:text-white transition-all shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-dark-light hover:bg-primary hover:text-white transition-all shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href={personalInfo.hackerrank}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-dark-light hover:bg-primary hover:text-white transition-all shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
            aria-label="HackerRank"
          >
            <Code size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

