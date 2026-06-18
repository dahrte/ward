<script setup lang="ts">
import { HugeiconsIcon } from '@hugeicons/vue'

interface IconProps {
  icon: object
  size?: number
  color?: string
  altIcon?: object
  showAlt?: boolean
  strokeWidth?: number
}

const props = withDefaults(defineProps<IconProps>(), {
  size: 16,
  color: 'currentColor',
  showAlt: false,
  strokeWidth: 2,
})
</script>

<template>
  <HugeiconsIcon v-bind="props" />
</template>
