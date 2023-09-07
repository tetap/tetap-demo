<template>
  <div class="min-h-screen flex">
    <Sider />
    <Container>
      <div class="grid gap-6 grid-cols-auto-fill-300">
        <a
          v-for="demo in demoList"
          target="_blank"
          :href="demo.uri"
          :key="demo.name"
          class="p-4 rounded-md shadow-md flex items-center justify-center text-xl cursor-pointer h-44 hover:shadow-lg"
          :style="{ backgroundColor: hex }"
          v-memo="[]"
        >
          {{ demo.name }}
        </a>
      </div>
      <tetap-space>
        <tetap-button type="primary">BUTTON</tetap-button>
        <tetap-button>BUTTON</tetap-button>
        <tetap-button>BUTTON</tetap-button>
        <tetap-button>BUTTON</tetap-button>
      </tetap-space>
      <template #footer>
        <Footer />
      </template>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, computed } from 'vue'
import Sider from './components/Sider.vue'
import Footer from './components/Footer.vue'
import Container from './components/Container.vue'

const demoList = ref<{ name: string; uri: string }[]>([])
const packages = import.meta.glob('../../../../../demo/**/package.json', { eager: true })
const isDev = import.meta.env.DEV
const hex = computed(() => {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`
})
onBeforeMount(() => {
  const keys = Object.keys(packages)
  for (const key of keys) {
    const demo = packages[key] as { description: string; name: string; devProp: number }
    demoList.value.push({
      name: demo.description,
      uri: isDev
        ? `http://localhost:${demo.devProp}`
        : `./demo/${demo.name?.replace('@tetap-demo/', '')}`
    })
  }
})
</script>
