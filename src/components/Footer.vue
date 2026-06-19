<script setup lang="ts">
import { version } from '@@/package.json'
</script>

<template>
  <footer class="mt-8">
    <div class="flex w-full items-center justify-between px-3 py-2 text-xs text-muted-content">
      <span>v{{ version }}</span>
      <a href="https://github.com/dahrte/ward/issues">Help & Feedback</a>
    </div>
  </footer>
</template>
