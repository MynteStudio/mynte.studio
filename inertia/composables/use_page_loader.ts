import { ref, computed, readonly } from 'vue'

interface Asset {
  id: string
  loaded: boolean
}

const assets = ref<Map<string, Asset>>(new Map())
const isComplete = ref(false)
const completionCallbacks: Array<() => void> = []

export function usePageLoader() {
  const totalAssets = computed(() => assets.value.size)
  const loadedAssets = computed(() => {
    return Array.from(assets.value.values()).filter((asset) => asset.loaded).length
  })

  const progress = computed(() => {
    if (totalAssets.value === 0) return 0
    return Math.round((loadedAssets.value / totalAssets.value) * 100)
  })

  /**
   * Register an asset to be tracked
   */
  function registerAsset(id: string) {
    if (!assets.value.has(id)) {
      assets.value.set(id, { id, loaded: false })
    }
  }

  /**
   * Mark an asset as loaded
   */
  function markAssetLoaded(id: string) {
    const asset = assets.value.get(id)
    if (asset && !asset.loaded) {
      asset.loaded = true

      // Check if all assets are loaded
      if (loadedAssets.value === totalAssets.value && totalAssets.value > 0) {
        complete()
      }
    }
  }

  /**
   * Mark the loader as complete
   */
  function complete() {
    if (!isComplete.value) {
      isComplete.value = true
      // Execute all callbacks
      completionCallbacks.forEach((callback) => callback())
      completionCallbacks.length = 0
    }
  }

  /**
   * Register a callback to be called when loading is complete
   */
  function onComplete(callback: () => void) {
    if (isComplete.value) {
      callback()
    } else {
      completionCallbacks.push(callback)
    }
  }

  /**
   * Reset the loader (useful for page transitions)
   */
  function reset() {
    assets.value.clear()
    isComplete.value = false
    completionCallbacks.length = 0
  }

  /**
   * Force complete the loader (useful for timeout or manual trigger)
   */
  function forceComplete() {
    complete()
  }

  return {
    progress: readonly(progress),
    totalAssets: readonly(totalAssets),
    loadedAssets: readonly(loadedAssets),
    isComplete: readonly(isComplete),
    registerAsset,
    markAssetLoaded,
    onComplete,
    reset,
    forceComplete,
  }
}
