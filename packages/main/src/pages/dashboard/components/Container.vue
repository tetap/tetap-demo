<template>
  <div class="mx-auto flex-1 w-full flex flex-col">
    <div class="flex-1 p-4 lg:p-6">
      <slot />
    </div>
    <div class="flex-none">
      <slot name="footer" />
    </div>
  </div>
</template>
