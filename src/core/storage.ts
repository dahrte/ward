import { USER_DEFAULT_SETTINGS } from '@/constants'

export const UserSettings = storage.defineItem<string>('local:settings', {
  init: () => JSON.stringify(USER_DEFAULT_SETTINGS),
})
