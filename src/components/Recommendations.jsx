import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ChevronLeft, ChevronRight, LogOut, Send, Loader2 } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../supabaseClient';
import { btnSoundProps } from '../uiSounds';

function displayNameFromUser(user) {
  const m = user?.user_metadata || {};
  return (
    m.full_name ||
    m.name ||
    [m.given_name, m.family_name].filter(Boolean).join(' ') ||
    m.preferred_username ||
    user?.email?.split('@')[0] ||
    'LinkedIn member'
  );
}

function avatarFromUser(user) {
  const m = user?.user_metadata || {};
  return m.avatar_url || m.picture || null;
}

export default function Recommendations() {
  const scrollRef = useRef(null);
  const [items, setItems] = useState([]);
  const [loadingList, setLoadingList] = useState(!!isSupabaseConfigured);
  const [session, setSession] = useState(null);
  const [message, setMessage] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitDone, setSubmitDone] = useState(false);

  const loadApproved = useCallback(async () => {
    if (!supabase) {
      setLoadingList(false);
      return;
    }
    setLoadingList(true);
    const { data, error } = await supabase
      .from('recommendations')
      .select('id, author_name, author_headline, author_avatar, linkedin_url, message, created_at')
      .eq('status', 'approved')
      .order('created_at', { ascending: false });
    if (!error && data) setItems(data);
    setLoadingList(false);
  }, []);

  useEffect(() => {
    if (!supabase) return undefined;

    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
    });

    loadApproved();

    return () => subscription.unsubscribe();
  }, [loadApproved]);

  useEffect(() => {
    if (session?.user) {
      const m = session.user.user_metadata || {};
      const fromMeta = m.profile || m.linkedin_url || m.url;
      if (typeof fromMeta === 'string' && fromMeta.includes('linkedin.com')) {
        setLinkedinUrl(fromMeta);
      }
    }
  }, [session?.user?.id]);

  const scrollBy = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const delta = Math.min(el.clientWidth * 0.85, 400);
    el.scrollBy({ left: dir * delta, behavior: 'smooth' });
  };

  const handleLinkedInLogin = async () => {
    if (!supabase) return;
    setSubmitError(null);
    const base = import.meta.env.BASE_URL || '/';
    const redirectTo = `${window.location.origin}${base.replace(/\/?$/, '/')}#recommendations`;
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'linkedin_oidc',
      options: { redirectTo },
    });
    if (error) setSubmitError(error.message);
  };

  const handleSignOut = async () => {
    if (!supabase) return;
    setSubmitError(null);
    await supabase.auth.signOut();
    setMessage('');
    setSubmitDone(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!supabase || !session?.user) return;
    const text = message.trim();
    if (text.length < 10) {
      setSubmitError('Please write at least 10 characters.');
      return;
    }
    if (text.length > 2000) {
      setSubmitError('Recommendation is too long (max 2000 characters).');
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    const user = session.user;
    const name = displayNameFromUser(user);
    const m = user.user_metadata || {};
    const headline = m.headline || m.job_title || '';

    const row = {
      user_id: user.id,
      author_name: name,
      author_headline: headline || null,
      author_avatar: avatarFromUser(user),
      linkedin_url: linkedinUrl.trim() || null,
      message: text,
      status: 'pending',
    };

    const { error } = await supabase.from('recommendations').insert(row);

    setSubmitting(false);

    if (error) {
      setSubmitError(error.message);
      return;
    }

    setMessage('');
    setSubmitDone(true);
  };

  const configured = isSupabaseConfigured && supabase;

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
          Kind words from people I&apos;ve worked with. Sign in with LinkedIn to leave a recommendation; it appears after
          approval.
        </p>

        <div className="relative mb-14">
          {loadingList && (
            <div className="flex justify-center py-12 text-gray-500 dark:text-gray-400">
              <Loader2 className="animate-spin" size={28} />
            </div>
          )}

          {!loadingList && items.length === 0 && (
            <p className="text-center text-gray-500 dark:text-gray-400 py-8">
              No public recommendations yet{configured ? '' : ' — add Supabase keys in .env to enable this section'}.
            </p>
          )}

          {!loadingList && items.length > 0 && (
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
                className="flex min-w-0 flex-1 gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
                style={{ scrollbarWidth: 'thin' }}
              >
                {items.map((rec) => (
                  <article
                    key={rec.id}
                    className="snap-start shrink-0 w-[min(100%,22rem)] sm:w-[24rem] bg-gray-50 dark:bg-dark-light rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      {rec.author_avatar ? (
                        <img
                          src={rec.author_avatar}
                          alt=""
                          className="w-12 h-12 rounded-full object-cover border border-gray-200 dark:border-gray-700"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-lg">
                          {rec.author_name?.charAt(0) || '?'}
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        {rec.linkedin_url ? (
                          <a
                            href={rec.linkedin_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-gray-900 dark:text-white hover:text-primary transition-colors line-clamp-2"
                          >
                            {rec.author_name}
                          </a>
                        ) : (
                          <p className="font-semibold text-gray-900 dark:text-white line-clamp-2">{rec.author_name}</p>
                        )}
                        {rec.author_headline && (
                          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mt-0.5">{rec.author_headline}</p>
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

        <div className="max-w-xl mx-auto bg-gray-50 dark:bg-dark-light rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800">
          {!configured && (
            <p className="text-sm text-amber-800 dark:text-amber-200 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-lg px-4 py-3 mb-4">
              Set <code className="text-xs">VITE_SUPABASE_URL</code> and{' '}
              <code className="text-xs">VITE_SUPABASE_ANON_KEY</code> in <code className="text-xs">.env</code>, run the SQL
              in <code className="text-xs">supabase/recommendations.sql</code>, and enable LinkedIn (OIDC) in Supabase Auth
              settings.
            </p>
          )}

          {configured && !session && (
            <div className="text-center">
              <button
                type="button"
                onClick={handleLinkedInLogin}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0A66C2] text-white font-medium hover:opacity-95 transition-opacity"
                {...btnSoundProps()}
              >
                <Linkedin size={22} />
                Continue with LinkedIn
              </button>
              {submitError && <p className="mt-3 text-sm text-red-600 dark:text-red-400">{submitError}</p>}
            </div>
          )}

          {configured && session?.user && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-3 min-w-0">
                  {avatarFromUser(session.user) ? (
                    <img
                      src={avatarFromUser(session.user)}
                      alt=""
                      className="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-gray-700 shrink-0"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold shrink-0">
                      {displayNameFromUser(session.user).charAt(0)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="font-medium text-gray-900 dark:text-white truncate">{displayNameFromUser(session.user)}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Signed in with LinkedIn</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  {...btnSoundProps()}
                >
                  <LogOut size={16} />
                  Sign out
                </button>
              </div>

              <div>
                <label htmlFor="rec-linkedin" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your LinkedIn profile URL (optional)
                </label>
                <input
                  id="rec-linkedin"
                  type="url"
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  placeholder="https://www.linkedin.com/in/..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-sm"
                />
              </div>

              <div>
                <label htmlFor="rec-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Recommendation
                </label>
                <textarea
                  id="rec-message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setSubmitDone(false);
                  }}
                  rows={5}
                  required
                  minLength={10}
                  maxLength={2000}
                  placeholder="Share how we worked together…"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none resize-y text-sm"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{message.length} / 2000</p>
              </div>

              {submitError && <p className="text-sm text-red-600 dark:text-red-400">{submitError}</p>}
              {submitDone && (
                <p className="text-sm text-green-600 dark:text-green-400">
                  Thanks! Your recommendation was submitted and will show here after review.
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-md transition-shadow disabled:opacity-60"
                {...btnSoundProps()}
              >
                {submitting ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                Submit for review
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
