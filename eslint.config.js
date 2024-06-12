export default [
  {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:astro/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      './node_modules/ts-standard/eslintrc.json'
    ],
    parserOptions: {
      project: './tsconfig.json'
    },
    ignorePatterns: ['dist', '.eslintrc.cjs', 'postcss.config.js'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
      '@typescript-eslint/restrict-plus-operands': 'error',
      '@typescript-eslint/no-misused-promises': [2, {
        checksVoidReturn: {
          attributes: false
        }
      }]
    }
  }
]
