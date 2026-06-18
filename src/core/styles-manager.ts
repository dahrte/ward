import type { PlatformTargetSelectors, UserSettingsStorage, Target } from '@/types'

import { TARGETS } from '@/constants'

const STYLE_ID = 'ward-styles'

function buildRule(target: string, selectors: string[]) {
  return selectors.map((selector) => `html[data-ward-${target}] ${selector}`).join(',\n')
}

export function injectInlineStyles(selectors: PlatformTargetSelectors) {
  if (document.getElementById(STYLE_ID)) return

  const style = document.createElement('style')
  style.id = STYLE_ID

  for (const target of TARGETS) {
    style.textContent += `
      ${buildRule(target.name, selectors[target.name])} {
        filter: blur(var(--ward-blur));
        transition: filter 400ms ease;
      }
    `
  }

  document.head.appendChild(style)
}

export function injectAttributes(settings: UserSettingsStorage) {
  const html = document.documentElement

  for (const key of Object.keys(settings.targets)) {
    html.toggleAttribute(`data-ward-${key}`, settings.enabled && settings.targets[key as Target])
  }

  html.style.setProperty('--ward-blur', `${settings.blur}px`)
}
