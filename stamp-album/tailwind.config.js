/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#1e40af",
        
"secondary": "#60a5fa",
        
"accent": "#00ffff",
        
"neutral": "#e5e7eb",
        
"base-100": "#e5e7eb",
        
"info": "#3b82f6",
        
"success": "#4d7c0f",
        
"warning": "#ca8a04",
        
"error": "#ff0000",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

