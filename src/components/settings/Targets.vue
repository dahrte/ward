<script setup lang="ts">
import { Target02Icon } from '@hugeicons/core-free-icons'

import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldTitle } from '@/components/ui/field'
import { Icon } from '@/components/ui/misc'
import { Switch } from '@/components/ui/switch'
import { useSettings } from '@/composables/useSettings'
import { TARGETS } from '@/constants'

const { settings } = useSettings()
</script>

<template>
  <div>
    <div class="mb-3 flex items-center gap-2">
      <Icon :icon="Target02Icon" class="size-4" />
      <h3 class="font-semibold">Blur targets</h3>
    </div>

    <FieldGroup class="w-full">
      <FieldLabel v-for="target in TARGETS" :key="target.name">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle class="text-xs">Obfuscate {{ target.name }}</FieldTitle>
            <FieldDescription class="text-xs">
              {{ target.description }}
            </FieldDescription>
          </FieldContent>

          <Switch v-model="settings.targets[target.name]" />
        </Field>
      </FieldLabel>
    </FieldGroup>
  </div>
</template>
