<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <fieldset
    data-slot="field-set"
    :class="cn('flex flex-col gap-6 has-[>[data-slot=radio-group],[data-slot=checkbox-group]]:gap-3', props.class)"
  >
    <slot />
  </fieldset>
</template>
