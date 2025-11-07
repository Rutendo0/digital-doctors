/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
        'bg-light': 'var(--bg-light)',
        'bg-secondary': 'var(--bg-secondary)',
        'text-dark': 'var(--text-dark)',
        'text-muted': 'var(--text-muted)',
        'border-color': 'var(--border-color)',
      },
    },
  },
  plugins: [],
}
