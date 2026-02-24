import vitest from '@vitest/eslint-plugin';
import prettier from 'eslint-config-prettier';
import oxlint from 'eslint-plugin-oxlint';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  { ignores: ['domains/*/nuxt.config.ts', 'eslint.config.ts'] },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/block-order': [
        'error',
        {
          order: ['script:not([setup])', 'script[setup]', 'template', 'style'],
        },
      ],
      'vue/define-macros-order': ['error'],
      'vue/define-props-declaration': ['error'],
      'vue/no-unused-emit-declarations': ['error'],
      'vue/no-unused-properties': ['error'],
      'vue/no-unused-refs': ['error'],
      'vue/prop-name-casing': ['error', 'camelCase'],
      'vue/attribute-hyphenation': ['error', 'always'],
      'vue/custom-event-name-casing': ['error', 'kebab-case'],
      'vue/define-props-destructuring': [
        'error',
        {
          destructure: 'always',
        },
      ],
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        { allowNumber: true, allowBoolean: true },
      ],
    },
  },
  {
    files: ['**/*'],
    rules: {
      'func-style': ['error', 'declaration'],
    },
  },
  {
    files: ['**/*.test.ts', '**/*.spec.ts'],
    plugins: { vitest },
    rules: {
      ...vitest.configs.recommended.rules,
      'vitest/consistent-test-it': ['error', { fn: 'test' }],
    },
  },
  ...oxlint.configs['flat/recommended'],
  prettier,
);
