<script setup lang="ts">
import { Settings02Icon } from '@hugeicons/core-free-icons'

import Blur from '@/components/settings/Blur.vue'
import Targets from '@/components/settings/Targets.vue'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Icon } from '@/components/ui/misc'
</script>

<template>
  <Drawer>
    <DrawerTrigger as-child>
      <Button icon variant="ghost" size="sm" aria-label="close" class="text-muted-content hover:bg-transparent">
        <Icon :icon="Settings02Icon" class="size-4" />
      </Button>
    </DrawerTrigger>

    <DrawerContent side="bottom" class="scrollbar-none overflow-y-auto p-4">
      <DrawerHeader class="shrink-0 items-start justify-between px-0 pt-2">
        <DrawerTitle class="text-lg">Settings</DrawerTitle>
        <DrawerClose class="hover:bg-transparent hover:text-white" />
      </DrawerHeader>

      <div class="space-y-6 py-4">
        <Blur />
        <Targets />
      </div>
    </DrawerContent>
  </Drawer>
</template>
