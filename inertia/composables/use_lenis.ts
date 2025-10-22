import { onMounted, onUnmounted, ref } from 'vue'
import type Lenis from 'lenis'

export function useLenis() {
  const lenis = ref<Lenis | null>(null)

  onMounted(async () => {
    const LenisModule = await import('lenis')
    const LenisClass = LenisModule.default

    lenis.value = new LenisClass({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      autoRaf: true,
    })
  })

  onUnmounted(() => {
    lenis.value?.destroy()
  })

  return { lenis }
}
