/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        appetite: ["Appetite"],
        plutobold: ["plutobold"],
        plutocondbold: ["Plutocondbold"],
        plutocondlight: ["Plutocondlight"],
        plutolight: ["Plutolight"],
        plutomedium: ["Plutomedium"],
        poppinsmedium: ["Poppinsmedium"],
        riftsoftbold: ["Riftsoftbold"],
        simplesummer: ["Simplesummer"],
        sundaygrapes: ["Sundaygrapes"],
      },
      colors: {
        "bg-red-100": "#fee2e2",
        "bg-red-700": "#b91c1c",
      },
    },
  },
  plugins: [],
};
