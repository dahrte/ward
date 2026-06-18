import { TARGETS } from '@/constants'

export type Target = (typeof TARGETS)[number]['target']

export interface UserSettingsStorage {
  /**
   * If the blur effect should be enabled.
   *
   * @default true
   */
  enabled: boolean

  /**
   * The strength of the blur effect.
   *
   * @default 4
   */
  blur: number

  /**
   * Targets for which the blur effect is enabled.
   */
  targets: Record<Target, boolean>
}

export type PlatformTargetSelectors = Record<Target, string[]>
