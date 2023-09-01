<script lang="ts" setup>
import { Space, Button } from '@tetap/components'
</script>

<template>
  <Space wrap>
    <Button disabled type="primary">主要按钮</Button>
    <Button disabled type="success">成功按钮</Button>
    <Button disabled type="warning">警告按钮</Button>
    <Button disabled type="error">错误按钮</Button>
    <Button disabled type="default">默认按钮</Button>
    <Button disabled type="text">文本按钮</Button>
  </Space>
  <Space wrap>
    <Button plain disabled type="primary">主要按钮</Button>
    <Button plain disabled type="success">成功按钮</Button>
    <Button plain disabled type="warning">警告按钮</Button>
    <Button plain disabled type="error">错误按钮</Button>
    <Button plain disabled type="default">默认按钮</Button>
    <Button plain disabled type="text">文本按钮</Button>
  </Space>
</template>
