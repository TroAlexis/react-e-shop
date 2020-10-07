// autoprefixer - https://github.com/postcss/autoprefixer
// css-mqpacker - https://github.com/hail2u/node-css-mqpacker
// cssnano      - https://github.com/hail2u/node-css-mqpacker

module.exports = {
  plugins: {
    autoprefixer: {},
    'css-mqpacker': {},
    // put your font variants there along with the font-weight and formats in the array
    'postcss-font-magician': {
      variants: {
        'Open Sans Condensed': {
          300: [],
          700: [],
        },
      },
    },
    cssnano: {
      preset: [
        'default', {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    },
  },
};
