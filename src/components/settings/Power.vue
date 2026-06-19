<script setup lang="ts">
import { PowerIcon, SecurityWarningIcon, Sword01Icon } from '@hugeicons/core-free-icons'

import { Icon } from '@/components/ui/misc'
import { Toggle } from '@/components/ui/toggle'

const { settings } = useSettings()
</script>

<template>
  <div class="flex flex-col items-center" :style="{ '--duration': '300ms', '--easing': 'cubic-bezier(0,0.55,0.45,1)' }">
    <Toggle
      v-model="settings.enabled"
      :class="[
        'group relative my-18 size-28 rounded-full border-3 border-border shadow-[0px_0px_15px_5px] shadow-transparent hover:bg-transparent',
        'transition-all duration-(--duration) ease-(--easing) data-[state=on]:border-red-500 data-[state=on]:bg-red-500/30 data-[state=on]:shadow-red-500/30',
      ]"
    >
      <Icon :icon="PowerIcon" :stroke-width="3" class="size-10" />
      <div
        :class="[
          'pointer-events-none absolute -inset-10 rounded-full',
          'transition-all duration-(--duration) ease-(--easing) group-data-[state=on]:bg-red-500/10',
        ]"
      />
      <div
        :class="[
          'pointer-events-none absolute -inset-10 animate-[spin_4s_linear_infinite] rounded-full border-2 border-transparent mask-b-from-10% mask-b-to-70%',
          'transition-all duration-(--duration) ease-(--easing) group-data-[state=on]:border-red-800',
        ]"
      />
    </Toggle>

    <div class="flex rounded-full bg-neutral-900 px-4 py-3 text-center font-bold">
      <Transition mode="out-in" enter-active-class="animate-in duration-(--duration) zoom-in-95 blur-in-5">
        <div v-if="settings.enabled" key="enabled" class="flex items-center gap-2">
          <Icon :icon="Sword01Icon" class="size-5" />
          <span class="text-sm select-none">Spoilers have been slain</span>
        </div>
        <div v-else key="disabled" class="flex items-center gap-2">
          <Icon :icon="SecurityWarningIcon" class="size-5" />
          <span class="text-sm select-none">Spoilers hidding on bush</span>
        </div>
      </Transition>
    </div>
  </div>
</template>
