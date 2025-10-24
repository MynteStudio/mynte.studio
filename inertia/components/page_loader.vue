<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePageLoader } from '~/composables/use_page_loader'

const { isComplete } = usePageLoader()
const isHiding = ref(false)
const isAnimationComplete = ref(false)

interface WordConfig {
  text: string
  fontFamily: string
  fontWeight: string
  fontStyle: string
  direction: 'ltr' | 'rtl'
}

const words: WordConfig[] = [
  {
    text: 'Hello',
    fontFamily: 'MynteFont, sans-serif',
    fontWeight: '400',
    fontStyle: 'normal',
    direction: 'ltr',
  },
  {
    text: 'Bonjour',
    fontFamily: "'Instrument Serif', ui-serif, Georgia, serif",
    fontWeight: '300',
    fontStyle: 'italic',
    direction: 'ltr',
  },
  {
    text: 'مرحبا',
    fontFamily: 'Honor, sans-serif',
    fontWeight: '400',
    fontStyle: 'italic',
    direction: 'rtl',
  },
]

let currentWordIndex = 0

async function typeWord(wordConfig: WordConfig) {
  const textElement = document.getElementById('loader-text')
  if (!textElement) return

  // Apply font styles
  textElement.style.fontFamily = wordConfig.fontFamily
  textElement.style.fontWeight = wordConfig.fontWeight
  textElement.style.fontStyle = wordConfig.fontStyle
  textElement.style.direction = wordConfig.direction

  // Type letter by letter
  for (let i = 0; i <= wordConfig.text.length; i++) {
    textElement.textContent = wordConfig.text.substring(0, i)
    await new Promise((resolve) => setTimeout(resolve, 80))
  }

  // Pause before erasing (except for last word)
  if (currentWordIndex < words.length - 1) {
    await new Promise((resolve) => setTimeout(resolve, 400))
  }
}

async function eraseWord(wordConfig: WordConfig) {
  const textElement = document.getElementById('loader-text')
  if (!textElement) return

  // Erase letter by letter
  for (let i = wordConfig.text.length; i >= 0; i--) {
    textElement.textContent = wordConfig.text.substring(0, i)
    await new Promise((resolve) => setTimeout(resolve, 60))
  }

  // Pause before next word
  await new Promise((resolve) => setTimeout(resolve, 200))
}

async function animateWords() {
  for (let i = 0; i < words.length; i++) {
    currentWordIndex = i
    await typeWord(words[i])

    // Don't erase the last word
    if (i < words.length - 1) {
      await eraseWord(words[i])
    }
  }

  isAnimationComplete.value = true
  checkCanHide()
}

function checkCanHide() {
  // Hide only when both animation and assets are complete
  if (isAnimationComplete.value && isComplete.value) {
    hideLoader()
  }
}

function hideLoader() {
  setTimeout(() => {
    // Reset scroll position before hiding
    window.scrollTo(0, 0)

    isHiding.value = true
    const loaderElement = document.getElementById('page-loader')
    if (loaderElement) {
      loaderElement.classList.add('hiding')
    }

    // Remove the loader after animation
    setTimeout(() => {
      const loaderElement = document.getElementById('page-loader')
      if (loaderElement) {
        loaderElement.remove()
      }
      // Re-enable scroll
      document.body.style.overflow = ''
    }, 600) // Match CSS transition duration
  }, 300)
}

onMounted(() => {
  const { totalAssets, forceComplete, onComplete } = usePageLoader()

  // Start text animation immediately
  animateWords()

  // If no assets are registered after 200ms, force complete
  setTimeout(() => {
    if (totalAssets.value === 0) {
      forceComplete()
    }
  }, 200)

  // When assets are complete, check if we can hide
  onComplete(() => {
    checkCanHide()
  })

  // Set a fallback timeout to force complete after 10 seconds
  setTimeout(() => {
    if (!isComplete.value) {
      forceComplete()
    }
    if (!isAnimationComplete.value) {
      isAnimationComplete.value = true
    }
    hideLoader()
  }, 10000)
})
</script>

<template>
  <!-- This component doesn't render anything visible -->
  <!-- It only controls the static HTML loader -->
</template>
