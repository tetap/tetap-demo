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
          @input="handleChange"
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
          @input="handleChange"
        />
        <div class="bg-gray-300 text-center w-14 rounded-lg py-1 flex-none">
          {{ filterOptions.contrast }}
        </div>
      </div>
      <div class="flex items-center space-x-3 text-sm">
        <div class="flex-none w-14">饱和度</div>
        <input
          type="range"
          :min="-100"
          :max="100"
          class="flex-1 w-full"
          v-model.number="filterOptions.saturation"
          @input="handleChange"
        />
        <div class="bg-gray-300 text-center w-14 rounded-lg py-1 flex-none">
          {{ filterOptions.saturation }}
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
          @input="handleChange"
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
          @input="handleChange"
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
          @input="handleChange"
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
import throttle from 'lodash/throttle'
import init, { promotion, saturation, hue, heat_up, grayscale_strength } from '@tetap-demo/image'

const canvas = ref<HTMLCanvasElement>()
let canvasEl: HTMLCanvasElement | undefined
let ctx: CanvasRenderingContext2D | null
const filterOptions: Record<string, number> = reactive({
  brightness: 0,
  contrast: 0,
  saturation: 0,
  hue: 0,
  heatUp: 0,
  grayscale: 0
})
onMounted(() => {
  canvasEl = canvas.value
  if (!canvasEl) throw new Error('canvas not found')
  ctx = canvasEl.getContext('2d', { willReadFrequently: true })
  if (!ctx) throw new Error('ctx not found')
  resizeCanvasEl()
  window.addEventListener('resize', () => resizeCanvasEl)
})

let isInit = false
async function initWasm() {
  if (isInit) return
  await init()
  isInit = true
}
const cacheMap = new Map()
/** 当前绘制文件 */
let currentDrawFile: File | undefined = void 0
/** 绘制文件 */
async function drawFileHandle(file?: File) {
  if (!canvasEl || !ctx || !file) return
  const fileCheckImage = FileUtils.checkFileType(file, ['image'])
  const fileCheckVideo = FileUtils.checkFileType(file, ['video'])
  if (fileCheckImage) {
    drawImageFile(file)
  } else if (fileCheckVideo) {
    drawVideoFile(file)
  }
}

async function drawImageFile(file: File) {
  if (!canvasEl || !ctx || !file) return
  cacheMap.forEach((cache) => {
    if (cache?.video) {
      cache.video.pause()
    }
  })
  let image = cacheMap.get(file)?.image
  currentDrawFile = file
  if (!image) {
    const downFileData = await FileUtils.loadFile<string>((render) => render.readAsDataURL(file))
    const uri = downFileData
    const imageLoad = await ImageUtils.load(uri)
    cacheMap.clear()
    cacheMap.set(file, { image: imageLoad })
    image = imageLoad
  }
  const { x, y, width, height } = ImageUtils.scaleImageRect(image, canvasEl.width, canvasEl.height)
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
  ctx.drawImage(image, x, y, width, height)
  const imageData = ctx.getImageData(0, 0, canvasEl.width, canvasEl.height)
  await filterImageData(imageData)
  ctx.putImageData(imageData, 0, 0)
}

async function drawVideoFile(file: File) {
  if (!canvasEl || !ctx || !file) return
  let cacheVideo = cacheMap.get(file)?.video
  if (!cacheVideo) {
    const downFileData = await FileUtils.loadFile<string>((render) => render.readAsDataURL(file))
    const video = document.createElement('video')
    video.src = FileUtils.blobToUrl(FileUtils.base64ToBlob(downFileData))
    video.controls = false
    video.volume = 0
    video.muted = true
    video.loop = true
    video.addEventListener(
      'play',
      () => {
        console.log('play')
        draw(video)
      },
      false
    )
    cacheMap.clear()
    cacheMap.set(file, { video })
    cacheVideo = video
  }
  await cacheVideo.play()
}

function draw(video: HTMLVideoElement) {
  requestAnimationFrame(async () => {
    if (video.paused || video.ended) {
      return
    }
    const { videoWidth: imageWidth, videoHeight: imageHeight } = video
    if (imageWidth !== 0 && imageHeight !== 0) {
      video.width = imageWidth
      video.height = imageHeight
      const scale = Math.min(canvasEl!.width / imageWidth, canvasEl!.height / imageHeight)
      const width = Math.floor(imageWidth * scale)
      const height = Math.floor(imageHeight * scale)
      const y = Math.floor((canvasEl!.height - height) / 2)
      const x = Math.floor((canvasEl!.width - width) / 2)
      ctx!.clearRect(0, 0, canvasEl!.width, canvasEl!.height)
      ctx!.drawImage(video, x, y, width, height)
      const imageData = ctx!.getImageData(0, 0, canvasEl!.width, canvasEl!.height)
      await filterImageData(imageData)
      ctx!.putImageData(imageData, 0, 0)
    }
    draw(video)
  })
}

/** 对imageData进行滤镜处理 */
async function filterImageData(imageData: ImageData) {
  await initWasm()
  const keys = Object.keys(filterOptions).filter((c) => filterOptions[c] !== 0)
  let isPromotion = false
  for (const key of keys) {
    switch (key) {
      case 'brightness':
      case 'contrast':
        if (isPromotion) break
        isPromotion = true
        promotion(
          imageData.data as any,
          filterOptions.brightness / 100,
          filterOptions.contrast / 100
        )
        break
      case 'saturation':
        saturation(imageData.data as any, filterOptions.saturation / 100)
        break
      case 'hue':
        hue(imageData.data as any, Math.floor((filterOptions.hue / 360) * 100))
        break
      case 'heatUp':
        heat_up(imageData.data as any, filterOptions.heatUp / 100)
        break
      case 'grayscale':
        grayscale_strength(imageData.data as any, filterOptions.grayscale / 100)
        break
    }
  }
  return imageData
}

/** 画布尺寸变更 */
function resizeCanvasEl() {
  const canvasElBound = canvasEl?.getBoundingClientRect()
  if (canvasElBound && canvasEl) {
    canvasEl.width = canvasElBound.width
    canvasEl.height = canvasElBound.height
  }
}

const handleChange = throttle(() => {
  drawFileHandle(currentDrawFile)
}, 300)
</script>

<style scoped></style>
