<script setup lang="ts">
import { ref, onMounted, onUnmounted, inject, type Ref, computed, watch } from 'vue'
import type Lenis from 'lenis'
import Available from './available.vue'
import { useI18nExtended } from '~/composables/use_i18n_extended'

const { t } = useI18nExtended()

const lenis = inject<Ref<Lenis | null>>('lenis')
const textRef = ref<HTMLParagraphElement | null>(null)
const buttonsRef = ref<HTMLDivElement | null>(null)
const words = ref<string[]>([])
const visibleWords = ref<number>(0)
const buttonsVisible = ref(false)

const firstParagraphEn = `MYNTE STUDIO® is a collective of passionate digital innovators and multidisciplinary designers dedicated to building bold brands and distinct online identities. We craft meaningful digital experiences that merge creativity with strategy, helping forward-thinking companies connect deeply with their audiences, accelerate their growth, and stand out in an increasingly competitive digital landscape. Our work bridges design, technology, and storytelling to deliver impactful results that leave a lasting impression.`
const secondParagraphEn = `A Creative Digital Agency in Dubai`
const firstParagraphAr = `MYNTE STUDIO® هي مجموعة من المبتكرين الرقميين والمصممين المتعددي التخصصات الشغوفين بتطوير علامات تجارية جريئة وهوية رقمية مميزة. نحن نصنع تجارب رقمية ذات معنى تجمع بين الإبداع والاستراتيجية، لمساعدة الشركات الطموحة على التواصل بعمق مع جمهورها، وتسريع نموها، والتميز في بيئة رقمية تنافسية بشكل متزايد. عملنا يجمع بين التصميم والتكنولوجيا وسرد القصص لتحقيق نتائج مؤثرة تترك انطباعًا دائمًا.`
const secondParagraphAr = `وكالة رقمية إبداعية في دبي`

const { arabic, dir } = useI18nExtended()
const firstParagraph = computed(() => (arabic.value ? firstParagraphAr : firstParagraphEn))
const secondParagraph = computed(() => (arabic.value ? secondParagraphAr : secondParagraphEn))

const firstWords = ref<string[]>([])
const secondWords = ref<string[]>([])

// Update words when language changes
watch(
  [firstParagraph, secondParagraph],
  () => {
    firstWords.value = firstParagraph.value.split(' ')
    secondWords.value = secondParagraph.value.split(' ')
    words.value = [...firstWords.value, ...secondWords.value]
  },
  { immediate: true }
)

onMounted(() => {
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
      const buttonsBottom = buttonsRect.bottom
      // Trigger when element is visible in viewport (more reliable for all screen sizes)
      if (buttonsTop < viewportHeight && buttonsBottom > 0) {
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
  <section id="contact-section">
    <div class="flex justify-center mt-36 lg:mt-64">
      <Available />
    </div>

    <div ref="textRef" :dir>
    <p
      :class="arabic ? 'italic' : ''"
      class="text-2xl md:text-3xl lg:text-4xl text-justify line-height-[150%] mt-20"
    >
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
        :class="arabic ? 'italic' : ''"
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
    :dir
    ref="buttonsRef"
    class="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 mt-20 lg:mt-30"
  >
    <a
      href=""
      :class="[
        'button button-1 flex flex-row justify-center items-center p-[10px] gap-[10px] w-[196.76px] h-[40px] bg-[#3FC43D] shadow-[inset_0_0_0.25px_1.25px_rgba(255,255,255,0.2),inset_3px_5px_2px_-4.75px_#FFFFFF,inset_1.25px_1.5px_0_rgba(255,255,255,0.3),inset_0_4.75px_0.25px_-2.5px_rgba(255,255,255,0.4),inset_1px_1px_3px_3px_rgba(255,255,255,0.1),inset_0_-3px_1px_rgba(0,0,0,0.2),inset_2.5px_-2px_3px_rgba(0,0,0,0.15)] rounded-[74px] text-white',
        { visible: buttonsVisible },
      ]"
    >
      WhatsApp
    </a>
    <button
      data-cal-link="mynte/30min"
      data-cal-namespace="30min"
      data-cal-config='{"layout":"month_view"}'
      :class="[
        'cursor-pointer button button-2 flex flex-row justify-center items-center p-[10px] gap-[10px] w-[196.76px] h-[40px] bg-[linear-gradient(180deg,#1D1B1C_0%,#191718_81.19%,#252120_96.35%)] shadow-[inset_0_0_0.25px_1.25px_#262524,inset_3px_5px_2px_-4.75px_#FFFFFF,inset_1.25px_1.5px_0_rgba(0,0,0,0.75),inset_0_4.75px_0.25px_-2.5px_#FBFBFB,inset_1px_1px_3px_3px_#1A1818,inset_0_-3px_1px_rgba(0,0,0,0.5),inset_2.5px_-2px_3px_rgba(124,108,94,0.75),inset_0_-3px_3px_1px_rgba(255,245,221,0.1)] rounded-[74px]',
        { visible: buttonsVisible },
      ]"
    >
      {{ t('book_a_call') }}
    </button>
    <a
      href="mailto:hello@mynte.studio"
      :class="[
        'button button-3 text-lg font-en-serif flex flex-row justify-center items-center p-[10px] gap-[10px] w-[196.76px] h-[41px] bg-[linear-gradient(180deg,#EDEDED_0%,#BFBFBF_81.19%,#989898_96.35%)] shadow-[inset_0_0_0.25px_1.25px_#C2C2C2,inset_3px_5px_2px_-4.75px_#FFFFFF,inset_1.25px_1.5px_0_rgba(213,213,213,0.75),inset_0_4.75px_0.25px_-2.5px_#FBFBFB,inset_1px_1px_3px_3px_#F9F9F9,inset_0_-3px_1px_rgba(255,255,255,0.5),inset_2.5px_-2px_3px_rgba(255,255,255,0.75),inset_0_-3px_3px_1px_rgba(255,245,221,0.1)] rounded-[74px] italic text-[#393939] text-shadow-[0_0_2px_rgba(241,237,238,0.4)]',
        { visible: buttonsVisible },
      ]"
    >
      hello@mynte.studio
    </a>
  </div>
  </section>
</template>

<i18n>
  {
    "en": {
      "book_a_call": "Book a call"
    },
    "ar": {
      "book_a_call": "حجز مكالمة"
    }
  }
</i18n>

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
