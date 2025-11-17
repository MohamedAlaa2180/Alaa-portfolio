import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl font-bold text-gradient">MA</h1>
            
            <Navigation />
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-light transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-light transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
          
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-col gap-2">
                {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-light transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="bg-gray-50 dark:bg-dark-light py-8 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Mohamed Alaa. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

