<script lang="ts" setup>
import { computed } from 'vue'
import { Button, Space } from '@tetap/components'
import type { SpaceAlignType } from '@tetap/components'

const aligns = computed<SpaceAlignType[]>(() => {
  return ['start', 'end', 'center', 'baseline']
})
</script>

<template>
  <Space wrap>
    <div
      v-for="item in aligns"
      :key="item"
      style="background-color: #f2f2f2; padding: 8px; width: fit-content"
    >
      <Space :align="item">
        <Button type="primary">{{ item }}</Button>
        <div style="padding: 60px 30px; background-color: #fff">Block</div>
      </Space>
    </div>
  </Space>
</template>
