/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#080B16',
        dusk: '#17122E',
        neon: '#672EFF',
        cyan: { DEFAULT: '#00D9FF' },
        steel: '#A8B5D1',
        ghost: '#F5F7FF',
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(0, 217, 255, 0.35)',
        'glow-neon': '0 0 28px rgba(103, 46, 255, 0.45)',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 1px)' },
          '40%': { transform: 'translate(2px, -1px)' },
          '60%': { transform: 'translate(-1px, -1px)' },
          '80%': { transform: 'translate(1px, 2px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        flicker: 'flicker 3s ease-in-out infinite',
        glitch: 'glitch 0.4s steps(2) infinite',
        scan: 'scan 3.5s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
