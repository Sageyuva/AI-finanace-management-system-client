/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enabled "class" mode as per the design system [cite: 75]
  theme: {
    extend: {
      colors: {
        // A. Primary Colors (Brand Identity) [cite: 5, 8, 80]
        brand: {
          DEFAULT: '#10B981', // Emerald Green (Primary)
          dark: '#059669',    // Hover State
        },
        // Glow effect color [cite: 9, 83]
        glow: '#34D399', 
        
        // B. Background Colors (Dark Mode Base) [cite: 12, 84]
        navy: {
          DEFAULT: '#1E1B4B', // Midnight (Sidebar/Headers)
          surface: '#0F172A', // Slate 900 (Cards/Bento Items)
          deep: '#020617',    // Rich Black (App Background)
        },

        // C. Semantic Colors (Functional) 
        // Added these from the design docs to complete the functional palette
        error: '#EF4444',     // Red for expenses/alerts [cite: 21]
        warning: '#F59E0B',   // Amber for due dates [cite: 23]
        
        // AI / Intelligence Color [cite: 25, 88]
        ai: {
          DEFAULT: '#8B5CF6', // Violet
        },
      },
      fontFamily: {
        // Updated Typography based on design system recommendations [cite: 30, 93]
        // Note: You will need to import these fonts in your CSS or HTML
        sans: ['"Plus Jakarta Sans"', 'sans-serif'], 
        mono: ['"JetBrains Mono"', 'monospace'],    // For financial data [cite: 37]
        geist: ['Geist', 'sans-serif'],              // Kept your original font just in case
      },
      backgroundImage: {
        // D. The "Finura" Gradient [cite: 27, 98]
        'hero-gradient': 'linear-gradient(135deg, #1E1B4B 0%, #0F172A 50%, #10B981 100%)',
      },
    },
  },
  plugins: [],
}