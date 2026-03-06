import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        cyanAccent: '#00F0FF',
        magentaAccent: '#FF00E5'
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-jetbrains-mono)']
      },
      boxShadow: {
        neon: '0 0 40px rgba(0, 240, 255, 0.25), 0 0 20px rgba(255, 0, 229, 0.2)'
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};

export default config;
