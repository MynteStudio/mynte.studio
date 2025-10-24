<script setup lang="ts">
import { onMounted, onUnmounted, ref, inject, computed, type Ref } from 'vue'
import type Lenis from 'lenis'
import { devTags, designTags, briefingTags, marketingTags } from './tags'
import { useI18nExtended } from '~/composables/use_i18n_extended'

const { arabic, dir, t } = useI18nExtended()

const expertiseDataEn = [
  { title: 'Briefing, Research, & Conceptualization', tags: briefingTags },
  { title: 'Design', tags: designTags },
  { title: 'Development', tags: devTags },
  { title: 'Marketing', tags: marketingTags },
]

const expertiseDataAr = [
  { title: 'التوجيه، البحث، وتطوير المفاهيم', tags: briefingTags },
  { title: 'التصميم', tags: designTags },
  { title: 'التطوير', tags: devTags },
  { title: 'التسويق', tags: marketingTags },
]

const expertiseData = computed(() => (arabic.value ? expertiseDataAr : expertiseDataEn))

function shuffleTags(tags: string[]) {
  const shuffled = [...tags]
  // Fisher-Yates algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const lenis = inject<Ref<Lenis | null>>('lenis')
const sectionRef = ref<HTMLElement | null>(null)
const activeIndex = ref(-1)
const shuffledTags = ref<string[]>([])

const activeTags = computed(() => {
  if (activeIndex.value >= 0 && activeIndex.value <= 3) {
    return expertiseData.value[activeIndex.value].tags
  }
  return []
})

const scrollHandler = () => {
  if (!sectionRef.value || !lenis?.value) return

  const rect = sectionRef.value.getBoundingClientRect()
  const viewportHeight = window.innerHeight
  const stickyOffset = viewportHeight * 0.25 // 25vh

  if (rect.top > stickyOffset) {
    activeIndex.value = -1
    return
  }

  const sectionHeight = rect.height

  // Distance totale scrollable une fois le sticky actif
  const scrollableDistance = sectionHeight - viewportHeight
  const scrolled = stickyOffset - rect.top
  const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance))

  if (progress >= 1) {
    activeIndex.value = 4
  } else {
    const index = Math.min(3, Math.floor(progress * 4))
    activeIndex.value = index
  }
}

onMounted(() => {
  const allTags = [...briefingTags, ...designTags, ...devTags, ...marketingTags]
  shuffledTags.value = shuffleTags(allTags)

  const checkLenis = setInterval(() => {
    if (lenis?.value) {
      clearInterval(checkLenis)
      lenis.value.on('scroll', scrollHandler)
      scrollHandler()
    }
  }, 100)

  setTimeout(() => clearInterval(checkLenis), 5000)
})

onUnmounted(() => {
  if (lenis?.value) {
    lenis.value.off('scroll', scrollHandler)
  }
})

function getTitleClasses(index: number) {
  const baseClasses =
    'font-serif font-normal italic transition-all duration-500 ease-out max-w-[25ch]'

  if (activeIndex.value === -1 || activeIndex.value === 4) {
    return `${baseClasses} opacity-30 text-4xl`
  } else if (activeIndex.value === index) {
    return `${baseClasses} opacity-100 text-4xl`
  } else {
    return `${baseClasses} opacity-40 text-4xl`
  }
}

function getTagClasses(tag: string) {
  const baseClasses =
    'glass flex justify-center items-center px-6 h-10 min-w-24 transition-opacity duration-500 ease-out'

  if (activeIndex.value === -1 || activeIndex.value === 4) {
    return `${baseClasses} opacity-20`
  } else if (activeTags.value.includes(tag)) {
    return `${baseClasses} opacity-100`
  } else {
    return `${baseClasses} opacity-30`
  }
}
</script>

<template>
  <section
    ref="sectionRef"
    id="expertise-section"
    class="mt-40 xl:min-h-[200vh] relative pb-30"
    :dir
  >
    <!-- Mobile version -->
    <div class="xl:hidden">
      <h2>{{ t('page_title') }}</h2>

      <div class="mt-20 flex flex-col gap-10 items-start">
        <div
          v-for="(item, index) in expertiseData"
          :key="index"
          class="flex flex-col gap-4 items-start w-full"
        >
          <h3 class="font-serif italic font-normal text-2xl text-left">
            {{ item.title }}
          </h3>
          <div class="flex flex-wrap gap-3 justify-start">
            <h4
              v-for="(tag, tagIndex) in item.tags"
              :key="tagIndex"
              class="glass flex justify-center items-center px-6 h-10 min-w-24"
            >
              {{ tag }}
            </h4>
          </div>
        </div>
      </div>
    </div>

    <!-- Desktop version -->
    <div class="hidden xl:block sticky xl:top-[15vh] 2xl:top-[25vh] left-0 right-0">
      <h2>{{ t('page_title') }}</h2>

      <div class="mt-20 flex flex-nowrap">
        <aside class="w-1/2 flex flex-col gap-15">
          <h3 v-for="(item, index) in expertiseData" :key="index" :class="getTitleClasses(index)">
            {{ item.title }}
          </h3>
        </aside>
        <div class="w-1/2 flex flex-wrap gap-5 justify-end">
          <h4 v-for="(tag, index) in shuffledTags" :key="index" :class="getTagClasses(tag)">
            {{ tag }}
          </h4>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n>
  {
    "en": {
      "page_title": "OUR PROCESS AND EXPERTISE"
    },
    "ar": {
      "page_title": "عملياتنا وخبرتنا"
    }
  }
</i18n>
