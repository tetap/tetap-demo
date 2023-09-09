<script lang="ts" setup>
import { ref } from 'vue'
import { Button, Modal } from '@tetap/components'

const open = ref(false)

function handleClick() {
  open.value = !open.value
}
</script>

<template>
  <Button type="primary" @click="handleClick">Open Modal</Button>
  <Modal v-model:open="open" title="Basic Modal" :width="500">
    <p>contents</p>
    <p>contents</p>
    <p>contents</p>
  </Modal>
</template>
