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
  <Modal :open="open" />
</template>
