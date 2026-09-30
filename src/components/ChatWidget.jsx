import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import { btnSoundProps, playCloseCard, playOpenCard } from '../uiSounds';

const CHAT_API_URL = (
  import.meta.env.VITE_CHAT_API_URL || 'https://portfolio-assistant.onrender.com'
).replace(/\/$/, '');

const SUGGESTIONS = [
  'What is Kortifo?',
  'Which projects are on Meta Quest?',
  'What is his current role?',
];

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [sending, setSending] = useState(false);
  const [slow, setSlow] = useState(false);
  const [error, setError] = useState('');
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, sending, error]);

  useEffect(() => {
    if (!sending) {
      setSlow(false);
      return;
    }
    const timer = setTimeout(() => setSlow(true), 4000);
    return () => clearTimeout(timer);
  }, [sending]);

  const toggle = () => {
    if (open) playCloseCard();
    else playOpenCard();
    setOpen((value) => !value);
  };

  const ask = async (text) => {
    const message = text.trim();
    if (!message || sending) return;

    const history = messages.map(({ role, content }) => ({ role, content }));
    setMessages((current) => [...current, { role: 'user', content: message }]);
    setInput('');
    setError('');
    setSending(true);

    try {
      const response = await fetch(`${CHAT_API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, history }),
      });
      const data = await response.json().catch(() => null);
      if (!response.ok) {
        const detail = data?.detail;
        throw new Error(
          typeof detail === 'string' ? detail : 'The assistant is unavailable right now.'
        );
      }
      setMessages((current) => [
        ...current,
        { role: 'assistant', content: data?.answer || 'I could not find an answer.' },
      ]);
    } catch (err) {
      setError(err.message || 'The assistant is unavailable right now.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[70] flex flex-col items-end gap-3">
      {open && (
        <section
          className="flex w-[min(100vw-2rem,24rem)] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-dark-light"
          style={{ height: 'min(32rem, calc(100vh - 6rem))' }}
          aria-label="Portfolio assistant"
        >
          <header className="flex items-center justify-between bg-gradient-to-r from-primary to-secondary px-4 py-3 text-white">
            <div>
              <h2 className="text-sm font-semibold">Ask about Mohamed</h2>
              <p className="text-xs text-white/80">Projects, experience, and skills</p>
            </div>
            <button
              type="button"
              onClick={toggle}
              className="rounded-lg p-1 hover:bg-white/15"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.length === 0 && (
              <div className="space-y-3">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Ask a recruiter-style question about Mohamed&apos;s background.
                </p>
                <div className="flex flex-col gap-2">
                  {SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => ask(suggestion)}
                      className="rounded-lg border border-gray-200 px-3 py-2 text-left text-sm text-gray-700 transition-colors hover:border-primary hover:text-primary dark:border-gray-700 dark:text-gray-200 dark:hover:border-primary"
                      {...btnSoundProps()}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm ${
                  message.role === 'user'
                    ? 'ml-auto bg-primary text-white'
                    : 'bg-gray-100 text-gray-800 dark:bg-dark dark:text-gray-100'
                }`}
              >
                {message.content}
              </div>
            ))}

            {sending && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {slow ? 'Waking the assistant up. The first reply can take a minute.' : 'Thinking…'}
              </p>
            )}
            {error && <p className="text-sm text-red-500">{error}</p>}
            <div ref={bottomRef} />
          </div>

          <form
            className="flex gap-2 border-t border-gray-200 p-3 dark:border-gray-700"
            onSubmit={(event) => {
              event.preventDefault();
              ask(input);
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask a question…"
              disabled={sending}
              className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-primary dark:border-gray-700 dark:bg-dark"
              aria-label="Your question"
            />
            <button
              type="submit"
              disabled={sending || !input.trim()}
              className="rounded-lg bg-primary p-2 text-white transition-colors hover:bg-primary/90 disabled:opacity-50"
              aria-label="Send question"
              {...btnSoundProps()}
            >
              <Send size={18} />
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={toggle}
        className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl"
        aria-expanded={open}
        aria-label={open ? 'Close assistant' : 'Ask about Mohamed'}
        {...btnSoundProps()}
      >
        <MessageCircle size={20} />
        {open ? 'Close' : 'Ask me'}
      </button>
    </div>
  );
};

export default ChatWidget;
