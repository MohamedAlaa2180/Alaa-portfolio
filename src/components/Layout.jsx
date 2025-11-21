import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
            <div className="flex-1">
              {isHomePage ? (
                <Navigation />
              ) : (
                <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium">
                  ← Back to Portfolio
                </Link>
              )}
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-light transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              {isHomePage && (
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-light transition-colors"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              )}
            </div>
          </div>
          
          {isHomePage && mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-col gap-2">
                {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
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
        {children}
      </main>

      <footer className="bg-gray-50 dark:bg-dark-light py-8 text-center text-gray-600 dark:text-gray-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
          <div className="absolute top-4 left-10 text-2xl font-mono text-primary">{`//`}</div>
          <div className="absolute bottom-4 right-10 text-2xl font-mono text-secondary">{`/* */`}</div>
        </div>
        <p className="relative z-10">
          &copy; {new Date().getFullYear()} Mohamed Alaa. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;

