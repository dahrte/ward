<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { reactiveOmit } from '@vueuse/core'
import { type LabelProps } from 'reka-ui'

import Label from '@/components/ui/label/Label.vue'
import { cn } from '@/utils'

interface FieldLabelProps extends LabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<FieldLabelProps>()

const forwarded = reactiveOmit(props, 'class')
</script>

<template>
  <Label
    v-bind="forwarded"
    data-slot="field-label"
    :class="
      cn(
        'group/field-label peer/field-label relative flex w-fit gap-2',
        'has-data-[state=checked]:border-ring/50! has-data-[state=checked]:ring-3 has-data-[state=checked]:ring-ring/20',
        'has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:rounded-[10px] has-[>[data-slot=field]]:border has-[>[data-slot=field]]:border-control has-[>[data-slot=field]]:p-4 dark:has-[>[data-slot=field]]:bg-control/20',
        props.class,
      )
    "
  >
    <slot />
  </Label>
</template>
