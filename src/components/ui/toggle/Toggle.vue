<script setup lang="ts">
import type { ToggleEmits, ToggleProps as _ToggleProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

import { reactiveOmit } from '@vueuse/core'
import { Toggle, useForwardPropsEmits } from 'reka-ui'

import { cn } from '@/utils'

interface ToggleProps extends _ToggleProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<ToggleProps>()
const emits = defineEmits<ToggleEmits>()

const forwarded = useForwardPropsEmits(reactiveOmit(props, 'class'), emits)
</script>

<template>
  <Toggle
    v-bind="forwarded"
    data-slot="toggle"
    :class="
      cn(
        'flex h-7 w-auto items-center justify-center gap-1 rounded-[10px] border border-transparent px-1.5 text-sm font-medium text-nowrap whitespace-nowrap text-muted-content outline-none hover:bg-interactive',
        'focus-visible:border-ring/50 focus-visible:ring-3 focus-visible:ring-ring/20 data-[state=on]:bg-interactive data-[state=on]:text-content [&_svg:not([class*=\'size-\'])]:size-4',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
  >
    <slot />
  </Toggle>
</template>
