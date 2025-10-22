<script setup lang="ts">
import { provide } from 'vue'
import Header from '~/components/header/header.vue'
import { useLenis } from '~/composables/use_lenis'

const { lenis } = useLenis()

provide('lenis', lenis)
</script>

<template>
  <Header />

  <main class="container mx-auto pt-25 px-5">
    <slot />
  </main>
</template>
