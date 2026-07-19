import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { recommendations } from '../data';
import { btnSoundProps } from '../uiSounds';

export default function Recommendations() {
  const scrollRef = useRef(null);

  const scrollBy = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const delta = Math.min(el.clientWidth * 0.85, 400);
    el.scrollBy({ left: dir * delta, behavior: 'smooth' });
  };

  return (
    <section id="recommendations" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-4 text-gradient"
        >
          Recommendations
        </motion.h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          Kind words from people I&apos;ve worked with.
        </p>

        {recommendations.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 py-8">
            No recommendations yet.
          </p>
        ) : (
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-label="Scroll left"
              className="hidden sm:inline-flex shrink-0 self-center p-2 rounded-full bg-white dark:bg-dark-light shadow border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => scrollBy(-1)}
              {...btnSoundProps()}
            >
              <ChevronLeft size={22} className="text-gray-700 dark:text-gray-200" />
            </button>

            <div
              ref={scrollRef}
              className="flex min-w-0 flex-1 gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {recommendations.map((rec) => (
                <article
                  key={rec.id}
                  className="snap-start shrink-0 w-[min(100%,22rem)] sm:w-[24rem] bg-gray-50 dark:bg-dark-light rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-4">
                    {rec.image ? (
                      <img
                        src={rec.image}
                        alt=""
                        className="w-12 h-12 rounded-full object-cover border border-gray-200 dark:border-gray-700"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-lg">
                        {rec.name?.charAt(0) || '?'}
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      {rec.linkedin ? (
                        <a
                          href={rec.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-gray-900 dark:text-white hover:text-primary transition-colors line-clamp-2"
                        >
                          {rec.name}
                        </a>
                      ) : (
                        <p className="font-semibold text-gray-900 dark:text-white line-clamp-2">{rec.name}</p>
                      )}
                      {rec.title && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mt-0.5">{rec.title}</p>
                      )}
                      {(rec.date || rec.relation) && (
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 line-clamp-2">
                          {[rec.date, rec.relation].filter(Boolean).join(" · ")}
                        </p>
                      )}
                    </div>
                  </div>
                  <blockquote className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex-1 whitespace-pre-wrap">
                    {rec.message}
                  </blockquote>
                </article>
              ))}
            </div>

            <button
              type="button"
              aria-label="Scroll right"
              className="hidden sm:inline-flex shrink-0 self-center p-2 rounded-full bg-white dark:bg-dark-light shadow border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => scrollBy(1)}
              {...btnSoundProps()}
            >
              <ChevronRight size={22} className="text-gray-700 dark:text-gray-200" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
