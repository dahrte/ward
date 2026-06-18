<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils'

interface DrawerFooterProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<DrawerFooterProps>()
</script>

<template>
  <div data-slot="drawer-footer" :class="cn('flex p-4', props.class)">
    <slot />
  </div>
</template>
