<template>
  <div class="max-w-5xl mx-auto py-6 px-4 flex flex-col h-screen">
    <div class="flex-1 relative rounded-md overflow-hidden">
      <canvas ref="canvas" style="width: 100%; height: 100%"></canvas>
      <DropFile @change="drawFileHandle" />
    </div>
    <div class="flex-none mt-3 py-6 px-4 bg-gray-100 rounded-md space-y-6">
      <div class="text-2xl font-bold">设置</div>
      <div class="flex items-center space-x-3 text-sm">
        <div class="flex-none w-14">亮度</div>
        <input
          type="range"
          :min="-100"
          :max="100"
          class="flex-1 w-full"
          v-model.number="filterOptions.brightness"
          @change="handleChange"
        />
        <div class="bg-gray-300 text-center w-14 rounded-lg py-1 flex-none">
          {{ filterOptions.brightness }}
        </div>
      </div>
      <div class="flex items-center space-x-3 text-sm">
        <div class="flex-none w-14">对比度</div>
        <input
          type="range"
          :min="-100"
          :max="100"
          class="flex-1 w-full"
          v-model.number="filterOptions.contrast"
          @change="handleChange"
        />
        <div class="bg-gray-300 text-center w-14 rounded-lg py-1 flex-none">
          {{ filterOptions.contrast }}
        </div>
      </div>
      <div class="flex items-center space-x-3 text-sm">
        <div class="flex-none w-14">饱和度</div>
        <input
          type="range"
          :min="0"
          :max="100"
          class="flex-1 w-full"
          v-model.number="filterOptions.inverse"
          @change="handleChange"
        />
        <div class="bg-gray-300 text-center w-14 rounded-lg py-1 flex-none">
          {{ filterOptions.inverse }}
        </div>
      </div>
      <div class="flex items-center space-x-3 text-sm">
        <div class="flex-none w-14">色相</div>
        <input
          type="range"
          :min="0"
          :max="360"
          class="flex-1 w-full"
          v-model.number="filterOptions.hue"
          @change="handleChange"
        />
        <div class="bg-gray-300 text-center w-14 rounded-lg py-1 flex-none">
          {{ filterOptions.hue }}
        </div>
      </div>
      <div class="flex items-center space-x-3 text-sm">
        <div class="flex-none w-14">加温</div>
        <input
          type="range"
          :min="0"
          :max="100"
          class="flex-1 w-full"
          v-model.number="filterOptions.heatUp"
          @change="handleChange"
        />
        <div class="bg-gray-300 text-center w-14 rounded-lg py-1 flex-none">
          {{ filterOptions.heatUp }}
        </div>
      </div>
      <div class="flex items-center space-x-3 text-sm">
        <div class="flex-none w-14">灰度</div>
        <input
          type="range"
          :min="0"
          :max="100"
          class="flex-1 w-full"
          v-model.number="filterOptions.grayscale"
          @change="handleChange"
        />
        <div class="bg-gray-300 text-center w-14 rounded-lg py-1 flex-none">
          {{ filterOptions.grayscale }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import { FileUtils } from '@tetap-demo/tools/file'
import { ImageUtils } from '@tetap-demo/tools/image'
import DropFile from './components/DropFile.vue'
import init, { grayscale_strength, grayscale, heat_up } from '@tetap-demo/image'

const canvas = ref<HTMLCanvasElement>()
const filterOptions = reactive({
  brightness: 0,
  contrast: 0,
  saturation: 0,
  inverse: 0,
  hue: 0,
  heatUp: 0,
  grayscale: 0
})
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
  const fileCheck = FileUtils.checkFileType(file, ['image', 'video'])
  if (!fileCheck) return
  const downFileData = await FileUtils.loadFile<string>((render) => render.readAsDataURL(file))
  // const uri = FileUtils.arrayBufferToBlob(downFileData, file.type)
  const uri = downFileData
  const image = await ImageUtils.load(uri)
  const canvasEl = canvas.value
  if (!canvasEl) throw new Error('canvas not found')
  const ctx = canvasEl.getContext('2d', { willReadFrequently: true })
  if (!ctx) throw new Error('ctx not found')
  const { x, y, width, height } = ImageUtils.scaleImageRect(image, canvasEl.width, canvasEl.height)
  console.log(width, height)

  const offsetCanvas = new OffscreenCanvas(width, height)
  const offsetCtx = offsetCanvas.getContext('2d')
  if (!offsetCtx) throw new Error('offsetCtx not found')
  offsetCtx.drawImage(image, 0, 0, width, height)
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
  ctx.drawImage(offsetCanvas, x, y)
  init().then(() => {
    const imageData = ctx.getImageData(0, 0, canvasEl.width, canvasEl.height)
    console.time('grayscale')
    grayscale_strength(imageData.data as any, 1)
    grayscale(imageData.data as any)
    heat_up(imageData.data as any, 1)
    console.timeEnd('grayscale')
    ctx.putImageData(imageData, 0, 0)
  })
}

function handleChange() {
  console.log('handleChange')
}
</script>

<style scoped></style>
