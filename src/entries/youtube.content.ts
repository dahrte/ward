import type { UserSettingsStorage } from '@/types'

import { YouTube } from '@/core/platforms'
import { UserSettings } from '@/core/storage'
import { injectAttributes, injectInlineStyles } from '@/core/styles-manager'

export default defineContentScript({
  matches: ['*://*.youtube.com/*'],
  runAt: 'document_start',
  async main() {
    const settings = await UserSettings.getValue().then((raw) => JSON.parse(raw) as UserSettingsStorage)

    injectInlineStyles(YouTube)
    injectAttributes(settings)

    UserSettings.watch((newRawSettings) => {
      const newSettings = JSON.parse(newRawSettings) as UserSettingsStorage
      injectAttributes(newSettings)
    })
  },
})
