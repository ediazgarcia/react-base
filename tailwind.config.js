/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#122731', // Color primario personalizado
        secondary: '#617682', // Color secundario personalizado
        accent: '#38bdf8', // Un color de acento (opcional)
        neutral: '#f5f5f5', // Fondo o tonos neutros (opcional)
      },
    },
  },
  plugins: [],
}

