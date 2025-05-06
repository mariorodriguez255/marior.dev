/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          mono: ['var(--font-mono)'],
          display: ['var(--font-display)'],
          serif: ['var(--font-serif)'],
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }