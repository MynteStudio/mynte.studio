import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'

export const useGlobalMouse = () => {
  const mouse = ref(new THREE.Vector2(0, 0))
  const target = ref(new THREE.Vector2(0, 0))

  const handleMouseMove = (event: MouseEvent) => {
    target.value.x = (event.clientX / window.innerWidth) * 2 - 1
    target.value.y = -(event.clientY / window.innerHeight) * 2 + 1
  }

  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
  })

  return { mouse, target }
}
