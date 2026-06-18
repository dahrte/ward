<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { reactiveOmit } from '@vueuse/core'
import { Label, type LabelProps as _LabelProps } from 'reka-ui'

import { cn } from '@/utils'

interface LabelProps extends _LabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<LabelProps>()

const forwarded = reactiveOmit(props, 'class')
</script>

<template>
  <Label v-bind="forwarded" :class="cn('text-sm/5 font-medium select-none', props.class)">
    <slot />
  </Label>
</template>
