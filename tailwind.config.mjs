/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      {
        modern: {
          primary: "#00d8d0", // Rich Electric Blue
          secondary: "#6b38fb", // Cyan (Process)
          accent: "#fcbf1e", // Yellow (Crayola)
          neutral: "#2d3748", // Blue Gray (Dark)
          "base-100": "#1a202c", // Jet
        },
      },
    ],
  },
};
