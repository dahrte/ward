<script setup lang="ts">
import { BlurIcon } from '@hugeicons/core-free-icons'
import { watchDebounced } from '@vueuse/core'

import { Badge } from '@/components/ui/badge'
import { Icon } from '@/components/ui/misc'
import { Slider } from '@/components/ui/slider'

const { settings } = useSettings()

const blur = ref([settings.blur])

watchDebounced(
  blur,
  ([v]) => {
    settings.blur = v
  },
  { debounce: 350, deep: true },
)
</script>

<template>
  <div class="">
    <div class="mb-2 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Icon :icon="BlurIcon" class="size-4" />
        <h3 class="font-semibold">Blur strength</h3>
      </div>

      <div>
        <Badge variant="stroke">{{ blur[0] }}</Badge>
      </div>
    </div>

    <Slider v-model="blur" :min="2" :max="10" />
  </div>
</template>
