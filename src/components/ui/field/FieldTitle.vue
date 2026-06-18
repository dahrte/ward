<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-slot="field-label"
    :class="
      cn('flex w-fit items-center gap-2 text-sm/5 font-medium group-data-[disabled=true]:opacity-50', props.class)
    "
  >
    <slot />
  </div>
</template>
