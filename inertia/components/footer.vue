<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
</script>

<template>
  <footer class="mt-30 py-8 border-light border-t-1 border-opacity-15">
    <div>
      <div class="flex items-center gap-1 font-semibold">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.00008 12.8332C3.78008 12.8332 1.16675 10.2198 1.16675 6.99984C1.16675 3.77984 3.78008 1.1665 7.00008 1.1665C10.2201 1.1665 12.8334 3.77984 12.8334 6.99984C12.8334 10.2198 10.2201 12.8332 7.00008 12.8332Z"
            stroke="white"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.67998 8.74984C8.26582 9.1115 7.72914 9.33317 7.13997 9.33317C5.85081 9.33317 4.80664 8.289 4.80664 6.99984C4.80664 5.71067 5.85081 4.6665 7.13997 4.6665C7.72914 4.6665 8.26582 4.88817 8.67998 5.24984"
            stroke="white"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <h2 class="text-lg">MYNTE STUDIO 2025</h2>
      </div>

      <div class="flex gap-3 text-sm font-light italic">
        <Link href="">Terms of service</Link>
        <Link href="">Legal disclaimer</Link>
      </div>
    </div>
  </footer>
</template>
