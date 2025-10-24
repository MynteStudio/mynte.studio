<script setup lang="ts">
import { inject, type Ref } from 'vue'
import type Lenis from 'lenis'
import { useScrollDirection } from '~/composables/use_scroll_direction'
import { useI18nExtended } from '~/composables/use_i18n_extended'

const { t } = useI18nExtended()
const { isScrollingDown } = useScrollDirection()
const lenis = inject<Ref<Lenis | null>>('lenis')

function scrollToSection(sectionId: string, event: Event) {
  event.preventDefault()
  const section = document.getElementById(sectionId)
  if (section && lenis?.value) {
    // Pour expertise, on ajoute un offset seulement sur desktop (xl: 1280px+)
    const isDesktop = window.innerWidth >= 1280
    const offset =
      sectionId === 'expertise-section' && isDesktop ? -window.innerHeight * 0.25 : 0
    lenis.value.scrollTo(section, {
      duration: 1.5,
      offset,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
  }
}
</script>

<template>
  <nav
    class="text-right fixed font-light z-100 transition-opacity duration-300 group"
    :class="{ 'opacity-0 pointer-events-none': isScrollingDown }"
  >
    <ul>
      <li>
        <a
          href="#expertise-section"
          @click="scrollToSection('expertise-section', $event)"
          class="nav-link transition-all duration-200"
          >{{ t('expertise') }}</a
        >
      </li>
      <li>
        <a
          href="#works-section"
          @click="scrollToSection('works-section', $event)"
          class="nav-link transition-all duration-200"
          >{{ t('works') }}</a
        >
      </li>
      <li>
        <a
          href="#contact-section"
          @click="scrollToSection('contact-section', $event)"
          class="nav-link transition-all duration-200"
          >{{ t('contact') }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<i18n>
  {
    "en": {
      "expertise": "EXPERTISE",
      "works": "WORKS",
      "contact": "CONTACT"
    },
    "ar": {
      "expertise": "الخبرات",
      "works": "الأعمال",
      "contact": "اتصل بنا"
    }
  }
</i18n>

<style scoped>
nav:hover .nav-link {
  opacity: 0.3;
}

.nav-link:hover {
  opacity: 1 !important;
  text-decoration: underline;
}
</style>
