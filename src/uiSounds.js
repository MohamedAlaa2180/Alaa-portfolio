const base = import.meta.env.BASE_URL;

let lastHover = 0;
const HOVER_GAP_MS = 55;

function playFile(name) {
  const audio = new Audio(`${base}sounds/${name}.mp3`);
  audio.volume = 0.38;
  void audio.play().catch(() => {});
}

function throttledHover(playFn) {
  const t = Date.now();
  if (t - lastHover < HOVER_GAP_MS) return;
  lastHover = t;
  playFn();
}

export function playHover() {
  throttledHover(() => playFile('hover'));
}

export function playClick() {
  playFile('click');
}

export function playCardHover() {
  throttledHover(() => playFile('cardhover'));
}

export function playCardClick() {
  playFile('cardclick');
}

export function playOpenCard() {
  playFile('opencard');
}

export function playCloseCard() {
  playFile('closecard');
}

export function playOpenLink() {
  playFile('openlink');
}

export function btnSoundProps(handlers = {}) {
  return {
    ...handlers,
    onMouseEnter: (e) => {
      playHover();
      handlers.onMouseEnter?.(e);
    },
    onMouseDown: (e) => {
      if (e.button === 0) playClick();
      handlers.onMouseDown?.(e);
    },
  };
}

export function externalLinkSoundProps(handlers = {}) {
  return {
    ...handlers,
    onMouseEnter: (e) => {
      playHover();
      handlers.onMouseEnter?.(e);
    },
    onMouseDown: (e) => {
      if (e.button === 0) playOpenLink();
      handlers.onMouseDown?.(e);
    },
  };
}

export function projectCardSoundProps(handlers = {}) {
  return {
    ...handlers,
    onMouseEnter: (e) => {
      playCardHover();
      handlers.onMouseEnter?.(e);
    },
    onMouseDown: (e) => {
      if (e.button === 0) playCardClick();
      handlers.onMouseDown?.(e);
    },
  };
}
