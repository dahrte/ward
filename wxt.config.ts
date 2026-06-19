import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'wxt'

export default defineConfig({
  entrypointsDir: 'entries',
  manifest: {
    name: 'Ward',
    permissions: ['storage'],
  },
  modules: ['@wxt-dev/module-vue'],
  srcDir: 'src',
  suppressWarnings: {
    firefoxDataCollection: true,
  },
  vite: () => ({
    plugins: [tailwindcss() as any],
  }),
  webExt: {
    binaries: {
      firefox: '/usr/bin/zen-browser',
    },
  },
})
