module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'dot-notation': "error",
    'quote-props': ["error", "consistent"],
    "comma-dangle": ["error", "never"],
    'max-len': ["error", { "code": 180 }],
    'comma-style': [0, 'last'],
    'quotes': [0, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
