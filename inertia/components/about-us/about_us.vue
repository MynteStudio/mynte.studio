<script setup lang="ts">
import { ref, onMounted, onUnmounted, inject, type Ref } from 'vue'
import type Lenis from 'lenis'
import Available from './available.vue'

const lenis = inject<Ref<Lenis | null>>('lenis')
const textRef = ref<HTMLParagraphElement | null>(null)
const buttonsRef = ref<HTMLDivElement | null>(null)
const words = ref<string[]>([])
const visibleWords = ref<number>(0)
const buttonsVisible = ref(false)

const firstParagraph = `MYNTE STUDIO® is a collective of passionate digital innovators and multidisciplinary designers dedicated to building bold brands and distinct online identities. We craft meaningful digital experiences that merge creativity with strategy, helping forward-thinking companies connect deeply with their audiences, accelerate their growth, and stand out in an increasingly competitive digital landscape. Our work bridges design, technology, and storytelling to deliver impactful results that leave a lasting impression.`
const secondParagraph = `A Creative Digital Agency in Dubai`

const firstWords = ref<string[]>([])
const secondWords = ref<string[]>([])

onMounted(() => {
  // Split text into words
  firstWords.value = firstParagraph.split(' ')
  secondWords.value = secondParagraph.split(' ')
  words.value = [...firstWords.value, ...secondWords.value]

  const scrollHandler = () => {
    if (!textRef.value) return

    const rect = textRef.value.getBoundingClientRect()
    const viewportHeight = window.innerHeight
    const elementTop = rect.top
    const elementHeight = rect.height

    // Start revealing when element enters viewport
    if (elementTop < viewportHeight && elementTop + elementHeight > 0) {
      // Calculate progress (0 to 1) based on element height for consistent animation
      const start = viewportHeight * 0.9 // Start when element is 90% down the viewport
      const scrollDistance = elementHeight * 1.5 // Animation completes over 1.5x element height
      const progress = Math.max(0, Math.min(1, (start - elementTop) / scrollDistance))

      // Calculate number of visible words
      visibleWords.value = Math.floor(progress * words.value.length)
    }

    // Check if buttons are in viewport
    if (buttonsRef.value && !buttonsVisible.value) {
      const buttonsRect = buttonsRef.value.getBoundingClientRect()
      const buttonsTop = buttonsRect.top
      if (buttonsTop < viewportHeight * 0.8) {
        buttonsVisible.value = true
      }
    }
  }

  // Wait for Lenis to be initialized
  const checkLenis = setInterval(() => {
    if (lenis?.value) {
      clearInterval(checkLenis)
      lenis.value.on('scroll', scrollHandler)
      scrollHandler() // Initial call
    }
  }, 100)

  setTimeout(() => clearInterval(checkLenis), 5000)
})

onUnmounted(() => {
  if (lenis?.value) {
    lenis.value.off('scroll', () => {})
  }
})

function getWordClass(word: string) {
  if (word === 'MYNTE' || word === 'STUDIO®') return 'font-bold'
  if (word === 'digital' || word === 'innovators' || word === 'designers')
    return 'font-serif italic'
  return ''
}
</script>

<template>
  <div class="flex justify-center mt-36 lg:mt-64">
    <Available />
  </div>

  <div ref="textRef">
    <p class="text-2xl md:text-3xl lg:text-4xl text-justify line-height-[150%] mt-20">
      <span
        v-for="(word, index) in firstWords"
        :key="index"
        :class="getWordClass(word)"
        class="word"
        :style="{ opacity: index < visibleWords ? 1 : 0.1 }"
      >
        {{ word }}{{ ' ' }}
      </span>
    </p>

    <p
      class="text-2xl md:text-3xl lg:text-4xl text-justify line-height-[150%] mt-[3em] font-serif italic"
    >
      <span
        v-for="(word, index) in secondWords"
        :key="index + firstWords.length"
        class="word"
        :style="{ opacity: index + firstWords.length < visibleWords ? 1 : 0.1 }"
      >
        {{ word }}{{ ' ' }}
      </span>
    </p>
  </div>

  <div
    ref="buttonsRef"
    class="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 mt-20 lg:mt-30"
  >
    <a
      href=""
      :class="[
        'relative button button-1 flex flex-row justify-center items-center p-[10px] gap-[10px] w-[196.76px] h-[40px] bg-[#3FC43D] shadow-[inset_0_0_0.25px_1.25px_rgba(255,255,255,0.2),inset_3px_5px_2px_-4.75px_#FFFFFF,inset_1.25px_1.5px_0_rgba(255,255,255,0.3),inset_0_4.75px_0.25px_-2.5px_rgba(255,255,255,0.4),inset_1px_1px_3px_3px_rgba(255,255,255,0.1),inset_0_-3px_1px_rgba(0,0,0,0.2),inset_2.5px_-2px_3px_rgba(0,0,0,0.15)] rounded-[74px] text-white',
        { visible: buttonsVisible },
      ]"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute left-4"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.99733 3.03563e-06C13.9069 -0.00407361 18 4.09839 18 8.99988C18 13.9054 13.9069 17.9957 8.99733 17.993C7.70714 17.9936 6.43181 17.7175 5.25742 17.1831L0.801597 17.9889C0.683318 18.0106 0.561408 18.0004 0.448324 17.9595C0.33524 17.9186 0.235035 17.8485 0.157946 17.7561C0.0808576 17.6638 0.0296494 17.5527 0.00955321 17.4341C-0.0105429 17.3155 0.00119341 17.1937 0.0435632 17.0812L1.32054 13.6867C0.460228 12.2742 0.00439638 10.6525 0.00280866 8.99852C0.00416714 4.09703 4.0932 0.0027208 8.99733 3.03563e-06ZM13.5143 12.8224C12.5131 13.6323 10.9631 14.4504 9.48095 13.4991C7.53832 12.2503 5.81848 10.6102 4.57139 8.6656C3.83917 7.52685 4.52792 5.70323 5.55765 4.59167C5.96791 4.14731 6.64444 4.21797 7.09138 4.62564L8.03145 5.48445C8.31673 5.74536 8.3276 6.19922 8.14964 6.54438C7.86843 7.08521 7.70269 7.81222 8.05047 8.35441C8.4879 9.03385 9.02586 9.70378 10.311 10.0938C10.6995 10.2134 11.1981 10.1617 11.6219 9.99051C11.9765 9.84646 12.4261 9.84782 12.6883 10.1278L13.5632 11.0586C14.0455 11.5722 14.0618 12.3794 13.5143 12.8224Z"
          fill="#F1EDEE"
        />
      </svg>
      WhatsApp
    </a>
    <button
      data-cal-link="mynte/30min"
      data-cal-namespace="30min"
      data-cal-config='{"layout":"month_view"}'
      :class="[
        'button button-2 flex flex-row justify-center items-center p-[10px] gap-[10px] w-[196.76px] h-[40px] bg-[linear-gradient(180deg,#1D1B1C_0%,#191718_81.19%,#252120_96.35%)] shadow-[inset_0_0_0.25px_1.25px_#262524,inset_3px_5px_2px_-4.75px_#FFFFFF,inset_1.25px_1.5px_0_rgba(0,0,0,0.75),inset_0_4.75px_0.25px_-2.5px_#FBFBFB,inset_1px_1px_3px_3px_#1A1818,inset_0_-3px_1px_rgba(0,0,0,0.5),inset_2.5px_-2px_3px_rgba(124,108,94,0.75),inset_0_-3px_3px_1px_rgba(255,245,221,0.1)] rounded-[74px]',
        { visible: buttonsVisible },
      ]"
    >
      Book a call
    </button>
    <a
      href="mailto:hello@mynte.studio"
      :class="[
        'button button-3 text-lg font-serif flex flex-row justify-center items-center p-[10px] gap-[10px] w-[196.76px] h-[41px] bg-[linear-gradient(180deg,#EDEDED_0%,#BFBFBF_81.19%,#989898_96.35%)] shadow-[inset_0_0_0.25px_1.25px_#C2C2C2,inset_3px_5px_2px_-4.75px_#FFFFFF,inset_1.25px_1.5px_0_rgba(213,213,213,0.75),inset_0_4.75px_0.25px_-2.5px_#FBFBFB,inset_1px_1px_3px_3px_#F9F9F9,inset_0_-3px_1px_rgba(255,255,255,0.5),inset_2.5px_-2px_3px_rgba(255,255,255,0.75),inset_0_-3px_3px_1px_rgba(255,245,221,0.1)] rounded-[74px] italic text-[#393939] text-shadow-[0_0_2px_rgba(241,237,238,0.4)]',
        { visible: buttonsVisible },
      ]"
    >
      hello@mynte.studio
    </a>
  </div>
</template>

<style scoped>
.word {
  transition: opacity 0.3s ease-out;
}

.button {
  opacity: 0;
  transform: translateY(30px);
}

.button.visible {
  animation: fadeInUp 0.6s ease-out forwards;
}

.button-1.visible {
  animation-delay: 0.2s;
}

.button-2.visible {
  animation-delay: 0.4s;
}

.button-3.visible {
  animation-delay: 0.6s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
