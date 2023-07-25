<template>
  <div class="max-w-5xl mx-auto p-6 flex h-screen">
    <div class="flex-1 relative rounded-md overflow-hidden">
      <canvas ref="canvas" style="width: 100%; height: 100%"></canvas>
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
    </div>
    <div class="flex-none w-72 p-6 bg-gray-100 rounded-md ml-4">
      <div class="text-2xl font-bold pb-4">设置</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { FileUtils } from '@tetap-demo/tools/file'
import { useDrop } from '@tetap-demo/tools/hooks/drop'
import { ImageUtils } from '@tetap-demo/tools/image'

const canvas = ref<HTMLCanvasElement>()
const isDownFile = ref(false)
const extensions = ['.jpg', '.jpeg', '.png', '.bmp', '.webp', '.mp4']
const { isDown, dragover, dragleave, drop, click } = useDrop(extensions, drawFileHandle)
onMounted(() => {
  const canvasEl = canvas.value
  if (!canvasEl) throw new Error('canvas not found')
  const ctx = canvasEl.getContext('2d')
  if (!ctx) throw new Error('ctx not found')
  resizeCanvasEl(canvasEl)
  window.addEventListener('resize', () => resizeCanvasEl(canvasEl))
})

/** 画布尺寸变更 */
function resizeCanvasEl(canvasEl: HTMLCanvasElement) {
  const canvasElBound = canvasEl.getBoundingClientRect()
  canvasEl.width = canvasElBound.width
  canvasEl.height = canvasElBound.height
}

/** 绘制文件 */
async function drawFileHandle(file: File) {
  isDownFile.value = true
  const fileCheck = FileUtils.checkFileType(file, ['image', 'video'])
  if (!fileCheck) return
  const downFileData = await FileUtils.loadFile<string>((render) => render.readAsDataURL(file))
  // const uri = FileUtils.arrayBufferToBlob(downFileData, file.type)
  const uri = downFileData
  const image = await ImageUtils.load(uri)
  const canvasEl = canvas.value
  if (!canvasEl) throw new Error('canvas not found')
  const ctx = canvasEl.getContext('2d')
  if (!ctx) throw new Error('ctx not found')
  const { x, y, width, height } = ImageUtils.scaleImageRect(image, canvasEl.width, canvasEl.height)
  const offsetCanvas = new OffscreenCanvas(width, height)
  const offsetCtx = offsetCanvas.getContext('2d')
  if (!offsetCtx) throw new Error('offsetCtx not found')
  offsetCtx.drawImage(image, 0, 0, width, height)
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
  ctx.drawImage(offsetCanvas, x, y)
}
</script>

<style scoped></style>
