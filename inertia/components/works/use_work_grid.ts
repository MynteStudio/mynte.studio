import { ref, inject, onMounted, onUnmounted, type Ref } from 'vue'
import * as THREE from 'three'
import type Lenis from 'lenis'
import type { WorkItem } from './works_data'
import {
  GRID_COLS,
  GRID_ROWS,
  PORTRAIT_WIDTH,
  PORTRAIT_HEIGHT,
  LANDSCAPE_HEIGHT,
  GAP,
  TOTAL_WORKS,
} from './works_data'
import vertexShader from '~/glsl/rounded_plane.vert?raw'
import fragmentShader from '~/glsl/rounded_plane.frag?raw'

export function useWorkGrid(worksData: WorkItem[], onWorkClick: (work: WorkItem) => void) {
  const canvasRef = ref<HTMLCanvasElement | null>(null)
  const containerRef = ref<HTMLElement | null>(null)
  const lenis = inject<Ref<Lenis | null>>('lenis')

  let scene: THREE.Scene
  let camera: THREE.OrthographicCamera
  let renderer: THREE.WebGLRenderer
  let planes: THREE.Mesh[] = []
  let animationId: number
  let raycaster: THREE.Raycaster
  let mouse: THREE.Vector2

  // Drag state
  let isDragging = false
  let hasDragged = false
  let mouseDownOnCanvas = false
  let previousMousePosition = { x: 0, y: 0 }
  let cameraOffset = { x: 0, y: 0 }
  let hoveredPlane: THREE.Mesh | null = null

  function initThree() {
    if (!canvasRef.value || !containerRef.value) return

    const width = containerRef.value.clientWidth
    const height = containerRef.value.clientHeight
    const aspect = width / height

    // Scene
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x080808)

    // Camera (orthographic for 2D grid)
    const frustumSize = 10
    camera = new THREE.OrthographicCamera(
      (frustumSize * aspect) / -2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      frustumSize / -2,
      0.1,
      1000
    )
    camera.position.z = 10

    // Renderer
    renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.value,
      antialias: true,
      alpha: false,
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Raycaster for hover detection
    raycaster = new THREE.Raycaster()
    mouse = new THREE.Vector2()

    // Load textures and create grid
    createInfiniteGrid()

    // Start animation
    animate()
  }

  function createInfiniteGrid() {
    const textureLoader = new THREE.TextureLoader()
    const borderRadius = 0.15 // Border radius in world units

    // Create enough planes to fill the viewport + extra for infinite scroll
    const planesPerRow = GRID_COLS * 3 // Triple for seamless infinite
    const planesPerCol = GRID_ROWS * 3

    // All items have same width, uniform grid
    const cellWidth = PORTRAIT_WIDTH
    const cellHeight = PORTRAIT_HEIGHT

    for (let row = 0; row < planesPerCol; row++) {
      for (let col = 0; col < planesPerRow; col++) {
        const workIndex = (row * planesPerRow + col) % TOTAL_WORKS
        const workItem = worksData[workIndex]

        // Create geometry based on orientation
        const isPortrait = workItem.orientation === 'portrait'
        const planeWidth = PORTRAIT_WIDTH // Same width for all
        const planeHeight = isPortrait ? PORTRAIT_HEIGHT : LANDSCAPE_HEIGHT

        const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight)
        const texture = textureLoader.load(workItem.src)
        // Don't set colorSpace for ShaderMaterial - we handle it manually

        // Shader material with rounded corners
        const material = new THREE.ShaderMaterial({
          uniforms: {
            uTexture: { value: texture },
            uResolution: { value: new THREE.Vector2(planeWidth, planeHeight) },
            uRadius: { value: borderRadius },
          },
          vertexShader,
          fragmentShader,
          side: THREE.DoubleSide,
          transparent: true,
        })

        const plane = new THREE.Mesh(geometry, material)

        // Position in uniform grid
        const x = col * (cellWidth + GAP) - ((planesPerRow - 1) * (cellWidth + GAP)) / 2
        let y = -row * (cellHeight + GAP) + ((planesPerCol - 1) * (cellHeight + GAP)) / 2

        // Align landscape items to top of cell instead of center
        if (!isPortrait) {
          const offsetToTop = (cellHeight - planeHeight) / 2
          y += offsetToTop
        }

        plane.position.set(x, y, 0)
        plane.userData = {
          originalX: x,
          originalY: y,
          col,
          row,
          width: planeWidth,
          height: planeHeight,
          workIndex,
          workItem,
        }

        scene.add(plane)
        planes.push(plane)
      }
    }
  }

  function animate() {
    animationId = requestAnimationFrame(animate)
    updateInfiniteScroll()
    updateHoverAnimation()
    renderer.render(scene, camera)
  }

  function updateHoverAnimation() {
    // Animate all planes back to normal scale
    planes.forEach((plane) => {
      const targetScale = plane === hoveredPlane ? 1.05 : 1
      plane.scale.x += (targetScale - plane.scale.x) * 0.1
      plane.scale.y += (targetScale - plane.scale.y) * 0.1
      plane.scale.z += (targetScale - plane.scale.z) * 0.1
    })
  }

  function updateInfiniteScroll() {
    // Uniform cell dimensions
    const cellWidth = PORTRAIT_WIDTH + GAP
    const cellHeight = PORTRAIT_HEIGHT + GAP
    const gridWidth = GRID_COLS * cellWidth
    const gridHeight = GRID_ROWS * cellHeight

    planes.forEach((plane) => {
      // Apply camera offset to simulate infinite scroll
      let newX = plane.userData.originalX + cameraOffset.x
      let newY = plane.userData.originalY + cameraOffset.y

      // Wrap horizontally
      while (newX > gridWidth) newX -= gridWidth * 3
      while (newX < -gridWidth * 2) newX += gridWidth * 3

      // Wrap vertically
      while (newY > gridHeight * 2) newY -= gridHeight * 3
      while (newY < -gridHeight) newY += gridHeight * 3

      plane.position.x = newX
      plane.position.y = newY
    })
  }

  function onMouseDown(event: MouseEvent) {
    isDragging = true
    hasDragged = false
    mouseDownOnCanvas = true
    previousMousePosition = {
      x: event.clientX,
      y: event.clientY,
    }

    // Disable Lenis scroll
    if (lenis?.value) {
      lenis.value.stop()
    }

    if (containerRef.value) {
      containerRef.value.style.cursor = 'grabbing'
    }
  }

  function onMouseMove(event: MouseEvent) {
    if (!containerRef.value) return

    // Update raycaster for hover detection
    const rect = containerRef.value.getBoundingClientRect()
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

    if (!isDragging) {
      // Check for hover
      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObjects(planes)

      if (intersects.length > 0) {
        hoveredPlane = intersects[0].object as THREE.Mesh
        if (containerRef.value) {
          containerRef.value.style.cursor = 'pointer'
        }
      } else {
        hoveredPlane = null
        if (containerRef.value) {
          containerRef.value.style.cursor = 'grab'
        }
      }
    } else {
      // Dragging
      const deltaX = event.clientX - previousMousePosition.x
      const deltaY = event.clientY - previousMousePosition.y

      // Check if user has moved enough to consider it a drag (threshold: 5px)
      if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
        hasDragged = true
      }

      // Convert pixel movement to world units
      const width = containerRef.value.clientWidth
      const height = containerRef.value.clientHeight
      const aspect = width / height
      const frustumSize = 10

      const worldDeltaX = (deltaX / width) * frustumSize * aspect
      const worldDeltaY = (deltaY / height) * frustumSize

      cameraOffset.x += worldDeltaX
      cameraOffset.y -= worldDeltaY

      previousMousePosition = {
        x: event.clientX,
        y: event.clientY,
      }
    }
  }

  function onMouseUp() {
    // Only treat as click if user didn't drag, there's a hovered plane, and mousedown was on canvas
    if (!hasDragged && hoveredPlane && mouseDownOnCanvas) {
      const workItem = hoveredPlane.userData.workItem as WorkItem
      onWorkClick(workItem)
    }

    isDragging = false
    hasDragged = false
    mouseDownOnCanvas = false

    // Re-enable Lenis scroll
    if (lenis?.value) {
      lenis.value.start()
    }

    if (containerRef.value) {
      containerRef.value.style.cursor = 'grab'
    }
  }

  function onResize() {
    if (!containerRef.value || !renderer || !camera) return

    const width = containerRef.value.clientWidth
    const height = containerRef.value.clientHeight
    const aspect = width / height
    const frustumSize = 10

    camera.left = (frustumSize * aspect) / -2
    camera.right = (frustumSize * aspect) / 2
    camera.top = frustumSize / 2
    camera.bottom = frustumSize / -2
    camera.updateProjectionMatrix()

    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  onMounted(() => {
    initThree()

    // Add event listeners
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('resize', onResize)
  })

  onUnmounted(() => {
    // Cleanup
    cancelAnimationFrame(animationId)

    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
    window.removeEventListener('resize', onResize)

    // Dispose Three.js objects
    planes.forEach((plane) => {
      if (plane.geometry) plane.geometry.dispose()
      if (plane.material) {
        const material = plane.material as THREE.ShaderMaterial
        if (material.uniforms?.uTexture?.value) {
          material.uniforms.uTexture.value.dispose()
        }
        material.dispose()
      }
    })

    if (renderer) {
      renderer.dispose()
    }
  })

  return {
    canvasRef,
    containerRef,
    onMouseDown,
  }
}
