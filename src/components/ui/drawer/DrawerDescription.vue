<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { reactiveOmit } from '@vueuse/core'
import { DialogDescription, type DialogDescriptionProps } from 'reka-ui'

import { cn } from '@/utils'

interface DrawerDescriptionProps extends DialogDescriptionProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<DrawerDescriptionProps>()

const forwarded = reactiveOmit(props, 'class')
</script>

<template>
  <DialogDescription
    v-bind="forwarded"
    data-slot="drawer-description"
    :class="cn('text-sm text-muted-content', props.class)"
  >
    <slot />
  </DialogDescription>
</template>
