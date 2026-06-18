<script setup lang="ts">
import { Cancel01Icon } from '@hugeicons/core-free-icons'
import { DialogClose, type DialogCloseProps } from 'reka-ui'

import { Button } from '../button'
import { Icon } from '../misc'

const props = defineProps<DialogCloseProps>()
</script>

<template>
  <DialogClose v-bind="props" as-child data-slot="drawer-close">
    <Button icon variant="ghost" size="sm" aria-label="close" class="shrink-0 text-muted-content">
      <Icon :icon="Cancel01Icon" aria-hidden="true" />
    </Button>
  </DialogClose>
</template>
