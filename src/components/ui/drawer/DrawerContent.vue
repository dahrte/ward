<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { DialogContent, type DialogContentEmits, DialogOverlay, DialogPortal, useForwardPropsEmits } from 'reka-ui'

import { cn } from '@/utils'

import { type DrawerContentProps, drawerContentVariants } from './variants'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<DrawerContentProps>()
const emits = defineEmits<DialogContentEmits>()

const forwarded = useForwardPropsEmits(reactiveOmit(props, 'class'), emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      data-slot="drawer-overlay"
      class="fixed inset-0 z-50 bg-black/10 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 supports-backdrop-filter:backdrop-blur-xs"
    />
    <DialogContent
      v-bind="{ ...forwarded, ...$attrs }"
      data-slot="drawer-content"
      :class="cn(drawerContentVariants({ side }), props.class)"
    >
      <slot />
    </DialogContent>
  </DialogPortal>
</template>
