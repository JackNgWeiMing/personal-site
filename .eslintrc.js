module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:@typescript-eslint/recommended'],
  plugins: ['prettier', '@typescript-eslint'],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        png: 'never',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': 'off', // disable if necessary
    'react/static-property-placement': 'off', // disable if necessary
    'react/jsx-props-no-spreading': 'off', // disable if necessary
    'react/require-default-props': 'off',
    'no-use-before-define': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
