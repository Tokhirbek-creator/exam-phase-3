module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': 0,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
    'default-param-last': 0,
    'react/button-has-type': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'max-len': 0,
  },
};
