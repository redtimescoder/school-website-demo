/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'school-primary': '#4F46E5',
        'school-secondary': '#FACC15',
        'school-accent': '#EC4899',
        'school-bg': '#F8FAFC',
        'school-dark': '#1E293B',
      },
      borderRadius: {
        school: '1rem',
      },
    },
  },
  plugins: [],
};
