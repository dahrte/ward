import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'wxt'

export default defineConfig({
  entrypointsDir: 'entries',
  manifest: {
    browser_specific_settings: {
      gecko: {
        data_collection_permissions: {
          required: ['none'],
        },
      },
    },
    name: 'Ward',
    permissions: ['storage'],
  },
  modules: ['@wxt-dev/module-vue'],
  srcDir: 'src',
  vite: () => ({
    plugins: [tailwindcss() as any],
  }),
  webExt: {
    binaries: {
      firefox: '/usr/bin/zen-browser',
    },
  },
})
