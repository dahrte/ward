<script setup lang="ts">
import { cn } from '@/utils'

import { fieldVariants, type FieldProps } from './variants'

const props = defineProps<FieldProps>()
</script>

<template>
  <div
    role="group"
    data-slot="field"
    :data-orientation="orientation"
    :class="cn(fieldVariants({ orientation }), props.class)"
  >
    <slot />
  </div>
</template>
