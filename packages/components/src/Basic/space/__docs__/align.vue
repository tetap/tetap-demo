<script lang="ts" setup>
import { ref, computed } from 'vue'
import { Button, Space } from '@tetap/components'
import { AlignType } from '@tetap/components/basic/space/types/align'

const aligns = computed<AlignType[]>(() => {
  return ['start', 'end', 'center', 'baseline']
})

const current = ref<AlignType>('center')

function handleClick(align: AlignType) {
  current.value = align
}
</script>

<template>
  <Space direction="vertical">
    <Space>
      <Button
        v-for="item in aligns"
        :key="item"
        :type="item === current ? 'primary' : 'default'"
        @click="handleClick(item)"
      >
        {{ item }}
      </Button>
    </Space>
    <div style="background-color: #f2f2f2; padding: 8px">
      <Space :align="current">
        <Button type="primary">{{ current }}</Button>
        <div style="padding: 60px 30px; background-color: #fff">Block</div>
      </Space>
    </div>
  </Space>
</template>
