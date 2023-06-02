import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'hn-orange': '#ff6600',
        'hn-bg': '#f6f6ef'
      }
    },
  },
  plugins: [],
} satisfies Config

