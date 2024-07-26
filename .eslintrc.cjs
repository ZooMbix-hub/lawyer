module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-console': 'warn',
    'quotes': ['warn', 'single'],
    'prefer-const': 'warn',
    'indent': ['warn', 2],
    'max-len': ['warn', {'code': 120}],
    'semi': ['warn', 'always'],
    'object-curly-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never']
  },
}
