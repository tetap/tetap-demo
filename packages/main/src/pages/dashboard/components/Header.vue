<template>
  <nav class="bg-gray-800 shadow shadow-black/40 flex-none">
    <div class="mx-auto max-w-7xl px-4 py-4 flex-1 lg:px-6">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <router-link
              :to="{ name: 'dashboard' }"
              class="text-3xl font-bold text-white select-none"
            >
              Tetap
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
