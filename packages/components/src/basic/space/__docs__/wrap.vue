<script lang="ts" setup>
import { Button, Space } from '@tetap/components'
</script>

<template>
  <Space wrap>
    <Button type="primary" v-for="btn in 12" :key="btn">按钮 {{ btn }}</Button>
  </Space>
</template>
