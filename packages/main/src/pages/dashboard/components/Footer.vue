<template>
  <div class="text-center text-sm text-slate-400 p-4 border-t flex-none" v-memo="[]">
    © {{ currentYear }} Tetap. All rights reserved.
  </div>
</template>

<script lang="ts" setup>
const currentYear = new Date().getFullYear()
</script>
