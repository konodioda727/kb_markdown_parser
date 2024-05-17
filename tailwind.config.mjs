/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        material: ["Material Icons"]
      },
      colors: {
        'gold': '#ffd700',
        'dark': '#282c34',
        'blur-text': 'rgba(0, 0, 0, 0.4)',
        'code-bg': '#f7f7f7',
        'quote-bg': 'rgba(0, 0, 0, 0.05)',
        'border': '#a1a4a8',
        'border-hover': '#6a737d',
        'text': '#444',
        'text-muted': '#666',
        'text-faded': '#999',
        'a': '#111',
        'bg': '#f7f7f7',
        'accent': '#000',
        'block-note-bg': 'rgba(25, 134, 255, 0.16)',
        'block-tip-bg': 'rgba(0, 191, 165, 0.16)',
        'block-important-bg': 'rgba(153, 102, 232, 0.16)',
        'block-warning-bg': 'rgba(234, 179, 8, 0.16)',
        'block-caution-bg': 'rgba(244, 63, 94, 0.16)',
        'select-text-bg': 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

