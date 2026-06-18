<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { reactiveOmit } from '@vueuse/core'
import {
  SliderRange,
  SliderRoot,
  type SliderRootEmits,
  type SliderRootProps,
  SliderThumb,
  SliderTrack,
  useForwardPropsEmits,
} from 'reka-ui'

import { cn } from '@/utils'

interface SliderProps extends SliderRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<SliderProps>()
const emits = defineEmits<SliderRootEmits>()

const forwarded = useForwardPropsEmits(reactiveOmit(props, 'class'), emits)
</script>

<template>
  <SliderRoot
    v-bind="forwarded"
    data-slot="slider"
    :class="cn('relative flex h-5 w-full touch-none items-center select-none', props.class)"
  >
    <SliderTrack class="relative h-1.5 grow rounded-full bg-muted">
      <SliderRange class="absolute h-full rounded-full bg-primary" />
    </SliderTrack>

    <SliderThumb
      v-for="(_, key) in modelValue"
      :key="key"
      :class="[
        'relative flex size-4 items-center justify-center rounded-full border border-control bg-white outline-none',
        'focus-visible:border-ring/50 focus-visible:ring-3 focus-visible:ring-ring/20 dark:focus-visible:ring-ring/40',
      ]"
    />
  </SliderRoot>
</template>
