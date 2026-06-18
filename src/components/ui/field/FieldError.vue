<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { computed, useSlots } from 'vue'

import { cn } from '@/utils'

interface FieldErrorProps {
  class?: HTMLAttributes['class']
  errors?: Array<{ message?: string } | undefined>
}

const props = defineProps<FieldErrorProps>()
const slots = useSlots()

const uniqueErrors = computed(() => {
  if (!props.errors?.length) {
    return []
  }

  return [...new Map(props.errors.filter(Boolean).map((error) => [error?.message, error])).values()]
})

const hasContent = computed(() => {
  return !!slots.default || uniqueErrors.value.length > 0
})
</script>

<template>
  <div
    v-if="hasContent"
    role="alert"
    data-slot="field-error"
    :class="cn('text-sm/5 font-normal text-destructive', props.class)"
  >
    <slot v-if="$slots.default" />

    <template v-else-if="uniqueErrors.length === 1">
      {{ uniqueErrors[0]?.message }}
    </template>

    <ul v-else class="flex list-inside list-disc flex-col gap-1">
      <li v-for="(error, index) in uniqueErrors" :key="index">
        {{ error?.message }}
      </li>
    </ul>
  </div>
</template>
