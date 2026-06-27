import vitest from '@vitest/eslint-plugin';
import prettier from 'eslint-config-prettier';
import oxlint from 'eslint-plugin-oxlint';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  { ignores: ['domains/*/nuxt.config.ts', 'eslint.config.ts'] },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/attribute-hyphenation': ['error', 'always'],
      'vue/block-order': [
        'error',
        {
          order: ['script:not([setup])', 'script[setup]', 'template', 'style'],
        },
      ],
      'vue/custom-event-name-casing': ['error', 'kebab-case'],
      'vue/define-macros-order': ['error'],
      'vue/define-props-declaration': ['error'],
      'vue/define-props-destructuring': [
        'error',
        {
          destructure: 'always',
        },
      ],
      'vue/no-deprecated-slot-attribute': [
        'error',
        {
          ignoreParents: ['/^media-/', '/^video-/', '/^live-video-/'],
        },
      ],
      'vue/no-unused-emit-declarations': ['error'],
      'vue/no-unused-properties': ['error'],
      'vue/no-unused-refs': ['error'],
      'vue/prop-name-casing': ['error', 'camelCase'],
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unsafe-type-assertion': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/prefer-readonly-parameter-types': 'off',
      '@typescript-eslint/restrict-template-expressions': ['error', { allowBoolean: true, allowNumber: true }],
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/unbound-method': 'off',
      'no-nested-ternary': 'off',
      'require-await': 'off',
      'sort-keys': 'off',
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
