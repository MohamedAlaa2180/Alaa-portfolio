import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-light">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
          Get In Touch
        </h2>
        
        <div className="bg-white dark:bg-dark rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
          <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-8">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-dark-light rounded-lg hover:bg-primary/10 transition-colors group"
            >
              <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                <Mail size={24} className="text-primary group-hover:text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <p className="font-semibold text-gray-900 dark:text-white">{personalInfo.email}</p>
              </div>
            </a>
            
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-dark-light rounded-lg hover:bg-primary/10 transition-colors group"
            >
              <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                <Phone size={24} className="text-primary group-hover:text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                <p className="font-semibold text-gray-900 dark:text-white">{personalInfo.phone}</p>
              </div>
            </a>
            
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-dark-light rounded-lg">
              <div className="p-3 bg-primary/10 rounded-full">
                <MapPin size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                <p className="font-semibold text-gray-900 dark:text-white">{personalInfo.location}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-around p-4 bg-gray-50 dark:bg-dark-light rounded-lg">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} className="text-primary" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-primary/10 transition-colors"
                aria-label="GitHub"
              >
                <Github size={28} className="text-primary" />
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-shadow font-medium text-lg"
            >
              <Mail size={20} />
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

