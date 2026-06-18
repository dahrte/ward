<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <p data-slot="field-description" :class="cn('text-sm/5 text-muted-content', props.class)">
    <slot />
  </p>
</template>
