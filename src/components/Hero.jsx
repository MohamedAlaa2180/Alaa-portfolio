import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-dark dark:to-dark-light">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary p-1 shadow-xl">
            <img 
              src="/Alaa-portfolio/profile.jpeg" 
              alt="Mohamed Alaa" 
              className="w-full h-full rounded-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full h-full rounded-full bg-white dark:bg-dark flex items-center justify-center text-4xl font-bold text-gradient">MA</div>';
              }}
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

        <div className="flex flex-wrap justify-center gap-4 mb-6">
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
        </div>

        <div className="flex justify-center gap-6">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;

