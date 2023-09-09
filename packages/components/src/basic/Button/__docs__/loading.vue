<script lang="ts" setup>
import { ref } from 'vue'
import { Space, Button } from '@tetap/components'

const loading = ref(false)

function handleClick() {
  console.log('handleClick')
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 3000)
}
</script>

<template>
  <Space wrap>
    <Button loading type="primary">主要按钮</Button>
    <Button :loading="loading" type="primary" @click="handleClick">点击</Button>
    <Button :loading="loading" :loading-delay="300" type="primary" @click="handleClick">
      延迟300ms后出现加载效果
    </Button>
  </Space>
</template>
