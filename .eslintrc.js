module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: "@typescript-eslint/parser",
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ["./tsconfig.json"],
  },
  plugins: [
    'react'
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type":"off"
  }
}
