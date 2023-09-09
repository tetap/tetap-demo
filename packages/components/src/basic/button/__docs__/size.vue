<script lang="ts" setup>
import { ref } from 'vue'
import { Space, Button, ButtonSizeType } from '@tetap/components'

const sizeList = ref<ButtonSizeType[]>(['xs', 'sm', 'md', 'lg', 'xl'])
</script>

<template>
  <Space wrap>
    <Button v-for="size in sizeList" :size="size" type="primary" :key="size">{{ size }}</Button>
  </Space>
</template>
