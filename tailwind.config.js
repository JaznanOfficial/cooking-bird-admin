const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        monoton: ["Monoton", "cursive", "Ubuntu", "sans-serif"],
      },
      colors: {
        "navy-900": "#231E41",
      },
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fecaca",
        },
      },
    ],
  },

  plugins: [require("daisyui", "flowbite/plugin")],
});
