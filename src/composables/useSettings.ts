import type { Unwatch } from 'wxt/utils/storage'

import type { UserSettingsStorage } from '@/types'

import { USER_DEFAULT_SETTINGS } from '@/constants'
import { UserSettings } from '@/core/storage'

const store = reactive<UserSettingsStorage>(USER_DEFAULT_SETTINGS)

export function useSettings() {
  const loaded = ref(false)

  let unwatch: Unwatch | undefined

  onMounted(async () => {
    const raw = await UserSettings.getValue()

    if (raw) {
      Object.assign(store, JSON.parse(raw))
    }

    loaded.value = true

    unwatch = UserSettings.watch((raw) => {
      if (!raw) return

      Object.assign(store, JSON.parse(raw))
    })
  })

  watch(
    store,
    (value) => {
      void UserSettings.setValue(JSON.stringify(value))
    },
    { deep: true },
  )

  onUnmounted(() => {
    unwatch?.()
  })

  return {
    settings: store,
    loaded,
  }
}
