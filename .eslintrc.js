module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  //extends: ['airbnb-base','prettier'],
   extends:['eslint:recommended'],

  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-use-before-define': ['error', { functions: false }],
  },
};

