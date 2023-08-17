<template>
  <div class="min-h-screen flex">
    <Sider />
    <Container>
      <div class="grid gap-6 grid-cols-auto-fill-300">
        <div class="p-4 bg-white rounded-md shadow-md flex h-44">123</div>
        <div class="p-4 bg-white rounded-md shadow-md flex h-44">123</div>
      </div>
      <template #footer>
        <Footer />
      </template>
    </Container>
  </div>
</template>

<script setup lang="ts">
import Sider from './components/Sider.vue'
import Footer from './components/Footer.vue'
import Container from './components/Container.vue'
</script>
