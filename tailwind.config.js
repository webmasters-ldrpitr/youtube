/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/Components/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
}


const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/Components/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
});

