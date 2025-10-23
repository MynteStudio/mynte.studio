<script setup lang="ts">
import Logo from '~/components/svg/logo.vue'
import DxbTime from './dxb_time.vue'
import Lang from './lang.vue'
import { useScrollDirection } from '~/composables/use_scroll_direction'

const { isScrollingDown } = useScrollDirection()
</script>

<template>
  <header
    dir="ltr"
    class="fixed top-0 left-0 right-0 z-50 transition-opacity duration-300"
    :class="{ 'opacity-0 pointer-events-none': isScrollingDown }"
    @click.stop
  >
    <div class="container mx-auto h-25 flex justify-between items-center px-5">
      <Logo />

      <div class="flex gap-1">
        <DxbTime />
        <span>|</span>
        <Lang />
      </div>
    </div>
  </header>
</template>
