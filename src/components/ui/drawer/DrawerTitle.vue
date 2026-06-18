<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { reactiveOmit } from '@vueuse/core'
import { DialogTitle, type DialogTitleProps } from 'reka-ui'

import { cn } from '@/utils'

interface DrawerTitleProps extends DialogTitleProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<DrawerTitleProps>()

const forwarded = reactiveOmit(props, 'class')
</script>

<template>
  <DialogTitle v-bind="forwarded" data-slot="drawer-title" :class="cn('text-content-strong font-medium', props.class)">
    <slot />
  </DialogTitle>
</template>
