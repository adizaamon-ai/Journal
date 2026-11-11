/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#18243A',
        lavender: '#8B7CF6',
        sky: '#5DADE2',
        success: '#39A878',
        warn: '#F2B84B',
        bg: '#F7F8FC',
        ink: '#252A38',
      },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      boxShadow: { soft: '0 4px 24px -8px rgba(24,36,58,0.12)' },
    },
  },
  plugins: [],
}
