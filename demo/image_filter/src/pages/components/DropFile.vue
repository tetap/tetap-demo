<template>
  <div
    class="absolute top-0 left-0 w-full h-full flex flex-col cursor-pointer items-center justify-center px-4 py-16 text-gray-600 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed"
    :class="[
      { 'bg-gray-200': isDown, 'border-gray-300': isDown },
      !isDownFile ? 'opacity-100' : 'opacity-0'
    ]"
    @dragover="dragover"
    @dragleave="dragleave"
    @drop.stop.prevent="drop"
    @click="click"
  >
    <template v-if="!isDown">
      <div>放入文件/选择文件</div>
      <div class="text-sm mt-2">支持图片/视频</div>
    </template>
    <template v-else>
      <div>放入文件</div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useDrop } from '@tetap-demo/tools/hooks/drop'

const emits = defineEmits<{ (e: 'change', file: File): void }>()
const isDownFile = ref(false)
const extensions = ['.jpg', '.jpeg', '.png', '.bmp', '.webp', '.mp4']
const { isDown, dragover, dragleave, drop, click } = useDrop(extensions, (file) => {
  isDownFile.value = true
  emits('change', file)
})
</script>

<style lang="scss" scoped></style>
