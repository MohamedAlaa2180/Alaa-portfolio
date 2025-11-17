import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-dark dark:to-dark-light">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary p-1 shadow-xl">
            <img 
              src="/profile.jpg" 
              alt="Mohamed Alaa" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            {personalInfo.name}
          </h1>
          <p className="text-2xl sm:text-3xl text-gradient font-semibold mb-6">
            {personalInfo.title}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            {personalInfo.summary}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            <Mail size={20} />
            Get in Touch
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-dark-light hover:bg-gray-100 dark:hover:bg-dark transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-dark-light hover:bg-gray-100 dark:hover:bg-dark transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

