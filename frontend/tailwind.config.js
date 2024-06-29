/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        fira: ["Fira Sans Condensed"],
        logo: ["Playwrite IT Moderna"],
      },
    },
  },
  plugins: [],
};
