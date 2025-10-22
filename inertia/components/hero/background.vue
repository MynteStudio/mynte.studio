<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import { fragmentShader } from '~/glsl/fragment_shader'
import { vertexShader } from '~/glsl/vertex_shader'
import { useGlobalMouse } from '~/composables/use_global_mouse'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const { target } = useGlobalMouse()

let scene: THREE.Scene
let camera: THREE.OrthographicCamera
let renderer: THREE.WebGLRenderer
let material: THREE.ShaderMaterial
let animationFrameId: number

const setupThreeScene = () => {
  if (!canvasRef.value) return

  // Scene
  scene = new THREE.Scene()

  // Camera
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -10, 10)
  camera.position.set(0, 0, 1)

  // Renderer
  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    antialias: false,
  })
  renderer.setPixelRatio(1)
  renderer.setSize(window.innerWidth, window.innerHeight)

  // Geometry
  const geometry = new THREE.PlaneGeometry(2, 2)

  // Material
  material = new THREE.ShaderMaterial({
    uniforms: {
      u_time: { value: 0 },
      u_mouse: { value: new THREE.Vector2(0, 0) },
    },
    vertexShader,
    fragmentShader,
  })

  // Mesh
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  // Animation loop
  const animate = () => {
    animationFrameId = requestAnimationFrame(animate)

    // Update uniforms
    material.uniforms.u_time.value += 0.005
    const normalizedTarget = new THREE.Vector2(
      (target.value.x + 1) * 0.5,
      (target.value.y + 1) * 0.5
    )
    material.uniforms.u_mouse.value.lerp(normalizedTarget, 0.2)

    renderer.render(scene, camera)
  }

  animate()

  // Handle window resize
  const handleResize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', handleResize)

  return () => {
    window.removeEventListener('resize', handleResize)
  }
}

onMounted(() => {
  const cleanup = setupThreeScene()

  onUnmounted(() => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }
    if (renderer) {
      renderer.dispose()
    }
    if (cleanup) {
      cleanup()
    }
  })
})
</script>

<template>
  <div class="absolute inset-0 w-screen h-screen z-[-2] pointer-events-none">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>
