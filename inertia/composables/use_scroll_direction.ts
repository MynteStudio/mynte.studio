import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollDirection() {
  const isScrollingDown = ref(false)
  let lastScrollY = 0
  let ticking = false

  const updateScrollDirection = () => {
    const scrollY = window.scrollY

    if (Math.abs(scrollY - lastScrollY) < 5) {
      ticking = false
      return
    }

    isScrollingDown.value = scrollY > lastScrollY && scrollY > 100
    lastScrollY = scrollY
    ticking = false
  }

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollDirection)
      ticking = true
    }
  }

  onMounted(() => {
    lastScrollY = window.scrollY
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return { isScrollingDown }
}
