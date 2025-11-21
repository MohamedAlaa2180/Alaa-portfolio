export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#8b5cf6',
        dark: '#0f172a',
        'dark-light': '#1e293b',
      },
      fontFamily: {
        sans: ['Cascadia Code', 'Consolas', 'Monaco', 'monospace'],
        mono: ['Cascadia Code', 'Consolas', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [],
}

