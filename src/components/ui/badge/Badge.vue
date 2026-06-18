<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive } from 'reka-ui'

import { cn } from '@/utils'

import { type BadgeProps, badgeVariants } from './variants'

const props = withDefaults(defineProps<BadgeProps>(), {
  as: 'div',
  size: 'sm',
  shape: 'rounded',
  color: 'neutral',
  variant: 'filled',
})

const forwarded = reactiveOmit(props, 'class', 'variant', 'color', 'shape', 'size')
</script>

<template>
  <Primitive
    v-bind="forwarded"
    data-slot="badge"
    :class="cn(badgeVariants({ size, color, shape, variant }), props.class)"
  >
    <slot />
  </Primitive>
</template>
