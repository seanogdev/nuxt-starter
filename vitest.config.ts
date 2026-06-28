import { defineVitestConfig } from '@nuxt/test-utils/config';
import { playwright } from '@vitest/browser-playwright';

export default defineVitestConfig({
  test: {
    browser: {
      enabled: true,
      headless: true,
      instances: [{ browser: 'chromium' }],
      provider: playwright(),
    },
  },
});
