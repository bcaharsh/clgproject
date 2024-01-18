/** @type {import('tailwindcss').Config} */
const { default: theme } = require('@material-tailwind/react/theme');
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [ "./src/Component/*.js"],
  theme: {
    fontFamily:{
      'display': ['Arial']
    },

    backgroundColor:theme=>({
      ...theme('colors'),
      'active':'#6b7908',
      'sand':'#B39C4D',
      'hunter-green':'#34623F',
      'moss-green':'#768948'
    }),
    textColor: theme=>({
      ...theme("colors"),
      'active':'#6b7908',
      'sand':'#B39C4D',
      'hunter-green':'#34623F',
      'moss-green':'#768948'
    }),borderColor: theme => ({
      ...theme("colors"),
      'active':'#6b7908',
      'sand':'#B39C4D',
      'hunter-green':'#34623F',
      'moss-green':'#768948',
    }),
    extend: {
      backgroundColor:['active','sand'],
      fontFamily:['display'],
    },
  },
  plugins: [],
});


