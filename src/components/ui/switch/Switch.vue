<script setup lang="ts">
import type { SwitchRootEmits, SwitchRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

import { reactiveOmit } from '@vueuse/core'
import { SwitchRoot, SwitchThumb, useForwardPropsEmits } from 'reka-ui'

import { cn } from '@/utils'

export interface SwitchProps extends SwitchRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<SwitchProps>()
const emits = defineEmits<SwitchRootEmits>()

const forwarded = useForwardPropsEmits(reactiveOmit(props, 'class'), emits)
</script>

<template>
  <SwitchRoot
    v-bind="forwarded"
    data-slot="switch"
    :class="
      cn(
        'group h-5 w-8 shrink-0 rounded-full bg-muted data-[state=checked]:bg-primary',
        'focus-visible:ring-3 focus-visible:ring-ring/15 focus-visible:outline-none',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
  >
    <SwitchThumb
      data-slot="switch-thumb"
      :class="[
        'my-auto flex size-4 translate-x-0.5 items-center justify-center rounded-full bg-primary-content shadow-xs transition-all',
        'data-[state=checked]:translate-x-3.5 group-disabled:data-[state=checked]:translate-x-3.5',
      ]"
    />
  </SwitchRoot>
</template>
