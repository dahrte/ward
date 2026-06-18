<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils'

interface DrawerHeaderProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<DrawerHeaderProps>()
</script>

<template>
  <div data-slot="drawer-header" :class="cn('flex p-4', props.class)">
    <slot />
  </div>
</template>
