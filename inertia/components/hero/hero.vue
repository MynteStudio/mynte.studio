<script setup lang="ts">
import { useI18nExtended } from '~/composables/use_i18n_extended'
import Background from '~/components/hero/background.vue'
import TrustedBy from '~/components/header/trusted_by.vue'

const { arabic, dir, t } = useI18nExtended()
</script>

<template>
  <!-- <Background /> -->
  <div class="relative min-h-[calc(100vh_-_6.25rem)] flex flex-col justify-between items-center">
    <div></div>
    <div class="flex flex-col items-center" :dir>
      <h1
        class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-600 text-center max-w-[20ch] line-height-[120%]"
      >
        <span
          :class="[
            arabic ? 'font-ar-serif' : 'font-serif italic font-light',
            'mix-blend-difference',
          ]"
          >{{ t('keyword') }}</span
        >
        {{ t('title') }}
      </h1>

      <p
        :class="arabic ? 'pt-5 italic' : ''"
        class="max-w-[55ch] mx-auto mt-5 text-center text-lg md:text-2xl line-height-[120%]"
      >
        {{ t('text') }}
      </p>
    </div>

    <TrustedBy />

    <div
      class="absolute h-24 z-[-1] bottom-0 w-screen left-1/2 -translate-x-1/2 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none"
    ></div>
  </div>
</template>

<i18n>
{
  "en": {
    "keyword": "Refreshing",
    "title": "Digital experiences with creative design for every brand",
    "text": "Websites, apps, e-commerce, graphic identities, graphic design, and advertising ; all crafted for a distinct digital presence"
  },
  "ar": {
    "keyword": "منعش",
    "title": "تجارب رقمية بتصميم إبداعي لكل علامة تجارية",
    "text": "المواقع الإلكترونية، التطبيقات، التجارة الإلكترونية، الهويات البصرية، التصميم الجرافيكي، والإعلانات؛ جميعها مصممة لوجود رقمي مميز"
  }
}
</i18n>
