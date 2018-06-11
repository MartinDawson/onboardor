module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['airbnb'],
  rules: {
    'max-len': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': 0,
    'function-paren-newline': 0,
    'react/no-typos': 0, // wait to be resolved https://github.com/yannickcr/eslint-plugin-react/issues/1389
    'jsx-a11y/anchor-is-valid': 0,
    'no-restricted-globals': 0
  },
  overrides: [
    {
      files: [
        '**/actions.js'
      ],
      rules: {
        'import/prefer-default-export': 'off'
      }
    }
  ],
  plugins: [
    'react',
    'relay',
  ]
}
