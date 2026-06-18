<script setup lang="ts">
import { PowerIcon, SecurityWarningIcon, Shield01Icon } from '@hugeicons/core-free-icons'

import { Icon } from '@/components/ui/misc'
import { Toggle } from '@/components/ui/toggle'

const { settings } = useSettings()
</script>

<template>
  <div class="flex flex-col items-center">
    <Toggle
      v-model="settings.enabled"
      class="group relative my-14 size-28 rounded-full border-3 border-border transition-all duration-300 hover:bg-transparent data-[state=on]:border-red-500 data-[state=on]:bg-red-400/10"
    >
      <Icon :icon="PowerIcon" class="size-10" />
      <div
        class="pointer-events-none absolute -inset-8 rounded-full transition-all duration-300 group-data-[state=on]:bg-red-500/10"
      />
      <div
        class="pointer-events-none absolute -inset-8 animate-[spin_4s_linear_infinite] rounded-full border-2 border-transparent mask-b-from-10% mask-b-to-70% transition-all duration-300 group-data-[state=on]:border-red-800"
      />
    </Toggle>

    <div class="flex rounded-full bg-linear-to-r from-red-500/15 to-neutral-900 px-4 py-3 text-center font-bold">
      <Transition mode="out-in" enter-active-class="animate-in duration-200 zoom-in-75 blur-in">
        <div v-if="settings.enabled" key="enabled" class="flex items-center gap-2">
          <Icon :icon="Shield01Icon" />
          <span>Spoilers have been slain</span>
        </div>
        <div v-else key="disabled" class="flex items-center gap-2">
          <Icon :icon="SecurityWarningIcon" />
          <span>Spoilers hidding on bush</span>
        </div>
      </Transition>
    </div>
  </div>
</template>
