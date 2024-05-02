/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff', // Cambia el color primario según tus preferencias
        secondary: '#f5f5f5' // Cambia el color secundario según tus preferencias
      },
      fontFamily: {
        custom: ['Nunito', 'sans-serif'] // Cambia la fuente según tus preferencias
      }
    }
  },
  plugins: []
}
