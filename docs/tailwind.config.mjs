import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    path.join(__dirname, 'src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'),
    path.join(__dirname, '../src/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: "#F8FAFB",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        primary: {
          50: "#E0F2FE",
          100: "#B3E5FC",
          200: "#81D4FA",
          300: "#4FC3F7",
          400: "#29B6F6",
          500: "#03A9F4",
          600: "#039BE5",
          700: "#0288D1",
        },
        blue: {
          400: "#29B6F6",
          500: "#03A9F4",
        }
      },
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
