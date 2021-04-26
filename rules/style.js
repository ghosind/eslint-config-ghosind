module.exports = {
  rules: {
    'max-depth': ['warn', 4],

    'max-lines-per-function': [
      'warn', {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],
  },
};
