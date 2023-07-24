<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <Container>
      <div class="grid gap-6 grid-cols-auto-fill-300">
        <div class="p-4 bg-white rounded-md shadow-md flex h-96">123</div>
        <div class="p-4 bg-white rounded-md shadow-md flex h-96">123</div>
        <div class="p-4 bg-white rounded-md shadow-md flex h-96">123</div>
        <div class="p-4 bg-white rounded-md shadow-md flex h-96">123</div>
        <div class="p-4 bg-white rounded-md shadow-md flex h-96">123</div>
        <div class="p-4 bg-white rounded-md shadow-md flex h-96">123</div>
        <div class="p-4 bg-white rounded-md shadow-md flex h-96">123</div>
        <div class="p-4 bg-white rounded-md shadow-md flex h-96">123</div>
      </div>
    </Container>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Container from './components/Container.vue'
</script>
