<script setup lang="ts">
import { ref, inject, type Ref } from 'vue'
import type Lenis from 'lenis'
import { worksData } from './works_data'
import type { WorkItem } from './works_data'
import { useWorkGrid } from './use_work_grid'
import WorkModal from './work_modal.vue'

const lenis = inject<Ref<Lenis | null>>('lenis')
const selectedWork = ref<WorkItem | null>(null)
const isModalOpen = ref(false)

function handleWorkClick(work: WorkItem) {
  selectedWork.value = work
  isModalOpen.value = true

  if (lenis?.value) {
    lenis.value.stop()
  }
}

function closeModal() {
  isModalOpen.value = false
  selectedWork.value = null

  if (lenis?.value) {
    lenis.value.start()
  }
}

const { canvasRef, containerRef, onMouseDown } = useWorkGrid(worksData, handleWorkClick)
</script>

<template>
  <section
    ref="containerRef"
    class="relative min-h-screen w-screen overflow-hidden lg:cursor-grab left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
  >
    <!-- NOTE: mobile -->
    <div class="lg:hidden container mx-auto px-5 py-10">
      <h2 class="text-white mb-10">SELECTED WORKS</h2>
      <div class="flex flex-col">
        <button
          v-for="(work, index) in worksData"
          :key="index"
          @click="handleWorkClick(work)"
          class="text-center group py-6 border-b border-white/15 last:border-b-0"
        >
          <h3 class="font-serif italic text-3xl transition-opacity hover:opacity-70">
            {{ work.title }}
          </h3>
          <p class="text-sm opacity-60 mt-1">{{ work.category }} — {{ work.year }}</p>
        </button>
      </div>
    </div>

    <!-- NOTE: desktop -->
    <div class="hidden lg:block absolute top-10 left-0 right-0 z-10 pointer-events-none">
      <div class="container mx-auto px-5">
        <h2 class="text-white">SELECTED WORKS</h2>
      </div>
    </div>
    <canvas ref="canvasRef" class="hidden lg:block w-full h-full" @mousedown="onMouseDown" />

    <!-- NOTE: overlay -->
    <div
      class="hidden lg:block absolute inset-0 pointer-events-none"
      style="
        background: radial-gradient(
          circle at center,
          transparent 20%,
          rgba(0, 0, 0, 0.6) 45%,
          #080808 85%
        );
      "
    />

    <WorkModal :is-open="isModalOpen" :work="selectedWork" @close="closeModal" />
  </section>
</template>
