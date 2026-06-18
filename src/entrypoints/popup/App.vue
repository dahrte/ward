<script setup lang="ts">
import Header from '@/components/Header.vue'
import { useSettings } from '@/composables/useSettings'
const { loaded } = useSettings()
</script>

<template>
  <template v-if="loaded">
    <Header />
  </template>
</template>
