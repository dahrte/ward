import { defineConfig } from 'vite-plus'

export default defineConfig({
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
    rules: {
      'no-console': 'off',
      'no-debugger': 'warn',
      'no-unused-vars': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
      'typescript/consistent-type-imports': 'error',
      'typescript/no-import-type-side-effects': 'warn',
      'typescript/no-unused-vars': 'off',
    },
    plugins: ['vue'],
  },
  fmt: {
    printWidth: 120,
    semi: false,
    singleQuote: true,
    sortImports: {
      groups: [
        'type-import',
        ['value-builtin', 'value-external'],
        'type-internal',
        'value-internal',
        ['type-parent', 'type-sibling', 'type-index'],
        ['value-parent', 'value-sibling', 'value-index'],
        'unknown',
      ],
      internalPattern: ['@/'],
    },
    sortPackageJson: {
      sortScripts: true,
    },
    sortTailwindcss: {
      attributes: [':class', 'class', 'enter-active-class', 'leave-active-class'],
      functions: ['cn', 'tv'],
      stylesheet: './src/entrypoints/popup/global.css',
    },
  },
  staged: {
    '*.{js,jsx,mjs,ts,tsx,vue}': 'vp check --fix',
    '*.{json,jsonc}': 'vp fmt --write',
  },
})
