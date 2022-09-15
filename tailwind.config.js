/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      xs: "412px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "learngray": "#313133",
        "learnpurple": "#A670AF",
        "learnpurplehover": "#C797CF",
        "learnblack": "#101820",
        "learngreen": "#6FBD73",
        "loginlabels": "#b67ac0",
        "loginremember": "#dc93e8"
      },
      fontFamily: {
        gesta: ["Gesta"],
      },
    }
  },
  fontFamily: {
    gesta: ["gesta"]
  },
  plugins: [
    require("flowbite/plugin")
  ]
}
