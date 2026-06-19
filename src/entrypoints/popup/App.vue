<script setup lang="ts">
import Header from '@/components/Header.vue'
import Power from '@/components/settings/Power.vue'
import { useSettings } from '@/composables/useSettings'
const { loaded } = useSettings()
</script>

<template>
  <template v-if="loaded">
    <Header />

    <main>
      <Power />
    </main>
  </template>
</template>
