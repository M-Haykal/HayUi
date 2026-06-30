/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./docs/**/*.{js,ts,jsx,tsx,astro}",
  ],
  theme: {
    fontFamily: {
      sans: [
        'Satoshi',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'sans-serif',
      ],
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '500', // Override semibold to use 500 instead of 600
      bold: '500',     // Override bold to use 500 instead of 700
    },
    extend: {
      colors: {
        // Neutral Palette (Soft & Professional)
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

        // Soft Core Palette
        blue: {
          50: "#E0F2FE",
          100: "#B3E5FC",
          200: "#81D4FA",
          300: "#4FC3F7",
          400: "#29B6F6",
          500: "#03A9F4",
          600: "#039BE5",
          700: "#0288D1",
          800: "#0277BD",
          900: "#01579B",
        },
        green: {
          50: "#E8F5E9",
          100: "#C8E6C9",
          200: "#A5D6A7",
          300: "#81C784",
          400: "#66BB6A",
          500: "#4CAF50",
          600: "#43A047",
          700: "#388E3C",
          800: "#2E7D32",
          900: "#1B5E20",
        },
        amber: {
          50: "#FFF3E0",
          100: "#FFE0B2",
          200: "#FFCC80",
          300: "#FFB74D",
          400: "#FFA726",
          500: "#FF9800",
          600: "#F57C00",
          700: "#E65100",
          800: "#D84315",
          900: "#BF360C",
        },
        red: {
          50: "#FFEBEE",
          100: "#FFCDD2",
          200: "#EF9A9A",
          300: "#E57373",
          400: "#EF5350",
          500: "#F44336",
          600: "#E53935",
          700: "#D32F2F",
          800: "#C62828",
          900: "#B71C1C",
        },

        // Brand/Primary (Soft Blue is our primary)
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

        // Semantic colors
        success: {
          50: "#E8F5E9",
          100: "#C8E6C9",
          400: "#66BB6A",
          600: "#43A047",
        },
        warning: {
          50: "#FFF3E0",
          100: "#FFE0B2",
          400: "#FFA726",
          600: "#F57C00",
        },
        error: {
          50: "#FFEBEE",
          100: "#FFCDD2",
          400: "#EF5350",
          600: "#E53935",
        },
        info: {
          50: "#E0F2FE",
          100: "#B3E5FC",
          400: "#29B6F6",
          600: "#039BE5",
        },
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
      },
      borderRadius: {
        none: "0",
        sm: "0.25rem",
        base: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        full: "9999px",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
      },
    },
  },
  plugins: [],
}