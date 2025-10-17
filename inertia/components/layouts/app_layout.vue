<script setup lang="ts">
import Header from '~/components/header/header.vue'
</script>

<template>
  <Header />
  <main class="container mx-auto pt-25 px-5">
    <slot />
    <div class="min-h-[200vh]"></div>
  </main>
</template>
