<script lang="ts" setup>
import { Button, Space } from '@tetap/components'
</script>

<template>
  <Space direction="vertical" size="12px" align="start">
    <div>
      <h4 style="margin-bottom: 8px">数字(12px)</h4>
      <!-- 12px -->
      <Space :size="12">
        <Button type="primary">按钮</Button>
        <Button type="primary">按钮</Button>
        <Button type="primary">按钮</Button>
      </Space>
    </div>
    <div>
      <h4 style="margin-bottom: 8px">字符串自定义单位(2em)</h4>
      <!-- 2em -->
      <Space size="2em">
        <Button type="primary">按钮</Button>
        <Button type="primary">按钮</Button>
        <Button type="primary">按钮</Button>
      </Space>
    </div>
    <div>
      <h4 style="margin-bottom: 8px">多方向数组设置(['8px', '1em'])</h4>
      <!-- 多方向 -->
      <Space :size="['8px', '1em']" wrap>
        <Button type="primary" v-for="btn in 12" :key="btn">按钮 {{ btn }}</Button>
      </Space>
    </div>
  </Space>
</template>
