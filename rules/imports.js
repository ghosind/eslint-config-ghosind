module.exports = {
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],

    'import/prefer-default-export': 'off',
  },
};
