<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils'

interface FieldLegendProps {
  variant?: 'legend' | 'label'
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<FieldLegendProps>(), {
  variant: 'legend',
})
</script>

<template>
  <legend
    data-slot="field-legend"
    :data-variant="variant"
    :class="
      cn('mb-1 font-medium text-content data-[variant=label]:text-sm/5 data-[variant=legend]:text-base', props.class)
    "
  >
    <slot />
  </legend>
</template>
